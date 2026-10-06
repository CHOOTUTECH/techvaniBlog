import React, { useState } from 'react';

interface VideoTutorialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoTutorialModal: React.FC<VideoTutorialModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: 'पायथन इंस्टॉलेशन और VS Code सेटअप', time: '00:00 - 10:15' },
    { title: 'डेटा टाइप्स, स्ट्रिंग्स और ऑपरेशन्स', time: '10:16 - 22:30' },
    { title: 'कंडीशनल लॉजिक और Loops (For & While)', time: '22:31 - 35:45' },
    { title: 'कस्टम फंक्शन्स और Scope', time: '35:46 - 48:20' },
    { title: 'लाइव मिनी प्रोजेक्ट: पासवर्ड जनरेटर', time: '48:21 - 58:00' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="bg-[#141d23] text-white w-full max-w-4xl rounded-2xl shadow-2xl border border-gray-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 bg-black/40 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500">smart_display</span>
            <h3 className="text-base font-bold truncate">
              पायथन क्रैश कोर्स 2025: सिर्फ 1 घंटे में पूरे बेसिक्स समझें
            </h3>
          </div>
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-white rounded">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmPzrlAUiG9ZVqrh8oGAOW6-woIw2-JfVQ-vKXrCPVZldMLc3aT5hc6AzZYeJauiyFT4ko0xlYNUS4gHxThphgKygR-pIH7831qQsre1GU_ekXSm54K_UwUK3-uUrBu5YKEJkB2bIVdYguSJkYyBwifrqHJm1tEg0Oen8TwWWddXqByrYy-_8p2QSQXCB8XA0QX0K_OX0hkHddY9UWjRgQl600p2TsR_1rjm-WE6nKr7J_wXI96wZe"
            alt="Python Crash Course"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-20 h-20 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[42px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Bottom video controls bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent flex flex-col gap-2">
            {/* Timeline */}
            <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden cursor-pointer">
              <div className="w-1/3 h-full bg-red-600"></div>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-300">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-white">
                  <span className="material-symbols-outlined text-[18px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <span>18:42 / 58:00</span>
                <span className="text-gray-500">|</span>
                <span className="text-red-400 font-medium">
                  अध्याय: {chapters[activeChapter].title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-gray-800 px-2 py-0.5 rounded text-[10px] font-mono">1080p HD</span>
                <span className="bg-gray-800 px-2 py-0.5 rounded text-[10px] font-mono">1.0x</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters and Source Code */}
        <div className="p-4 bg-[#18222a] overflow-y-auto flex-1">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              वीडियो चैप्टर्स (Video Timeline)
            </h4>
            <button
              onClick={() => alert('पायथन सोर्स कोड .zip फाइल डाउनलोड हो रही है...')}
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              सोर्स कोड डाउनलोड करें (.py)
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                onClick={() => setActiveChapter(idx)}
                className={`p-2.5 rounded-xl text-left transition-colors flex items-center justify-between border ${
                  activeChapter === idx
                    ? 'bg-red-950/40 border-red-800 text-white'
                    : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:bg-gray-800/80 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="text-xs font-mono font-bold text-red-500">{idx + 1}.</span>
                  <span className="text-xs font-medium truncate">{ch.title}</span>
                </div>
                <span className="text-[11px] font-mono text-gray-500 shrink-0 ml-2">{ch.time}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
