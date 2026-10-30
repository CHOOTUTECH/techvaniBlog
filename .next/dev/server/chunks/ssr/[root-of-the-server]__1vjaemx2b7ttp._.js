module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/pages/editorial-team.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditorialTeamPage,
    "getServerSideProps",
    ()=>getServerSideProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/editorial-team.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/djangoApi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockDjangoData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppContext.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
function EditorialTeamPage({ authors }) {
    // भाषा प्राप्त करें
    const { language } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["LanguageContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: language === 'hi' ? 'संपादकीय टीम और नीतियां – टेकवाणी (TechVani Editorial)' : 'Editorial Team & Policies - TechVani'
                    }, void 0, false, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "टेकवाणी के टेक पत्रकारों, इंजीनियर्स और संपादकों की टीम। जानिए हमारी तथ्य-जांच प्रक्रिया और संपादकीय दिशानिर्देश।"
                    }, void 0, false, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: "https://techvani.in/editorial-team"
                    }, void 0, false, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/editorial-team.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mb-10 border-b border-gray-200 dark:border-gray-800 pb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs uppercase font-bold text-[#bb010d] tracking-wider",
                                children: language === 'hi' ? 'पारदर्शिता और संपादकीय मानक (E-E-A-T)' : 'Transparency & Editorial Standards (E-E-A-T)'
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-1",
                                children: language === 'hi' ? 'संपादकीय टीम और नैतिक नीतियां' : 'Editorial Team & Ethical Policies'
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 mt-2",
                                children: language === 'hi' ? 'Google News और Google Discover मानकों के अनुरूप हमारी लेखकों की टीम एवं तथ्य सत्यापन प्रक्रिया।' : 'Our team of writers and fact-verification process in accordance with Google News and Google Discover standards.'
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 dark:text-white mb-6",
                                children: language === 'hi' ? 'मुख्य तकनीकी संपादक और लेखक' : 'Key Technical Editors & Writers'
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: authors.map((author)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row gap-5 items-start sm:items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: author.avatar,
                                                alt: author.name,
                                                className: "w-20 h-20 rounded-2xl object-cover ring-2 ring-red-500/20 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0 space-y-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between flex-wrap gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-gray-900 dark:text-white flex items-center gap-1.5",
                                                                children: [
                                                                    author.name,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-blue-500 text-[18px]",
                                                                        title: "Verified Author",
                                                                        children: "verified"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                                        lineNumber: 70,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/editorial-team.tsx",
                                                                lineNumber: 68,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "text-xs bg-red-50 dark:bg-red-950/40 text-[#bb010d] px-2.5 py-1 rounded-full font-bold",
                                                                children: [
                                                                    author.articlesCount,
                                                                    " ",
                                                                    language === 'hi' ? 'प्रकाशित लेख' : 'Published Articles'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/editorial-team.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-[#bb010d]",
                                                        children: author.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed",
                                                        children: author.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "pt-1 flex items-center gap-3 text-xs text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    language === 'hi' ? 'ट्विटर:' : 'Twitter:',
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                                        className: "text-gray-700 dark:text-gray-300",
                                                                        children: author.twitter
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                                        lineNumber: 81,
                                                                        columnNumber: 72
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/pages/editorial-team.tsx",
                                                                lineNumber: 81,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/editorial-team.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                children: language === 'hi' ? 'प्रामाणिक टेक समीक्षक' : 'Authentic Tech Reviewer'
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/editorial-team.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, author.id, true, {
                                        fileName: "[project]/pages/editorial-team.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-gray-900 dark:text-white",
                                children: language === 'hi' ? 'हमारी संपादकीय और सत्यापन प्रक्रिया' : 'Our Editorial & Verification Process'
                            }, void 0, false, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[#bb010d]",
                                                        children: "biotech"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 17
                                                    }, this),
                                                    language === 'hi' ? '1. वास्तविक डिवाइस टेस्टिंग' : '1. Real Device Testing'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-300 leading-relaxed",
                                                children: language === 'hi' ? 'किसी भी कीबोर्ड शॉर्टकट, रन कमांड, या कोड ट्यूटोरियल को प्रकाशित करने से पहले हमारे तकनीकी विशेषज्ञ विंडोज 10/11, मैक, और लिनक्स प्रणालियों पर व्यक्तिगत रूप से जांचते हैं।' : 'Before publishing any keyboard shortcut, run command, or code tutorial, our technical experts personally test it on Windows 10/11, Mac, and Linux systems.'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/editorial-team.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[#bb010d]",
                                                        children: "smart_toy"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 17
                                                    }, this),
                                                    language === 'hi' ? '2. AI सामग्री प्रकटीकरण नीति' : '2. AI Content Disclosure Policy'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-300 leading-relaxed",
                                                children: language === 'hi' ? 'हम अनुसंधान में सहायता के लिए कृत्रिम बुद्धिमत्ता का उपयोग कर सकते हैं, लेकिन टेकवाणी पर प्रकाशित प्रत्येक शब्द हमारे मानवीय संपादकों द्वारा समीक्षा और तथ्य-सत्यापित किया जाता है।' : 'We may use AI to assist in research, but every word published on TechVani is reviewed and fact-checked by our human editors.'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/editorial-team.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[#bb010d]",
                                                        children: "rule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 17
                                                    }, this),
                                                    language === 'hi' ? '3. निष्पक्षता और स्वतंत्रता' : '3. Fairness & Independence'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-300 leading-relaxed",
                                                children: language === 'hi' ? 'हमारा संपादकीय प्रभाग किसी भी विज्ञापनदाता या हार्डवेयर निर्माता के दबाव से पूरी तरह मुक्त है। हमारी उत्पाद समीक्षाएं पूरी तरह वास्तविक प्रदर्शन पर आधारित हैं।' : 'Our editorial division is completely free from pressure by any advertiser or hardware manufacturer. Our product reviews are based entirely on actual performance.'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/editorial-team.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 dark:bg-gray-800/60 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold text-gray-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[#bb010d]",
                                                        children: "published_with_changes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/editorial-team.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, this),
                                                    language === 'hi' ? '4. सार्वजनिक संशोधन लॉग' : '4. Public Corrections Log'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-300 leading-relaxed",
                                                children: language === 'hi' ? 'यदि किसी लेख में तथ्यात्मक गलती पाई जाती है, तो हम पाठकों को स्पष्ट रूप से सूचित करते हुए लेख के अंत में संशोधन नोट जोड़ते हैं।' : 'If a factual error is found in an article, we add a correction note at the end of the article, clearly informing the readers.'
                                            }, void 0, false, {
                                                fileName: "[project]/pages/editorial-team.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/editorial-team.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/editorial-team.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/editorial-team.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/editorial-team.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/editorial-team.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
const getServerSideProps = async ()=>{
    try {
        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getAuthors();
        // अगर डेटा मिलता है और खाली नहीं है, तो उसे भेजें, वरना mockAuthors भेजें
        const authors = data && data.length > 0 ? data : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockAuthors"];
        return {
            props: {
                authors
            }
        };
    } catch (error) {
        console.error("Error fetching authors:", error);
        return {
            props: {
                authors: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockAuthors"]
            }
        };
    }
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1vjaemx2b7ttp._.js.map