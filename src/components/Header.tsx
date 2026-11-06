// src/components/Header.tsx
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { LanguageContext } from '../context/AppContext';
import { djangoApi } from '../services/djangoApi';
import { Category, Article } from '../types/api';

export const Header: React.FC = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [currentDate, setCurrentDate] = useState<string>('');
  const [categories, setCategories] = useState<Category[]>([]);
  const [trending, setTrending] = useState<Article[]>([]);

  // ✅ Real categories fetch
  useEffect(() => {
    djangoApi
      .getCategories()
      .then((cats) => setCategories(cats || []))
      .catch(() => setCategories([]));
  }, []);

  // ✅ Real trending fetch
  useEffect(() => {
    djangoApi
      .getTrendingArticles(4, language)
      .then((data) => setTrending(data || []))
      .catch(() => setTrending([]));
  }, [language]);

  // Date
  useEffect(() => {
    const today = new Date();
    setCurrentDate(
      language === 'hi'
        ? today.toLocaleDateString('hi-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        : today.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
    );
  }, [language]);

  // ✅ Real trending articles से links — अगर खाली हैं तो कुछ नहीं दिखेगा
  const trendingTopics = trending.map((a) => ({
    text: a.title,
    link: a.rating != null ? `/product/${a.slug}` : `/article/${a.slug}`,
  }));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6faff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-gray-200">
      {/* Tier 1: Date */}
      <div className="bg-[#141d23] text-[#e0e9f2] py-1.5 px-4 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <span className="flex items-center gap-1 text-[#ffb4aa]">
            <span className="material-symbols-outlined text-[14px]">calendar_today</span>
            {currentDate || '...'}
          </span>
          <div className="flex items-center gap-3">
            <Link href="/about" className="hover:text-red-400 transition-colors">
              {language === 'hi' ? 'हमारे बारे में' : 'About Us'}
            </Link>
            <Link href="/contact" className="hover:text-red-400 transition-colors">
              {language === 'hi' ? 'संपर्क' : 'Contact'}
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 2: Brand + Ticker */}
      <div className="bg-white py-3 px-4 border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col text-left group shrink-0">
            <span className="text-3xl font-extrabold tracking-tight text-[#bb010d] leading-none">
              टेक<span className="text-[#141d23]">वाणी</span>
            </span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase font-bold mt-1">
              Hindi Tech Magazine
            </span>
          </Link>

          {trendingTopics.length > 0 && (
            <div className="hidden lg:flex items-center flex-1 mx-8 overflow-hidden relative">
              <span className="bg-[#bb010d] text-white text-[11px] px-2.5 py-1 rounded font-bold uppercase tracking-wider shrink-0 z-10 mr-3 shadow-sm">
                {language === 'hi' ? 'ट्रेंडिंग' : 'TRENDING'}
              </span>

              <div className="overflow-hidden flex-1 relative">
                <div className="animate-marquee flex gap-8 w-max">
                  {trendingTopics.map((topic, idx) => (
                    <Link
                      key={`a-${idx}`}
                      href={topic.link}
                      className="text-sm font-medium text-gray-700 hover:text-[#bb010d] whitespace-nowrap transition-colors"
                    >
                      • {topic.text}
                    </Link>
                  ))}
                  {trendingTopics.map((topic, idx) => (
                    <Link
                      key={`b-${idx}`}
                      href={topic.link}
                      className="text-sm font-medium text-gray-700 hover:text-[#bb010d] whitespace-nowrap transition-colors"
                    >
                      • {topic.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
              {language === 'hi' ? 'English' : 'हिंदी'}
            </button>

            <Link href="/editorial-team" title="Editorial Team">
              <img
                alt="Editor"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-red-500/30 cursor-pointer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqWTnK78J57cA3pwd5P5LdLh8F9h4rmJvHKVLcd74gYLfIwO19L_GFdjQzG_CA4RhcXrex_xwxWVvanO9E_vgOJDO35mRbtADBom8MMtNCtF32plRqivyAoBrQSHRNfWounA1j6UdCqNOVGePsQnGc7hOMkOdLEsb37n6WE3cchoml3sIO0T96lBICb9iTVkpNTx7Ky1k_zmCPPcx1lSMiGyTRtXnglEJNMLoV_cKw-QXuTqJ9YSU"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 3: Categories — real API */}
      <div className="bg-[#141d23] text-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto py-1.5">
            {categories.length === 0 ? (
              <span className="text-gray-400 text-xs px-3 py-1.5">
                {language === 'hi' ? 'लोड हो रहा...' : 'Loading...'}
              </span>
            ) : (
              categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={cat.slug === 'home' ? '/' : `/category/${cat.slug}`}
                  className="px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap font-medium text-gray-200 hover:text-white hover:bg-white/10"
                >
                  {cat.name}
                </Link>
              ))
            )}
            <Link
              href="/tools"
              className="px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap font-medium text-gray-200 hover:text-white hover:bg-white/10"
            >
              {language === 'hi' ? 'ऑनलाइन टूल्स' : 'Online Tools'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};