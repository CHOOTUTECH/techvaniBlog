module.exports = [
(()=>{"use strict";return[
"[project]/pages/_app.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// pages/_app.tsx
__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppContext.tsx [ssr] (ecmascript)");
;
;
;
;
;
;
function App({ Component, pageProps }) {
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('hi');
    // Language load
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        try {
            const saved = localStorage.getItem('techvani-lang');
            if (saved === 'hi' || saved === 'en') setLanguage(saved);
        } catch  {}
    }, []);
    // Language save
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        try {
            localStorage.setItem('techvani-lang', language);
            document.documentElement.lang = language;
        } catch  {}
    }, [
        language
    ]);
    const toggleLanguage = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useCallback"])(()=>{
        setLanguage((v)=>v === 'hi' ? 'en' : 'hi');
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["LanguageContext"].Provider, {
        value: {
            language,
            toggleLanguage
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "flex flex-col min-h-screen",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                    fileName: "[project]/pages/_app.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
                    className: "flex-grow",
                    style: {
                        paddingTop: '146px'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                        ...pageProps
                    }, void 0, false, {
                        fileName: "[project]/pages/_app.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/pages/_app.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                    fileName: "[project]/pages/_app.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/pages/_app.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/pages/_app.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Footer.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// src/components/Footer.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/djangoApi.ts [ssr] (ecmascript)");
;
;
;
;
const Footer = ()=>{
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleSubscribe = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].subscribeNewsletter(email);
            setStatus(res);
            if (res.success) setEmail('');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
        className: "w-full bg-[#141d23] text-[#e0e9f2] pt-12 pb-8 border-t border-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-red-400 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[22px]",
                                                children: "mark_email_read"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "text-xs uppercase font-bold tracking-wider",
                                                children: "साप्ताहिक टेक डाइजेस्ट"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold text-white mb-1.5",
                                        children: "हमारे न्यूज़लेटर से जुड़ें"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-400",
                                        children: "हर हफ्ते नई कोडिंग टिप्स, गुप्त कंप्यूटर ट्रिक्स और उत्पादकता शॉर्टकट्स सीधे अपने ईमेल में मुफ्त पाएं।"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubscribe,
                                        className: "flex flex-col sm:flex-row gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value),
                                                placeholder: "आपका ईमेल पता...",
                                                required: true,
                                                className: "bg-white/10 border border-white/20 text-white placeholder:text-gray-400 px-4 py-2.5 rounded-lg text-sm flex-1 focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: loading,
                                                className: "bg-[#bb010d] hover:bg-[#e02924] disabled:opacity-50 text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors shrink-0 shadow-md cursor-pointer",
                                                children: loading ? 'प्रोसेसिंग...' : 'सदस्यता लें'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        className: `text-xs mt-2 ${status.success ? 'text-emerald-400' : 'text-red-400'}`,
                                        children: status.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-extrabold text-[#bb010d] leading-none",
                                            children: [
                                                "टेक",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "वाणी"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 88
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-1",
                                            children: "हिंदी टेक पोर्टल"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-400 leading-relaxed",
                                    children: "भारत का अग्रणी हिंदी टेक मैगज़ीन पोर्टल जहां आपको प्रोग्रामिंग, कंप्यूटर दक्षता और हार्डवेयर की प्रामाणिक जानकारी सरल हिंदी में मिलती है।"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "text-xs uppercase tracking-wider font-bold text-white mb-4",
                                    children: "त्वरित लिंक्स"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/",
                                                className: "hover:text-white transition-colors",
                                                children: "मुख्य पृष्ठ"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/category/programming",
                                                className: "hover:text-white transition-colors",
                                                children: "प्रोग्रामिंग ट्यूटोरियल"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/category/keyboard-shortcuts",
                                                className: "hover:text-white transition-colors",
                                                children: "कीबोर्ड शॉर्टकट्स"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 66,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/category/gadgets",
                                                className: "hover:text-white transition-colors",
                                                children: "गैजेट समीक्षा"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 67,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/tools",
                                                className: "hover:text-white transition-colors",
                                                children: "ऑनलाइन टूल्स"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "text-xs uppercase tracking-wider font-bold text-white mb-4",
                                    children: "लोकप्रिय टैग्स"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        {
                                            name: 'पायथन',
                                            slug: 'python'
                                        },
                                        {
                                            name: 'जावास्क्रिप्ट',
                                            slug: 'javascript'
                                        },
                                        {
                                            name: 'विंडोज 11',
                                            slug: 'windows-11'
                                        },
                                        {
                                            name: 'एक्सेल',
                                            slug: 'excel-tricks'
                                        },
                                        {
                                            name: 'VS Code',
                                            slug: 'vs-code'
                                        }
                                    ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/tag/${tag.slug}`,
                                            className: "text-xs bg-white/5 hover:bg-[#bb010d] text-gray-300 hover:text-white px-2.5 py-1 rounded transition-colors",
                                            children: [
                                                "#",
                                                tag.name
                                            ]
                                        }, tag.slug, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h4", {
                                    className: "text-xs uppercase tracking-wider font-bold text-white mb-4",
                                    children: "नीति व सहायता"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2.5 text-sm text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/about",
                                                className: "hover:text-white transition-colors",
                                                children: "हमारे बारे में (About Us)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 84,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "hover:text-white transition-colors",
                                                children: "संपर्क करें (Contact)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 85,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/privacy-policy",
                                                className: "hover:text-white transition-colors font-medium text-gray-300",
                                                children: "गोपनीयता नीति (Privacy Policy)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/terms",
                                                className: "hover:text-white transition-colors",
                                                children: "नियम और शर्तें (Terms)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/editorial-team",
                                                className: "hover:text-white transition-colors",
                                                children: "संपादकीय टीम"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: "सर्वाधिकार सुरक्षित © 2025 टेकवाणी। सर्वाधिकार TechVani Media द्वारा आरक्षित।"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "हिंदी (भारत)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sitemap",
                                    className: "hover:text-gray-300 transition-colors",
                                    children: "साइटमैप"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/privacy-policy",
                                    className: "hover:text-gray-300 transition-colors",
                                    children: "गोपनीयता नीति"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/components/Header.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// src/components/Header.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockDjangoData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/AppContext.tsx [ssr] (ecmascript)");
;
;
;
;
;
const Header = ()=>{
    const { language, toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$AppContext$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["LanguageContext"]);
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const trendingTopics = [
        {
            text: language === 'hi' ? 'कंप्यूटर प्रोग्रामिंग क्या है? शुरुआती गाइड' : 'What is Computer Programming? Beginner Guide',
            link: '/article/computer-programming-kya-hai'
        },
        {
            text: language === 'hi' ? 'Windows 11 के 25 सबसे उपयोगी कीबोर्ड शॉर्टकट्स' : '25 Useful Windows 11 Keyboard Shortcuts',
            link: '/article/windows-11-25-useful-keyboard-shortcuts'
        },
        {
            text: language === 'hi' ? 'Git और GitHub कैसे काम करते हैं' : 'How Git and GitHub Work',
            link: '/article/git-and-github-explained-beginners-guide'
        },
        {
            text: language === 'hi' ? 'पायथन 2025 में स्क्रैच से सीखें' : 'Learn Python from Scratch 2025',
            link: '/article/python-learn-from-scratch-2025-guide'
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const today = new Date();
        setCurrentDate(language === 'hi' ? today.toLocaleDateString('hi-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }) : today.toLocaleDateString('en-GB', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, [
        language
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-[#f6faff]/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] border-b border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-[#141d23] text-[#e0e9f2] py-1.5 px-4 text-xs font-medium",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1 text-[#ffb4aa]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[14px]",
                                    children: "calendar_today"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                currentDate || '...'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "hover:text-red-400 transition-colors",
                                    children: language === 'hi' ? 'हमारे बारे में' : 'About Us'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "hover:text-red-400 transition-colors",
                                    children: language === 'hi' ? 'संपर्क' : 'Contact'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-white py-3 px-4 border-b border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto flex items-center justify-between gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex flex-col text-left group shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-3xl font-extrabold tracking-tight text-[#bb010d] leading-none",
                                    children: [
                                        "टेक",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "text-[#141d23]",
                                            children: "वाणी"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 82,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] text-gray-500 tracking-widest uppercase font-bold mt-1",
                                    children: "Hindi Tech Magazine"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "hidden lg:flex items-center flex-1 mx-8 overflow-hidden relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    className: "bg-[#bb010d] text-white text-[11px] px-2.5 py-1 rounded font-bold uppercase tracking-wider shrink-0 z-10 mr-3 shadow-sm",
                                    children: language === 'hi' ? 'ट्रेंडिंग' : 'TRENDING'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden flex-1 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "animate-marquee flex gap-8 w-max",
                                        children: [
                                            trendingTopics.map((topic, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: topic.link,
                                                    className: "text-sm font-medium text-gray-700 hover:text-[#bb010d] whitespace-nowrap transition-colors",
                                                    children: [
                                                        "• ",
                                                        topic.text
                                                    ]
                                                }, `a-${idx}`, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            trendingTopics.map((topic, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: topic.link,
                                                    className: "text-sm font-medium text-gray-700 hover:text-[#bb010d] whitespace-nowrap transition-colors",
                                                    children: [
                                                        "• ",
                                                        topic.text
                                                    ]
                                                }, `b-${idx}`, true, {
                                                    fileName: "[project]/src/components/Header.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: toggleLanguage,
                                    className: "flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors text-sm font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[18px]",
                                            children: "language"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        language === 'hi' ? 'English' : 'हिंदी'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/editorial-team",
                                    title: "Editorial Team",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                        alt: "Editor",
                                        className: "w-9 h-9 rounded-full object-cover ring-2 ring-red-500/30 cursor-pointer",
                                        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRqWTnK78J57cA3pwd5P5LdLh8F9h4rmJvHKVLcd74gYLfIwO19L_GFdjQzG_CA4RhcXrex_xwxWVvanO9E_vgOJDO35mRbtADBom8MMtNCtF32plRqivyAoBrQSHRNfWounA1j6UdCqNOVGePsQnGc7hOMkOdLEsb37n6WE3cchoml3sIO0T96lBICb9iTVkpNTx7Ky1k_zmCPPcx1lSMiGyTRtXnglEJNMLoV_cKw-QXuTqJ9YSU"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "bg-[#141d23] text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "max-w-[1280px] mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-1 overflow-x-auto py-1.5",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockCategories"].map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: cat.slug === 'home' ? '/' : `/category/${cat.slug}`,
                                    className: "px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap font-medium text-gray-200 hover:text-white hover:bg-white/10",
                                    children: cat.name
                                }, cat.id, false, {
                                    fileName: "[project]/src/components/Header.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tools",
                                className: "px-3 py-1.5 rounded text-xs md:text-sm whitespace-nowrap font-medium text-gray-200 hover:text-white hover:bg-white/10",
                                children: language === 'hi' ? 'ऑनलाइन टूल्स' : 'Online Tools'
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Header.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/config/apiConfig.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Django REST Framework API Configuration
 * 
 * जब आप अपने लोकल कंप्यूटर में Django चलाएंगे:
 * 1. .env में NEXT_PUBLIC_DJANGO_API_BASE_URL="http://127.0.0.1:8000/api/v1" सेट करें
 * 2. जब तक Django सर्वर चालू नहीं होता, यह ऐप अपने आप बिल्ट-इन सुरक्षित डेटा का उपयोग करेगा
 *    ताकि कोई एरर न आए।
 */ // src/config/apiConfig.ts
__turbopack_context__.s([
    "API_CONFIG",
    ()=>API_CONFIG
]);
const API_CONFIG = {
    // 🔥 Next.js का process.env इस्तेमाल करें
    BASE_URL: process.env.NEXT_PUBLIC_DJANGO_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
    // Timeout in milliseconds
    TIMEOUT: 3500,
    // Headers for Django REST Framework
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    // Fallback to local data if Django server is not reachable
    // 🔥 यहाँ भी process.env और NEXT_PUBLIC_ प्रीफिक्स लगाएँ
    USE_FALLBACK: process.env.NEXT_PUBLIC_USE_MOCK_FALLBACK !== 'false'
};
}),
"[project]/src/context/AppContext.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageContext",
    ()=>LanguageContext,
    "ModalContext",
    ()=>ModalContext
]);
// src/context/AppContext.tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    language: 'hi',
    toggleLanguage: ()=>{}
});
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    openCheatSheet: ()=>{},
    openVideoTutorial: ()=>{}
});
}),
"[project]/src/data/mockDjangoData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockArticles",
    ()=>mockArticles,
    "mockAuthors",
    ()=>mockAuthors,
    "mockCategories",
    ()=>mockCategories,
    "mockComments",
    ()=>mockComments,
    "mockTags",
    ()=>mockTags
]);
const mockAuthors = [
    {
        id: 1,
        name: 'राहुल शर्मा',
        role: 'सीनियर टेक एडिटर & सिस्टम्स आर्किटेक्ट',
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRqWTnK78J57cA3pwd5P5LdLh8F9h4rmJvHKVLcd74gYLfIwO19L_GFdjQzG_CA4RhcXrex_xwxWVvanO9E_vgOJDO35mRbtADBom8MMtNCtF32plRqivyAoBrQSHRNfWounA1j6UdCqNOVGePsQnGc7hOMkOdLEsb37n6WE3cchoml3sIO0T96lBICb9iTVkpNTx7Ky1k_zmCPPcx1lSMiGyTRtXnglEJNMLoV_cKw-QXuTqJ9YSU',
        bio: '10+ वर्षों का सिस्टम एडमिनिस्ट्रेशन और विंडोज/लिनक्स आर्किटेक्चर का अनुभव। टेकवाणी के प्रधान संपादक।',
        twitter: '@rahul_techvani',
        articlesCount: 142
    },
    {
        id: 2,
        name: 'अमन वर्मा',
        role: 'हार्डवेयर और गैजेट स्पेशलिस्ट',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
        bio: 'गेमिंग रिग्स, कस्टम मैकेनिकल कीबोर्ड्स और वर्कस्टेशन बेंचमार्क्स के विशेषज्ञ।',
        twitter: '@aman_gadgets',
        articlesCount: 88
    },
    {
        id: 3,
        name: 'प्रिया देसाई',
        role: 'फ्रंटएंड डेवलपर & डिस्प्ले एनालिस्ट',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
        bio: 'React, Next.js और अल्ट्रावाइड डिस्प्ले वर्कफ्लो पर तकनीकी गाइड लिखती हैं।',
        twitter: '@priya_codes',
        articlesCount: 65
    },
    {
        id: 4,
        name: 'विक्रम राठौर',
        role: 'AI & पायथन इंजीनियर',
        avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
        bio: 'पायथन, मशीन लर्निंग और ओपन-सोर्स डेवलपमेंट के शौकीन।',
        twitter: '@vikram_py',
        articlesCount: 94
    }
];
const mockCategories = [
    {
        id: 1,
        name: 'मुख्य पृष्ठ',
        slug: 'home',
        description: 'टेकवाणी के सभी ताज़ा लेख और ट्रेंडिंग टेक विश्लेषण',
        icon: 'home'
    },
    {
        id: 2,
        name: 'प्रोग्रामिंग',
        slug: 'programming',
        description: 'पायथन, जावास्क्रिप्ट, वेब डेवलपमेंट और सॉफ्टवेयर इंजीनियरिंग गाइड',
        icon: 'terminal'
    },
    {
        id: 3,
        name: 'कीबोर्ड शॉर्टकट्स',
        slug: 'keyboard-shortcuts',
        description: 'विंडोज, मैक, एक्सेल, वीएस कोड और ब्राउज़र के उत्पादक शॉर्टकट्स',
        icon: 'keyboard'
    },
    {
        id: 4,
        name: 'कंप्यूटर ट्रिक्स',
        slug: 'computer-tricks',
        description: 'छिपे हुए सिस्टम टूल्स, विंडोज रन कमांड्स और स्पीड ऑप्टिमाइजेशन टिप्स',
        icon: 'laptop_windows'
    },
    {
        id: 5,
        name: 'गैजेट्स',
        slug: 'gadgets',
        description: 'लैपटॉप, मॉनिटर्स, मैकेनिकल कीबोर्ड्स और स्मार्ट एक्सेसरीज की निष्पक्ष समीक्षा',
        icon: 'devices'
    },
    {
        id: 6,
        name: 'सॉफ्टवेयर',
        slug: 'software',
        description: 'डेस्कटॉप सॉफ्टवेयर, यूटिलिटीज, उत्पादकता ऐप्स और ओएस टूल्स',
        icon: 'apps'
    },
    {
        id: 7,
        name: 'टेक गाइड',
        slug: 'tech-guides',
        description: 'चरण-दर-चरण तकनीकी ट्यूटोरियल और समस्या निवारण गाइड्स',
        icon: 'menu_book'
    }
];
const mockTags = [
    {
        id: 1,
        name: 'Python',
        slug: 'python',
        count: 48
    },
    {
        id: 2,
        name: 'JavaScript',
        slug: 'javascript',
        count: 36
    },
    {
        id: 3,
        name: 'Windows11',
        slug: 'windows-11',
        count: 52
    },
    {
        id: 4,
        name: 'ExcelTricks',
        slug: 'excel-tricks',
        count: 28
    },
    {
        id: 5,
        name: 'MacBookM3',
        slug: 'macbook-m3',
        count: 19
    },
    {
        id: 6,
        name: 'VSCode',
        slug: 'vs-code',
        count: 31
    },
    {
        id: 7,
        name: 'AIटूल्स',
        slug: 'ai-tools',
        count: 44
    },
    {
        id: 8,
        name: 'CyberSecurity',
        slug: 'cyber-security',
        count: 23
    },
    {
        id: 9,
        name: 'React19',
        slug: 'react-19',
        count: 17
    },
    {
        id: 10,
        name: 'GitHub',
        slug: 'git-hub',
        count: 25
    },
    {
        id: 11,
        name: 'Linux',
        slug: 'linux',
        count: 39
    }
];
const mockArticles = [
    // MAIN HERO ARTICLE
    {
        id: 1,
        title: 'विंडोज 11 के 25 सबसे उपयोगी कीबोर्ड शॉर्टकट्स जो आपका समय 2x बचाएंगे',
        slug: 'windows-11-25-useful-keyboard-shortcuts',
        excerpt: 'डेस्कटॉप स्विचिंग, वर्चुअल वर्कस्पेस, क्लिपबोर्ड हिस्ट्री और टर्मिनल एक्सेस को सहज बनाकर अपने दैनिक कंप्यूटर कार्य को सुपरचार्ज करें।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1ME4gn0MqYe9-DVvwUTtan8Il5QbOWj1hGOwNQepSzUG3U7bZKPaPCHuHhXnyRW5yj85zdo5sGjijw6URRPOZAyJ3Dk-MVNSsDg7xluRng9UzrBB-qSiyzl0seSH1jg0CIy4fRF2BltHo3_3ySoTccGc4P42gZdisKtjd8P1W5DymOzZMMRpFP0ohbnG2BY9WtZljmvmUZI7OY_ELHE6JEUpuQBbWq7VuWmt7CVOHkJNfOyeyN--S',
        imageAlt: 'Modern programmer workspace featuring multiple curved high-resolution monitors glowing with terminal code, sleek backlit mechanical keyboard',
        category: mockCategories[2],
        tags: [
            mockTags[2],
            mockTags[3]
        ],
        author: mockAuthors[0],
        publishedAt: '24 अक्टूबर 2024',
        readingTimeMinutes: 5,
        viewsCount: 38420,
        commentsCount: 42,
        isEditorialChoice: true,
        isTrending: true,
        isFeatured: true,
        featuredOrder: 1,
        shortcuts: [
            {
                key: 'Win + V',
                action: 'क्लिपबोर्ड हिस्ट्री खोलें (पिछले कई कॉपी किए गए टेक्स्ट और स्क्रीनशॉट्स देखें)',
                platform: 'windows'
            },
            {
                key: 'Win + Shift + S',
                action: 'स्निपिंग टूल से कस्टम स्क्रीनशॉट कैप्चर करें',
                platform: 'windows'
            },
            {
                key: 'Win + . (Dot)',
                action: 'इमोजी, जीआईएफ और विशेष प्रतीक मेनू खोलें',
                platform: 'windows'
            },
            {
                key: 'Win + Ctrl + D',
                action: 'नया वर्चुअल डेस्कटॉप बनाएं',
                platform: 'windows'
            },
            {
                key: 'Win + Ctrl + Left/Right',
                action: 'विभिन्न वर्चुअल डेस्कटॉप्स के बीच स्विच करें',
                platform: 'windows'
            },
            {
                key: 'Win + Alt + Up',
                action: 'विंडो को स्क्रीन के ऊपरी हिस्से में स्नैप करें (Snap Layouts)',
                platform: 'windows'
            },
            {
                key: 'Ctrl + Shift + Esc',
                action: 'टास्क मैनेजर को बिना किसी देरी के सीधे खोलें',
                platform: 'windows'
            },
            {
                key: 'Win + X, फिर A',
                action: 'Windows Terminal या PowerShell को एडमिनिस्ट्रेटर मोड में खोलें',
                platform: 'windows'
            }
        ],
        content: `
## दैनिक कंप्यूटर कार्य को सुपरचार्ज करने वाले शॉर्टकट्स

विंडोज 11 में माइक्रोसॉफ्ट ने कई नए फीचर्स और आधुनिक इंटरफेस एलिमेंट्स जोड़े हैं। यदि आप केवल माउस पर निर्भर रहते हैं, तो आप अपना बहुत सारा कीमती समय बर्बाद कर रहे हैं। इस विस्तृत गाइड में हम ऐसे 25 सिद्ध कीबोर्ड शॉर्टकट्स साझा कर रहे हैं जो एक प्रो यूजर की तरह आपके वर्कफ्लो को गति देंगे।

### 1. आधुनिक क्लिपबोर्ड और स्निपिंग टूल्स
* **Win + V**: यह शॉर्टकट विंडोज 11 का सबसे बड़ा लाइफ-सेवर है। पहली बार दबाने पर यह क्लिपबोर्ड हिस्ट्री को ऑन करता है। इसके बाद आप जो कुछ भी कॉपी करते हैं, वह सेव रहता है—यहाँ तक कि रिबूट के बाद भी पिन की गई चीज़ें सुरक्षित रहती हैं।
* **Win + Shift + S**: आधुनिक स्क्रीनशॉट टूल। आप फ्रीफॉर्म, रेक्टेंगल या पूरी विंडो का तुरंत स्क्रीनशॉट ले सकते हैं जो ऑटोमैटिक क्लिपबोर्ड में आ जाता है।

### 2. मल्टीटास्किंग और स्नैप लेआउट्स
विंडोज 11 का **Snap Layouts** फीचर मल्टीपल मॉनिटर्स और बड़ी स्क्रीन्स के लिए वरदान है:
* **Win + Z**: स्नैप लेआउट ग्रिड दिखाएं ताकि आप किसी भी विंडो को स्क्रीन के 1/2, 1/3 या 1/4 भाग में सटीक बैठा सकें।
* **Win + D**: एक झटके में सभी खुली विंडोज को मिनिमाइज करके सीधा डेस्कटॉप देखें। दोबारा दबाने पर सब वापस आ जाएगा।

### 3. वर्चुअल डेस्कटॉप का स्मार्ट उपयोग
कोडिंग, ऑफिस डॉक्यूमेंट्स और पर्सनल ब्राउजिंग को अलग रखने के लिए:
* **Win + Ctrl + D**: नया वर्चुअल डेस्कटॉप तुरंत बनाएं।
* **Win + Ctrl + Arrow Keys**: डेस्कटॉप्स के बीच सेकंड्स में स्विच करें।
    `,
        faqs: [
            {
                question: 'क्या Win + V शॉर्टकट विंडोज 10 में भी काम करता है?',
                answer: 'हाँ, विंडोज 10 में भी क्लिपबोर्ड हिस्ट्री का विकल्प मौजूद है। पहली बार दबाने पर "Turn On" पर क्लिक करना होता है।'
            },
            {
                question: 'यदि कोई शॉर्टकट काम न करे तो क्या करें?',
                answer: 'जांचें कि क्या कीबोर्ड पर "Fn Lock" या "Gaming Mode" ऑन है जो Windows Key को डिसेबल कर देता है।'
            }
        ]
    },
    // HERO SUB 1
    {
        id: 2,
        title: 'पायथन (Python) 2025 में स्क्रैच से कैसे सीखें: संपूर्ण शुरुआती गाइड',
        slug: 'python-learn-from-scratch-2025-guide',
        excerpt: 'वेरिएबल्स, लूप्स, फंक्शन्स और डेटा स्ट्रक्चर्स से शुरुआत करके AI और वेब डेवलपमेंट तक का सटीक रोडमैप।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkCaZ_3J6M89Us5yc3DBSxygCptlkOakb-IcII__ChqgFEcvyQ0YO7nwYz0TcrDgaPy2AG2Xrim1fucr0mq6qmZWnlzxVNNXkMmvNTY7Rave_ZoQZbkRzniPFyOZAi17T0QCkAm0W8vZUzi7bN-eygrAkW6nVeRu6mrRqZDtEYQwp9TScNVfN26fmz65nw2z4DKzRfe3ghLFtPbM6kx_S8mARwfCU2UCkgsTRMjzioXaEhDbnzgn89',
        imageAlt: 'Digital developer desk with vibrant Python code displayed on laptop screen, modern desk plant, notebook',
        category: mockCategories[1],
        tags: [
            mockTags[0],
            mockTags[6]
        ],
        author: mockAuthors[3],
        publishedAt: '23 अक्टूबर 2024',
        readingTimeMinutes: 8,
        viewsCount: 29140,
        commentsCount: 19,
        isTrending: true,
        isFeatured: true,
        featuredOrder: 2,
        content: `
## पायथन क्यों है 2025 की नंबर-1 प्रोग्रामिंग भाषा?

पायथन की सबसे बड़ी खूबी इसका सरल, अंग्रेजी जैसा सिंटैक्स और विशाल कम्युनिटी सपोर्ट है। डेटा साइंस, मशीन लर्निंग (AI), ऑटोमेशन और वेब डेवलपमेंट (Django/FastAPI) में पायथन का एकाधिकार है।

\`\`\`python
# आपका पहला पायथन प्रोग्राम
def greet_coder(name: str) -> str:
    return f"नमस्ते, {name}! टेकवाणी में आपका स्वागत है।"

print(greet_coder("डेवलपर"))
\`\`\`

### पायथन 2025 सीखने का 4-चरणीय रोडमैप:
1. **महीना 1: बुनियादी ज्ञान**: वेरिएबल्स, डेटा टाइप्स (List, Dict, Tuple, Set), कंडीशनल्स और फंक्शन्स।
2. **महीना 2: ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग (OOP)**: क्लासेज, इनहेरिटेंस, एक्सेप्शन हैंडलिंग और मॉड्यूल्स।
3. **महीना 3: लाइब्रेरीज़ और डेटा एनालिसिस**: NumPy, Pandas और Matplotlib से डेटा विज़ुअलाइज़ेशन।
4. **महीना 4: वेब डेवलपमेंट या AI**: Django REST Framework से बैकएंड APIs बनाएं या Scikit-Learn से AI प्रोजेक्ट्स।
    `,
        faqs: [
            {
                question: 'क्या पायथन सीखने के लिए मैथ्स में बहुत अच्छा होना ज़रूरी है?',
                answer: 'शुरुआती कोडिंग और वेब डेवलपमेंट के लिए केवल बेसिक लॉजिक काफी है। एडवांस AI या रिसर्च के लिए ही लीनियर अल्जेब्रा की जरूरत होती है।'
            }
        ]
    },
    // HERO SUB 2
    {
        id: 3,
        title: 'M3 चिपसेट वाले नए लैपटॉप्स: क्या यह भारी कोडिंग और AI मॉडल्स के लिए बेस्ट हैं?',
        slug: 'm3-chipset-laptops-coding-ai-benchmark-review',
        excerpt: '3nm आर्किटेक्चर, यूनिफाइड मेमोरी परफॉर्मेंस और लोकल LLMs रन करने की क्षमता का गहन तकनीकी विश्लेषण।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkNv6p6Xei4LBadkqfpDfN0dNFXSBprj5J8ykMoR6EUtozxN7a5x4btY4X_77CmYxUneuk9mSaL03p3FtG4mGcZvr94p1OzFIsAq2nlekCvGPvmZIz771nDaEhSKeMR_OORJTBpo_ulnulMq0mWtMr5o8FOIcf00Zy1TPbFPka9UjTtLzxt6nnB7R720k96O9ppDzOPz7Zj-CVlDuL4D5s1MTQ6AxQUDjkUzUbCBdquJZKm9BZpLZX',
        imageAlt: 'Close up of a sleek space grey premium laptop open on a modern oak studio table showing technical system diagnostic graphs and benchmarks',
        category: mockCategories[4],
        tags: [
            mockTags[4],
            mockTags[6]
        ],
        author: mockAuthors[1],
        publishedAt: '21 अक्टूबर 2024',
        readingTimeMinutes: 6,
        viewsCount: 18560,
        commentsCount: 31,
        isTrending: true,
        isFeatured: true,
        featuredOrder: 3,
        rating: 9.2,
        productPrice: '₹1,69,900',
        productSpecs: {
            'प्रोसेसर': 'Apple M3 Pro (12-कोर CPU, 18-कोर GPU)',
            'रैम': '36GB Unified Memory',
            'स्टोरेज': '1TB NVMe SSD',
            'डिस्प्ले': '16.2-इंच Liquid Retina XDR (120Hz ProMotion)',
            'बैटरी बैकअप': '22 घंटे तक वीडियो प्लेबैक'
        },
        pros: [
            'अविश्वसनीय 20+ घंटे की वास्तविक बैटरी लाइफ',
            'यूनिफाइड मेमोरी के कारण 7B/13B Llama मॉडल्स बिना GPU क्रैश के मक्खन चलते हैं',
            'साइलेंट कूलिंग और न के बराबर हीटिंग'
        ],
        cons: [
            'रैम और स्टोरेज को बाद में अपग्रेड नहीं किया जा सकता',
            'अतिरिक्त स्टोरेज की कीमत बहुत अधिक है'
        ],
        content: `
## डेवलपर्स के लिए M3 चिपसेट का वास्तविक प्रदर्शन

एप्पल के 3-नैनोमीटर वाले M3 Pro और M3 Max चिपसेट ने लैपटॉप कंप्यूटिंग में क्रांतिकारी बदलाव किया है। हमारी लैब में हमने इस पर Docker कंटेनर्स, भारी Next.js/Django कंपाइलेशन और Ollama के जरिए लोकल AI मॉडल्स को टेस्ट किया।

### बेंचमार्क निष्कर्ष:
* **Docker बिल्ड टाइम**: इंटेल Core i7 की तुलना में 45% तेज।
* **बैटरी लाइफ**: निरंतर कोडिंग और सर्वर टेस्टिंग के बावजूद लगातार 14 घंटे चली।
* **यूनिफाइड मेमोरी का जादू**: 36GB रैम पर हमने एक साथ 3 फुल-स्टैक प्रोजेक्ट्स और VS Code के 15 टैब्स आसानी से चलाए।
    `
    },
    // SECTION 1: PROGRAMMING CORNER
    {
        id: 4,
        title: 'VS Code के 10 सुपर एक्सटेंशन्स जो हर सॉफ्टवेयर डेवलपर को चाहिए',
        slug: 'top-10-vs-code-extensions-developers-2025',
        excerpt: 'कोड ऑटोकम्प्लीशन से लेकर लाइव डीबगिंग तक, ये 10 एक्सटेंशन आपके प्रोजेक्ट को तीव्र गति देंगे।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZTkNs7ourFJgwCfsUD7p6mr0GI2zBNR7s71JP0bJXIf9uGwFzJDLGYMolNG6-rUmhKh8fz_RxaskwRcqMl8TNAWa6Ub9yJ6NPYXYF0KzRPT1PH_45hrJqtCDb17nBOi-ezRmgwRSd-MNYGnJnrHS7QhgG2v26uYVf5gyhsTTzgDzfp8K9FtlSoIb6WtA_URdAJoT2SfPMC7_nNdX-TFzoFJvhqRfz90mFp8W4DDArBvcu5uX5n70t',
        imageAlt: 'Visual Studio Code software running on dual monitors showcasing colorful syntax highlighting in JavaScript and React environment',
        category: mockCategories[1],
        subCategory: 'Python',
        tags: [
            mockTags[5],
            mockTags[1]
        ],
        author: mockAuthors[0],
        publishedAt: '18 अक्टूबर 2024',
        readingTimeMinutes: 4,
        viewsCount: 22400,
        commentsCount: 16,
        content: `
## VS Code को सुपरचार्जर बनाने वाले 10 एक्सटेंशन:
1. **Prettier - Code Formatter**: फाइल सेव करते ही क्लीन कोड फॉर्मेटिंग।
2. **GitLens**: हर लाइन का Git इतिहास और ऑथर क्रेडिट तुरंत देखें।
3. **Error Lens**: गलतियों को कंसोल खोले बिना इनलाइन हाइलाइट करें।
4. **Auto Rename Tag**: HTML/JSX टैग बदलते ही क्लोजिंग टैग अपने आप बदल जाता है।
5. **Path Intellisense**: फाइल इंपोर्ट करते समय ऑटोमैटिक पाथ कम्प्लीशन।
    `
    },
    {
        id: 5,
        title: 'Git और GitHub कैसे काम करते हैं: शुरुआती डेवलपर्स के लिए स्टेप-बाय-स्टेप गाइड',
        slug: 'git-and-github-explained-beginners-guide',
        excerpt: 'ब्रांचिंग, मर्जींग और पुल रिक्वेस्ट के बुनियादी कॉन्सेप्ट्स को सरल व्यावहारिक उदाहरणों से समझें।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE9LWqJ6fzuEMyKkTcpnVEj0R8I5NjubrMBTNAFvEFYbcvx4_UmXh88ny3Uknvputruk6VCngGBhQgFS1v8YHGRhI5nvIjj-0rNjy9tbbImJA5biLpeVZbqgnGD6_qiLCsDSF3O4MrNMetJ2HK0UAGIJUxZsDBhbzV-RV7oXy4nqmDTqo2QyJ_Uc3VVey5MKSaFNKR0ILV_d-SRJsA-k-VXO0PK7ARFAi0wl2b3pmLxsQI8snG54YC',
        imageAlt: 'Infographic style representation of Git branches merging on a dark code matrix background with commit trees',
        category: mockCategories[1],
        subCategory: 'Web Dev',
        tags: [
            mockTags[9],
            mockTags[10]
        ],
        author: mockAuthors[0],
        publishedAt: '15 अक्टूबर 2024',
        readingTimeMinutes: 5,
        viewsCount: 19800,
        commentsCount: 11,
        content: `
## Git क्या है और इसे समझना क्यों अनिवार्य है?

Git एक डिस्ट्रिब्यूटेड वर्जन कंट्रोल सिस्टम है जो आपके कोड के हर बदलाव की टाइम मशीन जैसा इतिहास रखता है। GitHub इसी Git रिपॉजिटरी को क्लाउड पर स्टोर और सहयोग करने का सबसे लोकप्रिय प्लेटफॉर्म है।

### आवश्यक कमांड्स:
* \`git init\` - नई रिपॉजिटरी शुरू करें
* \`git add .\` - सभी बदलावों को स्टेज करें
* \`git commit -m "फीचर अपडेट"\` - बदलावों को सुरक्षित करें
* \`git push origin main\` - क्लाउड पर भेजें
    `
    },
    {
        id: 6,
        title: 'React 19 के नए फीचर्स: सर्वर एक्शन्स और नए कंपाइलर के साथ बड़ा बदलाव',
        slug: 'react-19-new-features-server-actions-compiler',
        excerpt: 'मेमोराइजेशन की झंझट खत्म! जानें कैसे React Compiler आपके कोड को अपने आप ऑप्टिमाइज़ करता है।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjeD3u9DIwCZq6n2YeNMcxN-OkRCRIOHhXusL8kuaSxb41lTuSnfOMyQcTMWUuqRoCyQbCC3VemaP-TrtveJ93ETgZi9K6my8OEa8_BzR3oUfWn7zm0uKcoLC8zAT2cOEpydxqUR-pAiWvxx_gqwrairSVaFkPDxlJLodqhFMgBXj3PmvZgyqSE_EXXQ2tEWHpRawirWNsjoHqSF9QUavDnjKTkmv2pQN43keIq5ANZn03cpISbsBO',
        imageAlt: 'Modern web design layout with React atoms and component trees glowing in futuristic tech style',
        category: mockCategories[1],
        subCategory: 'JavaScript',
        tags: [
            mockTags[8],
            mockTags[1]
        ],
        author: mockAuthors[2],
        publishedAt: '12 अक्टूबर 2024',
        readingTimeMinutes: 5,
        viewsCount: 16750,
        commentsCount: 14,
        content: `
## React 19: आधुनिक वेब डेवलपमेंट का नया युग

React 19 ने वर्षों पुरानी कई समस्याओं को हल कर दिया है। सबसे बड़ा बदलाव है **React Compiler** जो अब बिल्ड-टाइम पर ऑटोमैटिकली useMemo और useCallback लगा देता है, जिससे डेवलपर्स को हाथ से मेमोराइजेशन नहीं करना पड़ता।

### प्रमुख फीचर्स:
* **Server Actions**: फॉर्म सबमिशन को सीधे बैकएंड फंक्शन से जोड़ें।
* **useActionState और useOptimistic**: यूजर इंटरफेस को बिना लैग तुरंत अपडेट करें।
* **डॉक्यूमेंट मेटाडेटा नेटिव सपोर्ट**: कंपोनेंट के अंदर ही <title> और <meta> टैग्स इस्तेमाल करें।
    `
    },
    // SECTION 2: COMPUTER SHORTCUTS & SUPER TRICKS
    {
        id: 7,
        title: 'MS Excel के जादुई शॉर्टकट्स: घंटों का भारी डेटा केवल कुछ मिनटों में सॉर्ट करें',
        slug: 'ms-excel-magical-shortcuts-productivity',
        excerpt: 'फ्लैश फिल (Ctrl + E), ऑटो-सम और पिवट टेबल जनरेटर जैसे 12 पावर शॉर्टकट्स जो हर ऑफिस प्रोफेशनल और डेटा एनालिस्ट के पास होने चाहिए।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTTsEPtbEZgr-6iHKZRpAxLm2BE5TGBOPGIRdzwrHUF-jtzOSGMHgPNzcRbNiJCi8zRmbkerhNw3mPClAdZm3OYxx1c1eeRCOjbE5gximG6-AuyN3KrEvOeLFdOzWEut2lBblaARaqitunDwd4Xru7QrlzGc4sKhjFjxvFn3qybtEfFC8Gqmksx_uhhmxuL7UrdSBIV8WS5lobQiyDJdJm7JodtbaZ1C8V52hEiUXWGeuAsvAgpyBc',
        imageAlt: 'Spreadsheet calculation software on desktop screen with glowing data charts, pivot tables, and colorful cell highlighting',
        category: mockCategories[2],
        tags: [
            mockTags[3]
        ],
        author: mockAuthors[0],
        publishedAt: '14 अक्टूबर 2024',
        readingTimeMinutes: 3,
        viewsCount: 31200,
        commentsCount: 22,
        shortcuts: [
            {
                key: 'Ctrl + Shift + L',
                action: 'फिल्टर लगाएं या हटाएं',
                platform: 'both'
            },
            {
                key: 'Alt + =',
                action: 'ऑटो-सम (एक क्लिक में पूरा कॉलम जोड़ें)',
                platform: 'both'
            },
            {
                key: 'Ctrl + E',
                action: 'फ्लैश फिल (पैटर्न समझकर डेटा अलग करें)',
                platform: 'both'
            },
            {
                key: 'Ctrl + T',
                action: 'डेटा रेंज को स्मार्ट एक्सेल टेबल में बदलें',
                platform: 'both'
            }
        ],
        content: `
## एक्सेल में बिजली की तरह तेज़ काम कैसे करें?

यदि आप हर काम के लिए माउस से मेनू में क्लिक करते हैं, तो आपका काम 3 गुना धीमा हो जाता है।
* **Ctrl + Shift + L**: किसी भी टेबल के हेडर पर कर्सर रखकर यह दबाएं, तुरंत ड्रॉपडाउन फिल्टर लग जाएंगे।
* **Alt + =**: किसी भी नंबर कॉलम के नीचे यह दबाएं, एक्सेल अपने आप SUM फॉर्मूला डाल देगा।
* **Ctrl + E**: अगर एक कॉलम में "राहुल शर्मा" लिखा है और दूसरे में आप केवल "राहुल" टाइप करके Ctrl+E दबाएंगे, तो बाकी 1000 रो अपने आप फर्स्ट नेम भर देंगी।
    `
    },
    {
        id: 8,
        title: 'विंडोज में छिपे 7 सीक्रेट रन (Run) कमांड्स जो आपके कंप्यूटर को तुरंत तेज़ कर देंगे',
        slug: '7-secret-windows-run-commands-speed-up-pc',
        excerpt: 'बिना किसी थर्ड-पार्टी सॉफ्टवेयर के जंक कैश फाइल्स साफ करें, रिसोर्स मॉनिटर खोलें और नेटवर्क कॉन्फ़िगरेशन को तुरंत रीसेट करें।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd9R5JW3QL7MJ9iQkd20nG1avMegiWhNHBBOHLrLiSMT8CSnIjnsADEp1nrCwYSQRMbmrls1MnqD9l1nndMyj-Hcvq3b-Z_VodVr8j8zN4n1CXorO-Go63zBrVvZ5pGIHBzlC4s_xbrVevmSF6Dv9U3dLDtkh6CdVPsePNgv2b3lwrn6hmPR_e-pBte0dvejbmD5g1zkbceljdHl6nva6_kwQcpsyQyALbOG9byI1TDnM5b8puBod3',
        imageAlt: 'Windows 11 desktop showing Run command prompt box with terminal commands',
        category: mockCategories[3],
        tags: [
            mockTags[2]
        ],
        author: mockAuthors[0],
        publishedAt: '10 अक्टूबर 2024',
        readingTimeMinutes: 4,
        viewsCount: 27400,
        commentsCount: 18,
        shortcuts: [
            {
                key: 'Win + R → %temp%',
                action: 'अस्थायी जंक फाइल्स का फोल्डर खोलें',
                platform: 'windows'
            },
            {
                key: 'cleanmgr',
                action: 'डिस्क क्लीनअप यूटिलिटी चलाएं',
                platform: 'windows'
            },
            {
                key: 'resmon',
                action: 'रिसोर्स मॉनिटर खोलें (RAM और CPU विश्लेषण)',
                platform: 'windows'
            },
            {
                key: 'ncpa.cpl',
                action: 'नेटवर्क एडेप्टर सेटिंग्स तुरंत खोलें',
                platform: 'windows'
            }
        ],
        content: `
## बिना किसी एंटीवायरस या क्लीनर ऐप के पीसी की सफाई

थर्ड-पार्टी "क्लीनर" सॉफ्टवेयर अक्सर कंप्यूटर को और धीमा कर देते हैं। विंडोज के अपने बिल्ट-इन टूल्स सबसे सुरक्षित और प्रभावी होते हैं:
1. **Win + R → %temp%**: यहाँ मौजूद फाइल्स वे कैश हैं जो ऐप्स बंद होने के बाद भी रह जाती हैं। इन्हें Ctrl + A करके डिलीट कर दें।
2. **Win + R → cleanmgr**: सिस्टम फाइल्स जैसे पुराने विंडोज अपडेट्स को हटाने के लिए सबसे बेहतरीन टूल।
    `
    },
    {
        id: 9,
        title: 'गूगल क्रोम के 8 टैब मैनेजमेंट शॉर्टकट्स: 50+ खुले टैब्स को बिना हैंग किए संभालें',
        slug: 'google-chrome-8-tab-management-shortcuts',
        excerpt: 'गलती से बंद हुआ टैब तुरंत दोबारा खोलें (Ctrl + Shift + T) और विभिन्न प्रोजेक्ट्स के लिए टैब ग्रुप्स को पिन करना सीखें।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc_P7_qLYGvQJdorhV0Z_eHBmFEAVXicXyIXKLgVch1-dLp2WmHLSqt8Jv5y9S0wNOo4q_tv8yv9L8m8L0Wp3Wd6MFRQUkSL_xG7rwFyjqSfPrn0DRUzpw11x-OHcDhmgy4OesjW6S8QBFKdUIVhvozTOAKnWLhDe8LOfdWF8uVg7SLve2LaMEF6-XNNcnWWfwWelA7nxfj9nrMURcM_xP_3_ZXRHE1j7B_7GC5cmMAPCTA7zHaY1a',
        imageAlt: 'Google Chrome browser window open with multiple tab groups organized and categorized cleanly',
        category: mockCategories[2],
        tags: [
            mockTags[1]
        ],
        author: mockAuthors[2],
        publishedAt: '08 अक्टूबर 2024',
        readingTimeMinutes: 3,
        viewsCount: 24100,
        commentsCount: 9,
        shortcuts: [
            {
                key: 'Ctrl + Shift + T',
                action: 'अंतिम बंद हुआ टैब तुरंत दोबारा खोलें',
                platform: 'both'
            },
            {
                key: 'Ctrl + Tab',
                action: 'अगले टैब पर तुरंत स्विच करें',
                platform: 'both'
            },
            {
                key: 'Ctrl + W',
                action: 'वर्तमान टैब को तुरंत बंद करें',
                platform: 'both'
            },
            {
                key: 'Ctrl + 1 to 8',
                action: 'क्रम संख्या के टैब पर सीधे कूदें',
                platform: 'both'
            }
        ],
        content: `
## क्रोम ब्राउज़र में टैब ओवरलोड से कैसे बचें?

आधुनिक रिसर्च और कोडिंग के दौरान 40-50 टैब्स खुल जाना आम बात है। लेकिन शॉर्टकट्स की मदद से आप बिना माउस हिलाए किसी भी टैब पर जा सकते हैं:
* **Ctrl + Shift + T**: अगर आपने गलती से जरूरी आर्टिकल या फॉर्म वाला टैब बंद कर दिया, तो यह शॉर्टकट उसे हूबहू वहीं खोल देगा।
* **Ctrl + Shift + A**: सर्च टैब्स विंडो खोलता है, जिससे आप सैकड़ों खुले टैब्स में किसी भी पेज का नाम टाइप करके खोज सकते हैं।
    `
    },
    // SECTION 3: VIDEO TUTORIAL
    {
        id: 10,
        title: 'पायथन क्रैश कोर्स 2025: सिर्फ 1 घंटे में पूरे बेसिक्स समझें',
        slug: 'python-crash-course-2025-1-hour-complete-basics',
        excerpt: 'वेरिएबल्स, लूप्स, फंक्शन्स और ऑब्जेक्ट ओरिएंटेड प्रोग्रामिंग को आसान हिंदी में व्यावहारिक उदाहरणों के साथ लाइव कोड करके समझें।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmPzrlAUiG9ZVqrh8oGAOW6-woIw2-JfVQ-vKXrCPVZldMLc3aT5hc6AzZYeJauiyFT4ko0xlYNUS4gHxThphgKygR-pIH7831qQsre1GU_ekXSm54K_UwUK3-uUrBu5YKEJkB2bIVdYguSJkYyBwifrqHJm1tEg0Oen8TwWWddXqByrYy-_8p2QSQXCB8XA0QX0K_OX0hkHddY9UWjRgQl600p2TsR_1rjm-WE6nKr7J_wXI96wZe',
        imageAlt: 'Cinematic wide shot of tech presenter recording video tutorial with professional camera and coding backdrop',
        category: mockCategories[1],
        tags: [
            mockTags[0],
            mockTags[6]
        ],
        author: mockAuthors[3],
        publishedAt: '22 अक्टूबर 2024',
        readingTimeMinutes: 58,
        viewsCount: 45200,
        commentsCount: 88,
        videoDuration: '58 मिनट',
        content: `
## 1 घंटे में पायथन में महारत हासिल करें

इस वीडियो ट्यूटोरियल में हमने गैर-तकनीकी छात्रों के लिए भी पायथन को बेहद सरल हिंदी में प्रस्तुत किया है।

### ट्यूटोरियल के मुख्य अध्याय:
* **00:00 - 10:15**: पायथन इंस्टॉलेशन और VS Code सेटअप
* **10:16 - 22:30**: डेटा टाइप्स, स्ट्रिंग्स और अंकगणित
* **22:31 - 35:45**: इफ-एल्स स्टेटमेंट्स और लूप्स (For & While)
* **35:46 - 48:20**: फंक्शन्स, पैरामीटर्स और रिटर्न वैल्यूज
* **48:21 - 58:00**: मिनी प्रोजेक्ट: हिंदी में कैलकुलेटर और पासवर्ड जनरेटर
    `
    },
    // SECTION 4: SMART TECH GADGETS & HARDWARE REVIEWS
    {
        id: 11,
        title: 'मैकेनिकल कीबोर्ड vs मेम्ब्रेन: कोडिंग और टाइपिंग स्पीड के लिए कौन सा बेहतर है?',
        slug: 'mechanical-keyboard-vs-membrane-coding-speed-review',
        excerpt: 'ब्राउन, रेड और ब्लू स्विच के अंतर, टाइपिंग ध्वनि और लंबे समय तक कोडिंग करते समय हाथों की थकान पर विस्तृत विश्लेषण।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADzMSTV3RuRgJEd55sHvpwH_AlcCyATK3-ZtfMvWo0KLEd0ScjCT5RuZvthCpNd4Gr1wH6INzPc88N-iG7ZtjmBId-f6pUT-K11EV6R1_9izUqtPmrXOi74tBnetDmjKYCh_eL3zfii4RYQ7eGqdUrB596MU6ZMGX04WN1QKBMhXE4sW5sZTM8XWqICH_1xvozS--luGc_iwv954Ho3ZlN9ESZf2jS32zRmzHkamXerb2UJ0R17Sc6',
        imageAlt: 'Side by side comparison of a custom mechanical keyboard with tactile blue switches next to a flat membrane keyboard',
        category: mockCategories[4],
        tags: [
            mockTags[5]
        ],
        author: mockAuthors[1],
        publishedAt: '19 अक्टूबर 2024',
        readingTimeMinutes: 6,
        viewsCount: 34100,
        commentsCount: 27,
        rating: 9.4,
        productPrice: '₹3,499 - ₹12,999',
        productSpecs: {
            'स्विच प्रकार': 'Tactile Brown / Linear Red / Clicky Blue',
            'कीकैप मटेरियल': 'Double-shot PBT',
            'कनेक्टिविटी': 'Tri-mode (Type-C, 2.4GHz Wireless, Bluetooth 5.2)',
            'एक्ट्यूएशन फोर्स': '45g - 60g',
            'लाइफस्पैन': '5 करोड़ कीस्ट्रोक्स'
        },
        pros: [
            'टाइपिंग सटीकता में 15-20% की वास्तविक वृद्धि',
            'स्विच रिप्लेसेबल (Hot-swappable) होते हैं',
            'हाथों और कलाई में थकान न के बराबर'
        ],
        cons: [
            'मेम्ब्रेन की तुलना में 3 से 4 गुना महंगे',
            'क्लिकी ब्लू स्विच शांत ऑफिस में आवाज़ कर सकते हैं'
        ],
        content: `
## मैकेनिकल बनाम मेम्ब्रेन: गहन प्रयोगशाला परीक्षण

डेवलपर्स और राइटर्स रोजाना 8-10 घंटे कीबोर्ड पर बिताते हैं। हमने 3 महीने तक एक ही डेवलपर के साथ मेम्ब्रेन और मैकेनिकल (ब्राउन स्विच) कीबोर्ड का स्पीड और थकान परीक्षण किया।

### परिणाम:
* **गलतियां (Typo rate)**: मेम्ब्रेन पर 4.2% की तुलना में मैकेनिकल पर केवल 1.1% गलतियां हुईं।
* **टाइपिंग स्पीड**: 68 WPM से बढ़कर 82 WPM तक पहुंच गई।
* **अनुशंसा**: कोडिंग और सामान्य ऑफिस कार्य के लिए **Gateron Brown** या **Cherry MX Red** स्विच सबसे आदर्श हैं।
    `
    },
    {
        id: 12,
        title: '34-इंच अल्ट्रावाइड कोडिंग मॉनिटर्स: क्या दोहरे मॉनिटर्स से बेहतर है एक सिंगल कर्व्ड स्क्रीन?',
        slug: '34-inch-ultrawide-monitor-vs-dual-screens-coding-review',
        excerpt: 'मल्टीटास्किंग, रंग सटीकता, IPS पैनल रिफ्रेश रेट्स और वर्कस्टेशन केबल्स की सफाई के मामले में गहन समीक्षा।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-ttrNIe8miVSpxKn7RBtBdoXEyzueuWV8JtraIyBrB2R_6DukwpLM-RpTKmeG6FPg13e1_bW1Y53qhRSvj-BD1In9U_UCLgTgwLABPdaGqUG5msmGJE-fz6GrAf-baDcPAqj9wUeGrRs9qKMQOfUQyTmGAC46fw6GKD1DAE7vtl3E28vXxan6pbO09SoSPn8EuOGFoSLh5QgdCZ5caVIv8b2306NRnaeZa1Ml4qwroswJypZf1Nxz',
        imageAlt: 'Ultrawide 34-inch curved monitor set up on minimalist white desk displaying side-by-side terminal, browser and code editors',
        category: mockCategories[4],
        tags: [
            mockTags[4]
        ],
        author: mockAuthors[2],
        publishedAt: '17 अक्टूबर 2024',
        readingTimeMinutes: 5,
        viewsCount: 26800,
        commentsCount: 15,
        rating: 8.9,
        productPrice: '₹38,990',
        productSpecs: {
            'स्क्रीन साइज़': '34-इंच WQHD (3440 x 1440)',
            'पैनल प्रकार': 'Nano IPS Curved (1900R curvature)',
            'रिफ्रेश रेट': '144Hz (G-Sync & FreeSync Compatible)',
            'पोर्ट्स': '1x USB-C (90W PD), 2x HDMI 2.1, 1x DisplayPort 1.4',
            'कलर गैमट': 'DCI-P3 98%'
        },
        pros: [
            'बीच में कोई बेज़ल या बॉर्डर नहीं जो ध्यान भटकाए',
            'एक ही केबल (Type-C) से लैपटॉप चार्ज भी होता है और डिस्प्ले भी चलता है',
            '3 फुल-विंडो ऐप्स (कोड, ब्राउज़र, टर्मिनल) एक साथ स्पष्ट दिखते हैं'
        ],
        cons: [
            'टेबल पर पर्याप्त गहराई (Depth) की आवश्यकता होती है',
            'पारंपरिक 16:9 वीडियो देखते समय किनारों पर काली पट्टियां दिखती हैं'
        ],
        content: `
## 34-इंच अल्ट्रावाइड बनाम 2x 24-इंच मॉनिटर्स

सॉफ्टवेयर डेवलपर्स के लिए स्क्रीन स्पेस ही सबसे बड़ी पूंजी है। जब आप दो मॉनिटर लगाते हैं, तो ठीक आपकी आंखों के सामने दोनों मॉनिटर्स की प्लास्टिक बेज़ल आ जाती है। 34-इंच 21:9 कर्व्ड मॉनिटर इस समस्या को पूरी तरह खत्म कर देता है।
    `
    },
    // SIDEBAR TRENDING 01 to 05
    {
        id: 13,
        title: 'पायथन में 10 उपयोगी वन-लाइनर कोड्स',
        slug: 'python-10-useful-one-liner-codes',
        excerpt: 'स्वैपिंग, लिस्ट कॉम्प्रिहेंशन और डिक्शनरी मर्जिंग के स्मार्ट वन-लाइनर्स।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVGA-2QQnMT-PE1ik55ILeJYxl3OeRDHVkyZTwW7_-TSmBT-PDyMvNoAPdXn67VSAQW61Uk79flmrQu47QIxAPTE9NBsShZf7-YO7f-bvTl1pgtMasCbac8BGVgmWd5dUy3MYcuklqHd7FARO7JEwdtqqkJsDWLyns0yKSCgXP-ah21vXjIzyhDe3Cb8ml14MAHa5V8f05Okx4dcI8Rcr_KtCP99JHZVzXM_P0xafRLnau1vi6MWC-',
        imageAlt: 'Python programming logo concept on dark glass futuristic computer code background',
        category: mockCategories[1],
        tags: [
            mockTags[0]
        ],
        author: mockAuthors[3],
        publishedAt: '20 अक्टूबर 2024',
        readingTimeMinutes: 3,
        viewsCount: 39500,
        commentsCount: 23,
        content: `10 जादुई पायथन वन-लाइनर्स जो कोड को 5 गुना छोटा बनाते हैं।`
    },
    {
        id: 14,
        title: 'God Mode कैसे एक्टिवेट करें विंडोज 11 में',
        slug: 'how-to-activate-god-mode-windows-11',
        excerpt: 'कंट्रोल पैनल के सभी 200+ छिपे हुए सेटिंग्स को एक ही फोल्डर में लाएं।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8jm8gZK_Lq7LMNOT566p7wm1DhgHm7bgb09ho1zEmYBYqQcP2P756xUijnydp9GmyHm3W8wdnn-QiuJGrQ7i2qLUt-S2eLMY5oOjborQ9A9N97tMmPZUYQtSLJrWoDyyTM2iFPeUTm6klm7JZRNC6Sju-eNi1VVqAIVx4brgy12THkv9U2PYQrwrQDrBvQHYtqDUwAwAXGIWTgN0Yi5nhmhVEv-9MUJaeIsEowSYfLx5Hc1vPNvn1',
        imageAlt: 'Windows 11 glowing operating system wallpaper concept with taskbar widgets and shortcuts',
        category: mockCategories[3],
        tags: [
            mockTags[2]
        ],
        author: mockAuthors[0],
        publishedAt: '19 अक्टूबर 2024',
        readingTimeMinutes: 2,
        viewsCount: 35100,
        commentsCount: 34,
        content: `डेस्कटॉप पर न्यू फोल्डर बनाएं और उसका नाम GodMode.{ED7BA470-8E54-465E-825C-99712043E01C} रखें।`
    },
    {
        id: 15,
        title: 'ChatGPT कोडिंग प्रॉम्प्ट्स: 10 गुना तेज़ कोड लिखें',
        slug: 'chatgpt-coding-prompts-10x-faster-software',
        excerpt: 'डीबगिंग, यूनिट टेस्ट लिखने और रेगुलर एक्सप्रेशन बनाने के सिद्ध प्रॉम्प्ट्स।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6pyGt62aZVGw-g74gEMnxw-bRfBBb5IOFKYMs3CBUonSj_JpxL3j7Z-lK5CW-R3mJv4nC1JBlWI5vWFINsK1TZdQWXf1ykmtHPQc1fmlhDey-v0xMd5pEugYL7qaRgtTT3bnwp5yXnSGqfX3fLfLi8qaYd2SxEyE-mUvHvugiYtTnFAjV7AGwjqokl_Dsw7a2pCAQYCP3W4aupqrM0WN3JGDbnRvMVTGn_RK9UGDTPlYgayHRu99M',
        imageAlt: 'AI robot hand typing smoothly on illuminated modern laptop keyboard',
        category: mockCategories[1],
        tags: [
            mockTags[6]
        ],
        author: mockAuthors[3],
        publishedAt: '18 अक्टूबर 2024',
        readingTimeMinutes: 4,
        viewsCount: 42100,
        commentsCount: 45,
        content: `सॉफ्टवेयर आर्किटेक्ट्स द्वारा दैनिक उपयोग किए जाने वाले टॉप 10 ChatGPT प्रॉम्प्ट्स।`
    },
    {
        id: 16,
        title: 'पुराने लैपटॉप में SSD लगाकर स्पीड 5x बढ़ाएं',
        slug: 'boost-old-laptop-speed-5x-with-ssd-upgrade',
        excerpt: 'HDD से SSD पर विंडोज क्लोन करने का सुरक्षित और आसान तरीका।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQQ2DWYgbs7Pdel_eAcgN81m67z-IyPTzWvG4acXiCmGkcH-ioM9hT-PQ05mpjMbzVmYPlhgNOBHmdatpnDSKfRuCkvpC99A7BK33cwxorsrLzaZEoLy-SVXRrrBTBecxtX3ZiKC_Smz7jmMBb3Mc4l1iyUA3nhH54DzHDXB_ks4jOwCaYOj0oyDB4Vm_lmKXGMxIWzUW5_CQJ6xbeSdKbOdseNgXIkxL1_fm4FkABDK3u8YLPvfM_',
        imageAlt: 'High quality close up of NVMe M2 SSD chip installed inside gaming motherboard',
        category: mockCategories[4],
        tags: [
            mockTags[2]
        ],
        author: mockAuthors[1],
        publishedAt: '16 अक्टूबर 2024',
        readingTimeMinutes: 5,
        viewsCount: 29800,
        commentsCount: 19,
        content: `केवल ₹2000 खर्च करके 5 साल पुराने सुस्त लैपटॉप को सुपरफास्ट बनाएं।`
    },
    {
        id: 17,
        title: 'वाई-फाई को सुरक्षित रखने के 5 आसान उपाय',
        slug: '5-easy-steps-to-secure-home-wifi-network',
        excerpt: 'डिफ़ॉल्ट पासवर्ड बदलना, WPA3 सुरक्षा और गेस्ट नेटवर्क सेट करना।',
        coverImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgeaTQTPi3OPPvEFEGipcQoUFCjm4fs8aUhUFa7rJow51XiJ4vSW43vj1ZmIjJkiuJsfw4H-f0BcohQ2ybl0o3mAmSK3TaFueNuLnqpFxkm2MfrcV-J9RwVlDZg3ngCe1vrK4Tq6-1KPSsoSQn9bnbjy6tFHFCWIN96MFK69Jdi6HxjuvsdL6lUwE38sQ3zaa1ub4OaQwjYfHlTvvdLpobyJTqB1aaQWTjiMkVb63Yz0Yt19qWYWzU',
        imageAlt: 'Cyber security digital shield concept protecting computer network from malware and viruses',
        category: mockCategories[3],
        tags: [
            mockTags[7]
        ],
        author: mockAuthors[0],
        publishedAt: '14 अक्टूबर 2024',
        readingTimeMinutes: 3,
        viewsCount: 21300,
        commentsCount: 12,
        content: `हैकरों और अनधिकृत पड़ोसियों से अपने होम राउटर को सुरक्षित करने की आसान हिंदी गाइड।`
    }
];
const mockComments = [
    {
        id: 1,
        articleId: 1,
        authorName: 'रोहित मिश्रा',
        comment: 'Win + V और Win + Shift + S ने मेरा बहुत समय बचाया है! बहुत ही उपयोगी लेख।',
        createdAt: '24 अक्टूबर 2024, शाम 4:15',
        likes: 18
    },
    {
        id: 2,
        articleId: 1,
        authorName: 'सुनील शर्मा',
        comment: 'क्या आप मैक के लिए भी इसी तरह का शॉर्टकट कंपाइलेशन बना सकते हैं?',
        createdAt: '24 अक्टूबर 2024, शाम 6:30',
        likes: 9
    },
    {
        id: 3,
        articleId: 1,
        authorName: 'दीपक कुमार',
        comment: 'Alt + = एक्सेल में वाकई जादुई काम करता है। धन्यवाद टेकवाणी!',
        createdAt: '24 अक्टूबर 2024, रात 8:02',
        likes: 14
    }
];
}),
"[project]/src/services/djangoApi.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/djangoApi.ts
__turbopack_context__.s([
    "djangoApi",
    ()=>djangoApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockDjangoData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/apiConfig.ts [ssr] (ecmascript)");
;
;
class DjangoApiService {
    articles = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockArticles"]
    ];
    comments = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockComments"]
    ];
    newsletterSubscribers = [
        'demo@techvani.in'
    ];
    async fetchWithTimeout(url, options = {}) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].TIMEOUT);
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
                headers: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].DEFAULT_HEADERS,
                    ...options.headers || {}
                }
            });
            return response;
        } finally{
            clearTimeout(id);
        }
    }
    /**
   * GET /api/v1/articles/
   * Supports DRF query params: category, tag, search, ordering, page, page_size, lang
   */ async getArticles(params) {
        const query = new URLSearchParams();
        if (params?.category && params.category !== 'home') {
            query.set('category', params.category);
            query.set('category__slug', params.category);
        }
        if (params?.subCategory && params.subCategory !== 'सभी') {
            query.set('sub_category', params.subCategory);
        }
        if (params?.tag) {
            query.set('tag', params.tag);
            query.set('tags__slug', params.tag);
        }
        if (params?.search) query.set('search', params.search);
        if (params?.ordering) query.set('ordering', params.ordering);
        if (params?.page) query.set('page', params.page.toString());
        if (params?.pageSize) query.set('page_size', params.pageSize.toString());
        if (params?.language) query.set('lang', params.language);
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/?${query.toString()}`;
        try {
            const res = await this.fetchWithTimeout(url);
            if (res.ok) {
                const data = await res.json();
                return data;
            }
        } catch (err) {
            console.warn(`[Django API Network Warning] Cannot reach Django server at ${url}:`, err);
        }
        // Fallback local implementation
        let filtered = [
            ...this.articles
        ];
        if (params?.category && params.category !== 'home') {
            filtered = filtered.filter((a)=>a.category.slug.toLowerCase() === params.category?.toLowerCase());
        }
        if (params?.subCategory && params.subCategory !== 'सभी') {
            filtered = filtered.filter((a)=>a.subCategory?.toLowerCase() === params.subCategory?.toLowerCase());
        }
        if (params?.tag) {
            filtered = filtered.filter((a)=>a.tags.some((t)=>t.slug.toLowerCase() === params.tag?.toLowerCase()));
        }
        if (params?.search && params.search.trim() !== '') {
            const q = params.search.toLowerCase().trim();
            filtered = filtered.filter((a)=>a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.name.toLowerCase().includes(q) || a.tags.some((t)=>t.name.toLowerCase().includes(q)));
        }
        if (params?.ordering) {
            if (params.ordering === '-viewsCount') {
                filtered.sort((a, b)=>b.viewsCount - a.viewsCount);
            } else if (params.ordering === '-publishedAt') {
                filtered.sort((a, b)=>b.id - a.id);
            } else if (params.ordering === '-rating') {
                filtered.sort((a, b)=>(b.rating || 0) - (a.rating || 0));
            }
        }
        const page = params?.page || 1;
        const pageSize = params?.pageSize || 10;
        const startIndex = (page - 1) * pageSize;
        const paginated = filtered.slice(startIndex, startIndex + pageSize);
        return {
            count: filtered.length,
            next: startIndex + pageSize < filtered.length ? `?page=${page + 1}` : null,
            previous: page > 1 ? `?page=${page - 1}` : null,
            results: paginated
        };
    }
    /**
   * ✅ Sitemap के लिए — सिर्फ real API data, कोई mock fallback नहीं
   */ async getArticlesForSitemap() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/?page_size=5000`);
            if (res.ok) {
                const data = await res.json();
                const list = Array.isArray(data) ? data : data.results || [];
                console.log(`[Sitemap] ${list.length} articles fetched from API`);
                return list;
            }
        } catch (err) {
            console.error('[Sitemap] articles API failed:', err);
        }
        return [];
    }
    /**
   * ✅ Sitemap के लिए — सिर्फ real categories
   */ async getCategoriesForSitemap() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/`);
            if (res.ok) {
                const data = await res.json();
                const list = Array.isArray(data) ? data : data.results || [];
                console.log(`[Sitemap] ${list.length} categories fetched from API`);
                return list;
            }
        } catch (err) {
            console.error('[Sitemap] categories API failed:', err);
        }
        return [];
    }
    /**
   * GET /api/v1/articles/{slug}/
   */ async getArticleBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch article "${slug}":`, err);
        }
        // Products endpoint try करो
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/products/${slug}/`);
            if (res.ok) {
                const data = await res.json();
                if (data && typeof data === 'object') {
                    if (data.rating == null) data.rating = 0;
                    return data;
                }
            }
        } catch  {}
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const article = this.articles.find((a)=>a.slug === slug);
        return article || null;
    }
    /**
   * GET /api/v1/products/{slug}/
   */ async getProductBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/products/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch product "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const product = this.articles.find((a)=>a.slug === slug && a.rating != null);
        return product || null;
    }
    /**
   * GET /api/v1/articles/trending/
   */ async getTrendingArticles(limit = 5, language = 'hi') {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/trending/?limit=${limit}&lang=${language}`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch trending articles:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return [
            ...this.articles
        ].sort((a, b)=>b.viewsCount - a.viewsCount).slice(0, limit);
    }
    /**
   * GET /api/v1/categories/
   */ async getCategories() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch categories:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockCategories"];
    }
    /**
   * GET /api/v1/categories/{slug}/
   */ async getCategoryBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch category "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockCategories"].find((c)=>c.slug === slug);
        return category || null;
    }
    /**
   * GET /api/v1/tags/
   */ async getTags() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/tags/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch tags:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockTags"];
    }
    /**
   * GET /api/v1/tags/{slug}/
   */ async getTagBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/tags/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch tag "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const tag = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockTags"].find((t)=>t.slug === slug);
        return tag || null;
    }
    /**
   * GET /api/v1/authors/
   */ async getAuthors() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/authors/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch authors:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["mockAuthors"];
    }
    /**
   * GET /api/v1/articles/{idOrSlug}/comments/
   */ async getComments(articleIdOrSlug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${articleIdOrSlug}/comments/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Error fetching comments:', err);
        }
        return this.comments.filter((c)=>c.articleId === Number(articleIdOrSlug));
    }
    /**
   * POST /api/v1/articles/{idOrSlug}/comments/
   */ async postComment(data) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${data.articleId}/comments/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    authorName: data.authorName,
                    authorEmail: data.authorEmail,
                    comment: data.comment
                })
            });
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn('[Django API] Error posting comment:', err);
        }
        const numArticleId = typeof data.articleId === 'number' ? data.articleId : this.articles.find((a)=>a.slug === data.articleId)?.id || 1;
        const newComment = {
            id: Date.now(),
            articleId: numArticleId,
            authorName: data.authorName,
            authorEmail: data.authorEmail,
            comment: data.comment,
            createdAt: 'अभी-अभी',
            likes: 0
        };
        this.comments.unshift(newComment);
        const article = this.articles.find((a)=>a.id === numArticleId);
        if (article) article.commentsCount += 1;
        return newComment;
    }
    /**
   * POST /api/v1/newsletter/subscribe/
   */ async subscribeNewsletter(email) {
        if (!email || !email.includes('@')) {
            return {
                success: false,
                message: 'कृपया एक मान्य ईमेल पता दर्ज करें।'
            };
        }
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/newsletter/subscribe/`, {
                method: 'POST',
                body: JSON.stringify({
                    email
                })
            });
            if (res.ok) return await res.json();
        } catch  {}
        if (this.newsletterSubscribers.includes(email.toLowerCase())) {
            return {
                success: true,
                message: 'आप पहले से ही हमारे न्यूज़लेटर के सदस्य हैं!'
            };
        }
        this.newsletterSubscribers.push(email.toLowerCase());
        return {
            success: true,
            message: 'बधाई हो! आप सफलतापूर्वक टेकवाणी न्यूज़लेटर से जुड़ चुके हैं।'
        };
    }
    /**
   * GET /api/v1/pages/{slug}/
   */ async getPageBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/pages/${slug}/`);
            if (res.ok) return await res.json();
        } catch  {}
        return null;
    }
}
const djangoApi = new DjangoApiService();
}),
]})(),
"[externals]/next/dist/compiled/next-server/pages-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/react [external] (react, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1x9x0rode5ya7._.js.map