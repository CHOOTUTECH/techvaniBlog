import React, { useState, useEffect } from 'react';
import { Article } from '../types/api';
import { djangoApi } from '../services/djangoApi';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectArticle: (slug: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      if (query.trim() === '') {
        // Fetch top recent
        const res = await djangoApi.getArticles({ pageSize: 5 });
        setResults(res.results);
      } else {
        setLoading(true);
        const res = await djangoApi.getArticles({ search: query, pageSize: 8 });
        setResults(res.results);
        setLoading(false);
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [query, isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-[#131b22] w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <span className="material-symbols-outlined text-gray-400 text-[24px]">search</span>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="आर्टिकल्स, कीबोर्ड शॉर्टकट्स या टॉपिक्स खोजें (उदा: पायथन, एक्सेल, Win+V)..."
            className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder:text-gray-400 text-base focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
          <kbd className="hidden sm:inline text-[11px] bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded border border-gray-300 dark:border-gray-700 font-mono">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 flex-1 space-y-2">
          {loading ? (
            <div className="py-8 text-center text-sm text-gray-500">खोज जारी है...</div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <span className="material-symbols-outlined text-[36px] text-gray-400 mb-2">sentiment_dissatisfied</span>
              <p className="text-sm font-medium">"{query}" के लिए कोई परिणाम नहीं मिला</p>
              <p className="text-xs text-gray-400 mt-1">शॉर्टकट, विंडोज, या पायथन जैसे शब्द आजमाएं</p>
            </div>
          ) : (
            <>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                {query ? 'सर्च परिणाम' : 'लोकप्रिय और ताज़ा लेख'}
              </div>
              {results.map((article) => (
                <div
                  key={article.id}
                  onClick={() => {
                    onSelectArticle(article.slug);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/80 cursor-pointer transition-colors group"
                >
                  <img
                    src={article.coverImage}
                    alt={article.imageAlt}
                    className="w-14 h-14 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-bold text-[#bb010d] bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded">
                        {article.category.name}
                      </span>
                      <span className="text-[11px] text-gray-400">• {article.publishedAt}</span>
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 truncate group-hover:text-[#bb010d] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-[#bb010d] text-[20px] transition-colors shrink-0">
                    arrow_forward
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
