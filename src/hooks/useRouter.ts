import { useState, useEffect, useCallback } from 'react';

export interface RouteState {
  path: string;
  params: Record<string, string>;
  searchParams: URLSearchParams;
}

export function useRouter() {
  const [route, setRoute] = useState<RouteState>(() => parseCurrentPath());

  function parseCurrentPath(): RouteState {
    if (typeof window === 'undefined') {
      return { path: '/', params: {}, searchParams: new URLSearchParams() };
    }

    const pathname = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);

    // Dynamic Route Matching (Next.js style)
    // /article/:slug
    const articleMatch = pathname.match(/^\/article\/([^/]+)/);
    if (articleMatch) {
      return { path: '/article/:slug', params: { slug: articleMatch[1] }, searchParams };
    }

    // /product/:slug
    const productMatch = pathname.match(/^\/product\/([^/]+)/);
    if (productMatch) {
      return { path: '/product/:slug', params: { slug: productMatch[1] }, searchParams };
    }

    // /category/:slug
    const categoryMatch = pathname.match(/^\/category\/([^/]+)/);
    if (categoryMatch) {
      return { path: '/category/:slug', params: { slug: categoryMatch[1] }, searchParams };
    }

    // /tag/:slug
    const tagMatch = pathname.match(/^\/tag\/([^/]+)/);
    if (tagMatch) {
      return { path: '/tag/:slug', params: { slug: tagMatch[1] }, searchParams };
    }

    // /tool/:slug or /tools/:slug
    const toolMatch = pathname.match(/^\/(?:tool|tools)\/([^/]+)/);
    if (toolMatch) {
      return { path: '/tool/:slug', params: { slug: toolMatch[1] }, searchParams };
    }

    // /tools
    if (pathname === '/tools') {
      return { path: '/tools', params: {}, searchParams };
    }

    return { path: pathname || '/', params: {}, searchParams };
  }

  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseCurrentPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, state?: any) => {
    if (typeof window !== 'undefined') {
      window.history.pushState(state || {}, '', to);
      setRoute(parseCurrentPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const replace = useCallback((to: string, state?: any) => {
    if (typeof window !== 'undefined') {
      window.history.replaceState(state || {}, '', to);
      setRoute(parseCurrentPath());
    }
  }, []);

  return {
    path: route.path,
    params: route.params,
    searchParams: route.searchParams,
    navigate,
    replace,
  };
}
