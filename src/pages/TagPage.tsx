import React, { useState, useEffect } from 'react';
import { Article } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { applySEO } from '../utils/seo';

interface TagPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const TagPage: React.FC<TagPageProps> = ({ slug, onNavigate }) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTagData = async () => {
      setLoading(true);
      applySEO({
        title: `#${slug} – टैग से जुड़े सभी लेख`,
        description: `टेकवाणी पर #${slug} से जुड़े सभी ताज़ा ट्यूटोरियल, टिप्स और विश्लेषण।`,
        canonicalUrl: `${window.location.origin}/tag/${slug}`,
        breadcrumbs: [
          { name: 'मुख्य पृष्ठ', url: '/' },
          { name: `#${slug}`, url: `/tag/${slug}` },
        ],
      });

      const res = await djangoApi.getArticles({ tag: slug, pageSize: 20 });
      setArticles(res.results);
      setLoading(false);
    };
    loadTagData();
  }, [slug]);

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      <div className="bg-gray-100 dark:bg-gray-800/60 p-6 rounded-2xl mb-8 flex items-center justify-between">
        <div>
          <span className="text-xs uppercase font-bold text-[#bb010d]">टैग संग्रह</span>
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">
            #{slug}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            कुल {articles.length} प्रामाणिक लेख उपलब्ध
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500">लोड हो रहा है...</div>
      ) : articles.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          इस टैग से संबंधित कोई लेख नहीं मिला।
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onNavigate(article.rating ? `/product/${article.slug}` : `/article/${article.slug}`)}
              className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col cursor-pointer group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={article.coverImage}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                <div>
                  <span className="text-[10px] text-[#bb010d] font-bold uppercase">{article.category.name}</span>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-2 mt-1 group-hover:text-[#bb010d] transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="text-[11px] text-gray-400 border-t border-gray-100 dark:border-gray-800 pt-2 flex justify-between">
                  <span>{article.publishedAt}</span>
                  <span className="text-[#bb010d] font-bold">पढ़ें →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};
