import React, { useState, useEffect } from 'react';
import { Article } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { applySEO } from '../utils/seo';

interface ProductReviewPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ProductReviewPage: React.FC<ProductReviewPageProps> = ({ slug, onNavigate }) => {
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await djangoApi.getArticleBySlug(slug);
      if (data) {
        setArticle(data);

        // Apply Product SEO & Product + Review Schema
        applySEO({
          title: data.metaTitle || `${data.title} – विस्तृत समीक्षा & बेंचमार्क`,
          description: data.metaDescription || `${data.excerpt} जानिए कीमत, फीचर्स, पेशेवरों और कमियों का निष्पक्ष विश्लेषण। रेटिंग: ${data.rating || '9.0'}/10।`,
          ogType: 'product',
          ogImage: data.ogImage || data.coverImage,
          canonicalUrl: data.canonicalUrl || `${window.location.origin}/product/${data.slug}`,
          article: data,
          isProduct: true,
          breadcrumbs: [
            { name: 'मुख्य पृष्ठ', url: '/' },
            { name: 'गैजेट्स समीक्षा', url: '/category/gadgets' },
            { name: data.title, url: `/product/${data.slug}` },
          ],
        });
      }
    };
    fetchProduct();
  }, [slug]);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#bb010d] border-t-transparent mb-4"></div>
        <p className="text-gray-500">गैजेट समीक्षा लोड हो रही है...</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap">
        <button onClick={() => onNavigate('/')} className="hover:text-[#bb010d] transition-colors">
          मुख्य पृष्ठ
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/category/gadgets')} className="hover:text-[#bb010d] transition-colors">
          गैजेट्स समीक्षा
        </button>
        <span>/</span>
        <span className="text-gray-800 dark:text-gray-200 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header with Rating Badge */}
      <header className="space-y-4 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase">
              हार्डवेयर लैब टेस्ट
            </span>
            <span className="text-xs text-gray-500">{article.publishedAt}</span>
          </div>

          {/* Rating Display */}
          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 px-3 py-1.5 rounded-xl">
            <span className="material-symbols-outlined text-emerald-600 text-[20px]">verified</span>
            <span className="text-xs font-bold text-gray-700 dark:text-gray-300">टेकवाणी रेटिंग:</span>
            <span className="text-sm font-black text-emerald-600 dark:text-emerald-400">
              {article.rating || '9.0'} / 10
            </span>
          </div>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h1>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          {article.excerpt}
        </p>

        {/* Pricing & Quick Buy Action Bar */}
        <div className="bg-gradient-to-r from-gray-100 via-red-50 to-gray-50 dark:from-gray-800 dark:via-gray-800/80 dark:to-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">अनुमानित बाजार मूल्य</span>
            <span className="text-2xl font-black text-[#bb010d]">
              {article.productPrice || '₹4,999'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('सर्वोत्तम ऑनलाइन ऑफर और स्टोर लिंक खुल रहे हैं...')}
              className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
              सर्वोत्तम मूल्य देखें
            </button>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold hidden sm:inline">
              ✓ लैब परीक्षित &amp; सत्यापित
            </span>
          </div>
        </div>
      </header>

      {/* Main Image */}
      <div className="rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900">
        <img
          src={article.coverImage}
          alt={article.imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Pros & Cons Section */}
      {(article.pros || article.cons) && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {/* Pros */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 p-5 rounded-2xl">
            <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]">thumb_up</span>
              मुख्य खूबियां (Pros)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {article.pros?.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-[16px] shrink-0 mt-0.5">check_circle</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div className="bg-red-50/60 dark:bg-red-950/20 border border-red-200 dark:border-red-900/60 p-5 rounded-2xl">
            <h3 className="text-sm font-bold text-red-800 dark:text-red-400 mb-3 flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px]">thumb_down</span>
              कमियां (Cons)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
              {article.cons?.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-red-500 text-[16px] shrink-0 mt-0.5">cancel</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Specifications Table */}
      {article.productSpecs && (
        <section className="bg-white dark:bg-[#131b22] rounded-2xl p-6 mb-8 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d]">tune</span>
            विस्तृत तकनीकी स्पेसिफिकेशन्स
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <tbody>
                {Object.entries(article.productSpecs).map(([key, val], idx) => (
                  <tr
                    key={key}
                    className={`border-b border-gray-100 dark:border-gray-800 ${
                      idx % 2 === 0 ? 'bg-gray-50/50 dark:bg-gray-800/20' : ''
                    }`}
                  >
                    <td className="py-2.5 px-4 font-bold text-gray-600 dark:text-gray-400 w-1/3">
                      {key}
                    </td>
                    <td className="py-2.5 px-4 text-gray-900 dark:text-gray-100 font-medium">
                      {val}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Detailed review body */}
      <div className="prose dark:prose-invert max-w-none text-gray-800 dark:text-gray-200 leading-relaxed space-y-5 text-sm sm:text-base">
        <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
      </div>

      {/* Editorial Verdict Box */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-[#141d23] text-white shadow-xl">
        <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
          <span className="material-symbols-outlined text-[18px]">gavel</span>
          संपादक का अंतिम फैसला (TechVani Verdict)
        </div>
        <h4 className="text-xl font-bold mb-2">क्या आपको यह खरीदना चाहिए?</h4>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
          यदि आप लंबे समय तक कोडिंग, टाइपिंग या मल्टीटास्किंग करते हैं, तो यह डिवाइस आपकी कार्यक्षमता को काफी हद तक बढ़ाता है। इसकी प्रीमियम बिल्ड क्वालिटी और विश्वसनीयता इसे अपने वर्ग में सर्वोत्तम बनाती है।
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('/')}
            className="text-xs font-bold text-gray-300 hover:text-white underline"
          >
            ← मुख्य पृष्ठ पर वापस जाएं
          </button>
        </div>
      </div>
    </article>
  );
};
