(()=>{var e={};e.id=3856,e.ids=[3856],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},31117:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{DELETE:()=>u,GET:()=>o,PUT:()=>n});var a=s(32190),c=s(76822),i=e([c]);async function o(e,{params:t}){try{let e=parseInt(t.id);if(isNaN(e))return a.NextResponse.json({success:!1,error:"Invalid product ID"},{status:400});let s=await c.L.getById(e);if(!s)return a.NextResponse.json({success:!1,error:"Product not found"},{status:404});return a.NextResponse.json({success:!0,data:s})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to fetch product"},{status:500})}}async function n(e,{params:t}){try{let s=parseInt(t.id),r=await e.json();if(isNaN(s))return a.NextResponse.json({success:!1,error:"Invalid product ID"},{status:400});let i=await c.L.update(s,r);if(!i)return a.NextResponse.json({success:!1,error:"Product not found"},{status:404});return a.NextResponse.json({success:!0,data:i})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to update product"},{status:500})}}async function u(e,{params:t}){try{let e=parseInt(t.id);if(isNaN(e))return a.NextResponse.json({success:!1,error:"Invalid product ID"},{status:400});if(!await c.L.delete(e))return a.NextResponse.json({success:!1,error:"Product not found"},{status:404});return a.NextResponse.json({success:!0,message:"Product deleted successfully"})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to delete product"},{status:500})}}c=(i.then?(await i)():i)[0],r()}catch(e){r(e)}})},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},49377:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.r(t),s.d(t,{patchFetch:()=>u,routeModule:()=>p,serverHooks:()=>y,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var a=s(96559),c=s(48088),i=s(37719),o=s(31117),n=e([o]);o=(n.then?(await n)():n)[0];let p=new a.AppRouteRouteModule({definition:{kind:c.RouteKind.APP_ROUTE,page:"/api/products/[id]/route",pathname:"/api/products/[id]",filename:"route",bundlePath:"app/api/products/[id]/route"},resolvedPagePath:"C:\\Users\\HP\\Desktop\\work\\project\\app\\api\\products\\[id]\\route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:y}=p;function u(){return(0,i.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}r()}catch(e){r(e)}})},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64939:e=>{"use strict";e.exports=import("pg")},76822:(e,t,s)=>{"use strict";s.a(e,async(e,r)=>{try{s.d(t,{L:()=>o});var a=s(64939),c=e([a]);let i=new(a=(c.then?(await c)():c)[0]).Pool({user:process.env.DB_USER||"postgres",host:process.env.DB_HOST||"localhost",database:process.env.DB_NAME||"balloons_store",password:process.env.DB_PASSWORD||"password",port:parseInt(process.env.DB_PORT||"5432"),ssl:"true"===process.env.DB_SSL&&{rejectUnauthorized:!1}});class o{static async getAll(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = true
    `,s=[],r=1;return e?.category&&(t+=` AND c.slug = $${r}`,s.push(e.category),r++),e?.search&&(t+=` AND (p.name ILIKE $${r} OR p.description ILIKE $${r})`,s.push(`%${e.search}%`),r++),e?.featured&&(t+=" AND p.is_featured = true"),t+=" ORDER BY p.sort_order ASC, p.created_at DESC",e?.limit&&(t+=` LIMIT $${r}`,s.push(e.limit),r++),e?.offset&&(t+=` OFFSET $${r}`,s.push(e.offset)),(await i.query(t,s)).rows}static async getById(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.id = $1 AND p.is_active = true
    `;return(await i.query(t,[e])).rows[0]||null}static async getBySlug(e){let t=`
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.slug = $1 AND p.is_active = true
    `;return(await i.query(t,[e])).rows[0]||null}static async getFeatured(e=8){return this.getAll({featured:!0,limit:e})}static async getByCategory(e,t){return this.getAll({category:e,limit:t})}static async search(e,t){return this.getAll({search:e,limit:t})}static async create(e){let t=`
      INSERT INTO products (
        name, slug, description, short_description, price, original_price,
        category_id, image_url, images, rating, reviews_count, in_stock,
        stock_quantity, sku, tags, meta_title, meta_description, is_featured, is_active
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *
    `,s=[e.name,e.slug,e.description,e.short_description,e.price,e.original_price,e.category_id,e.image_url,e.images,e.rating,e.reviews_count,e.in_stock,e.stock_quantity,e.sku,e.tags,e.meta_title,e.meta_description,e.is_featured,e.is_active];return(await i.query(t,s)).rows[0]}static async update(e,t){let s=[],r=[],a=1;if(Object.entries(t).forEach(([e,t])=>{"id"!==e&&"created_at"!==e&&"updated_at"!==e&&void 0!==t&&(s.push(`${e} = $${a}`),r.push(t),a++)}),0===s.length)return null;let c=`
      UPDATE products 
      SET ${s.join(", ")} 
      WHERE id = $${a} 
      RETURNING *
    `;return r.push(e),(await i.query(c,r)).rows[0]||null}static async delete(e){return((await i.query("UPDATE products SET is_active = false WHERE id = $1",[e])).rowCount??0)>0}static async updateStock(e,t){await i.query("UPDATE products SET stock_quantity = $2 WHERE id = $1",[e,t])}static async updateRating(e){let t=`
      UPDATE products 
      SET 
        rating = (SELECT AVG(rating) FROM reviews WHERE product_id = $1 AND is_approved = true),
        reviews_count = (SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND is_approved = true)
      WHERE id = $1
    `;await i.query(t,[e])}}r()}catch(e){r(e)}})},78335:()=>{},96487:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[7719,580],()=>s(49377));module.exports=r})();