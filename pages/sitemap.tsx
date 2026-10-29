// pages/sitemap.tsx
import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { LanguageContext } from '../src/context/AppContext';
import { djangoApi } from '../src/services/djangoApi';
import { Article, Category } from '../src/types/api';

interface SitemapPageProps {
  articles: Article[];
  categories: Category[];
}

export default function SitemapPage({ articles, categories }: SitemapPageProps) {
  const [viewMode, setViewMode] = useState<'visual' | 'xml'>('visual');
  const { language } = useContext(LanguageContext);

  const staticPages = [
    { title: language === 'hi' ? 'मुख्य पृष्ठ' : 'Home', url: '/' },
    { title: language === 'hi' ? 'हमारे बारे में' : 'About Us', url: '/about' },
    { title: language === 'hi' ? 'संपर्क करें' : 'Contact Us', url: '/contact' },
    { title: language === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy', url: '/privacy-policy' },
    { title: language === 'hi' ? 'नियम और शर्तें' : 'Terms of Service', url: '/terms' },
    { title: language === 'hi' ? 'संपादकीय टीम' : 'Editorial Team', url: '/editorial-team' },
    { title: language === 'hi' ? 'ऑनलाइन टूल्स' : 'Online Tools', url: '/tools' },
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Pages -->
  ${staticPages
    .map(
      (p) => `<url>
    <loc>https://techvani.co.in${p.url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`
    )
    .join('\n  ')}

  <!-- Categories -->
  ${categories
    .map(
      (c) => `<url>
    <loc>https://techvani.co.in/category/${c.slug}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join('\n  ')}

  <!-- Articles -->
  ${articles
    .map(
      (a) => `<url>
    <loc>https://techvani.co.in/article/${a.slug}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join('\n  ')}
</urlset>`;

  return (
    <>
      {/* 🔥 Next.js Head for SEO */}
      <Head>
        <title>{language === 'hi' ? 'साइटमैप (Sitemap) – टेकवाणी' : 'Sitemap - TechVani'}</title>
        <meta 
          name="description" 
          content="टेकवाणी के सभी पेजों, लेखों और श्रेणियों की सम्पूर्ण सूची।" 
        />
        <link rel="canonical" href="https://techvani.co.in/sitemap" />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
              Google Search Console / SEO
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
              {language === 'hi' ? 'वेबसाइट साइटमैप' : 'Website Sitemap'}
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              {language === 'hi' ? 'खोज इंजनों और पाठकों के लिए संपूर्ण पेज अनुक्रमणिका' : 'Complete page index for search engines and readers'}
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
              {language === 'hi' ? 'विज़ुअल लिस्ट' : 'Visual List'}
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
                {language === 'hi' ? 'मुख्य पृष्ठ एवं नीतियां' : 'Main Pages & Policies'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {staticPages.map((page) => (
                  <li key={page.url}>
                    <Link href={page.url} className="text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-gray-400">arrow_right</span>
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">category</span>
                {language === 'hi' ? 'श्रेणियां (Categories)' : 'Categories'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link href={c.slug === 'home' ? '/' : `/category/${c.slug}`} className="text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-gray-400">folder</span>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Articles */}
            <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#bb010d]">article</span>
                {language === 'hi' ? `सभी प्रकाशित लेख (${articles.length})` : `All Published Articles (${articles.length})`}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {articles.map((a) => (
                  <li key={a.id} className="border-b border-gray-100 dark:border-gray-800/60 pb-2">
                    <Link href={a.rating ? `/product/${a.slug}` : `/article/${a.slug}`} className="text-left text-gray-700 dark:text-gray-300 hover:text-[#bb010d] font-medium block">
                      <span className="text-[10px] uppercase font-bold text-[#bb010d] mr-2">[{a.category.name}]</span>
                      {a.title}
                    </Link>
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
    </>
  );
}

// 🔥 सर्वर-साइड रेंडरिंग (SSR) - असली डेटा फ़ेच करने के लिए
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const articlesRes = await djangoApi.getArticles({ pageSize: 1000 }); // सारे आर्टिकल्स
    const categories = await djangoApi.getCategories();

    return {
      props: {
        articles: articlesRes.results || [],
        categories: categories || [],
      },
    };
  } catch (error) {
    console.error("Sitemap Page Error:", error);
    return {
      props: {
        articles: [],
        categories: [],
      },
    };
  }
};