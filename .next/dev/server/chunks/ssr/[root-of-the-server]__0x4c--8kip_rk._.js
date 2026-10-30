module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/pages/sitemap.xml.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/sitemap.xml.tsx
__turbopack_context__.s([
    "default",
    ()=>SitemapXml,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/djangoApi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sitemap.ts [ssr] (ecmascript)");
;
;
let cache = null;
const CACHE_TTL_MS = 30 * 60 * 1000; // 30 मिनट
const getServerSideProps = async ({ res })=>{
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
    const now = Date.now();
    if (cache && cache.expiresAt > now) {
        res.write(cache.xml);
        res.end();
        return {
            props: {}
        };
    }
    let articles = [];
    let categories = [];
    let apiOk = true;
    try {
        // ✅ नए methods — mock fallback नहीं
        const [articlesData, catsData] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getArticlesForSitemap(),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getCategoriesForSitemap()
        ]);
        articles = articlesData;
        categories = catsData;
        if (articles.length === 0 && categories.length === 0) {
            console.warn('[sitemap.xml] API returned empty — using static only');
            apiOk = false;
        }
        console.log(`[sitemap.xml] articles: ${articles.length}, categories: ${categories.length}`);
    } catch (err) {
        console.error('[sitemap.xml] API failed:', err);
        apiOk = false;
    }
    let entries = [];
    try {
        entries = apiOk ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["buildSitemapEntries"])(articles, categories) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["STATIC_PATHS"].map((p)=>({
                loc: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}${p}`
            }));
    } catch (err) {
        console.error('[sitemap.xml] build failed:', err);
        entries = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["STATIC_PATHS"].map((p)=>({
                loc: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}${p}`
            }));
    }
    let xml;
    try {
        xml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["renderSitemapXml"])(entries);
    } catch (err) {
        console.error('[sitemap.xml] render failed:', err);
        xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}/</loc></url>
</urlset>`;
    }
    if (apiOk) {
        cache = {
            xml,
            expiresAt: now + CACHE_TTL_MS
        };
    }
    res.write(xml);
    res.end();
    return {
        props: {}
    };
};
function SitemapXml() {
    return null;
}
}),
"[project]/src/utils/sitemap.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/sitemap.ts
__turbopack_context__.s([
    "LIVE_CATEGORY_SLUGS",
    ()=>LIVE_CATEGORY_SLUGS,
    "SITE_URL",
    ()=>SITE_URL,
    "STATIC_PATHS",
    ()=>STATIC_PATHS,
    "buildSitemapEntries",
    ()=>buildSitemapEntries,
    "escapeXml",
    ()=>escapeXml,
    "getArticlePath",
    ()=>getArticlePath,
    "getCategoryPath",
    ()=>getCategoryPath,
    "renderSitemapXml",
    ()=>renderSitemapXml
]);
const SITE_URL = 'https://www.techvani.co.in';
const STATIC_PATHS = [
    '/',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/editorial-team',
    '/tools'
];
function getArticlePath(a) {
    const isProduct = a.rating != null;
    return `${isProduct ? '/product' : '/article'}/${a.slug}`;
}
function getCategoryPath(c) {
    return c.slug === 'home' ? '/' : `/category/${c.slug}`;
}
function escapeXml(s) {
    return s.replace(/[<>&'"]/g, (ch)=>{
        switch(ch){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case "'":
                return '&apos;';
            case '"':
                return '&quot;';
            default:
                return ch;
        }
    });
}
function isValidSlug(slug) {
    return typeof slug === 'string' && slug.length > 0 && /^[a-z0-9\-_]+$/i.test(slug);
}
function getLastmod(a) {
    const raw = a.updated_at ?? a.updatedAt ?? a.modified;
    if (!raw) return undefined;
    try {
        return new Date(raw).toISOString().split('T')[0];
    } catch  {
        return undefined;
    }
}
const LIVE_CATEGORY_SLUGS = null;
function buildSitemapEntries(articles, categories) {
    const entries = [];
    // 1. Static pages (7)
    for (const path of STATIC_PATHS){
        entries.push({
            loc: `${SITE_URL}${path}`,
            changefreq: 'weekly',
            priority: path === '/' ? 1.0 : 0.6
        });
    }
    // 2. Categories (real only, no hardcoded filter)
    for (const c of categories){
        if (!isValidSlug(c.slug)) continue;
        if (c.slug === 'home') continue;
        if (LIVE_CATEGORY_SLUGS && !LIVE_CATEGORY_SLUGS.includes(c.slug)) continue;
        entries.push({
            loc: `${SITE_URL}${getCategoryPath(c)}`,
            changefreq: 'weekly',
            priority: 0.7
        });
    }
    // 3. Articles + Products (real only)
    for (const a of articles){
        if (!isValidSlug(a.slug)) continue;
        if (a.status && a.status !== 'published') continue;
        entries.push({
            loc: `${SITE_URL}${getArticlePath(a)}`,
            lastmod: getLastmod(a),
            changefreq: 'weekly',
            priority: 0.8
        });
    }
    // 4. Dedupe
    const seen = new Set();
    return entries.filter((e)=>{
        if (seen.has(e.loc)) return false;
        seen.add(e.loc);
        return true;
    });
}
function renderSitemapXml(entries) {
    const body = entries.map((e)=>{
        const parts = [
            `    <loc>${escapeXml(e.loc)}</loc>`
        ];
        if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
        if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
        if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
        return `  <url>\n${parts.join('\n')}\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0x4c--8kip_rk._.js.map