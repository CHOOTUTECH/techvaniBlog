import React, { useState, useMemo } from 'react';
import { ToolDefinition } from './types';

interface WordCounterToolProps {
  onNavigate: (path: string) => void;
  tool: ToolDefinition;
}

export const WordCounterTool: React.FC<WordCounterToolProps> = ({ onNavigate, tool }) => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);
  const [targetWords, setTargetWords] = useState<number>(500);

  const stats = useMemo(() => {
    const raw = text.trim();
    if (!raw) {
      return {
        words: 0,
        characters: text.length,
        charsNoSpace: 0,
        paragraphs: 0,
        lines: text ? text.split('\n').length : 0,
        readingTimeMinutes: 0,
        speakingTimeMinutes: 0,
      };
    }

    const wordsArray = raw.split(/\s+/).filter(Boolean);
    const words = wordsArray.length;
    const characters = text.length;
    const charsNoSpace = text.replace(/\s/g, '').length;
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length || (words > 0 ? 1 : 0);
    const lines = text.split('\n').length;

    const readingTimeMinutes = Math.max(0.1, Number((words / 200).toFixed(1)));
    const speakingTimeMinutes = Math.max(0.1, Number((words / 130).toFixed(1)));

    return {
      words,
      characters,
      charsNoSpace,
      paragraphs,
      lines,
      readingTimeMinutes,
      speakingTimeMinutes,
    };
  }, [text]);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClear = () => setText('');
  const handleUpperCase = () => setText(text.toUpperCase());
  const handleLowerCase = () => setText(text.toLowerCase());
  const handleTitleCase = () => {
    setText(
      text
        .toLowerCase()
        .split(' ')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    );
  };
  const handleRemoveExtraSpaces = () => setText(text.replace(/\s+/g, ' ').trim());
  const handleLoadSample = () => {
    setText(
      `नमस्ते! टेकवाणी (TechVani) के ऑनलाइन वर्ड काउंटर टूल में आपका स्वागत है।\n\nयह टूल लेखकों, ब्लॉगर्स और छात्रों के लिए बनाया गया है ताकि वे अपने लेख, निबंध, मेटा डिस्क्रिप्शन और सोशल मीडिया पोस्ट्स के कुल शब्द और कैरेक्टर आसानी से गिन सकें।\n\nइस टूल के साथ आप पढ़ने का अनुमानित समय भी देख सकते हैं और टेक्स्ट को अपरकेस या लोअरकेस में बदल सकते हैं!`
    );
  };

  const progressPercent = Math.min(100, Math.round((stats.words / (targetWords || 1)) * 100));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Editor & Controls (8 Cols) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        {/* Quick Stats Grid Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white dark:bg-[#131b22] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">कुल शब्द (Words)</span>
            <span className="text-2xl sm:text-3xl font-black text-[#bb010d] mt-1 font-mono">
              {stats.words.toLocaleString('hi-IN')}
            </span>
          </div>

          <div className="bg-white dark:bg-[#131b22] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">कुल अक्षर (Characters)</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1 font-mono">
              {stats.characters.toLocaleString('hi-IN')}
            </span>
          </div>

          <div className="bg-white dark:bg-[#131b22] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">बिना स्पेस (No Spaces)</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1 font-mono">
              {stats.charsNoSpace.toLocaleString('hi-IN')}
            </span>
          </div>

          <div className="bg-white dark:bg-[#131b22] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">पैराग्राफ (Paragraphs)</span>
            <span className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1 font-mono">
              {stats.paragraphs}
            </span>
          </div>
        </div>

        {/* Goal Progress Tracker */}
        <div className="bg-white dark:bg-[#131b22] p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-800 dark:text-gray-200">शब्द लक्ष्य (Word Goal):</span>
              <select
                value={targetWords}
                onChange={(e) => setTargetWords(Number(e.target.value))}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded border border-gray-300 dark:border-gray-700"
              >
                <option value={100}>100 शब्द (लघु उत्तर)</option>
                <option value={300}>300 शब्द (छोटा ब्लॉग)</option>
                <option value={500}>500 शब्द (मानक लेख)</option>
                <option value={1000}>1,000 शब्द (विस्तृत गाइड)</option>
                <option value={2000}>2,000 शब्द (गहन विश्लेषण)</option>
              </select>
            </div>
            <span className="font-mono font-bold text-[#bb010d]">
              {stats.words} / {targetWords} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-gray-100 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#bb010d] h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Text Area Input */}
        <div className="bg-white dark:bg-[#131b22] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="यहाँ अपना टेक्स्ट टाइप करें या पेस्ट (Ctrl+V) करें..."
            rows={12}
            className="w-full p-5 text-gray-900 dark:text-gray-100 bg-transparent placeholder:text-gray-400 focus:outline-none text-sm md:text-base leading-relaxed resize-y min-h-[260px]"
          />

          {/* Quick Action Toolbar */}
          <div className="p-3 bg-gray-50 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                type="button"
                onClick={handleUpperCase}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                UPPERCASE
              </button>
              <button
                type="button"
                onClick={handleLowerCase}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                lowercase
              </button>
              <button
                type="button"
                onClick={handleTitleCase}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                Title Case
              </button>
              <button
                type="button"
                onClick={handleRemoveExtraSpaces}
                className="px-2.5 py-1.5 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-100 text-xs font-semibold text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 cursor-pointer"
              >
                Clean Spaces
              </button>
              <button
                type="button"
                onClick={handleLoadSample}
                className="px-2.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 text-xs font-semibold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 cursor-pointer"
              >
                सैंपल टेक्स्ट भरें
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-xs font-bold text-gray-700 dark:text-gray-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'कॉपी हुआ!' : 'कॉपी करें'}</span>
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/40 hover:bg-red-100 text-xs font-bold text-red-600 dark:text-red-400 transition-colors cursor-pointer"
              >
                हटाएं (Clear)
              </button>
            </div>
          </div>
        </div>

        {/* Connected Blog Callout Banner */}
        {tool.blogSlug && (
          <div className="bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 dark:from-gray-800 dark:via-gray-850 dark:to-gray-800 p-6 rounded-2xl border-2 border-red-500/60 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#bb010d] text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[28px]">article</span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#bb010d] uppercase">संबंधित टेक गाइड</span>
                <h3 className="text-base font-extrabold text-gray-900 dark:text-white mt-0.5">
                  वर्ड काउंटर टूल: ब्लॉगिंग और एसईओ के लिए सटीक शब्द सीमा कैसे बनाए रखें?
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                  गूगल सर्च रैंकिंग, सोशल मीडिया पोस्ट्स और मेटा डिस्क्रिप्शन के लिए सही शब्द सीमा क्या होनी चाहिए? हमारे विस्तृत लेख में पढ़ें।
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(`/article/${tool.blogSlug}`)}
              className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>पूरा ब्लॉग पढ़ें</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        )}
      </div>

      {/* Right Column: Platform Character Limit Cheat Sheet (4 Cols) */}
      <aside className="lg:col-span-4 flex flex-col gap-6">
        {/* Estimated Times */}
        <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d] text-[20px]">timer</span>
            समय अनुमान (Estimated Times)
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-xl flex flex-col">
              <span className="text-[11px] text-gray-500">पढ़ने का समय</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white font-mono mt-0.5">
                ~{stats.readingTimeMinutes} मिनट
              </span>
              <span className="text-[10px] text-gray-400">200 शब्द/मिनट</span>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800/60 p-3 rounded-xl flex flex-col">
              <span className="text-[11px] text-gray-500">बोलने का समय</span>
              <span className="text-lg font-bold text-gray-900 dark:text-white font-mono mt-0.5">
                ~{stats.speakingTimeMinutes} मिनट
              </span>
              <span className="text-[10px] text-gray-400">130 शब्द/मिनट</span>
            </div>
          </div>
        </div>

        {/* Social Media & SEO Limits Guide */}
        <div className="bg-white dark:bg-[#131b22] rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col gap-3">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-[#bb010d] text-[20px]">rule</span>
            सोशल मीडिया &amp; एसईओ सीमाएँ
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            विभिन्न प्लेटफॉर्म्स पर अनुशंसित शब्द और कैरेक्टर सीमा:
          </p>

          <div className="flex flex-col gap-2.5 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Twitter / X</span>
              <span className="font-mono text-[#bb010d] font-bold">280 कैरेक्टर</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Google SEO Title</span>
              <span className="font-mono text-[#bb010d] font-bold">50 - 60 कैरेक्टर</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
              <span className="font-semibold text-gray-800 dark:text-gray-200">SEO Meta Description</span>
              <span className="font-mono text-[#bb010d] font-bold">150 - 160 कैरेक्टर</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
              <span className="font-semibold text-gray-800 dark:text-gray-200">Instagram Bio</span>
              <span className="font-mono text-[#bb010d] font-bold">150 कैरेक्टर</span>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/60">
              <span className="font-semibold text-gray-800 dark:text-gray-200">LinkedIn Post</span>
              <span className="font-mono text-[#bb010d] font-bold">3,000 कैरेक्टर</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};
