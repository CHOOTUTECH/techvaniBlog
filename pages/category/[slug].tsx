// pages/category/[slug].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { djangoApi } from '../../src/services/djangoApi';
import { Article, Category } from '../../src/types/api';
import { SITE_URL, getArticlePath } from '../../src/utils/sitemap';

interface CategoryPageProps {
  category: Category;
  articles: Article[];
}

export default function CategoryPage({ category, articles }: CategoryPageProps) {
  const pageTitle = `${category.name} - सभी लेख और ट्यूटोरियल्स | टेकवाणी`;
  const pageDescription = `${category.name} से जुड़े सभी लेख, ट्यूटोरियल्स और गाइड्स हिंदी में पढ़ें। टेकवाणी पर ${articles.length} लेख उपलब्ध हैं।`;
  const canonicalUrl = `${SITE_URL}/category/${category.slug}`;

  return (
    <>
      <Head>
        {/* ✅ Title — खाली नहीं, descriptive */}
        <title>{pageTitle}</title>

        {/* ✅ Meta description — spammy नहीं, natural */}
        <meta name="description" content={pageDescription} />

        {/* ✅ Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />

        {/* ✅ Canonical */}
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#bb010d]">
            मुख्य पृष्ठ
          </Link>
          <span>/</span>
          <span>{category.name}</span>
        </nav>

        {/* ✅ H1 — descriptive, user-friendly */}
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
          {category.name} — सभी लेख और ट्यूटोरियल्स
        </h1>

        <p className="text-gray-500 mb-8 text-sm">
          {articles.length} लेख उपलब्ध हैं इस श्रेणी में
        </p>

        {articles.length === 0 ? (
          <div className="bg-white dark:bg-[#131b22] p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-500 mb-4">
              इस श्रेणी में अभी कोई लेख नहीं है।
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-2 bg-[#bb010d] text-white rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              मुख्य पृष्ठ पर जाएँ
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.id}
                href={getArticlePath(a)}
                className="block bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                {a.coverImage && (
                  <div className="aspect-video relative bg-gray-900">
                    <img
                      src={a.coverImage}
                      alt={a.imageAlt || a.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h2 className="text-base font-bold text-gray-900 dark:text-white line-clamp-2 mb-2">
                    {a.title}
                  </h2>
                  <p className="text-xs text-gray-500 line-clamp-2">{a.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* ✅ हर category page पर "Browse Other Categories" — content बढ़ेगा */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
            अन्य श्रेणियां देखें
          </h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white rounded-lg text-sm font-medium transition-colors"
            >
              मुख्य पृष्ठ
            </Link>
            <Link
              href="/tools"
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white rounded-lg text-sm font-medium transition-colors"
            >
              ऑनलाइन टूल्स
            </Link>
            <Link
              href="/sitemap"
              className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white rounded-lg text-sm font-medium transition-colors"
            >
              पूरा साइटमैप
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const categories = await djangoApi.getCategories();
    const paths = (categories || [])
      .filter((c) => c.slug && c.slug !== 'home')
      .map((c) => ({ params: { slug: c.slug } }));

    return { paths, fallback: 'blocking' };
  } catch (err) {
    console.error('[category] getStaticPaths failed:', err);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    const category = await djangoApi.getCategoryBySlug(slug);

    if (!category) {
      return { notFound: true, revalidate: 60 };
    }

    const articlesRes = await djangoApi
      .getArticles({ category: slug, pageSize: 30 })
      .catch(() => ({ results: [] }));

    return {
      props: {
        category,
        articles: (articlesRes as any)?.results || [],
      },
      revalidate: 120,
    };
  } catch (err) {
    console.error('[category] getStaticProps failed:', err);
    return { notFound: true, revalidate: 60 };
  }
};