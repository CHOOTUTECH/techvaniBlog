import React, { useEffect } from 'react';
import { getToolBySlug } from '../tools/toolsRegistry';
import { applySEO } from '../utils/seo';

interface ToolViewerPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ToolViewerPage: React.FC<ToolViewerPageProps> = ({ slug, onNavigate }) => {
  const tool = getToolBySlug(slug);

  useEffect(() => {
    if (tool) {
      applySEO({
        title: `${tool.title} | टेकवाणी (TechVani)`,
        description: tool.description,
        ogType: 'website',
        canonicalUrl: `${window.location.origin}/tool/${tool.slug}`,
        breadcrumbs: [
          { name: 'मुख्य पृष्ठ', url: '/' },
          { name: 'ऑनलाइन टूल्स', url: '/tools' },
          { name: tool.shortTitle, url: `/tool/${tool.slug}` },
        ],
      });
    }
  }, [tool]);

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#bb010d] flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[36px]">error</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          टूल उपलब्ध नहीं है
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          यह टूल मौजूद नहीं है या इसका पता बदल दिया गया है।
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/tools')}
          className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
        >
          सभी टूल्स डायरेक्टरी देखें ➔
        </button>
      </div>
    );
  }

  const ToolComponent = tool.component;

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#bb010d] transition-colors">
          मुख्य पृष्ठ
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/tools')} className="hover:text-[#bb010d] transition-colors">
          ऑनलाइन टूल्स
        </button>
        <span>/</span>
        <span className="text-gray-800 dark:text-gray-200 font-semibold">{tool.shortTitle}</span>
      </nav>

      {/* Header Banner */}
      <div className="bg-[#ecf5fe] dark:bg-gray-800/60 p-6 md:p-8 rounded-2xl border border-blue-100 dark:border-gray-700/60 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider mb-2 shadow-sm">
            <span className="material-symbols-outlined text-[15px]">{tool.icon}</span> मुफ़्त टेक टूल
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white">
            {tool.title}
          </h1>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-2xl leading-relaxed">
            {tool.description}
          </p>
        </div>

        {/* Link / CTA to Related Blog Article (if any) */}
        {tool.blogSlug && (
          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm shrink-0 flex flex-col gap-2 max-w-xs">
            <span className="text-[11px] font-bold text-[#bb010d] uppercase flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">menu_book</span> संबंधित ब्लॉग गाइड
            </span>
            <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
              इस टूल का पूरा उपयोग और सुरक्षा नियम हमारे गाइड ब्लॉग में पढ़ें।
            </p>
            <button
              type="button"
              onClick={() => onNavigate(`/article/${tool.blogSlug}`)}
              className="w-full bg-[#141d23] hover:bg-[#bb010d] text-white text-xs font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>गाइड लेख पढ़ें</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* Render Dynamic Tool Component */}
      <ToolComponent onNavigate={onNavigate} tool={tool} />
    </div>
  );
};
