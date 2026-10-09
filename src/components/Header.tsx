import React, { useState } from 'react';
import { mockCategories } from '../data/mockDjangoData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isDark: boolean;
  onToggleDark: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPath,
  onNavigate,
  isDark,
  onToggleDark,
  onOpenSearch,
}) => {
  const [copiedToast, setCopiedToast] = useState(false);

  const handleShareClick = () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: 'टेकवाणी', url: window.location.href }).catch(() => { });
    } else if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 2000);
    }
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f6faff]/95 dark:bg-[#10171d]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-gray-200 dark:border-gray-800 transition-colors">
      {/* Top Tier 1: Dark Ticker Bar */}
      <div className="bg-[#141d23] text-[#e0e9f2] py-1.5 px-4 text-xs font-medium">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="flex items-center gap-1 shrink-0 text-[#ffb4aa]">
              <span className="material-symbols-outlined text-[14px]">calendar_today</span>
              गुरुवार, 24 अक्टूबर 2024
            </span>
            <span className="hidden md:inline-block text-gray-500">|</span>
            <div className="hidden md:flex items-center gap-2 overflow-hidden truncate">
              <span className="bg-[#bb010d] text-white px-1.5 py-0.5 rounded font-bold uppercase text-[10px] tracking-wider shrink-0">
                ट्रेंडिंग
              </span>
              <span className="truncate text-gray-300">
                पायथन में AI कैसे सीखें | विंडोज 11 टॉप 10 शॉर्टकट्स
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-gray-300">
              <button
                type="button"
                onClick={handleShareClick}
                className="hover:text-red-400 transition-colors relative flex items-center gap-1 cursor-pointer"
                title="शेयर करें या लिंक कॉपी करें"
              >
                <span className="material-symbols-outlined text-[16px]">share</span>
                {copiedToast && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap z-50">
                    लिंक कॉपी हुआ!
                  </span>
                )}
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/sitemap')}
                className="hover:text-red-400 transition-colors"
                title="RSS फीड और साइटमैप"
              >
                <span className="material-symbols-outlined text-[16px]">rss_feed</span>
              </button>
            </div>
            <span className="text-gray-600">|</span>
            <div className="flex items-center gap-3 text-xs">
              <button
                type="button"
                onClick={() => onNavigate('/about')}
                className={`hover:text-red-400 transition-colors ${currentPath === '/about' ? 'text-red-400 font-bold' : ''}`}
              >
                हमारे बारे में
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/contact')}
                className={`hover:text-red-400 transition-colors ${currentPath === '/contact' ? 'text-red-400 font-bold' : ''}`}
              >
                संपर्क
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: Main Brand & Sponsor Banner */}
      <div className="bg-white dark:bg-[#131b22] py-3 px-4 border-b border-gray-100 dark:border-gray-800/60">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className="flex flex-col text-left group"
          >
            <span className="text-3xl font-extrabold tracking-tight text-[#bb010d] leading-none group-hover:opacity-90 transition-opacity">
              टेक<span className="text-[#141d23] dark:text-white">वाणी</span>
            </span>
            <span className="text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase font-bold mt-1">
              Hindi Tech Magazine
            </span>
          </button>

          {/* Featured Hardware Review Highlight Banner */}
          <div className="hidden lg:flex items-center justify-between flex-1 max-w-2xl bg-[#ecf5fe] dark:bg-gray-800/60 px-4 py-2 rounded-xl border border-blue-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#bb010d] text-[28px]">
                laptop_mac
              </span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-900 dark:text-gray-100">
                  नया मैकबुक प्रो M3 - अभी रिव्यू पढ़ें
                </span>
                <span className="text-[11px] text-gray-600 dark:text-gray-400">
                  विस्तृत बेंचमार्क, बैटरी टेस्ट और परफॉर्मेंस गाइड
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/product/m3-chipset-laptops-coding-ai-benchmark-review')}
              className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-3.5 py-1.5 rounded transition-colors shadow-sm shrink-0 cursor-pointer"
            >
              रिव्यू देखें
            </button>
          </div>

          {/* Profile Avatar */}
          <div className="flex items-center gap-3 shrink-0">
            <img
              alt="राहुल शर्मा - टेकवाणी संपादक"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-red-500/30 cursor-pointer hover:ring-red-500 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRqWTnK78J57cA3pwd5P5LdLh8F9h4rmJvHKVLcd74gYLfIwO19L_GFdjQzG_CA4RhcXrex_xwxWVvanO9E_vgOJDO35mRbtADBom8MMtNCtF32plRqivyAoBrQSHRNfWounA1j6UdCqNOVGePsQnGc7hOMkOdLEsb37n6WE3cchoml3sIO0T96lBICb9iTVkpNTx7Ky1k_zmCPPcx1lSMiGyTRtXnglEJNMLoV_cKw-QXuTqJ9YSU"
              onClick={() => onNavigate('/editorial-team')}
              title="संपादकीय टीम"
            />
          </div>
        </div>
      </div>

      {/* Tier 3: Category Nav & Search/Theme Controls */}
      <div className="bg-[#141d23] text-white">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          <nav className="flex items-center gap-1 overflow-x-auto py-1.5 scrollbar-none" aria-label="मुख्य नेविगेशन">
            {mockCategories.map((cat) => {
              const isHome = cat.slug === 'home';
              const isActive = isHome
                ? currentPath === '/'
                : currentPath === `/category/${cat.slug}`;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onNavigate(isHome ? '/' : `/category/${cat.slug}`)}
                  className={`px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap transition-all font-medium ${isActive
                      ? 'bg-[#bb010d] text-white font-bold shadow-sm'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {cat.name}
                </button>
              );
            })}


            {/* Online Tools Directory Link */}
            <button
              type="button"
              onClick={() => onNavigate('/tools')}
              className={`px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap transition-all font-medium cursor-pointer ${currentPath === '/tools' || currentPath.startsWith('/tool/')
                  ? 'bg-[#bb010d] text-white font-bold shadow-sm'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`}
            >
              ऑनलाइन टूल्स
            </button>
          </nav>

          <div className="flex items-center gap-1.5 pl-3 shrink-0">
            {/* Search button */}
            <button
              type="button"
              onClick={onOpenSearch}
              aria-label="खोजें"
              className="text-gray-300 hover:text-white p-1.5 hover:bg-white/10 rounded transition-colors flex items-center gap-1"
              title="सर्च करें (Ctrl+K)"
            >
              <span className="material-symbols-outlined text-[20px]">search</span>
              <span className="hidden xl:inline text-xs text-gray-400 font-mono">/</span>
            </button>

            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={onToggleDark}
              aria-label="डार्क मोड बदलें"
              className="text-gray-300 hover:text-white p-1.5 hover:bg-white/10 rounded transition-colors"
              title={isDark ? 'लाइट मोड चालू करें' : 'डार्क मोड चालू करें'}
            >
              <span className="material-symbols-outlined text-[20px]">
                {isDark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
