// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';
import { djangoApi } from '../src/services/djangoApi';
import { Article, Category } from '../src/types/api';
import {
  buildSitemapEntries,
  renderSitemapXml,
  SITE_URL,
  STATIC_PATHS,
  SitemapEntry,
} from '../src/utils/sitemap';

interface CacheEntry {
  xml: string;
  expiresAt: number;
}

let cache: CacheEntry | null = null;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 मिनट

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1800, stale-while-revalidate=86400'
  );

  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    res.write(cache.xml);
    res.end();
    return { props: {} };
  }

  let articles: Article[] = [];
  let categories: Category[] = [];
  let apiOk = true;

  try {
    // ✅ नए methods — mock fallback नहीं
    const [articlesData, catsData] = await Promise.all([
      djangoApi.getArticlesForSitemap(),
      djangoApi.getCategoriesForSitemap(),
    ]);
    articles = articlesData;
    categories = catsData;

    if (articles.length === 0 && categories.length === 0) {
      console.warn('[sitemap.xml] API returned empty — using static only');
      apiOk = false;
    }

    console.log(
      `[sitemap.xml] articles: ${articles.length}, categories: ${categories.length}`
    );
  } catch (err) {
    console.error('[sitemap.xml] API failed:', err);
    apiOk = false;
  }

  let entries: SitemapEntry[] = [];
  try {
    entries = apiOk
      ? buildSitemapEntries(articles, categories)
      : STATIC_PATHS.map((p) => ({ loc: `${SITE_URL}${p}` }));
  } catch (err) {
    console.error('[sitemap.xml] build failed:', err);
    entries = STATIC_PATHS.map((p) => ({ loc: `${SITE_URL}${p}` }));
  }

  let xml: string;
  try {
    xml = renderSitemapXml(entries);
  } catch (err) {
    console.error('[sitemap.xml] render failed:', err);
    xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc></url>
</urlset>`;
  }

  if (apiOk) {
    cache = { xml, expiresAt: now + CACHE_TTL_MS };
  }

  res.write(xml);
  res.end();
  return { props: {} };
};

export default function SitemapXml() {
  return null;
}