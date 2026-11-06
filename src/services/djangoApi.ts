// src/services/djangoApi.ts
import { Article, ArticleComment, Author, Category, DRFPaginatedResponse, Tag } from '../types/api';
import { API_CONFIG } from '../config/apiConfig';

class DjangoApiService {
  private newsletterSubscribers: string[] = [];

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
        next: { revalidate: 60 },
      } as RequestInit);
      return response;
    } finally {
      clearTimeout(id);
    }
  }

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
        return await res.json();
      }
    } catch (err) {
      console.error('[Django API] getArticles failed:', err);
    }

    // ✅ कोई mock नहीं — खाली
    return {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }

  async getArticlesForSitemap(): Promise<Article[]> {
    try {
      const res = await this.fetchWithTimeout(
        `${API_CONFIG.BASE_URL}/articles/?page_size=5000`
      );
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.error('[Sitemap] articles failed:', err);
    }
    return [];
  }

  async getCategoriesForSitemap(): Promise<Category[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/categories/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.error('[Sitemap] categories failed:', err);
    }
    return [];
  }

  async getArticleBySlug(slug: string): Promise<Article | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/articles/${slug}/`);
      if (res.ok) return await res.json();
    } catch (err) {
      console.warn(`[Django API] article "${slug}" not found:`, err);
    }

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

    return null;
  }

  async getProductBySlug(slug: string): Promise<Article | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/products/${slug}/`);
      if (res.ok) return await res.json();
    } catch (err) {
      console.warn(`[Django API] product "${slug}" not found:`, err);
    }
    return null;
  }

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
      console.warn('[Django API] trending failed:', err);
    }
    return [];
  }

  async getCategories(): Promise<Category[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/categories/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] categories failed:', err);
    }
    return [];
  }

  async getCategoryBySlug(slug: string): Promise<Category | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/categories/${slug}/`);
      if (res.ok) return await res.json();
    } catch (err) {
      console.warn(`[Django API] category "${slug}" not found:`, err);
    }
    return null;
  }

  async getTags(): Promise<Tag[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/tags/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] tags failed:', err);
    }
    return [];
  }

  async getTagBySlug(slug: string): Promise<Tag | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/tags/${slug}/`);
      if (res.ok) return await res.json();
    } catch (err) {
      console.warn(`[Django API] tag "${slug}" not found:`, err);
    }
    return null;
  }

  async getAuthors(): Promise<Author[]> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/authors/`);
      if (res.ok) {
        const data = await res.json();
        return Array.isArray(data) ? data : data.results || [];
      }
    } catch (err) {
      console.warn('[Django API] authors failed:', err);
    }
    return [];
  }

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
      console.warn('[Django API] comments failed:', err);
    }
    return [];
  }

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
      if (res.ok) return await res.json();
    } catch (err) {
      console.warn('[Django API] postComment failed:', err);
    }

    return {
      id: Date.now(),
      articleId: Number(data.articleId) || 1,
      authorName: data.authorName,
      authorEmail: data.authorEmail,
      comment: data.comment,
      createdAt: 'अभी-अभी',
      likes: 0,
    };
  }

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
      return { success: true, message: 'आप पहले से ही सदस्य हैं!' };
    }
    this.newsletterSubscribers.push(email.toLowerCase());
    return { success: true, message: 'बधाई हो! आप न्यूज़लेटर से जुड़ गए।' };
  }

  async getPageBySlug(slug: string): Promise<any | null> {
    try {
      const res = await this.fetchWithTimeout(`${API_CONFIG.BASE_URL}/pages/${slug}/`);
      if (res.ok) return await res.json();
    } catch {}
    return null;
  }
}

export const djangoApi = new DjangoApiService();