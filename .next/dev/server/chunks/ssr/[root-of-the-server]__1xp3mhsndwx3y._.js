module.exports = [
(()=>{"use strict";return[
"[project]/pages/article/[slug].tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticleDetailPage,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
// pages/article/[slug].tsx
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [ssr] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/djangoApi.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$markdownParser$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/markdownParser.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/sitemap.ts [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
function ArticleDetailPage({ article, initialComments, initialRelatedArticles }) {
    const [comments] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialComments);
    const [authorName, setAuthorName] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [commentText, setCommentText] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [commentSuccess, setCommentSuccess] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handlePostComment = async (e)=>{
        e.preventDefault();
        if (!authorName.trim() || !commentText.trim()) return;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].postComment({
            articleId: article.slug || article.id,
            authorName,
            comment: commentText
        });
        setCommentText('');
        setCommentSuccess(true);
        setTimeout(()=>setCommentSuccess(false), 3000);
    };
    const canonical = article.canonicalUrl || `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["SITE_URL"]}/article/${article.slug}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: [
                            article.metaTitle || article.title,
                            " - टेकवाणी"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: article.metaDescription || article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:type",
                        content: "article"
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:title",
                        content: article.metaTitle || article.title
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:description",
                        content: article.metaDescription || article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:image",
                        content: article.coverImage || article.ogImage
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        property: "og:url",
                        content: canonical
                    }, void 0, false, {
                        fileName: "[project]/pages/article/[slug].tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("link", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                className: "max-w-4xl mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-2 text-xs text-gray-500 mb-6 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-[#bb010d]",
                                children: "मुख्य पृष्ठ"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: `/category/${article.category.slug}`,
                                className: "hover:text-[#bb010d]",
                                children: article.category.name
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        className: "space-y-4 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "bg-[#bb010d] text-white text-xs px-3 py-1 rounded font-bold uppercase",
                                        children: article.category.name
                                    }, void 0, false, {
                                        fileName: "[project]/pages/article/[slug].tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: "text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-y border-gray-200 dark:border-gray-800 py-3.5 flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1.5",
                                                        children: [
                                                            article.author.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-xs text-gray-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            className: "flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl overflow-hidden shadow-lg mb-8 aspect-video bg-gray-900 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "article-content max-w-none text-gray-800 dark:text-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            dangerouslySetInnerHTML: {
                                __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$markdownParser$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["parseArticleContent"])(article.content)
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
                    article.tags && article.tags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-gray-500",
                                children: "टैग्स:"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, this),
                            article.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                    initialRelatedArticles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "mt-12 pt-8 border-t border-gray-200 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold mb-4",
                                children: "संबंधित लेख"
                            }, void 0, false, {
                                fileName: "[project]/pages/article/[slug].tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: initialRelatedArticles.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$sitemap$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["getArticlePath"])(a),
                                        className: "block p-4 bg-white dark:bg-[#131b22] rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold mb-2 line-clamp-2",
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/pages/article/[slug].tsx",
                                                lineNumber: 175,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
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
const getStaticPaths = async ()=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getArticles({
            pageSize: 5000
        });
        const articles = res?.results || [];
        const paths = articles.filter((a)=>a.slug && a.rating == null).map((a)=>({
                params: {
                    slug: a.slug
                }
            }));
        return {
            paths,
            fallback: 'blocking'
        };
    } catch (err) {
        console.error('[getStaticPaths article] failed:', err);
        return {
            paths: [],
            fallback: 'blocking'
        };
    }
};
const getStaticProps = async ({ params })=>{
    const slug = params?.slug;
    try {
        const article = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getArticleBySlug(slug);
        if (!article) {
            return {
                notFound: true,
                revalidate: 60
            };
        }
        // Product है → /product/ पर redirect
        if (article.rating != null) {
            return {
                redirect: {
                    destination: `/product/${slug}`,
                    permanent: true
                }
            };
        }
        const [comments, rel] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getComments(article.slug || article.id).catch(()=>[]),
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$djangoApi$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["djangoApi"].getArticles({
                category: article.category.slug,
                pageSize: 4
            }).catch(()=>({
                    results: []
                }))
        ]);
        const relatedArticles = rel?.results?.filter((a)=>a.id !== article.id).slice(0, 3) || [];
        return {
            props: {
                article,
                initialComments: comments || [],
                initialRelatedArticles: relatedArticles
            },
            revalidate: 300
        };
    } catch (err) {
        console.error('[Article] failed:', err);
        return {
            notFound: true,
            revalidate: 60
        };
    }
};
}),
"[project]/src/utils/markdownParser.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/utils/sitemap.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
]})(),
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1xp3mhsndwx3y._.js.map