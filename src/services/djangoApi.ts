// src/services/djangoApi.ts
import { Article, ArticleComment, Author, Category, DRFPaginatedResponse, Tag } from '../types/api';
import { mockArticles, mockAuthors, mockCategories, mockComments, mockTags } from '../data/mockDjangoData';
import { API_CONFIG } from '../config/apiConfig';

class DjangoApiService {
  private articles: Article[] = [...mockArticles];
  private comments: ArticleComment[] = [...mockComments];
  private newsletterSubscribers: string[] = ['demo@techvani.in'];

  private async fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);
    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          ...API_CONFIG.DEFAULT_HEADERS,
          ...(options.headers || {}),
        },
      });
      return response;
    } finally {
      clearTimeout(id);
    }
  }

  /**
   * GET /api/v1/articles/
   * Supports DRF query params: category, tag, search, ordering, page, page_size, lang
   */
  async getArticles(params?: {
    category?: string;
    subCategory?: string;
    tag?: string;
    search?: string;
    ordering?: string;
    page?: number;
    pageSize?: number;
    language?: string;
  }): Promise<DRFPaginatedResponse<Article>> {
    const query = new URLSearchParams();

    if (params?.category && params.category !== 'home') {
      query.set('category', params.category);
      query.set('category__slug', params.category);
    }
    if (params?.subCategory && params.subCategory !== 'सभी') {
      query.set('sub_category', params.subCategory);
    }
    if (params?.tag) {
      query.set('tag', params.tag);
      query.set('tags__slug', params.tag);
    }
    if (params?.search) query.set('search', params.search);
    if (params?.ordering) query.set('ordering', params.ordering);
    if (params?.page) query.set('page', params.page.toString());
    if (params?.pageSize) query.set('page_size', params.pageSize.toString());
    if (params?.language) query.set('lang', params.language);

    const url = `${API_CONFIG.BASE_URL}/articles/?${query.toString()}`;

    try {
      const res = await this.fetchWithTimeout(url);
      if (res.ok) {
        const data = await res.json();
        return data;
      }
    } catch (err) {
      console.warn(`[Django API Network Warning] Cannot reach Django server at ${url}:`, err);
    }

    // Fallback local implementation
    let filtered = [...this.articles];

    if (params?.category && params.category !== 'home') {
      filtered = filtered.filter(
        (a) => a.category.slug.toLowerCase() === params.category?.toLowerCase()
      );
    }

    if (params?.subCategory && params.subCategory !== 'सभी') {
      filtered = filtered.filter(
        (a) => a.subCategory?.toLowerCase() === params.subCategory?.toLowerCase()
      );
    }

    if (params?.tag) {
      filtered = filtered.filter((a) =>
        a.tags.some((t) => t.slug.toLowerCase() === params.tag?.toLowerCase())
      );
    }

    if (params?.search && params.search.trim() !== '') {
      const q = params.search.toLowerCase().trim();
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.name.toLowerCase().includes(q) ||
          a.tags.some((t) => t.name.toLowerCase().includes(q))
      );
    }

    if (params?.ordering) {
      if (params.ordering === '-viewsCount') {
        filtered.sort((a, b) => b.viewsCount - a.viewsCount);
      } else if (params.ordering === '-publishedAt') {
        filtered.sort((a, b) => b.id - a.id);
      } else if (params.ordering === '-rating') {
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }
    }

    const page = params?.page || 1;
    const pageSize = params?.pageSize || 10;
    const startIndex = (page - 1) * pageSize;
    const paginated = filtered.slice(startIndex, startIndex + pageSize);

    return {
      count: filtered.length,
      next: startIndex + pageSize < filtered.length ? `?page=${page + 1}` : null,
      previous: page > 1 ? `?page=${page - 1}` : null,
      results: paginated,
    };
  }

  /**
   * ✅ Sitemap के लिए — सिर्फ real API data, कोई mock fallback नहीं
   */
  async getArticlesForSitemap(): Promise<Article[]> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/articles/?page_size=5000`
      );
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.results || [];
        console.log(`[Sitemap] ${list.length} articles fetched from API`);
        return list;
      }
    } catch (err) {
      console.error('[Sitemap] articles API failed:', err);
    }
    return [];
  }

  /**
   * ✅ Sitemap के लिए — सिर्फ real categories
   */
  async getCategoriesForSitemap(): Promise<Category[]> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/categories/`
      );
      if (res.ok) {
        const data = await res.json();
        const list = Array.isArray(data) ? data : data.results || [];
        console.log(`[Sitemap] ${list.length} categories fetched from API`);
        return list;
      }
    } catch (err) {
      console.error('[Sitemap] categories API failed:', err);
    }
    return [];
  }

  /**
   * GET /api/v1/articles/{slug}/
   */
  async getArticleBySlug(slug: string): Promise<Article | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/articles/${slug}/`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`[Django API] Could not fetch article "${slug}":`, err);
    }

    // Products endpoint try करो
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/products/${slug}/`);
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === 'object') {
          if (data.rating == null) data.rating = 0;
          return data as Article;
        }
      }
    } catch {}

    if (!API_CONFIG.USE_FALLBACK) {
      return null;
    }

    const article = this.articles.find((a) => a.slug === slug);
    return article || null;
  }

  /**
   * GET /api/v1/products/{slug}/
   */
  async getProductBySlug(slug: string): Promise<Article | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/products/${slug}/`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`[Django API] Could not fetch product "${slug}":`, err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return null;
    }

    const product = this.articles.find((a) => a.slug === slug && a.rating != null);
    return product || null;
  }

  /**
   * GET /api/v1/articles/trending/
   */
  async getTrendingArticles(limit: number = 5, language: string = 'hi'): Promise<Article[]> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/articles/trending/?limit=${limit}&lang=${language}`
      );
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] Could not fetch trending articles:', err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return [];
    }

    return [...this.articles]
      .sort((a, b) => b.viewsCount - a.viewsCount)
      .slice(0, limit);
  }

  /**
   * GET /api/v1/categories/
   */
  async getCategories(): Promise<Category[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/categories/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] Could not fetch categories:', err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return [];
    }

    return mockCategories;
  }

  /**
   * GET /api/v1/categories/{slug}/
   */
  async getCategoryBySlug(slug: string): Promise<Category | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/categories/${slug}/`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`[Django API] Could not fetch category "${slug}":`, err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return null;
    }

    const category = mockCategories.find((c) => c.slug === slug);
    return category || null;
  }

  /**
   * GET /api/v1/tags/
   */
  async getTags(): Promise<Tag[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/tags/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] Could not fetch tags:', err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return [];
    }

    return mockTags;
  }

  /**
   * GET /api/v1/tags/{slug}/
   */
  async getTagBySlug(slug: string): Promise<Tag | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/tags/${slug}/`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn(`[Django API] Could not fetch tag "${slug}":`, err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return null;
    }

    const tag = mockTags.find((t) => t.slug === slug);
    return tag || null;
  }

  /**
   * GET /api/v1/authors/
   */
  async getAuthors(): Promise<Author[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/authors/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] Could not fetch authors:', err);
    }

    if (!API_CONFIG.USE_FALLBACK) {
      return [];
    }

    return mockAuthors;
  }

  /**
   * GET /api/v1/articles/{idOrSlug}/comments/
   */
  async getComments(articleIdOrSlug: number | string): Promise<ArticleComment[]> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/articles/${articleIdOrSlug}/comments/`
      );
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] Error fetching comments:', err);
    }

    return this.comments.filter((c) => c.articleId === Number(articleIdOrSlug));
  }

  /**
   * POST /api/v1/articles/{idOrSlug}/comments/
   */
  async postComment(data: {
    articleId: number | string;
    authorName: string;
    comment: string;
    authorEmail?: string;
  }): Promise<ArticleComment> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/articles/${data.articleId}/comments/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            authorName: data.authorName,
            authorEmail: data.authorEmail,
            comment: data.comment,
          }),
        }
      );
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      console.warn('[Django API] Error posting comment:', err);
    }

    const numArticleId =
      typeof data.articleId === 'number'
        ? data.articleId
        : this.articles.find((a) => a.slug === data.articleId)?.id || 1;

    const newComment: ArticleComment = {
      id: Date.now(),
      articleId: numArticleId,
      authorName: data.authorName,
      authorEmail: data.authorEmail,
      comment: data.comment,
      createdAt: 'अभी-अभी',
      likes: 0,
    };
    this.comments.unshift(newComment);

    const article = this.articles.find((a) => a.id === numArticleId);
    if (article) article.commentsCount += 1;

    return newComment;
  }

  /**
   * POST /api/v1/newsletter/subscribe/
   */
  async subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
    if (!email || !email.includes('@')) {
      return { success: false, message: 'कृपया एक मान्य ईमेल पता दर्ज करें।' };
    }

    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/newsletter/subscribe/`, {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      if (res.ok) return await res.json();
    } catch {}

    if (this.newsletterSubscribers.includes(email.toLowerCase())) {
      return { success: true, message: 'आप पहले से ही हमारे न्यूज़लेटर के सदस्य हैं!' };
    }
    this.newsletterSubscribers.push(email.toLowerCase());
    return {
      success: true,
      message: 'बधाई हो! आप सफलतापूर्वक टेकवाणी न्यूज़लेटर से जुड़ चुके हैं।',
    };
  }

  /**
   * GET /api/v1/pages/{slug}/
   */
  async getPageBySlug(slug: string): Promise<any | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/pages/${slug}/`);
      if (res.ok) return await res.json();
    } catch {}
    return null;
  }
}

export const djangoApi = new DjangoApiService();