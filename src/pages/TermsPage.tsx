import React, { useEffect } from 'react';
import { applySEO } from '../utils/seo';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    applySEO({
      title: 'नियम और शर्तें (Terms of Service) – टेकवाणी',
      description: 'टेकवाणी हिंदी टेक मैगज़ीन पोर्टल के नियम, शर्तें और बौद्धिक संपदा अधिकार।',
      canonicalUrl: `${window.location.origin}/terms`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'नियम और शर्तें', url: '/terms' },
      ],
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">उपयोगकर्ता समझौता</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          नियम और शर्तें (Terms of Service)
        </h1>
        <p className="text-xs text-gray-500 mt-2">अंतिम अद्यतन: 24 अक्टूबर 2024</p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-sm sm:text-base">
        <section className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. शर्तों की स्वीकृति</h2>
          <p>
            टेकवाणी (techvani.in) का उपयोग करके आप इन नियमों और शर्तों का पूर्ण पालन करने के लिए बाध्य हैं। यदि आप इनमें से किसी भी शर्त से असहमत हैं, तो कृपया पोर्टल का उपयोग न करें।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. बौद्धिक संपदा और कॉपीराइट (DMCA)</h2>
          <p>
            टेकवाणी पर प्रकाशित सभी मूल लेख, गाइड, और हिंदी अनुवाद कॉपीराइट कानून द्वारा संरक्षित हैं। आप व्यक्तिगत, गैर-व्यावसायिक अध्ययन के लिए हमारे लेख पढ़ और साझा कर सकते हैं। टेकवाणी को उचित क्रेडिट दिए बिना किसी भी लेख की पूरी नकल करना प्रतिबंधित है।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">3. कोड स्निपेट्स का लाइसेंस (Open Source)</h2>
          <p>
            हमारे लेखों में दिए गए प्रोग्रामिंग कोड उदाहरण MIT लाइसेंस के तहत प्रदान किए जाते हैं। आप उन्हें अपने निजी या व्यावसायिक सॉफ्टवेयर प्रोजेक्ट्स में स्वतंत्र रूप से उपयोग कर सकते हैं।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. अस्वीकरण (Disclaimer)</h2>
          <p>
            हम अपने तकनीकी लेखों और शॉर्टकट्स की सटीकता सुनिश्चित करने का हर संभव प्रयास करते हैं। फिर भी, किसी भी टर्मिनल कमांड या रजिस्ट्री संपादन को आज़माने से पहले अपने डेटा का बैकअप लेना आपकी व्यक्तिगत जिम्मेदारी है।
          </p>
        </section>
      </div>
    </div>
  );
};
