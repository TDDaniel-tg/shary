(()=>{var e={};e.id=3089,e.ids=[3089],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29021:e=>{"use strict";e.exports=require("fs")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},84616:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>h,serverHooks:()=>y,workAsyncStorage:()=>x,workUnitAsyncStorage:()=>d});var s={};t.r(s),t.d(s,{GET:()=>l,POST:()=>m});var o=t(96559),a=t(48088),i=t(37719),p=t(32190),n=t(29021),c=t(33873);let u=`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/catalog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://example.com/contacts</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://example.com/delivery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://example.com/payment</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;async function l(){try{return new p.NextResponse(u,{status:200,headers:{"Content-Type":"application/xml"}})}catch(e){return p.NextResponse.json({error:"Ошибка при получении sitemap"},{status:500})}}async function m(e){try{let{content:r}=await e.json();if(!r)return p.NextResponse.json({error:"Контент не может быть пустым"},{status:400});u=r;try{let e=(0,c.join)(process.cwd(),"public","sitemap.xml");(0,n.writeFileSync)(e,r)}catch(e){}return p.NextResponse.json({message:"sitemap.xml успешно обновлен"})}catch(e){return p.NextResponse.json({error:"Ошибка при обновлении sitemap"},{status:500})}}let h=new o.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/seo/sitemap/route",pathname:"/api/seo/sitemap",filename:"route",bundlePath:"app/api/seo/sitemap/route"},resolvedPagePath:"C:\\Users\\HP\\Desktop\\work\\project\\app\\api\\seo\\sitemap\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:x,workUnitAsyncStorage:d,serverHooks:y}=h;function g(){return(0,i.patchFetch)({workAsyncStorage:x,workUnitAsyncStorage:d})}},96487:()=>{}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[7719,580],()=>t(84616));module.exports=s})();