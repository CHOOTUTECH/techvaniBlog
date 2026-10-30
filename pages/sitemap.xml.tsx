// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';
import { djangoApi } from '../src/services/djangoApi';
import { Article, Category } from '../src/types/api';
import {
  buildSitemapEntries,
  renderSitemapXml,
  SITE_URL,
  STATIC_PATHS,
} from '../src/utils/sitemap';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );

  let articles: Article[] = [];
  let categories: Category[] = [];
  let apiOk = true;

  try {
    const [articlesRes, cats] = await Promise.all([
      djangoApi.getArticles({ pageSize: 5000 }),
      djangoApi.getCategories(),
    ]);
    articles = articlesRes?.results || [];
    categories = cats || [];
  } catch (err) {
    console.error('[sitemap.xml] API failed:', err);
    apiOk = false;
  }

  const entries = apiOk
    ? buildSitemapEntries(articles, categories)
    : STATIC_PATHS.map((p) => ({ loc: `${SITE_URL}${p}` }));

  res.write(renderSitemapXml(entries));
  res.end();

  return { props: {} };
};

export default function SitemapXml() {
  return null;
}