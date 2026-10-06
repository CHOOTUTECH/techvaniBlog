import React, { useEffect } from 'react';
import { mockAuthors } from '../data/mockDjangoData';
import { applySEO } from '../utils/seo';

interface AboutUsPageProps {
  onNavigate: (path: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    applySEO({
      title: 'हमारे बारे में (About Us) – टेकवाणी हिंदी टेक मैगज़ीन',
      description: 'जानिए टेकवाणी की यात्रा, हमारा उद्देश्य, और हमारी संपादकीय टीम जो प्रामाणिक हिंदी टेक सामग्री प्रदान करने के लिए प्रतिबद्ध है।',
      canonicalUrl: `${window.location.origin}/about`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'हमारे बारे में', url: '/about' },
      ],
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero Banner */}
      <div className="bg-[#ecf5fe] dark:bg-gray-800/60 p-8 rounded-3xl border border-blue-100 dark:border-gray-700/60 mb-10">
        <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
          हमारी पहचान • हमारा मिशन
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-2 leading-tight">
          सरल हिंदी में प्रामाणिक <span className="text-[#bb010d]">टेक पत्रकारिता</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mt-4 leading-relaxed max-w-2xl">
          टेकवाणी की स्थापना भारतीय पाठकों, डेवलपर्स, और छात्रों को बिना किसी भाषा बाधा के विश्व स्तरीय तकनीकी ज्ञान, कोडिंग ट्यूटोरियल, और निष्पक्ष हार्डवेयर समीक्षाएं उपलब्ध कराने के लिए की गई है।
        </p>
      </div>

      {/* Core Values (E-E-A-T) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[26px]">fact_check</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">100% तथ्य-जांच (Fact Checking)</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            हमारे द्वारा प्रकाशित हर शॉर्टकट, कमांड और कोड स्निपेट को हमारी लैब में वास्तविक मशीनों पर टेस्ट किया जाता है।
          </p>
        </div>

        <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[26px]">verified</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">निष्पक्ष हार्डवेयर समीक्षा</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            हम किसी भी ब्रांड से प्रायोजित अनुकूल समीक्षा स्वीकार नहीं करते। हमारी रेटिंग्स केवल पारदर्शी बेंचमार्क्स पर आधारित होती हैं।
          </p>
        </div>

        <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-2">
          <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-950/40 text-[#bb010d] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[26px]">translate</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">शुद्ध और सहज हिंदी</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            तकनीकी शब्दों को अंग्रेजी संदर्भ के साथ सहज हिंदी में समझाया जाता है ताकि शुरुआती छात्र भी आसानी से सीख सकें।
          </p>
        </div>
      </div>

      {/* Leadership & Editorial Team */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            हमारी वरिष्ठ संपादकीय टीम
          </h2>
          <button
            onClick={() => onNavigate('/editorial-team')}
            className="text-xs font-bold text-[#bb010d] hover:underline"
          >
            सभी सदस्यों को देखें →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {mockAuthors.map((author) => (
            <div
              key={author.id}
              className="bg-white dark:bg-[#131b22] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex items-center gap-4"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-red-500/30 shrink-0"
              />
              <div className="min-w-0">
                <h4 className="text-base font-bold text-gray-900 dark:text-white truncate">
                  {author.name}
                </h4>
                <p className="text-xs text-[#bb010d] font-semibold truncate">{author.role}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                  {author.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Address & Office Info */}
      <section className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700/60">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">मुख्यालय और संपर्क विवरण</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          <strong>टेकवाणी मीडिया प्राइवेट लिमिटेड (TechVani Media Pvt. Ltd.)</strong><br />
          प्लॉट नंबर 42, सेक्टर 18, साइबर सिटी, गुरुग्राम, हरियाणा 122002, भारत<br />
          ईमेल: contact@techvani.in | फोन: +91 124 456 7890
        </p>
      </section>
    </div>
  );
};
