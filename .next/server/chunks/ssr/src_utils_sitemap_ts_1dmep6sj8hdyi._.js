module.exports=[6645,a=>{"use strict";let b="https://www.techvani.co.in",c=["/","/about","/contact","/privacy-policy","/terms","/editorial-team","/tools"];function d(a){let b=null!=a.rating;return`${b?"/product":"/article"}/${a.slug}`}function e(a){return"home"===a.slug?"/":`/category/${a.slug}`}a.s(["A",0,b,"L",0,c,"S",0,function(a,f){let g=[];for(let a of c)g.push({loc:`${b}${a}`,changefreq:"weekly",priority:"/"===a?1:.6});for(let a of f)a.slug&&g.push({loc:`${b}${e(a)}`,changefreq:"weekly",priority:.7});for(let c of a)c.slug&&g.push({loc:`${b}${d(c)}`,lastmod:function(a){let b=a.updated_at??a.updatedAt??a.modified;if(b)try{return new Date(b).toISOString().split("T")[0]}catch{return}}(c),changefreq:"weekly",priority:.8});let h=new Set;return g.filter(a=>!h.has(a.loc)&&(h.add(a.loc),!0))},"V",0,d,"W",0,e,"T",0,function(a){let b=a.map(a=>{let b=[`    <loc>${a.loc.replace(/[<>&'"]/g,a=>{switch(a){case"<":return"&lt;";case">":return"&gt;";case"&":return"&amp;";case"'":return"&apos;";case'"':return"&quot;";default:return a}})}</loc>`];return a.lastmod&&b.push(`    <lastmod>${a.lastmod}</lastmod>`),a.changefreq&&b.push(`    <changefreq>${a.changefreq}</changefreq>`),void 0!==a.priority&&b.push(`    <priority>${a.priority.toFixed(1)}</priority>`),`  <url>
${b.join("\n")}
  </url>`}).join("\n");return`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${b}
</urlset>
`}])}];

//# sourceMappingURL=src_utils_sitemap_ts_1dmep6sj8hdyi._.js.map