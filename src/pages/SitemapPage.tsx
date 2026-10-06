import React, { useState, useEffect } from 'react';
import { mockArticles, mockCategories } from '../data/mockDjangoData';
import { applySEO } from '../utils/seo';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'visual' | 'xml'>('visual');

  useEffect(() => {
    applySEO({
      title: 'साइटमैप (Sitemap) – टेकवाणी पोर्टल इंडेक्स',
      description: 'टेकवाणी के सभी पेजों, लेखों और श्रेणियों की सम्पूर्ण सूची। खोज इंजन और पाठकों के लिए त्वरित नेविगेशन।',
      canonicalUrl: `${window.location.origin}/sitemap`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'साइटमैप', url: '/sitemap' },
      ],
    });
  }, []);

  const staticPages = [
    { title: 'मुख्य पृष्ठ (Home)', url: '/' },
    { title: 'हमारे बारे में (About Us)', url: '/about' },
    { title: 'संपर्क करें (Contact Us)', url: '/contact' },
    { title: 'गोपनीयता नीति (Privacy Policy)', url: '/privacy-policy' },
    { title: 'नियम और शर्तें (Terms of Service)', url: '/terms' },
    { title: 'संपादकीय टीम और नीतियां (Editorial Team)', url: '/editorial-team' },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Pages -->
  ${staticPages
    .map(
      (p) => `<url>
    <loc>https://techvani.in${p.url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('\n  ')}

  <!-- Categories -->
  ${mockCategories
    .map(
      (c) => `<url>
    <loc>https://techvani.in/category/${c.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n  ')}

  <!-- Articles -->
  ${mockArticles
    .map(
      (a) => `<url>
    <loc>https://techvani.in/article/${a.slug}</loc>
    <lastmod>2024-10-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            Google Search Console / SEO
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
            वेबसाइट साइटमैप (Sitemap)
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            खोज इंजनों और पाठकों के लिए संपूर्ण पेज अनुक्रमणिका
          </p>
        </div>

        <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-xl">
          <button
            onClick={() => setViewMode('visual')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              viewMode === 'visual'
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            विज़ुअल लिस्ट
          </button>
          <button
            onClick={() => setViewMode('xml')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
              viewMode === 'xml'
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            sitemap.xml
          </button>
        </div>
      </div>

      {viewMode === 'visual' ? (
        <div className="space-y-8">
          {/* Static Pages */}
          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">web</span>
              मुख्य पृष्ठ एवं नीतियां
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {staticPages.map((page) => (
                <li key={page.url}>
                  <button
                    onClick={() => onNavigate(page.url)}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_right</span>
                    {page.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">category</span>
              श्रेणियां (Categories)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {mockCategories.map((c) => (
                <li key={c.slug}>
                  <button
                    onClick={() => onNavigate(c.slug === 'home' ? '/' : `/category/${c.slug}`)}
                    className="text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px] text-gray-400">folder</span>
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles */}
          <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">article</span>
              सभी प्रकाशित लेख एवं ट्यूटोरियल्स ({mockArticles.length})
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {mockArticles.map((a) => (
                <li key={a.id} className="border-b border-gray-100 dark:border-gray-800/60 pb-2">
                  <button
                    onClick={() => onNavigate(a.rating ? `/product/${a.slug}` : `/article/${a.slug}`)}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium block"
                  >
                    <span className="text-[10px] uppercase font-bold text-[#bb010d] mr-2">[{a.category.name}]</span>
                    {a.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="bg-black/90 p-5 rounded-2xl border border-gray-800 font-mono text-xs text-emerald-400 overflow-x-auto">
          <pre>{xmlContent}</pre>
        </div>
      )}
    </div>
  );
};
