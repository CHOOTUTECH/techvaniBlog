// pages/article/[slug].tsx
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Article, ArticleComment } from '../../src/types/api';
import { djangoApi } from '../../src/services/djangoApi';
import { parseArticleContent } from '../../src/utils/markdownParser';

interface ArticleDetailPageProps {
  article: Article;
  initialComments: ArticleComment[];
  initialRelatedArticles: Article[];
}

export default function ArticleDetailPage({ 
  article, 
  initialComments, 
  initialRelatedArticles 
}: ArticleDetailPageProps) {
  const router = useRouter();
  
  const [comments, setComments] = useState<ArticleComment[]>(initialComments);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (router.isFallback) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#bb010d] border-t-transparent mb-4"></div>
        <p className="text-gray-500">आर्टिकल लोड हो रहा है...</p>
      </div>
    );
  }

  // अगर आर्टिकल नहीं मिला (हालांकि getServerSideProps में 404 हैंडल है)
  if (!article) {
    return <div className="text-center py-20">आर्टिकल नहीं मिला!</div>;
  }

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !commentText.trim()) return;

    const newC = await djangoApi.postComment({
      articleId: article.slug || article.id,
      authorName,
      comment: commentText,
    });

    setComments([newC, ...comments]);
    setCommentText('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(text);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <>
      <Head>
        <title>{article.metaTitle || article.title} - टेकवाणी</title>
        <meta name="description" content={article.metaDescription || article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.metaTitle || article.title} />
        <meta property="og:description" content={article.metaDescription || article.excerpt} />
        <meta property="og:image" content={article.coverImage || article.ogImage} />
        <link rel="canonical" href={article.canonicalUrl || `https://techvani.in/article/${article.slug}`} />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap" aria-label="ब्रेडक्रम">
          <Link href="/" className="hover:text-[#bb010d] transition-colors">मुख्य पृष्ठ</Link>
          <span>/</span>
          <Link href={`/category/${article.category.slug}`} className="hover:text-[#bb010d] transition-colors">
            {article.category.name}
          </Link>
          <span>/</span>
          <span className="text-gray-800 dark:text-gray-200 truncate max-w-xs">{article.title}</span>
        </nav>

        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase">
              {article.category.name}
            </span>
            <span className="text-xs text-gray-500">{article.readingTimeMinutes} मिनट का अध्ययन</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-3.5 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <img src={article.author.avatar} alt={article.author.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-red-500/20" />
              <div>
                <div className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                  {article.author.name}
                  <span className="material-symbols-outlined text-blue-500 text-[16px]">verified</span>
                </div>
                <div className="text-xs text-gray-500">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                {article.publishedAt}
              </span>
            </div>
          </div>
        </header>

        <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900">
          <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover" />
        </div>

        {/* Main Content */}
        <div className="article-content max-w-none text-gray-800 dark:text-gray-200">
          <div dangerouslySetInnerHTML={{ __html: parseArticleContent(article.content) }} />
        </div>

        {/* Tags */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-gray-500">टैग्स:</span>
          {article.tags.map((tag) => (
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
    const article = await djangoApi.getArticleBySlug(slug);

    if (!article) {
      return { notFound: true };
    }

    const comments = await djangoApi.getComments(article.slug || article.id);
    const rel = await djangoApi.getArticles({ category: article.category.slug, pageSize: 3 });
    const relatedArticles = rel.results.filter((a) => a.id !== article.id);

    return {
      props: {
        article,
        initialComments: comments || [],
        initialRelatedArticles: relatedArticles || [],
      },
    };
  } catch (error) {
    return { notFound: true };
  }
};