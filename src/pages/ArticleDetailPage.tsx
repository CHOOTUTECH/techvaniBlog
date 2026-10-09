import React, { useState, useEffect } from 'react';
import { Article, ArticleComment } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { applySEO } from '../utils/seo';

interface ArticleDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug, onNavigate }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [authorName, setAuthorName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const data = await djangoApi.getArticleBySlug(slug);
      if (data) {
        setArticle(data);

        // Apply SEO & auto-generate structured data schema
        applySEO({
          title: data.metaTitle || data.title,
          description: data.metaDescription || data.excerpt,
          ogType: 'article',
          ogImage: data.ogImage || data.coverImage,
          canonicalUrl: data.canonicalUrl || `${window.location.origin}/article/${data.slug}`,
          article: data,
          breadcrumbs: [
            { name: 'मुख्य पृष्ठ', url: '/' },
            { name: data.category.name, url: `/category/${data.category.slug}` },
            { name: data.title, url: `/article/${data.slug}` },
          ],
        });

        // Fetch comments & related
        const commentList = await djangoApi.getComments(data.slug || data.id);
        setComments(commentList);

        const rel = await djangoApi.getArticles({ category: data.category.slug, pageSize: 3 });
        setRelatedArticles(rel.results.filter((a) => a.id !== data.id));
      }
    };
    fetchArticle();
  }, [slug]);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!article || !authorName.trim() || !commentText.trim()) return;

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

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#bb010d] border-t-transparent mb-4"></div>
        <p className="text-gray-500">आर्टिकल लोड हो रहा है...</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap" aria-label="ब्रेडक्रम">
        <button onClick={() => onNavigate('/')} className="hover:text-[#bb010d] transition-colors">
          मुख्य पृष्ठ
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate(`/category/${article.category.slug}`)}
          className="hover:text-[#bb010d] transition-colors"
        >
          {article.category.name}
        </button>
        <span>/</span>
        <span className="text-gray-800 dark:text-gray-200 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header Info */}
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

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-3.5 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-11 h-11 rounded-full object-cover ring-2 ring-red-500/20"
            />
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
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">visibility</span>
              {article.viewsCount.toLocaleString()} बार पढ़ा गया
            </span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900">
        <img
          src={article.coverImage}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Shortcuts Quick Reference Box (if article has shortcuts) */}
      {article.shortcuts && article.shortcuts.length > 0 && (
        <section className="bg-[#ecf5fe] dark:bg-gray-800/60 rounded-2xl p-6 mb-8 border border-blue-100 dark:border-gray-700/60">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-[#bb010d] text-[24px]">keyboard</span>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              इस गाइड के मुख्य कीबोर्ड शॉर्टकट्स
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {article.shortcuts.map((s) => (
              <div
                key={s.key}
                className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <code className="text-xs font-mono font-bold text-[#bb010d] bg-red-50 dark:bg-red-950/40 px-2.5 py-1 rounded border border-red-200 dark:border-red-900">
                  {s.key}
                </code>
                <span className="text-xs text-gray-700 dark:text-gray-300 ml-2 text-right">
                  {s.action}
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy(s.key)}
                  className="ml-2 text-gray-400 hover:text-[#bb010d] p-1"
                  title="शॉर्टकट कॉपी करें"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedKey === s.key ? 'done' : 'content_copy'}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Main Formatted Content */}
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed space-y-5 text-sm sm:text-base">
        <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
      </div>

      {/* If this article is linked to an interactive tool */}
      {(article.slug === 'word-counter-online-tool-guide' || article.subCategory === 'ऑनलाइन टूल्स') && (
        <div className="my-8 p-6 bg-gradient-to-r from-red-50 via-rose-50 to-orange-50 dark:from-red-950/40 dark:via-gray-800 dark:to-gray-800 rounded-2xl border-2 border-red-500 shadow-md flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#bb010d] text-white flex items-center justify-center shrink-0 shadow-md">
              <span className="text-2xl">🛠️</span>
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#bb010d] uppercase tracking-wider">
                लाइव टेक टूल (Live Interactive Tool)
              </span>
              <h4 className="text-base sm:text-lg font-extrabold text-gray-900 dark:text-white mt-0.5">
                टेकवाणी वर्ड &amp; कैरेक्टर काउंटर टूल आज़माएँ
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                अपने किसी भी आर्टिकल, निबंध या सोशल मीडिया पोस्ट के शब्द, अक्षर और पढ़ने का समय तुरंत मुफ़्त में मापें।
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/tool/word-counter')}
            className="w-full sm:w-auto bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-6 py-3 rounded-xl shadow transition-all shrink-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>लाइव टूल खोलें</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}

      {/* FAQs Section (with FAQPage schema support) */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d]">help</span>
            अक्सर पूछे जाने वाले सवाल (FAQs)
          </h3>
          <div className="space-y-3">
            {article.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700/60"
              >
                <h4 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                  Q: {faq.question}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tags */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold text-gray-500">टैग्स:</span>
        {article.tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => onNavigate(`/tag/${tag.slug}`)}
            className="text-xs bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg transition-colors font-medium"
          >
            #{tag.name}
          </button>
        ))}
      </div>

      {/* Comments Section */}
      <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d]">forum</span>
            टिप्पणियां ({comments.length})
          </h3>
        </div>

        {/* Comment form */}
        <form onSubmit={handlePostComment} className="bg-gray-50 dark:bg-gray-800/40 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 mb-8 space-y-3">
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">अपनी राय साझा करें</h4>
          <input
            type="text"
            required
            placeholder="आपका शुभ नाम..."
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
          />
          <textarea
            required
            rows={3}
            placeholder="इस लेख या शॉर्टकट के बारे में अपनी टिप्पणी लिखें..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-3.5 py-2 rounded-xl text-xs sm:text-sm border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
          />
          <button
            type="submit"
            className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-5 py-2 rounded-xl shadow transition-colors cursor-pointer"
          >
            टिप्पणी पोस्ट करें
          </button>
          {commentSuccess && (
            <p className="text-xs text-emerald-600 font-medium">आपकी टिप्पणी पोस्ट कर दी गई है!</p>
          )}
        </form>

        {/* Comments list */}
        <div className="space-y-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-gray-900 dark:text-white">
                  {c.authorName}
                </span>
                <span className="text-[11px] text-gray-400">{c.createdAt}</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                {c.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            संबंधित और अनुशंसित लेख
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/article/${rel.slug}`)}
                className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-red-400 transition-colors group"
              >
                <img
                  src={rel.coverImage}
                  alt={rel.imageAlt}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white truncate group-hover:text-[#bb010d] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-gray-500 truncate mt-0.5">{rel.publishedAt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
