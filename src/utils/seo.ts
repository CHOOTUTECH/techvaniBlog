/**
 * SEO & Schema.org Structured Data Generator
 * Complies with Google Search, Google News, and Discover Guidelines
 */

import { Article } from '../types/api';

export interface SEOConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  article?: Article;
  breadcrumbs?: Array<{ name: string; url: string }>;
  isProduct?: boolean;
}

const DEFAULT_ORIGIN = typeof window !== 'undefined' ? window.location.origin : 'https://techvani.in';

/**
 * Generate NewsArticle / TechArticle JSON-LD schema
 */
export function generateArticleSchema(article: Article, currentUrl: string) {
  const schemaType = article.schemaType || 'TechArticle';

  const schema: any = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    'headline': article.metaTitle || article.title,
    'description': article.metaDescription || article.excerpt,
    'image': [article.ogImage || article.coverImage],
    'datePublished': '2024-10-24T09:00:00+05:30',
    'dateModified': '2024-10-24T10:30:00+05:30',
    'author': {
      '@type': 'Person',
      'name': article.author.name,
      'jobTitle': article.author.role,
      'url': `${DEFAULT_ORIGIN}/author/${article.author.id}`,
    },
    'publisher': {
      '@type': 'NewsMediaOrganization',
      'name': 'टेकवाणी (TechVani)',
      'url': DEFAULT_ORIGIN,
      'logo': {
        '@type': 'ImageObject',
        'url': `${DEFAULT_ORIGIN}/logo.png`,
      },
    },
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': currentUrl,
    },
    'articleSection': article.category.name,
    'keywords': article.keywords?.join(', ') || article.tags.map((t) => t.name).join(', '),
    'inLanguage': 'hi',
  };

  // If article has step-by-step shortcuts, attach HowTo / ItemList
  if (article.shortcuts && article.shortcuts.length > 0) {
    schema['hasPart'] = {
      '@type': 'HowTo',
      'name': article.title,
      'step': article.shortcuts.map((s, index) => ({
        '@type': 'HowToStep',
        'position': index + 1,
        'name': s.key,
        'text': s.action,
      })),
    };
  }

  // If article has FAQs, attach FAQPage
  if (article.faqs && article.faqs.length > 0) {
    schema['mainEntity'] = article.faqs.map((f) => ({
      '@type': 'Question',
      'name': f.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': f.answer,
      },
    }));
  }

  return schema;
}

/**
 * Generate Product & Review Schema for tech gadgets & hardware
 */
export function generateProductSchema(article: Article, currentUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': article.title,
    'image': article.coverImage,
    'description': article.excerpt,
    'brand': {
      '@type': 'Brand',
      'name': 'Tech Review',
    },
    'review': {
      '@type': 'Review',
      'reviewRating': {
        '@type': 'Rating',
        'ratingValue': article.rating ? article.rating.toString() : '9.0',
        'bestRating': '10',
        'worstRating': '1',
      },
      'author': {
        '@type': 'Person',
        'name': article.author.name,
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'टेकवाणी (TechVani)',
      },
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': article.rating ? article.rating.toString() : '9.0',
      'reviewCount': article.commentsCount > 0 ? article.commentsCount.toString() : '18',
      'bestRating': '10',
      'worstRating': '1',
    },
    'offers': {
      '@type': 'Offer',
      'price': article.productPrice?.replace(/[^0-9]/g, '') || '4999',
      'priceCurrency': 'INR',
      'availability': 'https://schema.org/InStock',
      'url': currentUrl,
    },
  };
}

/**
 * Generate BreadcrumbList Schema
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((b, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': b.name,
      'item': b.url.startsWith('http') ? b.url : `${DEFAULT_ORIGIN}${b.url}`,
    })),
  };
}

/**
 * Apply SEO and Meta Tags dynamically to HTML Head
 */
export function applySEO(config: SEOConfig) {
  if (typeof document === 'undefined') return;

  // 1. Page Title (Prioritize backend-driven metaTitle if provided)
  const rawTitle = config.article?.metaTitle || config.title;
  const formattedTitle = rawTitle.includes('टेकवाणी')
    ? rawTitle
    : `${rawTitle} | टेकवाणी (TechVani)`;
  document.title = formattedTitle;

  // Helper to set or create meta tag
  const setMeta = (attrName: string, attrVal: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrVal);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  // Helper for Link tags (canonical)
  const setLink = (rel: string, href: string) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute(rel, rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
  };

  // 2. Standard Meta Tags (Prioritize backend-driven description)
  const metaDescription = config.article?.metaDescription || config.description;
  setMeta('name', 'description', metaDescription);
  setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  setMeta('name', 'author', config.article ? config.article.author.name : 'TechVani Editorial Team');

  // Meta Keywords if provided by backend
  if (config.article?.keywords && config.article.keywords.length > 0) {
    setMeta('name', 'keywords', config.article.keywords.join(', '));
  }

  // 3. OpenGraph Tags
  setMeta('property', 'og:title', formattedTitle);
  setMeta('property', 'og:description', metaDescription);
  setMeta('property', 'og:type', config.ogType || 'website');
  setMeta('property', 'og:site_name', 'टेकवाणी (TechVani)');
  
  const currentUrl = config.article?.canonicalUrl || config.canonicalUrl || (typeof window !== 'undefined' ? window.location.href : DEFAULT_ORIGIN);
  setMeta('property', 'og:url', currentUrl);
  setLink('canonical', currentUrl);

  const img = config.article?.ogImage || config.ogImage || (config.article ? config.article.coverImage : 'https://techvani.in/og-cover.png');
  setMeta('property', 'og:image', img);

  // 4. Twitter Card Tags
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', formattedTitle);
  setMeta('name', 'twitter:description', metaDescription);
  setMeta('name', 'twitter:image', img);
  setMeta('name', 'twitter:site', '@techvani');

  // 5. Injected JSON-LD Schema
  let existingScript = document.getElementById('dynamic-json-ld');
  if (existingScript) {
    existingScript.remove();
  }

  const schemasToInject: any[] = [];

  // Breadcrumbs schema
  if (config.breadcrumbs && config.breadcrumbs.length > 0) {
    schemasToInject.push(generateBreadcrumbSchema(config.breadcrumbs));
  }

  // Article schema
  if (config.article) {
    if (config.isProduct || config.article.rating) {
      schemasToInject.push(generateProductSchema(config.article, currentUrl));
    }
    schemasToInject.push(generateArticleSchema(config.article, currentUrl));
  }

  if (schemasToInject.length > 0) {
    const script = document.createElement('script');
    script.id = 'dynamic-json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject);
    document.head.appendChild(script);
  }
}
