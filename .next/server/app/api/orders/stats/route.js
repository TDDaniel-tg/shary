(()=>{var e={};e.id=2413,e.ids=[2413],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},15053:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.d(t,{I:()=>u});var a=r(64939),o=e([a]);let i=new(a=(o.then?(await o)():o)[0]).Pool({user:process.env.DB_USER||"postgres",host:process.env.DB_HOST||"localhost",database:process.env.DB_NAME||"balloons_store",password:process.env.DB_PASSWORD||"password",port:parseInt(process.env.DB_PORT||"5432"),ssl:"true"===process.env.DB_SSL&&{rejectUnauthorized:!1}});class u{static async create(e){let t=await i.connect();try{await t.query("BEGIN");let r=e.items.reduce((e,t)=>e+t.price*t.quantity,0),s=`
        INSERT INTO orders (
          user_id, customer_name, customer_phone, customer_email,
          status, total_amount, delivery_address, delivery_date,
          delivery_time, payment_method, payment_status, notes,
          created_at, updated_at
        ) VALUES ($1, $2, $3, $4, 'pending', $5, $6, $7, $8, $9, 'pending', $10, NOW(), NOW())
        RETURNING *
      `,a=[e.user_id||null,e.customer_name,e.customer_phone,e.customer_email||null,r,e.delivery_address||null,e.delivery_date,e.delivery_time,e.payment_method,e.notes||null],o=(await t.query(s,a)).rows[0];for(let r of e.items){let e=`
          INSERT INTO order_items (order_id, product_id, quantity, price, total_price)
          VALUES ($1, $2, $3, $4, $5)
        `;await t.query(e,[o.id,r.product_id,r.quantity,r.price,r.price*r.quantity])}return await t.query("COMMIT"),o}catch(e){throw await t.query("ROLLBACK"),e}finally{t.release()}}static async getById(e){try{return(await i.query("SELECT * FROM orders WHERE id = $1",[e])).rows[0]||null}catch(e){throw e}}static async getByUserId(e,t=10,r=0){try{let s=`
        SELECT * FROM orders 
        WHERE user_id = $1 
        ORDER BY created_at DESC
        LIMIT $2 OFFSET $3
      `;return(await i.query(s,[e,t,r])).rows}catch(e){throw e}}static async updateStatus(e,t){try{let r=`
        UPDATE orders 
        SET status = $1, updated_at = NOW() 
        WHERE id = $2 
        RETURNING id
      `;return(await i.query(r,[t,e])).rows.length>0}catch(e){throw e}}static async getOrderItems(e){try{let t=`
        SELECT 
          oi.*,
          p.name as product_name,
          p.price as product_price
        FROM order_items oi
        JOIN products p ON oi.product_id = p.id
        WHERE oi.order_id = $1
      `;return(await i.query(t,[e])).rows}catch(e){throw e}}static async getAll(e=50,t=0,r){try{let s="SELECT * FROM orders",a=[],o=1;return r&&(s+=` WHERE status = $${o}`,a.push(r),o++),s+=` ORDER BY created_at DESC LIMIT $${o} OFFSET $${o+1}`,a.push(e,t),(await i.query(s,a)).rows}catch(e){throw e}}static async getStats(){try{let e=`
        SELECT 
          COUNT(*) as total_orders,
          COUNT(CASE WHEN status = 'delivered' THEN 1 END) as delivered_orders,
          SUM(CASE WHEN status = 'delivered' THEN total_amount ELSE 0 END) as total_revenue,
          AVG(CASE WHEN status = 'delivered' THEN total_amount ELSE NULL END) as avg_order_value
        FROM orders
      `;return(await i.query(e)).rows[0]}catch(e){throw e}}static async update(e,t){try{let r=[],s=[],a=1;if(Object.entries(t).forEach(([e,t])=>{"id"!==e&&"created_at"!==e&&"updated_at"!==e&&void 0!==t&&(r.push(`${e} = $${a}`),s.push(t),a++)}),0===r.length)return null;let o=`
        UPDATE orders 
        SET ${r.join(", ")}, updated_at = NOW() 
        WHERE id = $${a} 
        RETURNING *
      `;return s.push(e),(await i.query(o,s)).rows[0]||null}catch(e){throw e}}static async delete(e){let t=await i.connect();try{await t.query("BEGIN"),await t.query("DELETE FROM order_items WHERE order_id = $1",[e]);let r=await t.query("DELETE FROM orders WHERE id = $1",[e]);return await t.query("COMMIT"),(r.rowCount??0)>0}catch(e){throw await t.query("ROLLBACK"),e}finally{t.release()}}}s()}catch(e){s(e)}})},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},35433:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{patchFetch:()=>d,routeModule:()=>c,serverHooks:()=>E,workAsyncStorage:()=>p,workUnitAsyncStorage:()=>l});var a=r(96559),o=r(48088),i=r(37719),u=r(36246),n=e([u]);u=(n.then?(await n)():n)[0];let c=new a.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/orders/stats/route",pathname:"/api/orders/stats",filename:"route",bundlePath:"app/api/orders/stats/route"},resolvedPagePath:"C:\\Users\\HP\\Desktop\\work\\project\\app\\api\\orders\\stats\\route.ts",nextConfigOutput:"",userland:u}),{workAsyncStorage:p,workUnitAsyncStorage:l,serverHooks:E}=c;function d(){return(0,i.patchFetch)({workAsyncStorage:p,workUnitAsyncStorage:l})}s()}catch(e){s(e)}})},36246:(e,t,r)=>{"use strict";r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{GET:()=>d});var a=r(32190),o=r(15053),i=r(80829),u=r.n(i),n=e([o]);async function d(e){try{let t=e.headers.get("authorization");if(!t||!t.startsWith("Bearer "))return a.NextResponse.json({success:!1,error:"Authorization token required"},{status:401});let r=t.replace("Bearer ",""),s=u().verify(r,process.env.JWT_SECRET||"default-secret");if("admin"!==s.role)return a.NextResponse.json({success:!1,error:"Access denied"},{status:403});let i=await o.I.getStats();return a.NextResponse.json({success:!0,data:i})}catch(e){return a.NextResponse.json({success:!1,error:"Failed to get order stats"},{status:500})}}o=(n.then?(await n)():n)[0],s()}catch(e){s(e)}})},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64939:e=>{"use strict";e.exports=import("pg")},78335:()=>{},80829:e=>{"use strict";e.exports=require("jsonwebtoken")},96487:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7719,580],()=>r(35433));module.exports=s})();