// pages/product/[slug].tsx
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Article } from '../../src/types/api';
import { djangoApi } from '../../src/services/djangoApi';
import { parseArticleContent } from '../../src/utils/markdownParser';

interface ProductReviewPageProps {
  product: Article;
}

export default function ProductReviewPage({ product }: ProductReviewPageProps) {
  // 🔥 SEO: Product Review Schema (Google में स्टार रेटिंग दिखाने के लिए)
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "image": [product.coverImage],
    "description": product.excerpt,
    "review": {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": product.rating || "8",
        "bestRating": "10"
      },
      "author": {
        "@type": "Person",
        "name": product.author.name
      }
    }
  };

  return (
    <>
      <Head>
        <title>{product.metaTitle || product.title} - टेकवाणी</title>
        <meta name="description" content={product.metaDescription || product.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={product.metaTitle || product.title} />
        <meta property="og:image" content={product.coverImage} />
        <link rel="canonical" href={`https://techvani.in/product/${product.slug}`} />
        
        {/* Schema Script */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#bb010d] transition-colors">मुख्य पृष्ठ</Link>
          <span>/</span>
          <Link href="/category/gadgets" className="hover:text-[#bb010d] transition-colors">गैजेट्स</Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 truncate max-w-xs">{product.title}</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase">
              प्रोडक्ट रिव्यू
            </span>
            {product.rating && (
              <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-400 text-xs px-3 py-1 rounded font-bold flex items-center gap-1">
                ★ रेटिंग: {product.rating}/10
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            {product.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-3 border-y border-gray-200 dark:border-gray-800 py-3.5">
            <img src={product.author.avatar} alt={product.author.name} className="w-11 h-11 rounded-full object-cover" />
            <div>
              <div className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1">
                {product.author.name}
                <span className="material-symbols-outlined text-blue-500 text-[16px]">verified</span>
              </div>
              <div className="text-xs text-gray-500">{product.publishedAt} • {product.author.role}</div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900">
          <img src={product.coverImage} alt={product.imageAlt} className="w-full h-full object-cover" />
        </div>

        {/* Main Content */}
        <div className="article-content max-w-none text-gray-800 dark:text-gray-200">
          <div dangerouslySetInnerHTML={{ __html: parseArticleContent(product.content) }} />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-gray-500">टैग्स:</span>
          {product.tags.map((tag) => (
            <Link key={tag.id} href={`/tag/${tag.slug}`} className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg transition-colors font-medium">
              #{tag.name}
            </Link>
          ))}
        </div>
      </article>
    </>
  );
}

// 🔥 सर्वर-साइड रेंडरिंग (SSR)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  try {
    // प्रोडक्ट का डेटा फ़ेच करें
    const product = await djangoApi.getArticleBySlug(slug);

    if (!product) {
      return { notFound: true };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    console.error(`Error fetching product: ${slug}`, error);
    return { notFound: true };
  }
};