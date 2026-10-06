import React, { useState, useEffect } from 'react';
import { Author } from '../types/api';
import { djangoApi } from '../services/djangoApi';
import { mockAuthors } from '../data/mockDjangoData';
import { applySEO } from '../utils/seo';

export const EditorialTeamPage: React.FC = () => {
  const [authors, setAuthors] = useState<Author[]>(mockAuthors);

  useEffect(() => {
    applySEO({
      title: 'संपादकीय टीम और नीतियां – टेकवाणी (TechVani Editorial)',
      description: 'टेकवाणी के टेक पत्रकारों, इंजीनियर्स और संपादकों की टीम। जानिए हमारी तथ्य-जांच प्रक्रिया और संपादकीय दिशानिर्देश।',
      canonicalUrl: `${window.location.origin}/editorial-team`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'संपादकीय टीम', url: '/editorial-team' },
      ],
    });

    const fetchAuthors = async () => {
      const data = await djangoApi.getAuthors();
      if (data && data.length > 0) {
        setAuthors(data);
      }
    };
    fetchAuthors();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
        <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
          पारदर्शिता और संपादकीय मानक (E-E-A-T)
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          संपादकीय टीम और नैतिक नीतियां
        </h1>
        <p className="text-sm text-gray-500 mt-2">
          Google News और Google Discover मानकों के अनुरूप हमारी लेखकों की टीम एवं तथ्य सत्यापन प्रक्रिया।
        </p>
      </div>

      {/* Author Roster */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          मुख्य तकनीकी संपादक और लेखक
        </h2>

        <div className="space-y-6">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center"
            >
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-2xl object-cover ring-2 ring-red-500/20 shrink-0"
              />
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                    {author.name}
                    <span className="material-symbols-outlined text-blue-500 text-[18px]">verified</span>
                  </h3>
                  <span className="text-xs bg-red-50 dark:bg-red-950/40 text-[#bb010d] px-2.5 py-1 rounded-full font-bold">
                    {author.articlesCount} प्रकाशित लेख
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#bb010d]">{author.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {author.bio}
                </p>
                <div className="pt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span>ट्विटर: <strong className="text-gray-700 dark:text-gray-300">{author.twitter}</strong></span>
                  <span>•</span>
                  <span>प्रामाणिक टेक समीक्षक</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Principles & Fact-Checking */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          हमारी संपादकीय और सत्यापन प्रक्रिया
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">biotech</span>
              1. वास्तविक डिवाइस टेस्टिंग
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              किसी भी कीबोर्ड शॉर्टकट, रन कमांड, या कोड ट्यूटोरियल को प्रकाशित करने से पहले हमारे तकनीकी विशेषज्ञ विंडोज 10/11, मैक, और लिनक्स प्रणालियों पर व्यक्तिगत रूप से जांचते हैं।
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">smart_toy</span>
              2. AI सामग्री प्रकटीकरण नीति
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              हम अनुसंधान में सहायता के लिए कृत्रिम बुद्धिमत्ता का उपयोग कर सकते हैं, लेकिन टेकवाणी पर प्रकाशित प्रत्येक शब्द हमारे मानवीय संपादकों द्वारा समीक्षा और तथ्य-सत्यापित किया जाता है।
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">rule</span>
              3. निष्पक्षता और स्वतंत्रता
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              हमारा संपादकीय प्रभाग किसी भी विज्ञापनदाता या हार्डवेयर निर्माता के दबाव से पूरी तरह मुक्त है। हमारी उत्पाद समीक्षाएं पूरी तरह वास्तविक प्रदर्शन पर आधारित हैं।
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2">
            <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <span className="material-symbols-outlined text-[#bb010d]">published_with_changes</span>
              4. सार्वजनिक संशोधन लॉग (Corrections)
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
              यदि किसी लेख में तथ्यात्मक गलती पाई जाती है, तो हम पाठकों को स्पष्ट रूप से सूचित करते हुए लेख के अंत में संशोधन नोट जोड़ते हैं।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
