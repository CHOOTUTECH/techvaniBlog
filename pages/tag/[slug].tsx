// pages/tag/[slug].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Article } from '../../src/types/api';
import { djangoApi } from '../../src/services/djangoApi';

interface TagPageProps {
  tagSlug: string;
  articles: Article[];
}

export default function TagPage({ tagSlug, articles }: TagPageProps) {
  // URL से टैग का नाम निकाल कर सुंदर बनाएं (जैसे 'windows11' -> 'Windows11')
  const tagName = tagSlug.toUpperCase();

  return (
    <>
      <Head>
        <title>#{tagName} से जुड़े लेख - टेकवाणी</title>
        <meta name="description" content={`#${tagName} टैग से जुड़े सभी तकनीकी लेख और ट्यूटोरियल्स हिंदी में पढ़ें।`} />
      </Head>

      <div className="max-w-[1280px] mx-auto px-4 py-10">
        {/* Page Header */}
        <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
          <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
            टैग (Tag)
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
            #{tagName}
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            इस टैग में कुल {articles.length} लेख उपलब्ध हैं।
          </p>
        </div>

        {/* Articles Grid */}
        {articles.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            <span className="material-symbols-outlined text-[50px] text-gray-300 mb-2">inbox</span>
            <p>इस टैग में अभी कोई लेख नहीं है।</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link 
                href={article.rating ? `/product/${article.slug}` : `/article/${article.slug}`} 
                key={article.id} 
                className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col cursor-pointer group"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                    <span>{article.publishedAt}</span>
                    <span className="text-[#bb010d] font-bold flex items-center gap-0.5 group-hover:underline">
                      पढ़ें <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// 🔥 सर्वर-साइड रेंडरिंग (SSR) - टैग के हिसाब से डेटा फ़ेच करना
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    // आपके djangoApi के हिसाब से डेटा फ़ेच करें (tag के आधार पर)
    const res = await djangoApi.getArticles({ tag: slug, pageSize: 20 });

    return {
      props: {
        tagSlug: slug,
        articles: res.results || [],
      },
    };
  } catch (error) {
    console.error(`Error fetching articles for tag: ${slug}`, error);
    return {
      props: {
        tagSlug: slug,
        articles: [],
      },
    };
  }
};