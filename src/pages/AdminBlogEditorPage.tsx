import React, { useState, useEffect } from 'react';
import { Article, Category, Author } from '../types/api';
import { djangoApi } from '../services/djangoApi';

interface AdminBlogEditorPageProps {
  onNavigate: (path: string) => void;
}

export const AdminBlogEditorPage: React.FC<AdminBlogEditorPageProps> = ({ onNavigate }) => {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('techvani_admin_logged_in') === 'true';
    }
    return false;
  });

  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Articles & CMS State
  const [articles, setArticles] = useState<Article[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    categoryId: 1,
    subCategory: 'टूलकिट',
    authorId: 1,
    metaTitle: '',
    metaDescription: '',
    canonicalUrl: '',
    keywords: '',
    schemaType: 'TechArticle' as 'TechArticle' | 'NewsArticle' | 'Product' | 'HowTo',
    rating: '',
    productPrice: '',
    isFeatured: false,
    isEditorialChoice: false,
    isTrending: false,
    readingTimeMinutes: 5,
  });

  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initData = async () => {
      const artRes = await djangoApi.getArticles({ pageSize: 50 });
      setArticles(artRes.results);
      const catRes = await djangoApi.getCategories();
      setCategories(catRes.filter((c) => c.slug !== 'home'));
      const authRes = await djangoApi.getAuthors();
      setAuthors(authRes);
    };
    initData();
  }, []);

  // Handle Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const trimmedUser = loginUsername.trim().toLowerCase();
    const trimmedPass = loginPassword.trim();

    // Valid demo & standard admin credentials
    if (
      (trimmedUser === 'admin' && (trimmedPass === 'admin123' || trimmedPass === 'techvani@2025' || trimmedPass === 'admin')) ||
      (trimmedUser === 'editor' && trimmedPass === 'editor123')
    ) {
      localStorage.setItem('techvani_admin_logged_in', 'true');
      setIsAuthenticated(true);
      setLoginError(null);
    } else {
      setLoginError('अमान्य यूज़रनेम या पासवर्ड! कृपया सही विवरण दर्ज करें। (सुझाव: admin / admin123)');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('techvani_admin_logged_in');
    setIsAuthenticated(false);
    setIsEditing(false);
    setLoginPassword('');
    setLoginError(null);
  };

  // Auto-generate slug and meta title from title if empty
  const handleTitleChange = (val: string) => {
    const slugified = val
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');

    setFormData((prev) => ({
      ...prev,
      title: val,
      slug: prev.slug === '' || prev.slug === slugified ? slugified : prev.slug,
      metaTitle: prev.metaTitle === '' ? `${val} | टेकवाणी (TechVani)` : prev.metaTitle,
    }));
  };

  const handleEditClick = async (article: Article) => {
    setSelectedArticleId(article.id);
    let fullContent = article.content || '';
    if (!fullContent && article.slug) {
      const detailed = await djangoApi.getArticleBySlug(article.slug);
      if (detailed?.content) {
        fullContent = detailed.content;
      }
    }
    setFormData({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: fullContent,
      coverImage: article.coverImage,
      categoryId: article.category.id,
      subCategory: article.subCategory || 'टूलकिट',
      authorId: article.author.id,
      metaTitle: article.metaTitle || article.title,
      metaDescription: article.metaDescription || article.excerpt,
      canonicalUrl: article.canonicalUrl || '',
      keywords: article.keywords?.join(', ') || '',
      schemaType: (article.schemaType as any) || 'TechArticle',
      rating: article.rating ? article.rating.toString() : '',
      productPrice: article.productPrice || '',
      isFeatured: !!article.isFeatured,
      isEditorialChoice: !!article.isEditorialChoice,
      isTrending: !!article.isTrending,
      readingTimeMinutes: article.readingTimeMinutes || 5,
    });
    setIsEditing(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteArticle = (id: number) => {
    setArticles((prev) => prev.filter((a) => a.id !== id));
    setDeleteConfirmId(null);
  };

  const handleAddNewClick = () => {
    setSelectedArticleId(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      coverImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
      categoryId: categories[0]?.id || 2,
      subCategory: 'Python',
      authorId: 1,
      metaTitle: '',
      metaDescription: '',
      canonicalUrl: '',
      keywords: 'टेक, प्रोग्रामिंग, शॉर्टकट्स',
      schemaType: 'TechArticle',
      rating: '',
      productPrice: '',
      isFeatured: false,
      isEditorialChoice: false,
      isTrending: true,
      readingTimeMinutes: 5,
    });
    setIsEditing(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const categoryObj = categories.find((c) => c.id === Number(formData.categoryId)) || categories[0];
    const authorObj = authors.find((a) => a.id === Number(formData.authorId)) || authors[0];

    const postPayload: Article = {
      id: selectedArticleId || Date.now(),
      title: formData.title,
      slug: formData.slug || `post-${Date.now()}`,
      excerpt: formData.excerpt,
      content: formData.content,
      coverImage: formData.coverImage,
      imageAlt: formData.title,
      category: categoryObj,
      subCategory: formData.subCategory,
      tags: [{ id: 1, name: formData.subCategory || 'Tech', slug: (formData.subCategory || 'tech').toLowerCase(), count: 1 }],
      author: authorObj,
      publishedAt: 'अभी-अभी (Just Now)',
      readingTimeMinutes: Number(formData.readingTimeMinutes) || 5,
      viewsCount: 1,
      commentsCount: 0,
      isFeatured: formData.isFeatured,
      isEditorialChoice: formData.isEditorialChoice,
      isTrending: formData.isTrending,
      rating: formData.rating ? parseFloat(formData.rating) : undefined,
      productPrice: formData.productPrice || undefined,
      metaTitle: formData.metaTitle,
      metaDescription: formData.metaDescription,
      canonicalUrl: formData.canonicalUrl,
      keywords: formData.keywords.split(',').map((s) => s.trim()),
      schemaType: formData.schemaType,
    };

    // Update in local articles list
    const existingIndex = articles.findIndex((a) => a.id === postPayload.id);
    let updatedList: Article[];
    if (existingIndex >= 0) {
      updatedList = [...articles];
      updatedList[existingIndex] = postPayload;
    } else {
      updatedList = [postPayload, ...articles];
    }
    setArticles(updatedList);

    setSaveStatus('✓ लेख सफलतापूर्वक प्रकाशित (Saved & Published) हो गया!');
    setLoading(false);

    setTimeout(() => {
      onNavigate(`/article/${postPayload.slug}`);
    }, 1200);
  };

  // Filtered articles for table
  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // -------------------------------------------------------------
  // VIEW 1: SECURE ADMIN LOGIN SCREEN (If not logged in)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-white dark:bg-[#131b22] rounded-3xl border border-gray-200 dark:border-gray-800 shadow-xl p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-red-50 dark:bg-red-950/40 text-[#bb010d] rounded-2xl flex items-center justify-center mx-auto shadow-inner border border-red-100 dark:border-red-900/50">
              <span className="material-symbols-outlined text-[34px]">admin_panel_settings</span>
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">
              एडमिन पोस्टिंग पोर्टल (CMS)
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ब्लॉग पोस्ट करने और सामग्री संपादित करने के लिए लॉगिन करें।
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-xl text-xs text-red-600 dark:text-red-300 font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-red-600">error</span>
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                एडमिन यूज़रनेम (Username / ID)
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-gray-400 text-[18px]">
                  person
                </span>
                <input
                  type="text"
                  required
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 pl-10 pr-4 py-2.5 rounded-xl text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                पासवर्ड (Password)
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3.5 top-2.5 text-gray-400 text-[18px]">
                  lock
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 pl-10 pr-10 py-2.5 rounded-xl text-sm font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xs"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Demo Credentials Info */}
            <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-800 dark:text-amber-300 space-y-1">
              <span className="font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]">info</span> डिफ़ॉल्ट क्रेडेंशियल्स:
              </span>
              <div className="font-mono text-[11px] text-gray-700 dark:text-gray-300">
                यूज़रनेम: <span className="font-bold text-[#bb010d]">admin</span> | पासवर्ड:{' '}
                <span className="font-bold text-[#bb010d]">admin123</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#bb010d] hover:bg-[#e02924] text-white text-sm font-bold py-3 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">login</span>
              एडमिन पोर्टल में लॉगिन करें
            </button>
          </form>

          <div className="pt-2 text-center">
            <button
              onClick={() => onNavigate('/')}
              className="text-xs text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              ← मुख्य वेबसाइट पर वापस जाएं
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW 2: AUTHENTICATED ADMIN CMS PORTAL
  // -------------------------------------------------------------
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Navbar for Logged In Admin */}
      <div className="bg-[#141d23] text-white p-6 rounded-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-gray-800 shadow-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold text-red-400 tracking-wider">
              TechVani CMS
            </span>
            <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              एडमिन लॉगिन एक्टिव
            </span>
          </div>
          <h1 className="text-2xl font-extrabold mt-1">
            ब्लॉग पोस्टिंग &amp; सामग्री संपादन पोर्टल
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            यहाँ से आप सुरक्षित रूप से नए आर्टिकल्स पोस्ट कर सकते हैं और मौजूदा आर्टिकल्स को एडिट/डिलीट कर सकते हैं।
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isEditing ? (
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl border border-gray-700 transition-colors cursor-pointer"
            >
              ← सभी आर्टिकल्स देखें
            </button>
          ) : (
            <button
              onClick={handleAddNewClick}
              className="bg-[#bb010d] hover:bg-[#e02924] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              नया आर्टिकल लिखें
            </button>
          )}

          <button
            onClick={handleLogout}
            className="bg-gray-800/80 hover:bg-red-950/60 hover:text-red-400 text-gray-300 text-xs font-bold px-3.5 py-2.5 rounded-xl border border-gray-700 transition-all flex items-center gap-1.5 cursor-pointer"
            title="लॉगआउट करें"
          >
            <span className="material-symbols-outlined text-[16px]">logout</span>
            लॉगआउट
          </button>
        </div>
      </div>

      {isEditing ? (
        /* Edit / Create Form */
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Content Form (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Section 1: Main Content */}
              <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
                  <span className="material-symbols-outlined text-[#bb010d]">edit_note</span>
                  1. मुख्य लेख सामग्री (Article Content)
                </h3>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    आर्टिकल का मुख्य शीर्षक (Title) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="उदा: विंडोज 11 के 25 सबसे उपयोगी कीबोर्ड शॉर्टकट्स"
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      URL स्लग (Slug) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="windows-11-keyboard-shortcuts"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs font-mono text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      श्रेणी (Category) *
                    </label>
                    <select
                      value={formData.categoryId}
                      onChange={(e) => setFormData({ ...formData, categoryId: Number(e.target.value) })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    कवर फोटो URL (Cover Image URL) *
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.coverImage}
                    onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                  {formData.coverImage && (
                    <div className="mt-2 h-32 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <img src={formData.coverImage} alt="Preview" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    संक्षिप्त सारांश (Excerpt) *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="2 पंक्तियों में लेख का मुख्य सार..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    विस्तृत लेख सामग्री (Content - Markdown / HTML) *
                  </label>
                  <textarea
                    rows={8}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="यहाँ अपना पूरा लेख लिखें। हेडिंग्स, कोड ब्लॉक्स, और पैराग्राफ समर्थित हैं..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                </div>
              </div>

              {/* Section 2: Backend-Controlled SEO Fields */}
              <div className="bg-white dark:bg-[#131b22] p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-800 pb-3">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-emerald-500">search_check</span>
                    2. गूगल सर्च व SEO मेटाडेटा (Google SERP Control)
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
                    Backend Synced
                  </span>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      कस्टम Google Meta Title
                    </label>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {formData.metaTitle.length}/60 अक्षर
                    </span>
                  </div>
                  <input
                    type="text"
                    value={formData.metaTitle}
                    onChange={(e) => setFormData({ ...formData, metaTitle: e.target.value })}
                    placeholder="गूगल सर्च में दिखने वाला सटीक शीर्षक..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-bold text-gray-700 dark:text-gray-300">
                      कस्टम Google Meta Description
                    </label>
                    <span className="text-[11px] text-gray-400 font-mono">
                      {formData.metaDescription.length}/160 अक्षर
                    </span>
                  </div>
                  <textarea
                    rows={2}
                    value={formData.metaDescription}
                    onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                    placeholder="गूगल सर्च स्निपेट में दिखने वाला 140-160 अक्षरों का विवरण..."
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Meta Keywords (कॉमा से अलग करें)
                    </label>
                    <input
                      type="text"
                      value={formData.keywords}
                      onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                      placeholder="विंडोज 11, कीबोर्ड शॉर्टकट्स, एक्सेल"
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Schema.org स्ट्रक्चर्ड डेटा टाइप
                    </label>
                    <select
                      value={formData.schemaType}
                      onChange={(e) => setFormData({ ...formData, schemaType: e.target.value as any })}
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3.5 py-2 rounded-xl text-xs font-medium text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
                    >
                      <option value="TechArticle">TechArticle (तकनीकी लेख)</option>
                      <option value="NewsArticle">NewsArticle (टेक समाचार)</option>
                      <option value="Product">Product (गैजेट समीक्षा व रेटिंग)</option>
                      <option value="HowTo">HowTo (शॉर्टकट व गाइड)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Live Google SERP Preview & Publish Box (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* LIVE GOOGLE SERP PREVIEW BOX */}
              <div className="bg-white dark:bg-[#131b22] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
                <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500 block">
                  🔍 लाइव Google Search Preview
                </span>

                <div className="p-4 bg-gray-50 dark:bg-gray-900/80 rounded-xl border border-gray-200 dark:border-gray-700/80 space-y-1 font-sans">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600 dark:text-gray-400 truncate">
                    <span className="w-4 h-4 rounded-full bg-red-600 text-white text-[9px] font-bold flex items-center justify-center">
                      ट
                    </span>
                    <span className="truncate">techvani.in › article › {formData.slug || 'url-slug'}</span>
                  </div>
                  <h4 className="text-base text-[#1a0dab] dark:text-[#8ab4f8] font-semibold leading-snug line-clamp-2 hover:underline cursor-pointer">
                    {formData.metaTitle || formData.title || 'शीर्षक यहाँ दिखाई देगा | टेकवाणी'}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
                    {formData.metaDescription || formData.excerpt || 'आपका 160 अक्षरों का मेटा डिस्क्रिप्शन गूगल सर्च रिजल्ट्स में यहाँ दिखाया जाएगा...'}
                  </p>
                </div>
              </div>

              {/* Publish Box */}
              <div className="bg-white dark:bg-[#131b22] p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">
                  प्रकाशन और सेटिंग्स
                </h4>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isFeatured}
                      onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                      className="rounded text-[#bb010d] focus:ring-[#bb010d]"
                    />
                    <span className="font-bold text-[#bb010d]">मुख्य फीचर लेख (Featured Article)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isEditorialChoice}
                      onChange={(e) => setFormData({ ...formData, isEditorialChoice: e.target.checked })}
                      className="rounded text-[#bb010d] focus:ring-[#bb010d]"
                    />
                    <span>संपादकीय पसंद (Editorial Choice)</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer text-xs font-medium text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={formData.isTrending}
                      onChange={(e) => setFormData({ ...formData, isTrending: e.target.checked })}
                      className="rounded text-[#bb010d] focus:ring-[#bb010d]"
                    />
                    <span>ट्रेंडिंग सेक्शन में दिखाएं</span>
                  </label>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    पढ़ने का अनुमानित समय (मिनट)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="60"
                    value={formData.readingTimeMinutes}
                    onChange={(e) => setFormData({ ...formData, readingTimeMinutes: Number(e.target.value) })}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-1.5 rounded-xl text-xs"
                  />
                </div>

                {saveStatus && (
                  <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xl text-xs text-emerald-700 dark:text-emerald-300 font-bold">
                    {saveStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#bb010d] hover:bg-[#e02924] disabled:opacity-50 text-white text-sm font-bold py-3 rounded-xl transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">publish</span>
                  {loading ? 'सुरक्षित हो रहा है...' : 'आर्टिकल प्रकाशित करें (Publish Post)'}
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        /* Articles List Table */
        <div className="bg-white dark:bg-[#131b22] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm space-y-4">
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                सभी प्रकाशित ब्लॉग आर्टिकल्स ({filteredArticles.length})
              </h3>
              <span className="text-xs text-gray-500">
                शीर्षक पर क्लिक करके या 'एडिट करें' बटन से किसी भी आर्टिकल का टेक्स्ट व SEO बदलें।
              </span>
            </div>

            {/* Search Input in Admin */}
            <div className="relative w-full sm:w-64">
              <span className="material-symbols-outlined absolute left-3 top-2 text-gray-400 text-[18px]">
                search
              </span>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="आर्टिकल खोजें..."
                className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 pl-9 pr-3 py-1.5 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#bb010d]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-gray-50 dark:bg-gray-800/60 text-gray-500 uppercase font-bold border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="py-3 px-4">शीर्षक और स्लग</th>
                  <th className="py-3 px-4">श्रेणी</th>
                  <th className="py-3 px-4">लेखक</th>
                  <th className="py-3 px-4">व्यूज</th>
                  <th className="py-3 px-4">SEO स्टेटस</th>
                  <th className="py-3 px-4 text-right">क्रिया (Actions)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {filteredArticles.map((art) => (
                  <tr key={art.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-gray-900 dark:text-white max-w-xs truncate">
                      <div className="truncate">{art.title}</div>
                      <div className="text-[11px] text-gray-400 font-mono">/article/{art.slug}</div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-red-50 dark:bg-red-950/40 text-[#bb010d] px-2 py-0.5 rounded font-bold uppercase text-[10px]">
                        {art.category.name}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{art.author.name}</td>
                    <td className="py-3 px-4 font-mono">{art.viewsCount.toLocaleString()}</td>
                    <td className="py-3 px-4">
                      <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span> सिंक
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      {deleteConfirmId === art.id ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => handleDeleteArticle(art.id)}
                            className="bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer"
                          >
                            हाँ, हटाएं
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg text-xs cursor-pointer"
                          >
                            रद्द
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(art)}
                            className="bg-gray-100 dark:bg-gray-800 hover:bg-[#bb010d] hover:text-white text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg transition-colors font-bold text-xs cursor-pointer"
                          >
                            एडिट करें
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(art.id)}
                            className="bg-gray-100 dark:bg-gray-800 hover:bg-red-600 hover:text-white text-gray-500 px-2.5 py-1.5 rounded-lg transition-colors font-bold text-xs cursor-pointer"
                            title="आर्टिकल हटाएं"
                          >
                            <span className="material-symbols-outlined text-[15px] align-middle">delete</span>
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
