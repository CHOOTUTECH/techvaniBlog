// pages/article/[slug].tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article, ArticleComment } from '../../src/types/api';
import { djangoApi } from '../../src/services/djangoApi';
import { parseArticleContent } from '../../src/utils/markdownParser';
import { SITE_URL, getArticlePath } from '../../src/utils/sitemap';

interface ArticleDetailPageProps {
  article: Article;
  initialComments: ArticleComment[];
  initialRelatedArticles: Article[];
}

export default function ArticleDetailPage({
  article,
  initialComments,
  initialRelatedArticles,
}: ArticleDetailPageProps) {
  const [comments] = useState<ArticleComment[]>(initialComments);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    await djangoApi.postComment({
      articleId: article.slug || article.id,
      authorName,
      comment: commentText,
    });

    setCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const canonical =
    article.canonicalUrl || `${SITE_URL}/article/${article.slug}`;

  return (
    <>
      <Head>
        <title>{article.metaTitle || article.title} - टेकवाणी</title>
        <meta
          name="description"
          content={article.metaDescription || article.excerpt}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.metaTitle || article.title} />
        <meta
          property="og:description"
          content={article.metaDescription || article.excerpt}
        />
        <meta property="og:image" content={article.coverImage || article.ogImage} />
        <meta property="og:url" content={canonical} />
        <link rel="canonical" href={canonical} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
          <Link href="/" className="hover:text-[#bb010d]">मुख्य पृष्ठ</Link>
          <span>/</span>
          <Link
            href={`/category/${article.category.slug}`}
            className="hover:text-[#bb010d]"
          >
            {article.category.name}
          </Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 truncate max-w-xs">
            {article.title}
          </span>
        </nav>

        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase">
              {article.category.name}
            </span>
            <span className="text-xs text-gray-500">
              {article.readingTimeMinutes} मिनट का अध्ययन
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-3.5 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-red-500/20"
              />
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  {article.author.name}
                  <span className="material-symbols-outlined text-blue-500 text-[16px]">
                    verified
                  </span>
                </div>
                <div className="text-xs text-gray-500">{article.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">
                  calendar_today
                </span>
                {article.publishedAt}
              </span>
            </div>
          </div>
        </header>

        {/* ✅ Hero image — priority से तुरंत load */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900 relative">
          <Image
            src={article.coverImage}
            alt={article.imageAlt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="article-content max-w-none text-gray-800 dark:text-gray-200">
          <div
            dangerouslySetInnerHTML={{
              __html: parseArticleContent(article.content),
            }}
          />
        </div>

        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-500">टैग्स:</span>
            {article.tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tag/${tag.slug}`}
                className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg transition-colors font-medium"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        )}

        {/* Related Articles */}
        {initialRelatedArticles.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-bold mb-4">संबंधित लेख</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {initialRelatedArticles.map((a) => (
                <Link
                  key={a.id}
                  href={getArticlePath(a)}
                  className="block p-4 bg-white dark:bg-[#131b22] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-sm font-bold mb-2 line-clamp-2">{a.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

// ✅ Paths generate करें build के समय
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await djangoApi.getArticles({ pageSize: 5000 });
    const articles = res?.results || [];

    const paths = articles
      .filter((a) => a.slug && a.rating == null)
      .map((a) => ({ params: { slug: a.slug } }));

    return {
      paths,
      fallback: 'blocking', // नई articles पहली request पर render होंगी
    };
  } catch (err) {
    console.error('[getStaticPaths article] failed:', err);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  try {
    const article = await djangoApi.getArticleBySlug(slug);

    if (!article) {
      return { notFound: true, revalidate: 60 };
    }

    // Product है → /product/ पर redirect
    if ((article as any).rating != null) {
      return {
        redirect: {
          destination: `/product/${slug}`,
          permanent: true,
        },
      };
    }

    const [comments, rel] = await Promise.all([
      djangoApi.getComments(article.slug || article.id).catch(() => []),
      djangoApi
        .getArticles({ category: article.category.slug, pageSize: 4 })
        .catch(() => ({ results: [] })),
    ]);

    const relatedArticles =
      (rel as any)?.results?.filter((a: Article) => a.id !== article.id).slice(0, 3) || [];

    return {
      props: {
        article,
        initialComments: comments || [],
        initialRelatedArticles: relatedArticles,
      },
      revalidate: 300, // हर 5 मिनट में update
    };
  } catch (err) {
    console.error('[Article] failed:', err);
    return { notFound: true, revalidate: 60 };
  }
};