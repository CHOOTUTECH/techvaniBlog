// pages/index.tsx
import React, { useState, useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { Article } from '../src/types/api';
import { djangoApi } from '../src/services/djangoApi';
import { ModalContext, LanguageContext } from '../src/context/AppContext'; // 🔥 नया पाथ

interface HomePageProps {
  initialArticles: Article[];
  initialTrendingArticles: Article[];
}

export default function HomePage({ initialArticles, initialTrendingArticles }: HomePageProps) {
  const [articles] = useState<Article[]>(initialArticles);
  const [trendingArticles] = useState<Article[]>(initialTrendingArticles);
  const [programmingFilter, setProgrammingFilter] = useState('सभी');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  
  const { openCheatSheet } = useContext(ModalContext);
  const { language } = useContext(LanguageContext);

  const totalPages = Math.ceil(articles.length / pageSize) || 1;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const element = document.getElementById('latest-feed');
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Filter hero articles
  const mainHero = articles.find((a) => a.featuredOrder === 1 || a.isFeatured) || articles[0];
  const candidatesForSub = articles.filter((a) => a.id !== mainHero?.id);
  const subHero1 = candidatesForSub.find((a) => a.featuredOrder === 2) || candidatesForSub[0];
  const subHero2 = candidatesForSub.find((a) => a.featuredOrder === 3 && a.id !== subHero1?.id) || candidatesForSub.find((a) => a.id !== subHero1?.id) || candidatesForSub[1];

  const programmingArticles = articles
    .filter((a) => a.category?.slug === 'programming' && a.id !== mainHero?.id && a.id !== subHero1?.id && a.id !== subHero2?.id)
    .filter((a) => programmingFilter === 'सभी' || a.subCategory === programmingFilter)
    .slice(0, 3);

  const shortcutArticles = articles
    .filter((a) => (a.category?.slug === 'keyboard-shortcuts' || a.category?.slug === 'computer-tricks') && a.id !== mainHero?.id)
    .slice(0, 3);

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
    <>
      <Head>
        <title>टेकवाणी (TechVani) – हिंदी टेक मैगज़ीन, प्रोग्रामिंग, शॉर्टकट्स और गैजेट्स</title>
        <meta name="description" content="भारत का प्रमुख हिंदी टेक पोर्टल - प्रोग्रामिंग, कीबोर्ड शॉर्टकट्स, कंप्यूटर ट्रिक्स और गैजेट समीक्षा।" />
      </Head>

      <div className="flex flex-col w-full pb-16 pt-6">
        
        {/* 🚀 Hero Featured Section */}
        <section className="max-w-[1280px] mx-auto px-4 w-full mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {mainHero && (
              <Link href={`/article/${mainHero.slug}`} className="lg:col-span-8 group relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 flex flex-col justify-end min-h-[460px] lg:min-h-[520px] cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${mainHero.coverImage}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                <div className="relative z-10 p-6 md:p-8 flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase tracking-wider shadow-sm">{mainHero.category.name}</span>
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-medium">
                      {language === 'hi' ? 'संपादकीय पसंद' : 'Editor\'s Pick'}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-4xl text-white leading-tight font-extrabold tracking-tight group-hover:text-red-300 transition-colors">{mainHero.title}</h1>
                  <p className="text-sm md:text-base text-gray-300 line-clamp-2 max-w-2xl hidden sm:block">{mainHero.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 text-xs pt-2">
                    <span className="flex items-center gap-1 text-white font-semibold"><span className="material-symbols-outlined text-[16px]">account_circle</span> {mainHero.author.name}</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {mainHero.publishedAt}</span>
                  </div>
                </div>
              </Link>
            )}

            <div className="lg:col-span-4 flex flex-col gap-6">
              {subHero1 && (
                <Link href={`/article/${subHero1.slug}`} className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col justify-end min-h-[220px] lg:flex-1 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${subHero1.coverImage}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="relative z-10 p-5 flex flex-col items-start gap-2">
                    <span className="bg-[#e02924] text-white text-[11px] px-2.5 py-0.5 rounded font-bold uppercase shadow-sm">
                      {subHero1.category.name} {language === 'hi' ? 'गाइड' : 'Guide'}
                    </span>
                    <h2 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">{subHero1.title}</h2>
                  </div>
                </Link>
              )}
              {subHero2 && (
                <Link href={`/product/${subHero2.slug}`} className="group relative rounded-2xl overflow-hidden shadow-md bg-gray-900 flex flex-col justify-end min-h-[220px] lg:flex-1 cursor-pointer">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url('${subHero2.coverImage}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                  <div className="relative z-10 p-5 flex flex-col items-start gap-2">
                    <span className="bg-[#b02527] text-white text-[11px] px-2.5 py-0.5 rounded font-bold uppercase shadow-sm">
                      {language === 'hi' ? 'हार्डवेयर रिव्यू' : 'Hardware Review'}
                    </span>
                    <h2 className="text-base font-bold text-white leading-snug line-clamp-2 group-hover:text-red-300 transition-colors">{subHero2.title}</h2>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* 🚀 Main Body Grid */}
        <section className="max-w-[1280px] mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* 👈 Left Column: Primary Feeds */}
            <div id="main-feed" className="lg:col-span-8 flex flex-col gap-10">
              
              {/* Programming Corner */}
              <div className="flex flex-col">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-2 mb-2 sm:mb-0">
                    <span className="material-symbols-outlined text-[#bb010d] text-[28px]">terminal</span>
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'प्रोग्रामिंग और कोडिंग कॉर्नर' : 'Programming & Coding Corner'}
                    </h2>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {['सभी', 'Python', 'JavaScript', 'Web Dev'].map((tab) => (
                      <button key={tab} onClick={() => setProgrammingFilter(tab)} className={`text-xs px-3 py-1 rounded-lg font-bold transition-all ${programmingFilter === tab ? 'bg-[#bb010d] text-white shadow-sm' : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bb010d]'}`}>
                        {tab === 'सभी' && language === 'en' ? 'All' : tab}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {programmingArticles.map((article) => (
                    <Link href={`/article/${article.slug}`} key={article.id} className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col group">
                      <div className="relative h-44 w-full overflow-hidden">
                        <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                      <div className="p-4 flex flex-col flex-1 justify-between gap-3">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-[#bb010d] transition-colors">{article.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Shortcuts */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#bb010d] text-[28px]">keyboard</span>
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'कंप्यूटर शॉर्टकट्स और सुपर ट्रिक्स' : 'Computer Shortcuts & Super Tricks'}
                    </h2>
                  </div>
                  <Link href="/category/keyboard-shortcuts" className="text-xs font-bold text-[#bb010d] hover:underline flex items-center gap-1">
                    {language === 'hi' ? 'सभी देखें' : 'See All'} <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  {shortcutArticles.map((article) => (
                    <Link href={`/article/${article.slug}`} key={article.id} className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all p-4 flex flex-col sm:flex-row gap-5 items-center group">
                      <div className="w-full sm:w-56 h-40 shrink-0 rounded-xl overflow-hidden">
                        <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col flex-1 justify-between h-full gap-2 w-full">
                        <div className="space-y-1">
                          <span className="text-[#bb010d] text-xs font-bold uppercase">{article.category.name}</span>
                          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug">{article.title}</h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{article.excerpt}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Gadgets */}
              <div className="flex flex-col">
                <div className="flex items-center justify-between pb-3 mb-5 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#bb010d] text-[28px]">devices</span>
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'स्मार्ट टेक गैजेट्स और हार्डवेयर तुलना' : 'Smart Tech Gadgets & Hardware Comparison'}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {gadgetArticles.map((article) => (
                    <Link href={`/product/${article.slug}`} key={article.id} className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span className="absolute bottom-3 right-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur text-gray-900 dark:text-white text-xs px-2.5 py-0.5 rounded-lg font-extrabold shadow">
                          {language === 'hi' ? 'रेटिंग' : 'Rating'}: {article.rating}/10
                        </span>
                      </div>
                      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug">{article.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Latest Feed */}
              <div id="latest-feed" className="flex flex-col gap-6 pt-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-4 rounded-2xl border border-blue-100 dark:border-gray-700/50 gap-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#bb010d] text-[28px]">feed</span>
                    <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'ताज़ा प्रकाशित लेख' : 'Latest Articles'}
                    </h2>
                  </div>
                </div>
                <div className={`grid grid-cols-1 ${pageSize === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-3'} gap-5`}>
                  {articles.slice((page - 1) * pageSize, page * pageSize).map((article) => (
                    <Link href={article.rating ? `/product/${article.slug}` : `/article/${article.slug}`} key={article.id} className="bg-white dark:bg-[#131b22] rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800 transition-all flex flex-col group">
                      <div className="relative h-48 w-full overflow-hidden">
                        <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
                        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-[#bb010d] transition-colors leading-snug line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">{article.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Pagination Buttons */}
                <div className="flex items-center justify-center gap-2 pt-2">
                  <button type="button" disabled={page === 1} onClick={() => handlePageChange(Math.max(1, page - 1))} className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold disabled:opacity-40">
                    {language === 'hi' ? 'पिछला' : 'Prev'}
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button key={p} type="button" onClick={() => handlePageChange(p)} className={`w-9 h-9 rounded-xl text-xs font-bold ${page === p ? 'bg-[#bb010d] text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>{p}</button>
                  ))}
                  <button type="button" disabled={page === totalPages} onClick={() => handlePageChange(Math.min(totalPages, page + 1))} className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-bold disabled:opacity-40">
                    {language === 'hi' ? 'अगला' : 'Next'}
                  </button>
                </div>
              </div>
            </div>

            {/* 👉 Right Column: Sidebar */}
            <aside className="lg:col-span-4 w-full">
              <div className="sticky top-36 flex flex-col gap-6">
                
                {/* Trending */}
                <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 pb-3 mb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-[#bb010d] text-[22px]">local_fire_department</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'लोकप्रिय पोस्ट्स (Trending)' : 'Trending Posts'}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-3">
                    {trendingArticles.map((article, idx) => (
                      <Link href={`/article/${article.slug}`} key={article.id} className="flex items-center gap-3 group p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/70 transition-colors">
                        <span className="text-lg font-black text-[#bb010d] w-6 shrink-0 text-center font-mono">0{idx + 1}</span>
                        <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0">
                          <img src={article.coverImage} alt={article.imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-gray-800 dark:text-gray-200 truncate group-hover:text-[#bb010d] transition-colors">{article.title}</h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-[#ecf5fe] dark:bg-gray-800/60 rounded-2xl p-6 shadow-sm border border-blue-100 dark:border-gray-700/60 flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#bb010d] text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[24px]">mark_email_unread</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {language === 'hi' ? 'न्यूज़लेटर सब्सक्राइब करें!' : 'Subscribe to Newsletter!'}
                  </h3>
                  <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2.5 mt-1">
                    <input 
                      type="email" 
                      value={newsletterEmail} 
                      onChange={(e) => setNewsletterEmail(e.target.value)} 
                      placeholder={language === 'hi' ? "ईमेल दर्ज करें..." : "Enter email..."} 
                      required 
                      className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#bb010d] shadow-sm border border-gray-200 dark:border-gray-700" 
                    />
                    <button type="submit" className="w-full bg-[#141d23] hover:bg-[#bb010d] text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md">
                      {language === 'hi' ? 'सब्सक्राइब करें' : 'Subscribe'}
                    </button>
                  </form>
                  {newsletterMsg && (<p className={`text-xs ${newsletterMsg.ok ? 'text-emerald-600' : 'text-red-500'}`}>{newsletterMsg.text}</p>)}
                </div>

                {/* Tags */}
                <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 pb-2 mb-3 bg-[#ecf5fe] dark:bg-gray-800/60 p-3 rounded-xl">
                    <span className="material-symbols-outlined text-[#bb010d] text-[22px]">label</span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      {language === 'hi' ? 'लोकप्रिय टैग्स' : 'Popular Tags'}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: 'Python', slug: 'python' },
                      { name: 'JavaScript', slug: 'javascript' },
                      { name: 'Windows 11', slug: 'windows-11' },
                      { name: 'Excel', slug: 'excel-tricks' },
                      { name: 'VS Code', slug: 'vs-code' },
                      { name: 'Linux', slug: 'linux' },
                    ].map((tag) => (
                      <Link key={tag.slug} href={`/tag/${tag.slug}`} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#bb010d] hover:text-white px-3 py-1.5 rounded-lg transition-colors font-medium">#{tag.name}</Link>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}

// 🔥 सर्वर-साइड रेंडरिंग (SSR)
export const getServerSideProps: GetServerSideProps = async (context) => {
  const lang = context.req.cookies.techvani_lang || 'hi';

  try {
    const [res, trending] = await Promise.all([
      djangoApi.getArticles({ pageSize: 20, language: lang }),
      djangoApi.getTrendingArticles(5, lang),
    ]);
    
    return {
      props: {
        initialArticles: res.results || [],
        initialTrendingArticles: trending || [],
      },
    };
  } catch (error) {
    return {
      props: {
        initialArticles: [],
        initialTrendingArticles: [],
      },
    };
  }
};