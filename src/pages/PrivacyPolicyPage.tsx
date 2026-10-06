import React, { useEffect } from 'react';
import { applySEO } from '../utils/seo';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    applySEO({
      title: 'गोपनीयता नीति (Privacy Policy) – Google AdSense & Search Compliant',
      description: 'टेकवाणी (TechVani) की आधिकारिक गोपनीयता नीति। जानिए हम आपकी व्यक्तिगत जानकारी, कुकीज़ और डेटा सुरक्षा का प्रबंधन कैसे करते हैं।',
      canonicalUrl: `${window.location.origin}/privacy-policy`,
      breadcrumbs: [
        { name: 'मुख्य पृष्ठ', url: '/' },
        { name: 'गोपनीयता नीति', url: '/privacy-policy' },
      ],
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-8 border-b border-gray-200 dark:border-gray-800 pb-6">
        <span className="text-xs uppercase font-bold text-[#bb010d] tracking-wider">
          कानूनी और डेटा सुरक्षा दिशानिर्देश
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1">
          गोपनीयता नीति (Privacy Policy)
        </h1>
        <p className="text-xs text-gray-500 mt-2">
          अंतिम अपडेट: 24 अक्टूबर 2024 • Google AdSense, GDPR &amp; DPDP अधिनियम 2023 के अनुरूप
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6 text-sm sm:text-base">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">1. परिचय एवं हमारी प्रतिबद्धता</h2>
          <p>
            <strong>टेकवाणी (TechVani)</strong> ("हम", "हमारा" या "पोर्टल") पर हम अपने सभी पाठकों की गोपनीयता का सर्वोच्च सम्मान करते हैं। यह गोपनीयता नीति दस्तावेज स्पष्ट करता है कि जब आप <code>techvani.in</code> वेबसाइट पर आते हैं, तो हम किस प्रकार की जानकारी एकत्रित, उपयोग और सुरक्षित करते हैं।
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">2. हम कौन सी जानकारी एकत्रित करते हैं?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>लॉग फाइल्स (Log Files):</strong> अधिकांश मानक वेब सर्वरों की तरह, हम स्वचालित रूप से इंटरनेट प्रोटोकॉल (IP) पते, ब्राउज़र का प्रकार, इंटरनेट सेवा प्रदाता (ISP), दिनांक/समय मोहर, और देखे गए पेजों की संख्या लॉग करते हैं। यह डेटा व्यक्तिगत रूप से किसी व्यक्ति की पहचान नहीं करता है।
            </li>
            <li>
              <strong>न्यूज़लेटर सदस्यता:</strong> जब आप स्वेच्छा से हमारे साप्ताहिक टेक डाइजेस्ट के लिए साइन अप करते हैं, तो हम केवल आपका ईमेल पता सुरक्षित रूप से संग्रहीत करते हैं।
            </li>
            <li>
              <strong>टिप्पणियां और फीडबैक:</strong> जब आप किसी लेख पर अपनी राय देते हैं, तो आपका नाम और टिप्पणी सार्वजनिक रूप से प्रदर्शित होती है।
            </li>
          </ul>
        </section>

        <section className="space-y-3 bg-[#ecf5fe] dark:bg-gray-800/50 p-5 rounded-2xl border border-blue-100 dark:border-gray-700/60">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d]">cookie</span>
            3. कुकीज़ और Google AdSense नीतियां (Cookies Policy)
          </h2>
          <p className="text-xs sm:text-sm">
            टेकवाणी आगंतुकों की प्राथमिकताओं और विज़िट किए गए पृष्ठों को रिकॉर्ड करने के लिए मानक 'Cookies' का उपयोग करता है।
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
            <li>
              <strong>Google DoubleClick DART कुकी:</strong> गूगल एक तृतीय-पक्ष विक्रेता के रूप में हमारी साइट पर विज्ञापन दिखाने के लिए कुकीज़ का उपयोग करता है। गूगल की DART कुकी का उपयोग हमारी साइट और इंटरनेट पर अन्य साइटों के आपके विज़िट के आधार पर उपयोगकर्ताओं को प्रासंगिक विज्ञापन प्रदर्शित करने के लिए किया जाता है।
            </li>
            <li>
              पाठक गूगल विज्ञापन और सामग्री नेटवर्क गोपनीयता नीति पृष्ठ पर जाकर DART कुकी के उपयोग को कभी भी अस्वीकार कर सकते हैं:{' '}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noreferrer"
                className="text-[#bb010d] font-bold underline"
              >
                Google Ads Privacy &amp; Terms
              </a>.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">4. एनालिटिक्स और प्रदर्शन माप</h2>
          <p>
            हम अपने पाठकों के अनुभव को बेहतर बनाने के लिए Google Analytics का उपयोग करते हैं। यह सेवा यह समझने में मदद करती है कि कौन से तकनीकी लेख और कीबोर्ड शॉर्टकट्स सबसे अधिक उपयोगी पाए जा रहे हैं। सभी डेटा गुमनाम (Anonymized) रूप में संसाधित होता है।
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">5. आपकी सहमति और अधिकार (User Rights)</h2>
          <p>
            हमारी वेबसाइट का उपयोग करके, आप एतद्द्वारा हमारी गोपनीयता नीति के नियमों से सहमत होते हैं। आपके पास किसी भी समय अपने डेटा को हटाने या हमारे न्यूज़लेटर से अनसब्सक्राइब करने का पूर्ण कानूनी अधिकार है।
          </p>
        </section>

        <section className="space-y-3 border-t border-gray-200 dark:border-gray-800 pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">6. शिकायत निवारण अधिकारी (Grievance Officer)</h2>
          <p>
            भारत सरकार के सूचना प्रौद्योगिकी नियम 2021 के अनुसार, गोपनीयता या सामग्री से संबंधित प्रश्नों के लिए आप हमारे नोडल अधिकारी से संपर्क कर सकते हैं:
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-xs sm:text-sm border border-gray-200 dark:border-gray-700">
            <p><strong>नाम:</strong> श्री राहुल शर्मा (प्रधान संपादक &amp; डेटा सुरक्षा नोडल अधिकारी)</p>
            <p><strong>ईमेल:</strong> privacy@techvani.in / editor@techvani.in</p>
            <p><strong>पता:</strong> टेकवाणी मीडिया, साइबर सिटी, गुरुग्राम, हरियाणा 122002, भारत</p>
          </div>
        </section>
      </div>
    </div>
  );
};
