module.exports = {

"[project]/.next-internal/server/app/api/admin/products/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
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
"[project]/lib/models/Product.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ProductModel": (()=>ProductModel)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
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
        let query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.is_active = true
    `;
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
        const result = await pool.query(query, params);
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
"[externals]/jsonwebtoken [external] (jsonwebtoken, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("jsonwebtoken", () => require("jsonwebtoken"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/app/api/admin/products/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/models/Product.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$jsonwebtoken__$5b$external$5d$__$28$jsonwebtoken$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/jsonwebtoken [external] (jsonwebtoken, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
// Проверка авторизации админа
function verifyAdminToken(request) {
    const authorization = request.headers.get('authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return null;
    }
    const token = authorization.replace('Bearer ', '');
    try {
        const decoded = __TURBOPACK__imported__module__$5b$externals$5d2f$jsonwebtoken__$5b$external$5d$__$28$jsonwebtoken$2c$__cjs$29$__["default"].verify(token, process.env.JWT_SECRET || 'default-secret');
        if (decoded.role !== 'admin') {
            return null;
        }
        return decoded;
    } catch (error) {
        return null;
    }
}
// Функция для сохранения изображения
async function saveImage(file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // Создаем уникальное имя файла
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
    const uploadDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'public', 'images', 'products');
    // Создаем директорию если не существует
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(uploadDir)) {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(uploadDir, {
            recursive: true
        });
    }
    const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(uploadDir, fileName);
    await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, buffer);
    return `/images/products/${fileName}`;
}
async function POST(request) {
    try {
        // Проверка авторизации
        const adminUser = verifyAdminToken(request);
        if (!adminUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const formData = await request.formData();
        // Извлекаем данные из FormData
        const name = formData.get('name');
        const slug = formData.get('slug');
        const description = formData.get('description');
        const short_description = formData.get('short_description');
        const price = parseFloat(formData.get('price'));
        const original_price = formData.get('original_price') ? parseFloat(formData.get('original_price')) : undefined;
        const category_id = parseInt(formData.get('category_id'));
        const stock_quantity = parseInt(formData.get('stock_quantity'));
        const sku = formData.get('sku');
        const meta_title = formData.get('meta_title');
        const meta_description = formData.get('meta_description');
        const is_featured = formData.get('is_featured') === 'true';
        const tags = JSON.parse(formData.get('tags') || '[]');
        const imageFile = formData.get('image');
        // Валидация обязательных полей
        if (!name || !description || !price || !category_id || stock_quantity < 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        // Генерация slug если не указан
        const finalSlug = slug || name.toLowerCase().replace(/[^a-zа-я0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
        // Сохранение изображения
        let image_url = '/images/products/balloon.png'; // по умолчанию
        if (imageFile && imageFile.size > 0) {
            image_url = await saveImage(imageFile);
        }
        // Создаем товар
        const productData = {
            name,
            slug: finalSlug,
            description,
            short_description,
            price,
            original_price,
            category_id,
            image_url,
            images: [
                image_url
            ],
            rating: 0,
            reviews_count: 0,
            in_stock: stock_quantity > 0,
            stock_quantity,
            sku,
            tags,
            meta_title: meta_title || name,
            meta_description: meta_description || short_description || description.substring(0, 160),
            is_featured,
            is_active: true
        };
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductModel"].create(productData);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: product
        }, {
            status: 201
        });
    } catch (error) {
        console.error('Error creating product:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to create product'
        }, {
            status: 500
        });
    }
}
async function GET(request) {
    try {
        // Проверка авторизации
        const adminUser = verifyAdminToken(request);
        if (!adminUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const { searchParams } = new URL(request.url);
        const filters = {
            category: searchParams.get('category') || undefined,
            search: searchParams.get('search') || undefined,
            featured: searchParams.get('featured') === 'true',
            limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')) : undefined,
            offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')) : undefined
        };
        // Получаем все товары (включая неактивные для админки)
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$models$2f$Product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ProductModel"].getAll(filters);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: products,
            count: products.length
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch products'
        }, {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ccb11cbd._.js.map