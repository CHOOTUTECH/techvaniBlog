import React, { useEffect } from 'react';
import { applySEO } from '../utils/seo';
import { getAllTools } from '../tools/toolsRegistry';

interface ToolsDirectoryPageProps {
  onNavigate: (path: string) => void;
}

export const ToolsDirectoryPage: React.FC<ToolsDirectoryPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    applySEO({
      title: 'मुफ़्त ऑनलाइन टेक टूल्स और यूटिलिटीज | टेकवाणी (TechVani)',
      description: 'टेकवाणी के मुफ़्त ऑनलाइन टूल्स: वर्ड काउंटर, कैरेक्टर काउंटर, टेक्स्ट यूटिलिटीज और डेवलपर टूल्स। उपयोग में आसान और 100% मुफ़्त।',
      ogType: 'website',
      canonicalUrl: `${window.location.origin}/tools`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'ऑनलाइन टूल्स', url: '/tools' },
      ],
    });
  }, []);

  const registeredTools = getAllTools();

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#bb010d] transition-colors">
          मुख्य पृष्ठ
        </button>
        <span>/</span>
        <span className="text-gray-800 dark:text-gray-200 font-semibold">ऑनलाइन टेक टूल्स</span>
      </nav>

      {/* Directory Banner */}
      <div className="bg-[#ecf5fe] dark:bg-gray-800/60 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-gray-700/60 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1 bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider mb-2 shadow-sm">
            <span className="material-symbols-outlined text-[15px]">construction</span> टेकवाणी यूटिलिटी
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            मुफ़्त ऑनलाइन टेक टूल्स (Online Tools)
          </h1>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
            डेवलपर्स, ब्लॉगर्स, कंटेंट राइटर्स और छात्रों के लिए उपयोगी टूल्स का संग्रह।
          </p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {registeredTools.map((t) => (
          <div
            key={t.slug}
            className="bg-white dark:bg-[#131b22] rounded-2xl p-6 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col justify-between gap-5 transition-all hover:shadow-md hover:border-red-500/30"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-[26px]">{t.icon}</span>
                </div>
                <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${t.badgeColor || 'bg-emerald-500 text-white'}`}>
                  {t.badge || 'लाइव & मुफ़्त'}
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                {t.title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {t.description}
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
              <button
                type="button"
                onClick={() => onNavigate(`/tool/${t.slug}`)}
                className="w-full bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>टूल का उपयोग करें</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>

              {t.blogSlug && (
                <button
                  type="button"
                  onClick={() => onNavigate(`/article/${t.blogSlug}`)}
                  className="text-xs text-gray-600 dark:text-gray-400 hover:text-[#bb010d] font-semibold text-center flex items-center justify-center gap-1 py-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[14px]">menu_book</span>
                  गाइड ब्लॉग पढ़ें
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

