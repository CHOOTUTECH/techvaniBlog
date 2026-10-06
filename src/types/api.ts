/**
 * Django REST Framework compatible Data Types
 */

export interface Author {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  twitter?: string;
  articlesCount: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  metaTitle?: string;
  metaDescription?: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface KeyboardShortcut {
  key: string;
  action: string;
  platform: 'windows' | 'mac' | 'both';
}

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  imageAlt: string;
  category: Category;
  subCategory?: string;
  tags: Tag[];
  author: Author;
  publishedAt: string;
  readingTimeMinutes: number;
  viewsCount: number;
  commentsCount: number;
  isFeatured?: boolean;
  isEditorialChoice?: boolean;
  isTrending?: boolean;
  featuredOrder?: number; // 1 = main hero, 2 = sub hero 1, 3 = sub hero 2
  shortcuts?: KeyboardShortcut[];
  videoDuration?: string;
  rating?: number;
  pros?: string[];
  cons?: string[];
  productSpecs?: Record<string, string>;
  productPrice?: string;
  productAffiliateUrl?: string;
  faqs?: Array<{ question: string; answer: string }>;

  // Backend-Driven SEO & Meta Control
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string[];
  ogImage?: string;
  schemaType?: 'TechArticle' | 'NewsArticle' | 'Product' | 'HowTo';
}

export interface BackendPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  lastUpdated?: string;
}

export interface ArticleComment {
  id: number;
  articleId: number;
  authorName: string;
  authorEmail?: string;
  comment: string;
  createdAt: string;
  likes: number;
}

export interface DRFPaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  description: string;
  logo: string;
  email: string;
  socials: {
    twitter: string;
    youtube: string;
    github: string;
    telegram: string;
  };
}
