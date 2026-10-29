// pages/sitemap.xml.tsx
import { GetServerSideProps } from 'next';
import { djangoApi } from '../src/services/djangoApi';

const EXTERNAL_DATA_URL = 'https://techvani.co.in'; // 🔥 अपना असली डोमेन यहाँ डालें

function generateSiteMap(articles: any[], categories: any[], tags: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     
     <!-- 1. Static Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <changefreq>monthly</changefreq>
       <priority>0.5</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <changefreq>monthly</changefreq>
       <priority>0.5</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/privacy-policy</loc>
       <changefreq>yearly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/terms</loc>
       <changefreq>yearly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/editorial-team</loc>
       <changefreq>monthly</changefreq>
       <priority>0.5</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/tools</loc>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>

     <!-- 2. Dynamic Categories -->
     ${categories
       .map((category) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/category/${category.slug}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join('')}

     <!-- 3. Dynamic Tags -->
     ${tags
       .map((tag) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/tag/${tag.slug}</loc>
           <changefreq>weekly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join('')}

     <!-- 4. Dynamic Articles & Products -->
     ${articles
       .map((article) => {
         // अगर आर्टिकल में रेटिंग है तो वह प्रोडक्ट पेज है
         const isProduct = article.rating ? 'product' : 'article';
         // तारीख फॉर्मेट करें (YYYY-MM-DD)
         const lastMod = new Date().toISOString().split('T')[0]; 
         
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${isProduct}/${article.slug}</loc>
           <lastmod>${lastMod}</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps में रिस्पॉन्स भेजा जा रहा है, इसलिए यह कंपोनेंट खाली रहेगा
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    // API से सारा डेटा फ़ेच करें
    const articlesRes = await djangoApi.getArticles({ pageSize: 1000 }); // सारे आर्टिकल्स
    const categories = await djangoApi.getCategories();
    const tags = await djangoApi.getTags();

    // अगर API फेल हो जाए, तो मॉक डेटा का इस्तेमाल करें (लेकिन djangoApi में पहले से fallback है)

    // XML जनरेट करें
    const sitemap = generateSiteMap(
      articlesRes.results || [], 
      categories || [], 
      tags || []
    );

    // रिस्पॉन्स को XML के रूप में सेट करें
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Sitemap Error:", error);
    res.statusCode = 500;
    res.end();
    return { props: {} };
  }
};

export default SiteMap;