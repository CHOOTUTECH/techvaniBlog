// src/components/Header.tsx
import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { mockCategories } from '../data/mockDjangoData';
import { LanguageContext } from '../context/AppContext';
import { Article } from '../types/api';

interface HeaderProps {
  isDark: boolean;
  onToggleDark: () => void;
  onOpenSearch: () => void;
  trending?: Article[];
}

export const Header: React.FC<HeaderProps> = ({
  isDark,
  onToggleDark,
  onOpenSearch,
  trending = [],
}) => {
  const router = useRouter();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [currentDate, setCurrentDate] = useState<string>('');

  // ✅ API से आए trending articles use करो
  // अगर खाली हैं, तो fallback static links
  const trendingTopics =
    trending.length > 0
      ? trending.slice(0, 4).map((a) => ({
          text: a.title,
          link: a.rating != null ? `/product/${a.slug}` : `/article/${a.slug}`,
        }))
      : [
          {
            text:
              language === 'hi'
                ? 'कंप्यूटर प्रोग्रामिंग क्या है?'
                : 'What is Computer Programming?',
            link: '/article/computer-programming-kya-hai',
          },
          {
            text:
              language === 'hi'
                ? 'Windows 11 के 25 कीबोर्ड शॉर्टकट्स'
                : '25 Windows 11 Keyboard Shortcuts',
            link: '/article/windows-11-25-useful-keyboard-shortcuts',
          },
          {
            text:
              language === 'hi'
                ? 'Git और GitHub कैसे काम करते हैं'
                : 'How Git and GitHub Work',
            link: '/article/git-and-github-explained-beginners-guide',
          },
          {
            text:
              language === 'hi'
                ? 'पायथन 2025 में स्क्रैच से सीखें'
                : 'Learn Python from Scratch 2025',
            link: '/article/python-learn-from-scratch-2025-guide',
          },
        ];

  useEffect(() => {
    const updateDate = () => {
      const today = new Date();
      if (language === 'hi') {
        setCurrentDate(
          today.toLocaleDateString('hi-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        );
      } else {
        setCurrentDate(
          today.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
        );
      }
    };
    updateDate();
  }, [language]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6faff]/95 dark:bg-[#10171d]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-gray-200 dark:border-gray-800 transition-colors">
      {/* Tier 1: Date bar */}
      <div className="bg-[#141d23] text-[#e0e9f2] py-1.5 px-4 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1 shrink-0 text-[#ffb4aa]">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              {currentDate || (language === 'hi' ? 'तारीख लोड हो रही है...' : 'Loading date...')}
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-3 text-xs">
              <Link href="/about" className="hover:text-red-400 transition-colors">
                {language === 'hi' ? 'हमारे बारे में' : 'About Us'}
              </Link>
              <Link href="/contact" className="hover:text-red-400 transition-colors">
                {language === 'hi' ? 'संपर्क' : 'Contact'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Brand + Ticker */}
      <div className="bg-white dark:bg-[#131b22] py-3 px-4 border-b border-gray-100 dark:border-gray-800/60">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex flex-col text-left group shrink-0">
            <span className="text-3xl font-extrabold tracking-tight text-[#bb010d] leading-none group-hover:opacity-90 transition-opacity">
              टेक<span className="text-[#141d23] dark:text-white">वाणी</span>
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase font-bold mt-1">
              Hindi Tech Magazine
            </span>
          </Link>

          <div className="hidden lg:flex items-center flex-1 mx-8 overflow-hidden relative">
            <span className="bg-[#bb010d] text-white text-[11px] px-2.5 py-1 rounded font-bold uppercase tracking-wider shrink-0 z-10 mr-3 shadow-sm">
              {language === 'hi' ? 'ट्रेंडिंग' : 'TRENDING'}
            </span>

            <div className="overflow-hidden flex-1 relative">
              <div className="animate-marquee">
                <div className="flex gap-8 pr-8">
                  {trendingTopics.map((topic, idx) => (
                    <Link
                      key={`t1-${idx}`}
                      href={topic.link}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#bb010d] transition-colors"
                    >
                      • {topic.text}
                    </Link>
                  ))}
                </div>
                <div className="flex gap-8 pr-8">
                  {trendingTopics.map((topic, idx) => (
                    <Link
                      key={`t2-${idx}`}
                      href={topic.link}
                      className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#bb010d] transition-colors"
                    >
                      • {topic.text}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-bold"
            >
              <span className="material-symbols-outlined text-[18px]">language</span>
              {language === 'hi' ? 'English' : 'हिंदी'}
            </button>

            <Link href="/editorial-team" title="Editorial Team">
              <img
                alt="Editor"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-red-500/30 cursor-pointer hover:ring-red-500 transition-all"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqWTnK78J57cA3pwd5P5LdLh8F9h4rmJvHKVLcd74gYLfIwO19L_GFdjQzG_CA4RhcXrex_xwxWVvanO9E_vgOJDO35mRbtADBom8MMtNCtF32plRqivyAoBrQSHRNfWounA1j6UdCqNOVGePsQnGc7hOMkOdLEsb37n6WE3cchoml3sIO0T96lBICb9iTVkpNTx7Ky1k_zmCPPcx1lSMiGyTRtXnglEJNMLoV_cKw-QXuTqJ9YSU"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 3: Nav + buttons */}
      <div className="bg-[#141d23] text-white">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center gap-1 overflow-x-auto py-1.5 scrollbar-none">
            {mockCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.slug === 'home' ? '/' : `/category/${cat.slug}`}
                className="px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap transition-all font-medium text-gray-200 hover:text-white hover:bg-white/10"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/tools"
              className="px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap transition-all font-medium text-gray-200 hover:text-white hover:bg-white/10"
            >
              {language === 'hi' ? 'ऑनलाइन टूल्स' : 'Online Tools'}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};