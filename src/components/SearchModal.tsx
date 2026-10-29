// src/components/SearchModal.tsx
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Article } from '../types/api';
import { djangoApi } from '../services/djangoApi';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  
  // 🔥 भाषा चुनने के लिए स्टेट (हिंदी या इंग्लिश)
  const [language, setLanguage] = useState<'hi' | 'en'>('hi');

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      if (query.trim() === '') {
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

  // Handle Escape key (Keyboard Shortcut)
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

  const handleArticleClick = (slug: string) => {
    router.push(`/article/${slug}`);
    onClose();
  };

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
            // 🔥 भाषा के हिसाब से प्लेसहोल्डर बदलेगा
            placeholder={language === 'hi' 
              ? "आर्टिकल्स, कीबोर्ड शॉर्टकट्स या टॉपिक्स खोजें..." 
              : "Search articles, shortcuts or topics..."}
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

          {/* 🔥 Language Selector Dropdown */}
          <div className="flex items-center gap-1 border-l border-gray-200 dark:border-gray-700 pl-3">
            <span className="material-symbols-outlined text-gray-400 text-[18px]">language</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'hi' | 'en')}
              className="bg-transparent text-sm font-bold text-gray-700 dark:text-gray-300 cursor-pointer focus:outline-none"
            >
              <option value="hi">हिंदी</option>
              <option value="en">English</option>
            </select>
          </div>

          {/* 🔥 ESC Button - अब यह क्लिक करने पर काम करेगा */}
          <button
            onClick={onClose}
            className="hidden sm:inline-flex text-[11px] bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 text-gray-500 hover:text-red-600 dark:hover:text-red-400 px-2 py-1 rounded border border-gray-300 dark:border-gray-700 font-mono transition-colors cursor-pointer"
            title="बंद करें"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 flex-1 space-y-2">
          {loading ? (
            <div className="py-8 text-center text-sm text-gray-500">
              {language === 'hi' ? 'खोज जारी है...' : 'Searching...'}
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <span className="material-symbols-outlined text-[36px] text-gray-400 mb-2">sentiment_dissatisfied</span>
              <p className="text-sm font-medium">
                {language === 'hi' ? `"${query}" के लिए कोई परिणाम नहीं मिला` : `No results found for "${query}"`}
              </p>
            </div>
          ) : (
            <>
              <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
                {query 
                  ? (language === 'hi' ? 'सर्च परिणाम' : 'Search Results') 
                  : (language === 'hi' ? 'लोकप्रिय और ताज़ा लेख' : 'Popular & Recent Articles')}
              </div>
              {results.map((article) => (
                <div
                  key={article.id}
                  onClick={() => handleArticleClick(article.slug)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800/80 cursor-pointer transition-colors group"
                >
                  <img
                    src={article.coverImage}
                    alt={article.imageAlt}
                    loading="lazy"
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