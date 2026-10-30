(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/article/[slug].tsx\" }", (function(__turbopack_context__){
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/article/[slug].tsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
"[project]/pages/article/[slug].tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__N_SSG",
    ()=>__N_SSG,
    "default",
    ()=>ArticleDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
// pages/article/[slug].tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/djangoApi.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$markdownParser$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/markdownParser.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sitemap.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
var __N_SSG = true;
function ArticleDetailPage({ article, initialComments, initialRelatedArticles }) {
    _s();
    const [comments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialComments);
    const [authorName, setAuthorName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [commentSuccess, setCommentSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handlePostComment = async (e)=>{
        e.preventDefault();
        if (!authorName.trim() || !commentText.trim()) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["djangoApi"].postComment({
            articleId: article.slug || article.id,
            authorName,
            comment: commentText
        });
        setCommentText('');
        setCommentSuccess(true);
        setTimeout(()=>setCommentSuccess(false), 3000);
    };
    const canonical = article.canonicalUrl || `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["SITE_URL"]}/article/${article.slug}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: [
                            article.metaTitle || article.title,
                            " - टेकवाणी"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: article.metaDescription || article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: article.metaTitle || article.title
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: article.metaDescription || article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: article.coverImage || article.ogImage
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: canonical
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "canonical",
                        href: canonical
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/article/[slug].tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "max-w-4xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-[#bb010d]",
                                children: "मुख्य पृष्ठ"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/category/${article.category.slug}`,
                                className: "hover:text-[#bb010d]",
                                children: article.category.name
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-800 dark:text-gray-200 truncate max-w-xs",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "space-y-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase",
                                        children: article.category.name
                                    }, void 0, false, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            article.readingTimeMinutes,
                                            " मिनट का अध्ययन"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-3.5 flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: article.author.avatar,
                                                alt: article.author.name,
                                                width: 44,
                                                height: 44,
                                                className: "rounded-full object-cover ring-2 ring-red-500/20"
                                            }, void 0, false, {
                                                fileName: "[project]/pages/article/[slug].tsx",
                                                lineNumber: 101,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5",
                                                        children: [
                                                            article.author.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-blue-500 text-[16px]",
                                                                children: "verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/pages/article/[slug].tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/pages/article/[slug].tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: article.author.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/pages/article/[slug].tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/pages/article/[slug].tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-xs text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[16px]",
                                                    children: "calendar_today"
                                                }, void 0, false, {
                                                    fileName: "[project]/pages/article/[slug].tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 17
                                                }, this),
                                                article.publishedAt
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/pages/article/[slug].tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                            src: article.coverImage,
                            alt: article.imageAlt || article.title,
                            fill: true,
                            sizes: "(max-width: 768px) 100vw, 896px",
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/pages/article/[slug].tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "article-content max-w-none text-gray-800 dark:text-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$markdownParser$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["parseArticleContent"])(article.content)
                            }
                        }, void 0, false, {
                            fileName: "[project]/pages/article/[slug].tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    article.tags && article.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-500",
                                children: "टैग्स:"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            article.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/tag/${tag.slug}`,
                                    className: "text-xs bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg transition-colors font-medium",
                                    children: [
                                        "#",
                                        tag.name
                                    ]
                                }, tag.id, true, {
                                    fileName: "[project]/pages/article/[slug].tsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 150,
                        columnNumber: 11
                    }, this),
                    initialRelatedArticles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "संबंधित लेख"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: initialRelatedArticles.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getArticlePath"])(a),
                                        className: "block p-4 bg-white dark:bg-[#131b22] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold mb-2 line-clamp-2",
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/pages/article/[slug].tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500 line-clamp-2",
                                                children: a.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/pages/article/[slug].tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, a.id, true, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/article/[slug].tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/pages/article/[slug].tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(ArticleDetailPage, "vhH1Um065VoSUg7JCE9EOkYZkC0=");
_c = ArticleDetailPage;
var _c;
__turbopack_context__.k.register(_c, "ArticleDetailPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/apiConfig.ts [client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const API_CONFIG = {
    // 🔥 Next.js का process.env इस्तेमाल करें
    BASE_URL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DJANGO_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
    // Timeout in milliseconds
    TIMEOUT: 3500,
    // Headers for Django REST Framework
    DEFAULT_HEADERS: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    // Fallback to local data if Django server is not reachable
    // 🔥 यहाँ भी process.env और NEXT_PUBLIC_ प्रीफिक्स लगाएँ
    USE_FALLBACK: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_USE_MOCK_FALLBACK !== 'false'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/mockDjangoData.ts [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/djangoApi.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/services/djangoApi.ts
__turbopack_context__.s([
    "djangoApi",
    ()=>djangoApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mockDjangoData.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/apiConfig.ts [client] (ecmascript)");
;
;
class DjangoApiService {
    articles = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockArticles"]
    ];
    comments = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockComments"]
    ];
    newsletterSubscribers = [
        'demo@techvani.in'
    ];
    async fetchWithTimeout(url, options = {}) {
        const controller = new AbortController();
        const id = setTimeout(()=>controller.abort(), __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].TIMEOUT);
        try {
            const response = await fetch(url, {
                ...options,
                signal: controller.signal,
                headers: {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].DEFAULT_HEADERS,
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
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/?${query.toString()}`;
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/?page_size=5000`);
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/`);
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch article "${slug}":`, err);
        }
        // Products endpoint try करो
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/products/${slug}/`);
            if (res.ok) {
                const data = await res.json();
                if (data && typeof data === 'object') {
                    if (data.rating == null) data.rating = 0;
                    return data;
                }
            }
        } catch  {}
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const article = this.articles.find((a)=>a.slug === slug);
        return article || null;
    }
    /**
   * GET /api/v1/products/{slug}/
   */ async getProductBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/products/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch product "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const product = this.articles.find((a)=>a.slug === slug && a.rating != null);
        return product || null;
    }
    /**
   * GET /api/v1/articles/trending/
   */ async getTrendingArticles(limit = 5, language = 'hi') {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/trending/?limit=${limit}&lang=${language}`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch trending articles:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch categories:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockCategories"];
    }
    /**
   * GET /api/v1/categories/{slug}/
   */ async getCategoryBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/categories/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch category "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const category = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockCategories"].find((c)=>c.slug === slug);
        return category || null;
    }
    /**
   * GET /api/v1/tags/
   */ async getTags() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/tags/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch tags:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockTags"];
    }
    /**
   * GET /api/v1/tags/{slug}/
   */ async getTagBySlug(slug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/tags/${slug}/`);
            if (res.ok) {
                return await res.json();
            }
        } catch (err) {
            console.warn(`[Django API] Could not fetch tag "${slug}":`, err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return null;
        }
        const tag = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockTags"].find((t)=>t.slug === slug);
        return tag || null;
    }
    /**
   * GET /api/v1/authors/
   */ async getAuthors() {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/authors/`);
            if (res.ok) {
                const data = await res.json();
                return Array.isArray(data) ? data : data.results || [];
            }
        } catch (err) {
            console.warn('[Django API] Could not fetch authors:', err);
        }
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].USE_FALLBACK) {
            return [];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mockDjangoData$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mockAuthors"];
    }
    /**
   * GET /api/v1/articles/{idOrSlug}/comments/
   */ async getComments(articleIdOrSlug) {
        try {
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${articleIdOrSlug}/comments/`);
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/articles/${data.articleId}/comments/`, {
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/newsletter/subscribe/`, {
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
            const res = await this.fetchWithTimeout(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$apiConfig$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["API_CONFIG"].BASE_URL}/pages/${slug}/`);
            if (res.ok) return await res.json();
        } catch  {}
        return null;
    }
}
const djangoApi = new DjangoApiService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/markdownParser.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Safe Markdown & CKEditor HTML Content Parser for TechVani Articles
 * 
 * Supports:
 * - Pure CKEditor HTML (from Django Admin ckeditor / ckeditor-5)
 * - Markdown (#, ##, ###, **, lists, code)
 * - Mixed Markdown & HTML
 */ __turbopack_context__.s([
    "parseArticleContent",
    ()=>parseArticleContent
]);
function parseArticleContent(rawContent) {
    if (!rawContent) return '';
    let content = rawContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
    // 1. Detect if content is already rich HTML generated by CKEditor
    const isCKEditorHtml = /<(?:p|h[1-6]|ul|ol|table|blockquote|figure|div|span|strong)[^>]*>/i.test(content);
    // 2. Headings support: Convert any markdown headings (# H1, ## H2, ### H3, #### H4)
    // This allows authors using CKEditor or plain text to use both # Markdown or CKEditor Heading dropdown!
    content = content.replace(/^####[ \t]+([^\n\r<]+)/gm, '<h4 class="article-h4">$1</h4>');
    content = content.replace(/^###[ \t]+([^\n\r<]+)/gm, '<h3 class="article-h3">$1</h3>');
    content = content.replace(/^##[ \t]+([^\n\r<]+)/gm, '<h2 class="article-h2">$1</h2>');
    content = content.replace(/^#[ \t]+([^\n\r<]+)/gm, '<h1 class="article-h1">$1</h1>');
    // 3. If content is rich HTML from CKEditor, preserve HTML tags and prevent duplicate wrapping
    if (isCKEditorHtml) {
        // Clean up empty artifact paragraphs often left by CKEditor (<p>&nbsp;</p> or <p></p>)
        content = content.replace(/<p>(&nbsp;|\s)*<\/p>/gi, '');
        // Convert any standalone bold/italic markdown if mixed inside CKEditor
        content = content.replace(/\*\*([^*<]+)\*\*/g, '<strong>$1</strong>');
        content = content.replace(/`([^`<]+)`/g, '<code class="article-code">$1</code>');
        return content;
    }
    // 4. Fallback for pure Markdown content:
    // Code blocks (```language\ncode\n```)
    content = content.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (_match, _lang, code)=>{
        const escapedCode = escapeHtml(code.trim());
        return `<pre class="article-pre"><code>${escapedCode}</code></pre>`;
    });
    // Inline code (`code`)
    content = content.replace(/`([^`]+)`/g, '<code class="article-code">$1</code>');
    // Horizontal Rule (--- or ***)
    content = content.replace(/^---[ \t]*$/gm, '<hr class="article-hr" />');
    content = content.replace(/^\*\*\*[ \t]*$/gm, '<hr class="article-hr" />');
    // Blockquotes (> quote)
    content = content.replace(/^>[ \t]+([^\n\r]+)/gm, '<blockquote class="article-quote">$1</blockquote>');
    // Bold & Italic
    content = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/__([^_]+)__/g, '<strong>$1</strong>');
    content = content.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    content = content.replace(/_([^_]+)_/g, '<em>$1</em>');
    // Markdown Links [text](url)
    content = content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="article-link text-[#bb010d] hover:underline font-semibold" target="_blank" rel="noopener noreferrer">$1</a>');
    // Bullet Lists and Numbered Lists
    const lines = content.split('\n');
    const processedLines = [];
    let inBulletList = false;
    let inNumberedList = false;
    for(let i = 0; i < lines.length; i++){
        const line = lines[i];
        const bulletMatch = line.match(/^[ \t]*[-*][ \t]+(.+)/);
        const numberedMatch = line.match(/^[ \t]*(\d+)\.[ \t]+(.+)/);
        if (bulletMatch) {
            if (!inBulletList) {
                if (inNumberedList) {
                    processedLines.push('</ol>');
                    inNumberedList = false;
                }
                processedLines.push('<ul class="article-ul">');
                inBulletList = true;
            }
            processedLines.push(`<li>${bulletMatch[1]}</li>`);
        } else if (numberedMatch) {
            if (!inNumberedList) {
                if (inBulletList) {
                    processedLines.push('</ul>');
                    inBulletList = false;
                }
                processedLines.push('<ol class="article-ol">');
                inNumberedList = true;
            }
            processedLines.push(`<li>${numberedMatch[2]}</li>`);
        } else {
            if (inBulletList) {
                processedLines.push('</ul>');
                inBulletList = false;
            }
            if (inNumberedList) {
                processedLines.push('</ol>');
                inNumberedList = false;
            }
            processedLines.push(line);
        }
    }
    if (inBulletList) processedLines.push('</ul>');
    if (inNumberedList) processedLines.push('</ol>');
    content = processedLines.join('\n');
    // Paragraph blocks for Markdown
    const blocks = content.split(/\n\s*\n/);
    const formattedBlocks = blocks.map((block)=>{
        const trimmed = block.trim();
        if (!trimmed) return '';
        if (/^<(h[1-6]|pre|blockquote|ul|ol|hr|table|div|p|figure)/i.test(trimmed)) {
            return trimmed;
        }
        return `<p>${trimmed.replace(/\n/g, '<br/>')}</p>`;
    });
    return formattedBlocks.filter(Boolean).join('\n');
}
function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/sitemap.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/sitemap.ts
__turbopack_context__.s([
    "LIVE_CATEGORY_SLUGS",
    ()=>LIVE_CATEGORY_SLUGS,
    "SITE_URL",
    ()=>SITE_URL,
    "STATIC_PATHS",
    ()=>STATIC_PATHS,
    "buildSitemapEntries",
    ()=>buildSitemapEntries,
    "escapeXml",
    ()=>escapeXml,
    "getArticlePath",
    ()=>getArticlePath,
    "getCategoryPath",
    ()=>getCategoryPath,
    "renderSitemapXml",
    ()=>renderSitemapXml
]);
const SITE_URL = 'https://www.techvani.co.in';
const STATIC_PATHS = [
    '/',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/editorial-team',
    '/tools'
];
function getArticlePath(a) {
    const isProduct = a.rating != null;
    return `${isProduct ? '/product' : '/article'}/${a.slug}`;
}
function getCategoryPath(c) {
    return c.slug === 'home' ? '/' : `/category/${c.slug}`;
}
function escapeXml(s) {
    return s.replace(/[<>&'"]/g, (ch)=>{
        switch(ch){
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case "'":
                return '&apos;';
            case '"':
                return '&quot;';
            default:
                return ch;
        }
    });
}
function isValidSlug(slug) {
    return typeof slug === 'string' && slug.length > 0 && /^[a-z0-9\-_]+$/i.test(slug);
}
function getLastmod(a) {
    const raw = a.updated_at ?? a.updatedAt ?? a.modified;
    if (!raw) return undefined;
    try {
        return new Date(raw).toISOString().split('T')[0];
    } catch  {
        return undefined;
    }
}
const LIVE_CATEGORY_SLUGS = null;
function buildSitemapEntries(articles, categories) {
    const entries = [];
    // 1. Static pages (7)
    for (const path of STATIC_PATHS){
        entries.push({
            loc: `${SITE_URL}${path}`,
            changefreq: 'weekly',
            priority: path === '/' ? 1.0 : 0.6
        });
    }
    // 2. Categories (real only, no hardcoded filter)
    for (const c of categories){
        if (!isValidSlug(c.slug)) continue;
        if (c.slug === 'home') continue;
        if (LIVE_CATEGORY_SLUGS && !LIVE_CATEGORY_SLUGS.includes(c.slug)) continue;
        entries.push({
            loc: `${SITE_URL}${getCategoryPath(c)}`,
            changefreq: 'weekly',
            priority: 0.7
        });
    }
    // 3. Articles + Products (real only)
    for (const a of articles){
        if (!isValidSlug(a.slug)) continue;
        if (a.status && a.status !== 'published') continue;
        entries.push({
            loc: `${SITE_URL}${getArticlePath(a)}`,
            lastmod: getLastmod(a),
            changefreq: 'weekly',
            priority: 0.8
        });
    }
    // 4. Dedupe
    const seen = new Set();
    return entries.filter((e)=>{
        if (seen.has(e.loc)) return false;
        seen.add(e.loc);
        return true;
    });
}
function renderSitemapXml(entries) {
    const body = entries.map((e)=>{
        const parts = [
            `    <loc>${escapeXml(e.loc)}</loc>`
        ];
        if (e.lastmod) parts.push(`    <lastmod>${e.lastmod}</lastmod>`);
        if (e.changefreq) parts.push(`    <changefreq>${e.changefreq}</changefreq>`);
        if (e.priority !== undefined) parts.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
        return `  <url>\n${parts.join('\n')}\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL",
    ()=>TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL,
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
const TURBOPACK_CHUNK_UPDATE_LISTENERS_GLOBAL = 'TURBOPACK_CHUNK_UPDATE_LISTENERS';
let lastSeenHmrVersion;
function connect({ addMessageListener, sendMessage, onUpdateError = console.error, chunkUpdateListenersGlobal }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                if (lastSeenHmrVersion === undefined && msg.data !== undefined) {
                    lastSeenHmrVersion = msg.data.hmrVersion;
                }
                handleSocketConnected(sendMessage);
                break;
            case 'turbopack-message':
                lastSeenHmrVersion = msg.hmrVersion;
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
            case 'server-component-changes':
                lastSeenHmrVersion = msg.hmrVersion;
                break;
            default:
                break;
        }
    });
    const global = globalThis;
    const queued = global[chunkUpdateListenersGlobal];
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    global[chunkUpdateListenersGlobal] = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource,
        hmrVersion: lastSeenHmrVersion
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
]})(),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/article/[slug].tsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/article/[slug]";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/article/[slug].tsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0oowcuixul6-k._.js.map