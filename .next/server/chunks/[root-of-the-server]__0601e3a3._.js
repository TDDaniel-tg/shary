module.exports = {

"[project]/.next-internal/server/app/api/products/[id]/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/pg [external] (pg, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("pg");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/redis.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Централизованная конфигурация Redis с fallback
__turbopack_context__.s({
    "isRedisAvailable": (()=>isRedisAvailable),
    "redis": (()=>redis),
    "safeRedisExpire": (()=>safeRedisExpire),
    "safeRedisGet": (()=>safeRedisGet),
    "safeRedisIncr": (()=>safeRedisIncr),
    "safeRedisSet": (()=>safeRedisSet)
});
let redis = null;
let isRedisAvailable = false;
// Инициализация Redis только на сервере
if ("undefined" === 'undefined' && process.env.REDIS_URL) {
    try {
        const Redis = (()=>{
            const e = new Error("Cannot find module 'ioredis'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        })();
        redis = new Redis(process.env.REDIS_URL);
        isRedisAvailable = true;
        redis.on('error', (error)=>{
            console.warn('Redis connection error:', error);
            isRedisAvailable = false;
        });
        redis.on('connect', ()=>{
            console.log('Redis connected successfully');
            isRedisAvailable = true;
        });
    } catch (error) {
        console.warn('Redis module not available, caching disabled');
        redis = null;
        isRedisAvailable = false;
    }
}
;
const safeRedisGet = async (key)=>{
    if (!redis || !isRedisAvailable) return null;
    try {
        return await redis.get(key);
    } catch (error) {
        console.warn('Redis GET error:', error);
        return null;
    }
};
const safeRedisSet = async (key, value, expiration)=>{
    if (!redis || !isRedisAvailable) return false;
    try {
        if (expiration) {
            await redis.set(key, value, 'EX', expiration);
        } else {
            await redis.set(key, value);
        }
        return true;
    } catch (error) {
        console.warn('Redis SET error:', error);
        return false;
    }
};
const safeRedisIncr = async (key)=>{
    if (!redis || !isRedisAvailable) return null;
    try {
        return await redis.incr(key);
    } catch (error) {
        console.warn('Redis INCR error:', error);
        return null;
    }
};
const safeRedisExpire = async (key, seconds)=>{
    if (!redis || !isRedisAvailable) return false;
    try {
        await redis.expire(key, seconds);
        return true;
    } catch (error) {
        console.warn('Redis EXPIRE error:', error);
        return false;
    }
};
}}),
"[project]/lib/models/Product.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ProductModel": (()=>ProductModel)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redis.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'balloons_store',
    password: process.env.DB_PASSWORD || 'password',
    port: parseInt(process.env.DB_PORT || '5432'),
    ssl: process.env.DB_SSL === 'true' ? {
        rejectUnauthorized: false
    } : false
});
class ProductModel {
    static async getAll(filters) {
        // Кэшируем только популярные запросы (без поиска)
        const canCache = !filters?.search;
        const cacheKey = canCache ? `products:${JSON.stringify(filters)}` : null;
        if (canCache && cacheKey) {
            const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeRedisGet"])(cacheKey);
            if (cached) return JSON.parse(cached);
        }
        let query = `
      SELECT p.*, c.name as category_name 
    `;
        if (filters?.store_id) {
            query += ', ps.stock_quantity';
        }
        query += ` FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
    `;
        if (filters?.store_id) {
            query += 'LEFT JOIN product_stocks ps ON ps.product_id = p.id AND ps.store_id = $storeId$ ';
        }
        query += 'WHERE p.is_active = true';
        const params = [];
        let paramIndex = 1;
        if (filters?.category) {
            query += ` AND c.slug = $${paramIndex}`;
            params.push(filters.category);
            paramIndex++;
        }
        if (filters?.search) {
            query += ` AND (p.name ILIKE $${paramIndex} OR p.description ILIKE $${paramIndex})`;
            params.push(`%${filters.search}%`);
            paramIndex++;
        }
        if (filters?.featured) {
            query += ` AND p.is_featured = true`;
        }
        if (filters?.store_id) {
            query += ` AND ps.stock_quantity > 0`;
        }
        query += ` ORDER BY p.sort_order ASC, p.created_at DESC`;
        if (filters?.limit) {
            query += ` LIMIT $${paramIndex}`;
            params.push(filters.limit);
            paramIndex++;
        }
        if (filters?.offset) {
            query += ` OFFSET $${paramIndex}`;
            params.push(filters.offset);
        }
        // Подстановка store_id
        let finalQuery = query;
        if (filters?.store_id) {
            finalQuery = query.replace(/\$storeId\$/g, `$${paramIndex}`);
            params.push(filters.store_id);
        }
        const result = await pool.query(finalQuery, params);
        if (canCache && cacheKey) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redis$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeRedisSet"])(cacheKey, JSON.stringify(result.rows), 60); // 1 минута
        }
        return result.rows;
    }
    static async getById(id) {
        const query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.id = $1 AND p.is_active = true
    `;
        const result = await pool.query(query, [
            id
        ]);
        return result.rows[0] || null;
    }
    static async getBySlug(slug) {
        const query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.slug = $1 AND p.is_active = true
    `;
        const result = await pool.query(query, [
            slug
        ]);
        return result.rows[0] || null;
    }
    static async getFeatured(limit = 8) {
        return this.getAll({
            featured: true,
            limit
        });
    }
    static async getByCategory(categorySlug, limit) {
        return this.getAll({
            category: categorySlug,
            limit
        });
    }
    static async search(searchTerm, limit) {
        return this.getAll({
            search: searchTerm,
            limit
        });
    }
    static async create(productData) {
        const query = `
      INSERT INTO products (
        name, slug, description, short_description, price, original_price,
        category_id, image_url, images, rating, reviews_count, in_stock,
        stock_quantity, sku, tags, meta_title, meta_description, is_featured, is_active
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *
    `;
        const params = [
            productData.name,
            productData.slug,
            productData.description,
            productData.short_description,
            productData.price,
            productData.original_price,
            productData.category_id,
            productData.image_url,
            productData.images,
            productData.rating,
            productData.reviews_count,
            productData.in_stock,
            productData.stock_quantity,
            productData.sku,
            productData.tags,
            productData.meta_title,
            productData.meta_description,
            productData.is_featured,
            productData.is_active
        ];
        const result = await pool.query(query, params);
        return result.rows[0];
    }
    static async update(id, productData) {
        const fields = [];
        const params = [];
        let paramIndex = 1;
        Object.entries(productData).forEach(([key, value])=>{
            if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && value !== undefined) {
                fields.push(`${key} = $${paramIndex}`);
                params.push(value);
                paramIndex++;
            }
        });
        if (fields.length === 0) return null;
        const query = `
      UPDATE products 
      SET ${fields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING *
    `;
        params.push(id);
        const result = await pool.query(query, params);
        return result.rows[0] || null;
    }
    static async delete(id) {
        const query = 'UPDATE products SET is_active = false WHERE id = $1';
        const result = await pool.query(query, [
            id
        ]);
        return (result.rowCount ?? 0) > 0;
    }
    static async updateStock(id, quantity) {
        const query = 'UPDATE products SET stock_quantity = $2 WHERE id = $1';
        await pool.query(query, [
            id,
            quantity
        ]);
    }
    static async updateRating(productId) {
        const query = `
      UPDATE products 
      SET 
        rating = (SELECT AVG(rating) FROM reviews WHERE product_id = $1 AND is_approved = true),
        reviews_count = (SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND is_approved = true)
      WHERE id = $1
    `;
        await pool.query(query, [
            productId
        ]);
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/api/products/[id]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Product.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
async function GET(request, { params }) {
    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid product ID'
            }, {
                status: 400
            });
        }
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductModel"].getById(id);
        if (!product) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Product not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error fetching product:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch product'
        }, {
            status: 500
        });
    }
}
async function PUT(request, { params }) {
    try {
        const id = parseInt(params.id);
        const body = await request.json();
        if (isNaN(id)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid product ID'
            }, {
                status: 400
            });
        }
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductModel"].update(id, body);
        if (!product) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Product not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: product
        });
    } catch (error) {
        console.error('Error updating product:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to update product'
        }, {
            status: 500
        });
    }
}
async function DELETE(request, { params }) {
    try {
        const id = parseInt(params.id);
        if (isNaN(id)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Invalid product ID'
            }, {
                status: 400
            });
        }
        const success = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductModel"].delete(id);
        if (!success) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Product not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: 'Product deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to delete product'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__0601e3a3._.js.map