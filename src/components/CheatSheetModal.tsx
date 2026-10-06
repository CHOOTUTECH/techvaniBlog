import React, { useState } from 'react';

interface CheatSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cheatSheetData = [
  {
    category: 'MS Excel पावर शॉर्टकट्स',
    shortcuts: [
      { key: 'Ctrl + Shift + L', desc: 'टेबल पर ऑटो-फिल्टर लगाएं या हटाएं' },
      { key: 'Alt + =', desc: 'ऑटो-सम (एक क्लिक में पूरा कॉलम जोड़ें)' },
      { key: 'Ctrl + E', desc: 'फ्लैश फिल (पैटर्न पहचान कर डेटा अलग करें)' },
      { key: 'Ctrl + T', desc: 'डेटा को तुरंत आधिकारिक एक्सेल टेबल बनाएं' },
      { key: 'F4', desc: 'अंतिम की गई क्रिया को तुरंत दोहराएं (Repeat Action)' },
      { key: 'Alt + Enter', desc: 'उसी सेल के अंदर नई लाइन (Line Break) शुरू करें' },
    ],
  },
  {
    category: 'विंडोज 11 मास्टर शॉर्टकट्स',
    shortcuts: [
      { key: 'Win + V', desc: 'क्लिपबोर्ड हिस्ट्री (कॉपी किया गया पूरा इतिहास)' },
      { key: 'Win + Shift + S', desc: 'कस्टम स्क्रीनशॉट टूल' },
      { key: 'Win + . (Dot)', desc: 'इमोजी और विशेष सिम्बल मेनू' },
      { key: 'Win + D', desc: 'सभी विंडोज़ मिनिमाइज करके डेस्कटॉप देखें' },
      { key: 'Win + Ctrl + D', desc: 'नया वर्चुअल वर्कस्पेस/डेस्कटॉप बनाएं' },
      { key: 'Ctrl + Shift + Esc', desc: 'टास्क मैनेजर सीधा खोलें' },
    ],
  },
  {
    category: 'VS Code कोडिंग शॉर्टकट्स',
    shortcuts: [
      { key: 'Ctrl + P', desc: 'फाइल नाम से तुरंत फाइल खोलें' },
      { key: 'Ctrl + Shift + P', desc: 'कमांड पैलेट (Command Palette)' },
      { key: 'Alt + Up/Down', desc: 'वर्तमान लाइन को ऊपर या नीचे मूव करें' },
      { key: 'Shift + Alt + Down', desc: 'पूरी लाइन को नीचे डुप्लिकेट करें' },
      { key: 'Ctrl + /', desc: 'लाइन को कमेंट या अनकमेंट करें' },
      { key: 'Ctrl + D', desc: 'अगले मैचिंग शब्द को मल्टी-कर्सर से सेलेक्ट करें' },
    ],
  },
];

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white dark:bg-[#131b22] w-full max-w-3xl rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-5 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gradient-to-r from-red-500/10 via-transparent to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#bb010d] text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[24px]">picture_as_pdf</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                विंडोज + मैक 100+ सुपर चीट-शीट
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                टेकवाणी संपादकीय टीम द्वारा तैयार की गई प्रामाणिक रेफरेंस शीट
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-1.5 rounded-lg"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Tab selection */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 px-5 pt-3 gap-2 bg-gray-50 dark:bg-gray-800/40">
          {cheatSheetData.map((item, idx) => (
            <button
              key={item.category}
              onClick={() => setActiveTab(idx)}
              className={`pb-3 px-3 text-xs font-bold border-b-2 transition-colors ${
                activeTab === idx
                  ? 'border-[#bb010d] text-[#bb010d]'
                  : 'border-transparent text-gray-500 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Shortcuts List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {cheatSheetData[activeTab].shortcuts.map((s) => (
            <div
              key={s.key}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700/60 hover:border-red-400/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <code className="text-xs md:text-sm font-bold font-mono bg-white dark:bg-gray-900 text-[#bb010d] px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  {s.key}
                </code>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {s.desc}
                </span>
              </div>
              <button
                onClick={() => handleCopy(s.key)}
                className="text-xs font-semibold px-2.5 py-1 rounded bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-[#bb010d] border border-gray-200 dark:border-gray-600 transition-colors shrink-0"
              >
                {copiedKey === s.key ? 'कॉपी हो गया! ✓' : 'कॉपी करें'}
              </button>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-gray-50 dark:bg-gray-800/40 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            प्रिंट या PDF सेव करने के लिए Ctrl + P दबाएं
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              प्रिंट करें
            </button>
            <button
              onClick={() => {
                alert('PDF डाउनलोड शुरू हो गया! टेकवाणी चीट-शीट आपके डिवाइस में सेव हो रही है।');
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              डाउनलोड PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
