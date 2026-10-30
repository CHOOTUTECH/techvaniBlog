// pages/sitemap.tsx
import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { LanguageContext } from '../src/context/AppContext';
import { djangoApi } from '../src/services/djangoApi';
import { Article, Category } from '../src/types/api';
import {
  SITE_URL,
  getArticlePath,
  getCategoryPath,
  STATIC_PATHS,
} from '../src/utils/sitemap';

interface SitemapPageProps {
  articles: Article[];
  categories: Category[];
}

export default function SitemapPage({ articles, categories }: SitemapPageProps) {
  const { language } = useContext(LanguageContext);

  const staticPages = [
    { title: language === 'hi' ? 'मुख्य पृष्ठ' : 'Home', url: '/' },
    { title: language === 'hi' ? 'हमारे बारे में' : 'About', url: '/about' },
    { title: language === 'hi' ? 'संपर्क' : 'Contact', url: '/contact' },
    { title: language === 'hi' ? 'प्राइवेसी पॉलिसी' : 'Privacy Policy', url: '/privacy-policy' },
    { title: language === 'hi' ? 'नियम और शर्तें' : 'Terms', url: '/terms' },
    { title: language === 'hi' ? 'संपादकीय टीम' : 'Editorial Team', url: '/editorial-team' },
    { title: language === 'hi' ? 'ऑनलाइन टूल्स' : 'Tools', url: '/tools' },
  ];

  return (
    <>
      <Head>
        <title>{language === 'hi' ? 'साइटमैप – टेकवाणी' : 'Sitemap - TechVani'}</title>
        <meta name="description" content="टेकवाणी के सभी पेजों और लेखों की सूची।" />
        <link rel="canonical" href={`${SITE_URL}/sitemap`} />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          {language === 'hi' ? 'वेबसाइट साइटमैप' : 'Website Sitemap'}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          {language === 'hi'
            ? 'सभी पेजों की पूरी सूची'
            : 'Complete page index'}
        </p>

        {/* Static Pages */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'hi' ? 'मुख्य पेज' : 'Main Pages'}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {staticPages.map((page) => (
              <li key={page.url}>
                <Link href={page.url} className="text-gray-700 hover:text-[#bb010d] font-medium">
                  → {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              {language === 'hi' ? 'श्रेणियां' : 'Categories'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link href={getCategoryPath(c)} className="text-gray-700 hover:text-[#bb010d] font-medium">
                    → {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Articles */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            {language === 'hi' ? `सभी लेख (${articles.length})` : `All Articles (${articles.length})`}
          </h2>
          <ul className="space-y-2 text-sm">
            {articles.map((a) => (
              <li key={a.id} className="border-b border-gray-100 pb-2">
                <Link href={getArticlePath(a)} className="text-gray-700 hover:text-[#bb010d]">
                  <span className="text-[10px] uppercase font-bold text-[#bb010d] mr-2">
                    [{a.category?.name}]
                  </span>
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [articlesRes, categories] = await Promise.all([
      djangoApi.getArticles({ pageSize: 1000 }),
      djangoApi.getCategories(),
    ]);

    return {
      props: {
        articles: articlesRes?.results || [],
        categories: categories || [],
      },
    };
  } catch (error) {
    console.error('Sitemap Page Error:', error);
    return {
      props: { articles: [], categories: [] },
    };
  }
};