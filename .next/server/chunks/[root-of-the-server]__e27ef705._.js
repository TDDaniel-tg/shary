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
"[project]/app/api/admin/products/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db/index.ts [app-route] (ecmascript)");
;
;
;
;
;
// Проверка авторизации админа
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
        // Используем новую функцию для получения товаров из JSON файла
        const products = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAllProducts"])();
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
        // Извлекаем базовые данные из FormData
        const name = formData.get('name');
        const description = formData.get('description');
        const priceStr = formData.get('price');
        const salePriceStr = formData.get('salePrice') || formData.get('original_price');
        const category = formData.get('category') || formData.get('category_id');
        const stockStr = formData.get('stock') || formData.get('stock_quantity');
        const featured = formData.get('featured') === 'true' || formData.get('is_featured') === 'true';
        const published = formData.get('published') === 'true' || true;
        // Парсим числовые значения
        const price = parseFloat(priceStr);
        const salePrice = salePriceStr ? parseFloat(salePriceStr) : null;
        const stock = parseInt(stockStr);
        // Валидация обязательных полей
        if (!name || !description || isNaN(price) || !category || isNaN(stock) || stock < 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Missing or invalid required fields'
            }, {
                status: 400
            });
        }
        // Обработка изображения
        let images = [
            '/images/products/placeholder.jpg'
        ]; // по умолчанию
        const imageFile = formData.get('image');
        if (imageFile && imageFile.size > 0) {
            const imagePath = await saveImage(imageFile);
            images = [
                imagePath
            ];
        }
        // Создаем новый товар используя новую функцию из lib/db
        const newProduct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createProduct"])({
            name,
            description,
            price,
            salePrice,
            category,
            stock,
            images,
            featured,
            published
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: newProduct
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
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e27ef705._.js.map