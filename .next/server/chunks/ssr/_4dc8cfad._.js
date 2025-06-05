module.exports = {

"[project]/app/admin/pages/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PagesManagement)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>");
'use client';
;
;
;
function PagesManagement() {
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPage, setSelectedPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Обязательные страницы
    const requiredPages = [
        {
            slug: 'contacts',
            title: 'Контакты',
            isRequired: true
        },
        {
            slug: 'about',
            title: 'О компании',
            isRequired: true
        },
        {
            slug: 'payment',
            title: 'Оплата',
            isRequired: true
        },
        {
            slug: 'delivery',
            title: 'Доставка',
            isRequired: true
        },
        {
            slug: 'returns',
            title: 'Гарантия и возврат',
            isRequired: true
        },
        {
            slug: 'privacy',
            title: 'Политика конфиденциальности',
            isRequired: true
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initializePages();
    }, []);
    const initializePages = ()=>{
        // Инициализируем обязательные страницы если их нет
        const initialPages = requiredPages.map((page)=>({
                id: page.slug,
                title: page.title,
                slug: page.slug,
                content: getDefaultContent(page.slug),
                metaTitle: getDefaultMetaTitle(page.slug),
                metaDescription: getDefaultMetaDescription(page.slug),
                isRequired: page.isRequired,
                isActive: true,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }));
        setPages(initialPages);
    };
    const getDefaultContent = (slug)=>{
        const defaultContents = {
            contacts: `
# Контактная информация

## Наши контакты

**Телефон:** +7 (495) 123-45-67  
**Email:** info@balloons-moscow.ru  
**Адрес:** г. Москва, ул. Примерная, д. 123

## График работы

- Понедельник - Пятница: 9:00 - 20:00
- Суббота - Воскресенье: 10:00 - 18:00

## Доставка

Мы осуществляем доставку воздушных шаров и праздничного декора по всей Москве и Московской области.

### Зоны доставки:
- В пределах МКАД - бесплатно от 2000 руб
- За МКАД - стоимость рассчитывается индивидуально

## Как нас найти

Наш офис находится в центре Москвы, рядом с метро "Примерная". 
Вы можете приехать к нам для личного заказа или консультации.
`,
            about: `
# О нашей компании

## Кто мы

Мы - команда профессионалов, которая уже более 10 лет создает праздничное настроение для жителей Москвы. Наша компания специализируется на продаже и доставке воздушных шаров, праздничного декора и подарочных наборов.

## Наша миссия

Сделать каждый праздник незабываемым! Мы верим, что качественные воздушные шары и красивый декор способны создать атмосферу радости и веселья на любом мероприятии.

## Почему выбирают нас

### Качество
- Только сертифицированные материалы
- Проверенные поставщики из Европы и Азии
- Контроль качества на каждом этапе

### Сервис
- Быстрая доставка по Москве
- Профессиональные консультации
- Индивидуальный подход к каждому клиенту

### Опыт
- Более 10 лет на рынке
- Тысячи довольных клиентов
- Участие в крупных мероприятиях города

## Наша команда

В нашей команде работают опытные специалисты, которые помогут вам выбрать идеальное решение для вашего праздника.
`,
            payment: `
# Способы оплаты

## Мы принимаем

### Наличными
- При самовывозе из офиса
- Курьеру при доставке

### Банковские карты
- Visa, MasterCard, МИР
- Онлайн оплата на сайте
- Терминал при самовывозе

### Электронные платежи
- Яндекс.Деньги
- QIWI Кошелек
- WebMoney

### Банковский перевод
- Для юридических лиц
- По счету на реквизиты компании

## Безопасность платежей

Все онлайн платежи проходят через защищенные каналы связи. Мы используем современные технологии шифрования данных для обеспечения безопасности ваших платежей.

## Возврат средств

В случае отказа от заказа или возврата товара, возврат средств осуществляется в течение 5-10 рабочих дней на тот же способ оплаты, который использовался при покупке.
`,
            delivery: `
# Доставка

## Зоны доставки

### Москва (в пределах МКАД)
- **Бесплатная доставка** от 2000 рублей
- Стоимость доставки при заказе до 2000 рублей - 300 рублей
- Время доставки: 2-4 часа

### Московская область
- Стоимость рассчитывается индивидуально
- Зависит от удаленности и объема заказа
- Время доставки: 4-8 часов

## Срочная доставка

Возможна срочная доставка в течение 1-2 часов за дополнительную плату:
- В пределах МКАД: +500 рублей
- За МКАД: +1000 рублей

## Время работы службы доставки

- **Будние дни:** 9:00 - 20:00
- **Выходные:** 10:00 - 18:00

## Самовывоз

Вы можете забрать заказ самостоятельно из нашего офиса:
- **Адрес:** г. Москва, ул. Примерная, д. 123
- **Время работы:** Пн-Пт 9:00-20:00, Сб-Вс 10:00-18:00
- При самовывозе действует скидка 5%

## Особенности доставки шаров с гелием

- Шары с гелием доставляются в специальных контейнерах
- Время "жизни" гелиевых шаров: фольгированные - до 2 недель, латексные - 8-12 часов
- Возможна накачка шаров гелием непосредственно перед мероприятием
`,
            returns: `
# Гарантия и возврат

## Гарантия качества

Мы гарантируем высокое качество всех наших товаров. Каждый товар проходит тщательную проверку перед отправкой клиенту.

### На что распространяется гарантия:
- Качество материалов
- Соответствие заявленным характеристикам
- Целостность упаковки

### Сроки гарантии:
- Воздушные шары: 30 дней с момента покупки
- Праздничный декор: 60 дней
- Подарочные наборы: 30 дней

## Условия возврата

### Возврат возможен в следующих случаях:
- Товар не подошел по размеру или цвету
- Обнаружен производственный брак
- Товар не соответствует описанию на сайте

### Условия для возврата:
- Товар не был в употреблении
- Сохранена оригинальная упаковка
- Есть документ, подтверждающий покупку
- Обращение в течение 14 дней с момента покупки

## Процедура возврата

1. **Свяжитесь с нами** по телефону +7 (495) 123-45-67 или email
2. **Опишите причину** возврата и приложите фото товара
3. **Получите инструкции** по дальнейшим действиям
4. **Верните товар** любым удобным способом

## Возврат денежных средств

- Возврат осуществляется в течение 10 рабочих дней
- Средства возвращаются тем же способом, которым была произведена оплата
- При возврате товара надлежащего качества стоимость доставки не возмещается

## Обмен товара

Вместо возврата вы можете обменять товар на аналогичный или другой товар из нашего ассортимента. При обмене на товар большей стоимости доплачивается разница.
`,
            privacy: `
# Политика конфиденциальности

## Общие положения

Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего веб-сайта.

## Какую информацию мы собираем

### Личная информация:
- Имя, фамилия
- Номер телефона
- Адрес электронной почты
- Адрес доставки

### Техническая информация:
- IP-адрес
- Тип браузера
- Операционная система
- Страницы, которые вы посещаете на нашем сайте

## Как мы используем информацию

Мы используем собранную информацию для:
- Обработки и выполнения заказов
- Связи с клиентами по вопросам заказа
- Улучшения качества обслуживания
- Отправки информации о новых товарах и акциях (с вашего согласия)

## Защита информации

Мы принимаем все необходимые меры для защиты вашей личной информации:
- Использование SSL-шифрования
- Ограниченный доступ к базам данных
- Регулярное обновление систем безопасности

## Передача информации третьим лицам

Мы не продаем и не передаем вашу личную информацию третьим лицам, за исключением случаев:
- Необходимости выполнения заказа (курьерские службы)
- Требований законодательства

## Файлы cookie

Наш сайт использует файлы cookie для:
- Запоминания ваших предпочтений
- Анализа трафика сайта
- Улучшения пользовательского опыта

## Ваши права

Вы имеете право:
- Запросить информацию о ваших данных
- Требовать исправления неточных данных
- Запросить удаление ваших данных
- Отозвать согласие на обработку данных

## Изменения в политике

Мы можем обновлять эту Политику конфиденциальности. О существенных изменениях мы будем уведомлять вас по электронной почте.

## Контакты

По вопросам обработки персональных данных обращайтесь:
- Email: privacy@balloons-moscow.ru
- Телефон: +7 (495) 123-45-67
`
        };
        return defaultContents[slug] || '';
    };
    const getDefaultMetaTitle = (slug)=>{
        const titles = {
            contacts: 'Контакты - Воздушные шары в Москве с доставкой',
            about: 'О компании - Профессиональная доставка шаров в Москве',
            payment: 'Способы оплаты - Удобные варианты оплаты заказа',
            delivery: 'Доставка воздушных шаров по Москве и области',
            returns: 'Гарантия и возврат - Условия возврата товара',
            privacy: 'Политика конфиденциальности - Защита персональных данных'
        };
        return titles[slug] || '';
    };
    const getDefaultMetaDescription = (slug)=>{
        const descriptions = {
            contacts: 'Контактная информация компании по доставке воздушных шаров в Москве. Телефон, адрес, график работы. Заказывайте шары с доставкой!',
            about: 'О нашей компании - более 10 лет создаем праздничное настроение. Качественные воздушные шары и декор с доставкой по Москве.',
            payment: 'Удобные способы оплаты заказа: наличными, картой, онлайн. Безопасные платежи и гарантия возврата средств.',
            delivery: 'Быстрая доставка воздушных шаров по Москве и области. Бесплатная доставка от 2000 руб. Срочная доставка за 1-2 часа.',
            returns: 'Условия гарантии и возврата товара. Возврат в течение 14 дней, обмен товара, гарантия качества на все виды продукции.',
            privacy: 'Политика конфиденциальности сайта. Защита персональных данных клиентов, использование cookie, права пользователей.'
        };
        return descriptions[slug] || '';
    };
    const handleEdit = (page)=>{
        setSelectedPage(page);
        setIsEditing(true);
    };
    const handleSave = async ()=>{
        if (!selectedPage) return;
        setLoading(true);
        try {
            // В реальном приложении здесь будет API вызов
            const updatedPages = pages.map((p)=>p.id === selectedPage.id ? {
                    ...selectedPage,
                    updatedAt: new Date().toISOString()
                } : p);
            setPages(updatedPages);
            setIsEditing(false);
            setSelectedPage(null);
            setMessage('Страница успешно сохранена');
            setTimeout(()=>setMessage(''), 3000);
        } catch (error) {
            setMessage('Ошибка при сохранении страницы');
            setTimeout(()=>setMessage(''), 3000);
        }
        setLoading(false);
    };
    const handleCancel = ()=>{
        setIsEditing(false);
        setSelectedPage(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 max-w-7xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-8",
                children: "Управление страницами"
            }, void 0, false, {
                fileName: "[project]/app/admin/pages/page.tsx",
                lineNumber: 370,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded",
                children: message
            }, void 0, false, {
                fileName: "[project]/app/admin/pages/page.tsx",
                lineNumber: 373,
                columnNumber: 9
            }, this),
            !isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-6 py-4 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: "Список страниц"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/pages/page.tsx",
                            lineNumber: 381,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/pages/page.tsx",
                        lineNumber: 380,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "min-w-full divide-y divide-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-gray-50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Название"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 388,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "URL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Статус"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 394,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Последнее обновление"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                children: "Действия"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 387,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/pages/page.tsx",
                                    lineNumber: 386,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "bg-white divide-y divide-gray-200",
                                    children: pages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium text-gray-900",
                                                                    children: page.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                                    lineNumber: 411,
                                                                    columnNumber: 27
                                                                }, this),
                                                                page.isRequired && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-blue-600",
                                                                    children: "Обязательная страница"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/admin/pages/page.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pages/page.tsx",
                                                        lineNumber: 409,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                    children: [
                                                        "/",
                                                        page.slug
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                    lineNumber: 420,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex px-2 py-1 text-xs font-semibold rounded-full ${page.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                                                        children: page.isActive ? 'Активна' : 'Неактивна'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pages/page.tsx",
                                                        lineNumber: 424,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm text-gray-500",
                                                    children: new Date(page.updatedAt).toLocaleDateString('ru-RU')
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(page),
                                                        className: "text-blue-600 hover:text-blue-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/admin/pages/page.tsx",
                                                            lineNumber: 440,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/admin/pages/page.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/pages/page.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, page.id, true, {
                                            fileName: "[project]/app/admin/pages/page.tsx",
                                            lineNumber: 407,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/pages/page.tsx",
                                    lineNumber: 405,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/pages/page.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/admin/pages/page.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/pages/page.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold",
                                children: [
                                    "Редактирование: ",
                                    selectedPage?.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleCancel,
                                        className: "px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50",
                                        children: "Отмена"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSave,
                                        disabled: loading,
                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 467,
                                                columnNumber: 17
                                            }, this),
                                            loading ? 'Сохраняем...' : 'Сохранить'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/pages/page.tsx",
                        lineNumber: 451,
                        columnNumber: 11
                    }, this),
                    selectedPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Название страницы"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 477,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: selectedPage.title,
                                                onChange: (e)=>setSelectedPage({
                                                        ...selectedPage,
                                                        title: e.target.value
                                                    }),
                                                className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "URL (slug)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 489,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: selectedPage.slug,
                                                onChange: (e)=>setSelectedPage({
                                                        ...selectedPage,
                                                        slug: e.target.value
                                                    }),
                                                disabled: selectedPage.isRequired,
                                                className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 475,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "META Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 504,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: selectedPage.metaTitle || '',
                                                onChange: (e)=>setSelectedPage({
                                                        ...selectedPage,
                                                        metaTitle: e.target.value
                                                    }),
                                                className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 507,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "META Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 516,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: selectedPage.metaDescription || '',
                                                onChange: (e)=>setSelectedPage({
                                                        ...selectedPage,
                                                        metaDescription: e.target.value
                                                    }),
                                                rows: 3,
                                                className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/pages/page.tsx",
                                                lineNumber: 519,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 515,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 502,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Содержимое страницы (Markdown)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: selectedPage.content,
                                        onChange: (e)=>setSelectedPage({
                                                ...selectedPage,
                                                content: e.target.value
                                            }),
                                        rows: 20,
                                        className: "block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm",
                                        placeholder: "Введите содержимое страницы в формате Markdown..."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 532,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500 mt-1",
                                        children: "Поддерживается Markdown разметка: # заголовки, **жирный**, *курсив*, списки и т.д."
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 528,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        id: "isActive",
                                        checked: selectedPage.isActive,
                                        onChange: (e)=>setSelectedPage({
                                                ...selectedPage,
                                                isActive: e.target.checked
                                            }),
                                        className: "h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "isActive",
                                        className: "ml-2 block text-sm text-gray-900",
                                        children: "Страница активна и доступна для просмотра"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/pages/page.tsx",
                                        lineNumber: 552,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/pages/page.tsx",
                                lineNumber: 544,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/pages/page.tsx",
                        lineNumber: 474,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/pages/page.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/pages/page.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>PenLine)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 20h9",
            key: "t2du7b"
        }
    ],
    [
        "path",
        {
            d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",
            key: "1ykcvy"
        }
    ]
];
const PenLine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("pen-line", __iconNode);
;
 //# sourceMappingURL=pen-line.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript) <export default as Edit3>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Edit3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-ssr] (ecmascript)");
}}),

};

//# sourceMappingURL=_4dc8cfad._.js.map