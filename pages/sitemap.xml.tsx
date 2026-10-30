// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';
import { djangoApi } from '../src/services/djangoApi';

// ✅ www के साथ — यही final canonical host है
const SITE_URL = 'https://www.techvani.co.in';

// ⚠️ IMPORTANT: नीचे दोनों को तब भरें जब आपके पास यह routes live हों
// null = कोई filter नहीं (सारे DB वाले slug sitemap में जाएँगे)
// array = सिर्फ उन slugs को sitemap में डालो जो live हैं
// जब तक /tag/... और /category/... के pages नहीं बने, इन्हें भर दो

const LIVE_TAG_SLUGS: string[] | null = null;
// उदाहरण: ['python', 'javascript', 'windows11', 'excel-tricks'];

const LIVE_CATEGORY_SLUGS: string[] | null = null;
// उदाहरण: ['home', 'programming', 'software', 'gadgets'];

// ---------- helpers ----------

function escapeXml(s: string): string {
  return String(s).replace(/[<>&'"]/g, (ch) => {
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

// सिर्फ URL-safe lowercase slugs accept करो, बाकी skip
function safeSlug(slug: unknown): string | null {
  if (typeof slug !== 'string' || !slug) return null;
  return /^[a-z0-9][a-z0-9\-_.]*$/i.test(slug) ? slug : null;
}

function formatLastmod(dateLike: unknown): string | undefined {
  if (!dateLike) return undefined;
  try {
    const d = new Date(dateLike as any);
    if (isNaN(d.getTime())) return undefined;
    return d.toISOString().split('T')[0];
  } catch {
    return undefined;
  }
}

// ---------- generator ----------

function generateSiteMap(articles: any[], categories: any[], tags: any[]) {
  const urls: string[] = [];

  // 1. Static pages
  const staticPaths = [
    '/',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/editorial-team',
    '/tools',
  ];
  for (const p of staticPaths) {
    urls.push(
      `\n    <url>\n      <loc>${SITE_URL}${p}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>${p === '/' ? '1.0' : '0.6'}</priority>\n    </url>`
    );
  }

  // 2. Categories (home → '/', unsafe → skip)
  const seenCategory = new Set<string>();
  for (const c of categories) {
    const slug = safeSlug(c?.slug);
    if (!slug) continue;
    if (LIVE_CATEGORY_SLUGS && !LIVE_CATEGORY_SLUGS.includes(slug)) continue;

    const path = slug === 'home' ? '' : `/category/${slug}`;
    const loc = `${SITE_URL}${path}`;
    if (seenCategory.has(loc)) continue;
    seenCategory.add(loc);

    urls.push(
      `\n    <url>\n      <loc>${escapeXml(loc)}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.7</priority>\n    </url>`
    );
  }

  // 3. Tags (सिर्फ safe slugs, non-ASCII skip)
  const seenTag = new Set<string>();
  for (const t of tags) {
    const slug = safeSlug(t?.slug);
    if (!slug) continue;
    if (LIVE_TAG_SLUGS && !LIVE_TAG_SLUGS.includes(slug)) continue;

    const loc = `${SITE_URL}/tag/${slug}`;
    if (seenTag.has(loc)) continue;
    seenTag.add(loc);

    urls.push(
      `\n    <url>\n      <loc>${escapeXml(loc)}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.6</priority>\n    </url>`
    );
  }

  // 4. Articles + Products
  const seenArticle = new Set<string>();
  for (const a of articles) {
    const slug = safeSlug(a?.slug);
    if (!slug) continue;

    // ✅ rating != null (rating 0 भी valid product है)
    const isProduct = a?.rating != null;
    const path = `${isProduct ? '/product' : '/article'}/${slug}`;
    const loc = `${SITE_URL}${path}`;
    if (seenArticle.has(loc)) continue;
    seenArticle.add(loc);

    // ✅ असली updated date, न कि आज की तारीख
    const lastmod = formatLastmod(
      a?.updated_at ?? a?.updatedAt ?? a?.modified ?? a?.published_at
    );
    const lastmodTag = lastmod ? `\n      <lastmod>${lastmod}</lastmod>` : '';

    urls.push(
      `\n    <url>\n      <loc>${escapeXml(loc)}</loc>${lastmodTag}\n      <changefreq>weekly</changefreq>\n      <priority>0.8</priority>\n    </url>`
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}\n</urlset>\n`;
}

// ---------- page ----------

function SiteMap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // ✅ सही content-type + CDN cache
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );

  try {
    const [articlesRes, categories, tags] = await Promise.all([
      djangoApi.getArticles({ pageSize: 5000 }),
      djangoApi.getCategories(),
      djangoApi.getTags(),
    ]);

    const sitemap = generateSiteMap(
      articlesRes?.results || [],
      categories || [],
      tags || []
    );

    res.write(sitemap);
    res.end();
    return { props: {} };
  } catch (error) {
    console.error('Sitemap Error:', error);

    // ✅ API fail हो तो भी कम से कम static pages दो — खाली 500 नहीं
    res.write(generateSiteMap([], [], []));
    res.end();
    return { props: {} };
  }
};

export default SiteMap;