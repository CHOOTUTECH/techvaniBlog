// src/utils/sitemap.ts
import { Article, Category } from '../types/api';

// ⚠️ हमेशा www के साथ
export const SITE_URL = 'https://www.techvani.co.in';

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const STATIC_PATHS = [
  '/',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/editorial-team',
  '/tools',
] as const;

// ✅ Product vs Article पहचान
export function getArticlePath(a: Article): string {
  const isProduct = a.rating != null;
  return `${isProduct ? '/product' : '/article'}/${a.slug}`;
}

// ✅ home category → '/'
export function getCategoryPath(c: Category): string {
  return c.slug === 'home' ? '/' : `/category/${c.slug}`;
}

// ✅ XML escape
export function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (ch) => {
    switch (ch) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return ch;
    }
  });
}

// ✅ Slug valid है? (sirf ASCII)
function isValidSlug(slug: unknown): slug is string {
  return typeof slug === 'string' && slug.length > 0 && /^[a-z0-9\-_]+$/i.test(slug);
}

function getLastmod(a: Article): string | undefined {
  const raw = (a as any).updated_at ?? (a as any).updatedAt ?? (a as any).modified;
  if (!raw) return undefined;
  try {
    return new Date(raw).toISOString().split('T')[0];
  } catch {
    return undefined;
  }
}

// ⚠️ सिर्फ verified categories — जो 200 देती हैं
export const LIVE_CATEGORY_SLUGS: string[] | null = [
  'programming',
  'software',
  'gadgets',
  'computer-tricks',
  'keyboard-shortcuts',
  'trending-news',
  // 'tech-guides' ← 404 दे रहा था, इसलिए नहीं
];

export function buildSitemapEntries(
  articles: Article[],
  categories: Category[]
): SitemapEntry[] {
  const entries: SitemapEntry[] = [];

  // 1. Static pages — 7
  for (const path of STATIC_PATHS) {
    entries.push({
      loc: `${SITE_URL}${path}`,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.6,
    });
  }

  // 2. Categories — सिर्फ LIVE
  for (const c of categories) {
    if (!isValidSlug(c.slug)) continue;
    if (c.slug === 'home') continue;
    if (LIVE_CATEGORY_SLUGS && !LIVE_CATEGORY_SLUGS.includes(c.slug)) continue;

    entries.push({
      loc: `${SITE_URL}${getCategoryPath(c)}`,
      changefreq: 'weekly',
      priority: 0.7,
    });
  }

  // 3. Articles + Products
  for (const a of articles) {
    if (!isValidSlug(a.slug)) continue;
    if ((a as any).status && (a as any).status !== 'published') continue;

    entries.push({
      loc: `${SITE_URL}${getArticlePath(a)}`,
      lastmod: getLastmod(a),
      changefreq: 'weekly',
      priority: 0.8,
    });
  }

  // 4. Dedupe
  const seen = new Set<string>();
  return entries.filter((e) => {
    if (seen.has(e.loc)) return false;
    seen.add(e.loc);
    return true;
  });
}

export function renderSitemapXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((e) => {
      const parts = [`    <loc>${escapeXml(e.loc)}</loc>`];
      if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
      if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
      if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
      return `  <url>\n${parts.join('\n')}\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}