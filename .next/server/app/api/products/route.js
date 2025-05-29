(()=>{var e={};e.id=3146,e.ids=[3146],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16297:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{patchFetch:()=>u,routeModule:()=>p,serverHooks:()=>g,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var a=r(96559),i=r(48088),c=r(37719),o=r(17615),n=e([o]);o=(n.then?(await n)():n)[0];let p=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/products/route",pathname:"/api/products",filename:"route",bundlePath:"app/api/products/route"},resolvedPagePath:"C:\\Users\\HP\\Desktop\\work\\project\\app\\api\\products\\route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:g}=p;function u(){return(0,c.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}s()}catch(e){s(e)}})},17615:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{GET:()=>o,POST:()=>n});var a=r(32190),i=r(76822),c=e([i]);async function o(e){try{let{searchParams:t}=new URL(e.url),r={category:t.get("category")||void 0,search:t.get("search")||void 0,featured:"true"===t.get("featured"),limit:t.get("limit")?parseInt(t.get("limit")):void 0,offset:t.get("offset")?parseInt(t.get("offset")):void 0},s=await i.L.getAll(r);return a.NextResponse.json({success:!0,data:s,count:s.length})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to fetch products"},{status:500})}}async function n(e){try{let t=await e.json();if(!t.name||!t.price)return a.NextResponse.json({success:!1,error:"Name and price are required"},{status:400});t.slug||(t.slug=t.name.toLowerCase().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""));let r=await i.L.create(t);return a.NextResponse.json({success:!0,data:r},{status:201})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to create product"},{status:500})}}i=(c.then?(await c)():c)[0],s()}catch(e){s(e)}})},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64939:e=>{"use strict";e.exports=import("pg")},76822:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{L:()=>o});var a=r(64939),i=e([a]);let c=new(a=(i.then?(await i)():i)[0]).Pool({user:process.env.DB_USER||"postgres",host:process.env.DB_HOST||"localhost",database:process.env.DB_NAME||"balloons_store",password:process.env.DB_PASSWORD||"password",port:parseInt(process.env.DB_PORT||"5432"),ssl:"true"===process.env.DB_SSL&&{rejectUnauthorized:!1}});class o{static async getAll(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = true
    `,r=[],s=1;return e?.category&&(t+=` AND c.slug = $${s}`,r.push(e.category),s++),e?.search&&(t+=` AND (p.name ILIKE $${s} OR p.description ILIKE $${s})`,r.push(`%${e.search}%`),s++),e?.featured&&(t+=" AND p.is_featured = true"),t+=" ORDER BY p.sort_order ASC, p.created_at DESC",e?.limit&&(t+=` LIMIT $${s}`,r.push(e.limit),s++),e?.offset&&(t+=` OFFSET $${s}`,r.push(e.offset)),(await c.query(t,r)).rows}static async getById(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.id = $1 AND p.is_active = true
    `;return(await c.query(t,[e])).rows[0]||null}static async getBySlug(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.slug = $1 AND p.is_active = true
    `;return(await c.query(t,[e])).rows[0]||null}static async getFeatured(e=8){return this.getAll({featured:!0,limit:e})}static async getByCategory(e,t){return this.getAll({category:e,limit:t})}static async search(e,t){return this.getAll({search:e,limit:t})}static async create(e){let t=`
      INSERT INTO products (
        name, slug, description, short_description, price, original_price,
        category_id, image_url, images, rating, reviews_count, in_stock,
        stock_quantity, sku, tags, meta_title, meta_description, is_featured, is_active
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *
    `,r=[e.name,e.slug,e.description,e.short_description,e.price,e.original_price,e.category_id,e.image_url,e.images,e.rating,e.reviews_count,e.in_stock,e.stock_quantity,e.sku,e.tags,e.meta_title,e.meta_description,e.is_featured,e.is_active];return(await c.query(t,r)).rows[0]}static async update(e,t){let r=[],s=[],a=1;if(Object.entries(t).forEach(([e,t])=>{"id"!==e&&"created_at"!==e&&"updated_at"!==e&&void 0!==t&&(r.push(`${e} = $${a}`),s.push(t),a++)}),0===r.length)return null;let i=`
      UPDATE products 
      SET ${r.join(", ")} 
      WHERE id = $${a} 
      RETURNING *
    `;return s.push(e),(await c.query(i,s)).rows[0]||null}static async delete(e){return((await c.query("UPDATE products SET is_active = false WHERE id = $1",[e])).rowCount??0)>0}static async updateStock(e,t){await c.query("UPDATE products SET stock_quantity = $2 WHERE id = $1",[e,t])}static async updateRating(e){let t=`
      UPDATE products 
      SET 
        rating = (SELECT AVG(rating) FROM reviews WHERE product_id = $1 AND is_approved = true),
        reviews_count = (SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND is_approved = true)
      WHERE id = $1
    `;await c.query(t,[e])}}s()}catch(e){s(e)}})},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7719,580],()=>r(16297));module.exports=s})();