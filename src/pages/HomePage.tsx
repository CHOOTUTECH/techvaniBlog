import React, { useState, useEffect } from 'react';
import { Article } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { applySEO } from '../utils/seo';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenCheatSheet: () => void;
  onOpenVideoTutorial: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenCheatSheet,
  onOpenVideoTutorial,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [trendingArticles, setTrendingArticles] = useState<Article[]>([]);
  const [programmingFilter, setProgrammingFilter] = useState('सभी');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const totalPages = Math.ceil(articles.length / pageSize) || 1;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const element = document.getElementById('main-feed');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Dynamic SEO for Home
    applySEO({
      title: 'टेकवाणी (TechVani) – हिंदी टेक मैगज़ीन, प्रोग्रामिंग, शॉर्टकट्स और गैजेट्स',
      description: 'भारत का प्रमुख हिंदी टेक पोर्टल - प्रोग्रामिंग, कीबोर्ड शॉर्टकट्स, कंप्यूटर ट्रिक्स और गैजेट समीक्षा। दैनिक टेक गाइड और प्रामाणिक ज्ञान।',
      ogType: 'website',
      canonicalUrl: window.location.origin + '/',
      breadcrumbs: [{ name: 'मुख्य पृष्ठ', url: '/' }],
    });

    const fetchData = async () => {
      const res = await djangoApi.getArticles({ pageSize: 20 });
      setArticles(res.results);
      const trending = await djangoApi.getTrendingArticles(5);
      setTrendingArticles(trending);
    };
    fetchData();
  }, []);

  // Filter hero articles dynamically (adapts to any IDs from real Django/Supabase database)
  const mainHero = articles.find((a) => a.featuredOrder === 1 || a.isFeatured) || articles[0];
  const candidatesForSub = articles.filter((a) => a.id !== mainHero?.id);
  const subHero1 = candidatesForSub.find((a) => a.featuredOrder === 2) || candidatesForSub[0];
  const subHero2 = candidatesForSub.find((a) => a.featuredOrder === 3 && a.id !== subHero1?.id) || candidatesForSub.find((a) => a.id !== subHero1?.id) || candidatesForSub[1];

  // Programming articles filtered by subtab
  const programmingArticles = articles
    .filter((a) => a.category?.slug === 'programming' && a.id !== mainHero?.id && a.id !== subHero1?.id && a.id !== subHero2?.id)
    .filter((a) => programmingFilter === 'सभी' || a.subCategory === programmingFilter)
    .slice(0, 3);

  // Computer shortcuts & super tricks articles
  const shortcutArticles = articles
    .filter((a) => (a.category?.slug === 'keyboard-shortcuts' || a.category?.slug === 'computer-tricks') && a.id !== mainHero?.id)
    .slice(0, 3);

  // Hardware gadget reviews
  const gadgetArticles = articles
    .filter((a) => a.category?.slug === 'gadgets' && a.id !== mainHero?.id)
    .slice(0, 2);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    const res = await djangoApi.subscribeNewsletter(newsletterEmail);
    setNewsletterMsg({ text: res.message, ok: res.success });
    if (res.success) setNewsletterEmail('');
  };

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Top Trending Ticker & Announcement Bar */}
      <div className="max-w-[1280px] mx-auto px-4 w-full mb-6">
        <div className="bg-[#ecf5fe] dark:bg-gray-800/80 px-4 py-2.5 rounded-xl shadow-sm border border-blue-100 dark:border-gray-700/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 bg-[#bb010d] text-white text-xs px-2.5 py-1 rounded font-bold uppercase tracking-wider shrink-0 shadow-sm">
              <span className="material-symbols-outlined text-[14px]">bolt</span> ताज़ा अपडेट
            </span>
            <p className="text-xs md:text-sm text-gray-800 dark:text-gray-200 truncate font-medium">
              AI कोडिंग टूल्स 2025: डेवलपर प्रोडक्टिविटी में 40% की भारी बढ़ोतरी, जानिए टॉप 5 टूल्स
            </p>
          </div>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 shrink-0 text-xs font-semibold">
            <span className="flex items-center gap-1 text-[#bb010d] font-bold">
              <span className="material-symbols-outlined text-[16px]">trending_up</span> 14.8k पाठक आज जुड़े
            </span>
          </div>
        </div>
      </div>

      {/* Hero Featured Section: 1 Large Hero + 2 Adjacent Columns (Magazine Lead) */}
      <section className="max-w-[1280px] mx-auto px-4 w-full mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Lead Article (8 Cols) */}
          {mainHero && (
            <article
              onClick={() => onNavigate(`/article/${mainHero.slug}`)}
              className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 flex flex-col justify-end min-h-[460px] lg:min-h-[520px] cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{ backgroundImage: `url('${mainHero.coverImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              <div className="relative z-10 p-6 md:p-8 flex flex-col items-start gap-3">
                <div className="flex items-center gap-2">
                  <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider shadow-sm">
                    {mainHero.category.name}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-medium">
                    संपादकीय पसंद
                  </span>
                </div>
                <h1 className="text-2xl md:text-4xl text-white leading-tight font-extrabold tracking-tight group-hover:text-red-300 transition-colors">
                  {mainHero.title}
                </h1>
                <p className="text-sm md:text-base text-gray-300 line-clamp-2 max-w-2xl hidden sm:block">
                  {mainHero.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs pt-2">
                  <span className="flex items-center gap-1 text-white font-semibold">
                    <span className="material-symbols-outlined text-[16px]">account_circle</span> {mainHero.author.name}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span> {mainHero.publishedAt}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span> {mainHero.readingTimeMinutes} मिनट पढ़ें
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">chat_bubble_outline</span> {mainHero.commentsCount} टिप्पणियां
                  </span>
                </div>
              </div>
            </article>
          )}

          {/* Side Stacked Hero Cards (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {subHero1 && (
              <article
                onClick={() => onNavigate(`/article/${subHero1.slug}`)}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col justify-end min-h-[220px] lg:flex-1 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${subHero1.coverImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative z-10 p-5 flex flex-col items-start gap-2">
                  <span className="bg-[#e02924] text-white text-[11px] px-2.5 py-0.5 rounded font-bold uppercase shadow-sm">
                    {subHero1.category.name} गाइड
                  </span>
                  <h2 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">
                    {subHero1.title}
                  </h2>
                  <div className="flex items-center gap-3 text-gray-300 text-xs">
                    <span>{subHero1.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">comment</span> {subHero1.commentsCount}
                    </span>
                  </div>
                </div>
              </article>
            )}

            {subHero2 && (
              <article
                onClick={() => onNavigate(`/product/${subHero2.slug}`)}
                className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col justify-end min-h-[220px] lg:flex-1 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${subHero2.coverImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                <div className="relative z-10 p-5 flex flex-col items-start gap-2">
                  <span className="bg-[#b02527] text-white text-[11px] px-2.5 py-0.5 rounded font-bold uppercase shadow-sm">
                    हार्डवेयर रिव्यू
                  </span>
                  <h2 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">
                    {subHero2.title}
                  </h2>
                  <div className="flex items-center gap-3 text-gray-300 text-xs">
                    <span>{subHero2.publishedAt}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">comment</span> {subHero2.commentsCount}
                    </span>
                  </div>
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* Main Body Grid: 68% Content Feeds + 32% Sticky Sidebar */}
      <section className="max-w-[1280px] mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Primary Feeds (8 Cols) */}
          <div id="main-feed" className="lg:col-span-8 flex flex-col gap-10">
            {page === 1 && (
              <>
                {/* SECTION 1: Programming & Coding Corner (Grid View) */}
            <div className="flex flex-col">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2 mb-2 sm:mb-0">
                  <span className="material-symbols-outlined text-[#bb010d] text-[28px]">terminal</span>
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                    प्रोग्रामिंग और कोडिंग कॉर्नर
                  </h2>
                </div>
                {/* Subtabs */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {['सभी', 'Python', 'JavaScript', 'Web Dev'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setProgrammingFilter(tab)}
                      className={`text-xs px-3 py-1 rounded-lg font-bold transition-all ${
                        programmingFilter === tab
                          ? 'bg-[#bb010d] text-white shadow-sm'
                          : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bb010d]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3-Column Coding Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {programmingArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => onNavigate(`/article/${article.slug}`)}
                    className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col cursor-pointer group"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 left-2.5 bg-[#bb010d] text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase shadow">
                        {article.subCategory || 'टूलकिट'}
                      </span>
                    </div>
                    <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                      <div className="space-y-1.5">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-[#bb010d] transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-xs pt-2 border-t border-gray-100 dark:border-gray-800">
                        <span>{article.publishedAt}</span>
                        <span className="flex items-center gap-0.5 text-[#bb010d] font-bold">
                          पढ़ें <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* SECTION 2: Computer Shortcuts & Super Tricks (Horizontal Feed List) */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#bb010d] text-[28px]">keyboard</span>
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                    कंप्यूटर शॉर्टकट्स और सुपर ट्रिक्स
                  </h2>
                </div>
                <button
                  onClick={() => onNavigate('/category/keyboard-shortcuts')}
                  className="text-xs font-bold text-[#bb010d] hover:underline flex items-center gap-1"
                >
                  सभी ट्रिक्स देखें <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>

              {/* Feed List (3 Horizontal Rows) */}
              <div className="flex flex-col gap-4">
                {shortcutArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => onNavigate(`/article/${article.slug}`)}
                    className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all p-4 flex flex-col sm:flex-row gap-5 items-center cursor-pointer group"
                  >
                    <div className="w-full sm:w-56 h-40 shrink-0 rounded-xl overflow-hidden relative">
                      <img
                        src={article.coverImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur">
                        {article.tags[0]?.name || 'शॉर्टकट्स'}
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 justify-between h-full gap-2 w-full">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span className="text-[#bb010d] font-bold uppercase">{article.category.name}</span>
                          <span>•</span>
                          <span>{article.publishedAt}</span>
                          <span>•</span>
                          <span>{article.readingTimeMinutes} मिनट अध्ययन</span>
                        </div>
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>

                      <div className="pt-2 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {article.shortcuts?.slice(0, 2).map((s) => (
                            <span
                              key={s.key}
                              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-[11px] font-mono font-bold px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700"
                            >
                              {s.key}
                            </span>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs px-3.5 py-1.5 rounded-lg font-bold shadow-sm transition-colors"
                        >
                          पूरा पढ़ें
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* SECTION 3: Video / Interactive Tutorial Banner (Wide Media Feature) */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#141d23] text-white min-h-[300px] flex items-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmPzrlAUiG9ZVqrh8oGAOW6-woIw2-JfVQ-vKXrCPVZldMLc3aT5hc6AzZYeJauiyFT4ko0xlYNUS4gHxThphgKygR-pIH7831qQsre1GU_ekXSm54K_UwUK3-uUrBu5YKEJkB2bIVdYguSJkYyBwifrqHJm1tEg0Oen8TwWWddXqByrYy-_8p2QSQXCB8XA0QX0K_OX0hkHddY9UWjRgQl600p2TsR_1rjm-WE6nKr7J_wXI96wZe')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141d23] via-[#141d23]/85 to-transparent" />
              <div className="relative z-10 p-6 md:p-10 max-w-xl flex flex-col items-start gap-4">
                <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[16px]">play_circle</span> वीडियो ट्यूटोरियल
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  पायथन क्रैश कोर्स 2025: सिर्फ 1 घंटे में पूरे बेसिक्स समझें
                </h2>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  वेरिएबल्स, लूप्स, फंक्शन्स और ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग को आसान हिंदी में व्यावहारिक उदाहरणों के साथ लाइव कोड करके समझें।
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenVideoTutorial}
                    className="bg-[#bb010d] hover:bg-[#e02924] text-white text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">smart_display</span> अभी देखना शुरू करें
                  </button>
                  <span className="text-gray-400 text-xs">
                    ⏱️ 58 मिनट • फ्री रिसोर्स कोड
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 4: Latest Tech Reviews & Hardware (2-Grid Comparison) */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#bb010d] text-[28px]">devices</span>
                  <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                    स्मार्ट टेक गैजेट्स और हार्डवेयर तुलना
                  </h2>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">सच्ची टेस्टिंग और बेंचमार्क</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {gadgetArticles.map((article) => (
                  <article
                    key={article.id}
                    onClick={() => onNavigate(`/product/${article.slug}`)}
                    className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col cursor-pointer group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-[#bb010d] text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase shadow">
                        गैजेट मुकाबला
                      </span>
                      <span className="absolute bottom-3 right-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur text-gray-900 dark:text-white text-xs px-2.5 py-0.5 rounded-lg font-extrabold shadow">
                        रेटिंग: {article.rating}/10
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                        <span>संपादक: {article.author.name}</span>
                        <span className="text-[#bb010d] font-bold flex items-center gap-0.5 group-hover:underline">
                          समीक्षा पढ़ें <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </>
        )}

            {/* SECTION 4: Latest Articles Feed with Pagination (2 or 3 articles per page) */}
            <div id="main-feed" className="flex flex-col gap-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50 gap-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#bb010d] text-[28px]">feed</span>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
                      ताज़ा प्रकाशित लेख (Latest Feed)
                    </h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      पेज {page} / {totalPages} (दिखाए जा रहे हैं {Math.min(pageSize, articles.slice((page - 1) * pageSize, page * pageSize).length)} लेख, कुल {articles.length})
                    </p>
                  </div>
                </div>

                {/* Per-Page Selector (2 or 3 articles) */}
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs text-gray-500 font-semibold">प्रति पेज:</span>
                  <div className="inline-flex bg-white dark:bg-gray-700 p-1 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                    <button
                      type="button"
                      onClick={() => { setPageSize(2); setPage(1); }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        pageSize === 2
                          ? 'bg-[#bb010d] text-white shadow-sm'
                          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      2 लेख
                    </button>
                    <button
                      type="button"
                      onClick={() => { setPageSize(3); setPage(1); }}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        pageSize === 3
                          ? 'bg-[#bb010d] text-white shadow-sm'
                          : 'text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      3 लेख
                    </button>
                  </div>
                </div>
              </div>

              {/* Feed Grid (2 or 3 columns based on selection) */}
              <div className={`grid grid-cols-1 ${pageSize === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3'} gap-5`}>
                {articles.slice((page - 1) * pageSize, page * pageSize).map((article) => (
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
                      <span className="absolute top-3 left-3 bg-[#bb010d] text-white text-[10px] px-2.5 py-0.5 rounded font-bold uppercase shadow">
                        {article.category.name}
                      </span>
                      {article.rating && (
                        <span className="absolute bottom-3 right-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur text-gray-900 dark:text-white text-xs px-2.5 py-0.5 rounded-lg font-extrabold shadow">
                          ★ {article.rating}/10
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="pt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800">
                        <span>{article.author.name} • {article.publishedAt}</span>
                        <span className="text-[#bb010d] font-bold flex items-center gap-0.5 group-hover:underline">
                          पढ़ें <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Clean Pagination Bar */}
              <div className="flex items-center justify-center gap-2 pt-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => handlePageChange(Math.max(1, page - 1))}
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer shadow-sm"
                  title="पिछला पेज"
                >
                  <span className="material-symbols-outlined text-[16px]">chevron_left</span> पिछला
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handlePageChange(p)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      page === p
                        ? 'bg-[#bb010d] text-white shadow-md scale-105 ring-2 ring-red-500/20'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {p}
                  </button>
                ))}

                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
                  className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer shadow-sm"
                  title="अगला पेज"
                >
                  अगला <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </button>
              </div>
            </div>

            {/* App Download Callout Banner */}
            <div className="bg-gradient-to-r from-gray-100 via-blue-50 to-gray-50 dark:from-gray-800 dark:via-gray-800/80 dark:to-gray-900 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#bb010d] text-white flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined text-[36px]">install_mobile</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                    टेकवाणी मोबाइल ऐप अभी डाउनलोड करें
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ऑफ़लाइन ट्यूटोरियल, तुरंत कीबोर्ड शॉर्टकट चीट-शीट्स और दैनिक टेक क्विज़ कभी भी, कहीं भी।
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => alert('टेकवाणी iOS ऐप जल्द आ रहा है!')}
                  className="bg-[#141d23] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-black transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[24px]">phone_iphone</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-400 leading-none">डाउनलोड करें</span>
                    <span className="text-xs font-bold leading-tight">App Store</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => alert('टेकवाणी Android ऐप डाउनलोड हो रहा है (APK)...')}
                  className="bg-[#141d23] text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-black transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[24px]">android</span>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] text-gray-400 leading-none">प्राप्त करें</span>
                    <span className="text-xs font-bold leading-tight">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Magazine Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 flex flex-col gap-6 w-full">
            {/* WIDGET 1: Sponsored Product Promo Banner */}
            <div className="relative bg-[#141d23] rounded-2xl overflow-hidden shadow-lg p-6 text-white flex flex-col items-center text-center border border-gray-800">
              <span className="absolute top-3 right-3 bg-[#bb010d] text-white text-[10px] px-2.5 py-0.5 rounded-full font-extrabold shadow">
                50% छूट
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-2">
                एक्सक्लूसिव टेक डील्स
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                टॉप कोडिंग लैपटॉप्स &amp; ऐक्सेसरीज़
              </h3>
              <div className="w-full h-40 my-2 relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmmx46k8GW82-KCR0pVNJpK5MSeQc1U3v5yoSvtyoFek5oCouSkjI2c2zy3m5h9VQ8zhSS8eqApkzYTW1tXHfSuuesNjxeaveUEAf56FDpxQ4uhTq2dEMpFqlxGsXvqhxFD6d-Q4aq1P4HZrbXP4xJTw8EjB7gcFdjb2di7qtZXgILTSPmr26QyqewxDvhmRpaJYqV-y-6AmdNtXhqWBbd23ct7xE-XpUuYmuvw3-r-K3GcbdnsSFu"
                  alt="Laptop Accessories Deals"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                इंटेल Core i7, 32GB रैम और तेज़ SSD के साथ भारी कंपाइलेशन के लिए सर्वोत्तम मशीनें।
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/product/m3-chipset-laptops-coding-ai-benchmark-review')}
                className="w-full bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
              >
                अभी डील देखें
              </button>
            </div>

            {/* WIDGET 2: Popular & Trending Posts (Numbered 01 to 05) */}
            <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 pb-3 mb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#bb010d] text-[22px]">local_fire_department</span>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  लोकप्रिय पोस्ट्स (Trending)
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {trendingArticles.map((article, idx) => (
                  <article
                    key={article.id}
                    onClick={() => onNavigate(`/article/${article.slug}`)}
                    className="flex items-center gap-3 group cursor-pointer p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors"
                  >
                    <span className="text-lg font-black text-[#bb010d] w-6 shrink-0 text-center font-mono">
                      0{idx + 1}
                    </span>
                    <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={article.coverImage}
                        alt={article.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[10px] text-[#bb010d] font-bold uppercase truncate">
                        {article.category.name}
                      </span>
                      <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-[#bb010d] transition-colors">
                        {article.title}
                      </h4>
                      <span className="text-[11px] text-gray-400">{article.publishedAt}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* WIDGET 3: Sidebar Newsletter Subscribe */}
            <div className="bg-[#ecf5fe] dark:bg-gray-800/60 rounded-2xl p-6 shadow-sm border border-blue-100 dark:border-gray-700/60 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#bb010d] text-white flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 dark:text-white">
                हमारा न्यूज़लेटर सब्सक्राइब करें!
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                हर रविवार को सबसे ताज़ा टेक लेख, गुप्त शॉर्टकट्स और ट्यूटोरियल्स मुफ्त प्राप्त करें।
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2.5 mt-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="ईमेल दर्ज करें..."
                  required
                  className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#bb010d] shadow-sm border border-gray-200 dark:border-gray-700"
                />
                <button
                  type="submit"
                  className="w-full bg-[#141d23] hover:bg-[#bb010d] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  सब्सक्राइब करें
                </button>
              </form>
              {newsletterMsg && (
                <p className={`text-xs ${newsletterMsg.ok ? 'text-emerald-600' : 'text-red-500'}`}>
                  {newsletterMsg.text}
                </p>
              )}
              <span className="text-[10px] text-gray-500 text-center">
                कोई स्पैम नहीं। कभी भी अनसब्सक्राइब करें।
              </span>
            </div>

            {/* WIDGET 4: Downloadable Cheat Sheet Promo */}
            <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800 flex flex-col gap-3">
              <div className="flex items-center gap-2 pb-2 mb-2 bg-[#ecf5fe] dark:bg-gray-800/60 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#bb010d] text-[22px]">download_for_offline</span>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  मुफ़्त चीट-शीट डाउनलोड
                </h3>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM9_qt-mKq4GFrtYTB_ysINuwfIrPe8GUvwfcowagJzgLbHr0AThmHg2tcdKSgSi5D8Y7aG2f7xml2-5KNTJlUtWclAc_9Vuw5Ef-4muQpvc-D_S9UUziv9WLpLsvuBlNGocufTJfnwjjwhS2-02EtWAJHRbFciEzFHpEedqoEtUSgNyoeRBIDZpHDODGbIHKfCE9nalaFVH5GHABLb559Dt0sfz5uPCG_UW9HqHnwuXFf8BcPvRWs"
                  alt="Printed Cheat Sheet PDF"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white">
                    विंडोज + मैक 100+ शॉर्टकट्स PDF
                  </span>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                प्रिंट करने योग्य 2-पेज की रंगीन PDF शीट, जिसमें एक्सेल, वर्ड, वीएस कोड और विंडोज शॉर्टकट्स शामिल हैं।
              </p>
              <button
                type="button"
                onClick={onOpenCheatSheet}
                className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-800 dark:text-gray-200 text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span> फ्री PDF डाउनलोड करें
              </button>
            </div>

            {/* WIDGET 5: Popular Tags Cloud */}
            <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2 pb-2 mb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-3 rounded-xl">
                <span className="material-symbols-outlined text-[#bb010d] text-[22px]">label</span>
                <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                  लोकप्रिय टैग्स (Trending Tags)
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'JavaScript',
                  'Windows11',
                  'ExcelTricks',
                  'MacBookM3',
                  'VSCode',
                  'AIटूल्स',
                  'CyberSecurity',
                  'React19',
                  'GitHub',
                  'Linux',
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => onNavigate(`/tag/${tag.toLowerCase()}`)}
                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#bb010d] hover:text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
