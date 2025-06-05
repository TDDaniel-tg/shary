module.exports = {

"[project]/.next-internal/server/app/api/admin/products/[id]/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
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
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/lib/db/index.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createProduct": (()=>createProduct),
    "createReview": (()=>createReview),
    "deleteProduct": (()=>deleteProduct),
    "deleteReview": (()=>deleteReview),
    "getAllProducts": (()=>getAllProducts),
    "getAllReviews": (()=>getAllReviews),
    "getProductById": (()=>getProductById),
    "getReviewById": (()=>getReviewById),
    "getReviewsByStatus": (()=>getReviewsByStatus),
    "readJsonFile": (()=>readJsonFile),
    "updateProduct": (()=>updateProduct),
    "updateReviewStatus": (()=>updateReviewStatus),
    "writeJsonFile": (()=>writeJsonFile)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// Путь к JSON файлам
const DB_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'lib', 'db');
const PRODUCTS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DB_DIR, 'products.json');
const REVIEWS_FILE = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(DB_DIR, 'reviews.json');
function readJsonFile(filePath) {
    try {
        const fileContent = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        throw error;
    }
}
function writeJsonFile(filePath, data) {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, jsonString, 'utf8');
    } catch (error) {
        console.error(`Error writing to file ${filePath}:`, error);
        throw error;
    }
}
function getAllProducts() {
    const data = readJsonFile(PRODUCTS_FILE);
    return data.products;
}
function getProductById(id) {
    const products = getAllProducts();
    return products.find((product)=>product.id === id) || null;
}
function createProduct(product) {
    const products = getAllProducts();
    const newId = (Math.max(...products.map((p)=>parseInt(p.id)), 0) + 1).toString();
    const newProduct = {
        ...product,
        id: newId,
        createdAt: new Date().toISOString()
    };
    products.push(newProduct);
    writeJsonFile(PRODUCTS_FILE, {
        products
    });
    return newProduct;
}
function updateProduct(id, updates) {
    const products = getAllProducts();
    const productIndex = products.findIndex((p)=>p.id === id);
    if (productIndex === -1) {
        return null;
    }
    const updatedProduct = {
        ...products[productIndex],
        ...updates
    };
    products[productIndex] = updatedProduct;
    writeJsonFile(PRODUCTS_FILE, {
        products
    });
    return updatedProduct;
}
function deleteProduct(id) {
    const products = getAllProducts();
    const productIndex = products.findIndex((p)=>p.id === id);
    if (productIndex === -1) {
        return false;
    }
    products.splice(productIndex, 1);
    writeJsonFile(PRODUCTS_FILE, {
        products
    });
    return true;
}
function getAllReviews() {
    const data = readJsonFile(REVIEWS_FILE);
    return data.reviews;
}
function getReviewsByStatus(status) {
    const reviews = getAllReviews();
    return reviews.filter((review)=>review.status === status);
}
function getReviewById(id) {
    const reviews = getAllReviews();
    return reviews.find((review)=>review.id === id) || null;
}
function updateReviewStatus(id, status) {
    const reviews = getAllReviews();
    const reviewIndex = reviews.findIndex((r)=>r.id === id);
    if (reviewIndex === -1) {
        return null;
    }
    reviews[reviewIndex].status = status;
    writeJsonFile(REVIEWS_FILE, {
        reviews
    });
    return reviews[reviewIndex];
}
function createReview(review) {
    const reviews = getAllReviews();
    const newId = (Math.max(...reviews.map((r)=>parseInt(r.id)), 0) + 1).toString();
    const newReview = {
        ...review,
        id: newId,
        status: 'pending',
        createdAt: new Date().toISOString()
    };
    reviews.push(newReview);
    writeJsonFile(REVIEWS_FILE, {
        reviews
    });
    return newReview;
}
function deleteReview(id) {
    const reviews = getAllReviews();
    const reviewIndex = reviews.findIndex((r)=>r.id === id);
    if (reviewIndex === -1) {
        return false;
    }
    reviews.splice(reviewIndex, 1);
    writeJsonFile(REVIEWS_FILE, {
        reviews
    });
    return true;
}
}}),
"[project]/app/api/admin/products/[id]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-route] (ecmascript)");
;
;
// Проверка авторизации админа (такая же, как в app/api/admin/products/route.ts)
function verifyAdminToken(request) {
    const authorization = request.headers.get('authorization') || request.headers.get('Authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return null;
    }
    const token = authorization.replace('Bearer ', '');
    try {
        // В реальном приложении здесь должна быть проверка JWT
        // Для демонстрации считаем, что любой непустой токен действителен
        if (token.length > 0) {
            return {
                role: 'admin'
            };
        }
        return null;
    } catch (error) {
        return null;
    }
}
async function GET(request, context) {
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
        const id = context.params.id;
        const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getProductById"])(id);
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
        console.error(`Error fetching product with ID ${context.params.id}:`, error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch product'
        }, {
            status: 500
        });
    }
}
async function PUT(request, context) {
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
        const id = context.params.id;
        const formData = await request.formData();
        // Извлекаем данные из FormData
        const updates = {};
        // Имя товара
        const name = formData.get('name');
        if (name) updates.name = name;
        // Описание
        const description = formData.get('description');
        if (description) updates.description = description;
        // Цена
        const price = formData.get('price');
        if (price) updates.price = parseFloat(price);
        // Цена со скидкой
        const salePrice = formData.get('salePrice') || formData.get('original_price');
        if (salePrice) {
            const salePriceValue = parseFloat(salePrice);
            updates.salePrice = !isNaN(salePriceValue) ? salePriceValue : null;
        }
        // Категория
        const category = formData.get('category') || formData.get('category_id');
        if (category) updates.category = category;
        // Количество товара
        const stock = formData.get('stock') || formData.get('stock_quantity');
        if (stock) updates.stock = parseInt(stock);
        // Рекомендуемый товар
        const featured = formData.get('featured') || formData.get('is_featured');
        if (featured !== null && featured !== undefined) {
            updates.featured = featured === 'true';
        }
        // Опубликован
        const published = formData.get('published');
        if (published !== null && published !== undefined) {
            updates.published = published === 'true';
        }
        // Обновляем товар
        const updatedProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updateProduct"])(id, updates);
        if (!updatedProduct) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Product not found'
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: updatedProduct
        });
    } catch (error) {
        console.error(`Error updating product with ID ${context.params.id}:`, error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to update product'
        }, {
            status: 500
        });
    }
}
async function DELETE(request, context) {
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
        const id = context.params.id;
        const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["deleteProduct"])(id);
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
        console.error(`Error deleting product with ID ${context.params.id}:`, error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to delete product'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6ed3b621._.js.map