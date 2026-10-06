import React, { useState, useEffect } from 'react';
import { Article, Category } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { applySEO } from '../utils/seo';

interface CategoryPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({ slug, onNavigate }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategoryData = async () => {
      setLoading(true);
      const cats = await djangoApi.getCategories();
      const currentCat = cats.find((c) => c.slug === slug);
      setCategory(currentCat || null);

      if (currentCat) {
        applySEO({
          title: currentCat.metaTitle || `${currentCat.name} – ताज़ा लेख, ट्यूटोरियल और ट्रिक्स`,
          description: currentCat.metaDescription || currentCat.description,
          canonicalUrl: `${window.location.origin}/category/${currentCat.slug}`,
          breadcrumbs: [
            { name: 'मुख्य पृष्ठ', url: '/' },
            { name: currentCat.name, url: `/category/${currentCat.slug}` },
          ],
        });

        const res = await djangoApi.getArticles({ category: currentCat.slug, pageSize: 20 });
        setArticles(res.results);
      }
      setLoading(false);
    };
    loadCategoryData();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#bb010d] border-t-transparent mb-4"></div>
        <p className="text-gray-500">श्रेणी लोड हो रही है...</p>
      </div>
    );
  }

  if (!category) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">श्रेणी नहीं मिली</h2>
        <button onClick={() => onNavigate('/')} className="text-[#bb010d] hover:underline font-bold">
          मुख्य पृष्ठ पर वापस जाएं
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Category Header */}
      <div className="bg-[#ecf5fe] dark:bg-gray-800/60 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-gray-700/60 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#bb010d] text-white flex items-center justify-center shrink-0 shadow-md">
            <span className="material-symbols-outlined text-[32px]">{category.icon}</span>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
              {category.name}
            </h1>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-1">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs bg-white/70 dark:bg-gray-700/70 text-gray-600 dark:text-gray-300 px-3 py-1.5 rounded-xl font-medium">
            {articles.length} प्रामाणिक लेख
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      {articles.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          इस श्रेणी में अभी कोई लेख उपलब्ध नहीं है।
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate(article.rating ? `/product/${article.slug}` : `/article/${article.slug}`)}
              className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col cursor-pointer group"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {article.rating && (
                  <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-extrabold">
                    ★ {article.rating}/10
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-[11px] text-gray-500">
                    <span>{article.publishedAt}</span>
                    <span>•</span>
                    <span>{article.readingTimeMinutes} मिनट पढ़ें</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white line-clamp-2 group-hover:text-[#bb010d] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                  <span>{article.author.name}</span>
                  <span className="text-[#bb010d] font-bold flex items-center gap-0.5">
                    पढ़ें <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
