# Интернет-магазин праздничных товаров

Современный интернет-магазин, построенный на Next.js 14 с оптимизированной производительностью и отличным пользовательским опытом.

## 🚀 Технологии

- **Next.js 14** - React-фреймворк с App Router
- **TypeScript** - Типизированный JavaScript
- **Tailwind CSS** - Utility-first CSS фреймворк
- **Lucide React** - Современные иконки
- **React Context** - Управление состоянием корзины
- **localStorage** - Персистентность данных

## ✨ Возможности

### 🛍️ Функционал магазина
- Каталог товаров с фильтрацией и поиском
- Детальные страницы товаров с галереей
- Корзина покупок с сохранением в localStorage
- Система категорий и тегов
- Промокоды и скидки
- Адаптивный дизайн для всех устройств

### 🔧 Оптимизация производительности
- Server-Side Rendering (SSR)
- Статическая генерация страниц
- Оптимизация изображений с Next.js Image
- Ленивая загрузка компонентов
- Минимальный размер bundle

### 📱 UX/UI
- Современный и чистый дизайн
- Плавные анимации и переходы
- Интуитивная навигация
- Отзывчивая верстка
- Accessibility (доступность)

## 🏃‍♂️ Быстрый старт

### Предварительные требования
- Node.js 18+ 
- npm или yarn

### Установка

1. **Клонирование репозитория**
```bash
git clone <repository-url>
cd project
```

2. **Установка зависимостей**
```bash
npm install
# или
yarn install
```

3. **Запуск в режиме разработки**
```bash
npm run dev
# или
yarn dev
```

4. **Сборка для продакшена**
```bash
npm run build
npm start
# или
yarn build
yarn start
```

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000)

## 📁 Структура проекта

```
project/
├── app/                    # App Router (Next.js 14)
│   ├── api/               # API routes
│   ├── catalog/           # Страница каталога
│   ├── cart/              # Страница корзины
│   ├── products/          # Динамические страницы товаров
│   ├── layout.tsx         # Главный layout
│   ├── page.tsx           # Главная страница
│   └── globals.css        # Глобальные стили
├── components/            # Переиспользуемые компоненты
│   ├── Header.tsx         # Шапка сайта
│   ├── Footer.tsx         # Подвал сайта
│   ├── CategoryGrid.tsx   # Сетка категорий
│   └── ProductSlider.tsx  # Слайдер товаров
├── hooks/                 # Кастомные хуки
│   └── useCart.tsx        # Хук для корзины
├── public/               # Статические файлы
│   └── images/           # Изображения
├── package.json          # Зависимости проекта
├── tailwind.config.js    # Конфигурация Tailwind
├── tsconfig.json         # Конфигурация TypeScript
└── next.config.mjs       # Конфигурация Next.js
```

## 🎨 Компоненты

### Header
- Логотип и навигация
- Поиск по сайту
- Корзина с счетчиком товаров
- Мобильное меню

### CategoryGrid
- Отображение категорий товаров
- Оптимизированные изображения
- Подсчет товаров в категории

### ProductSlider
- Карусель рекомендуемых товаров
- Автопрокрутка
- Адаптивное количество элементов

### CartProvider
- Context для управления корзиной
- Сохранение в localStorage
- Операции с товарами (добавить/удалить/изменить количество)

## 🛠️ API

### GET /api/products
Получение списка товаров с фильтрацией:
- `category` - фильтр по категории
- `search` - поиск по названию
- `limit` - количество товаров
- `offset` - смещение для пагинации

### POST /api/products
Создание нового товара (для админки)

## 🚀 Деплой

### Vercel (рекомендуется)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t party-store .
docker run -p 3000:3000 party-store
```

## 📈 Оптимизации

- **Image Optimization**: Автоматическая оптимизация изображений
- **Code Splitting**: Разделение кода на chunks
- **Bundle Analyzer**: Анализ размера bundle
- **Caching**: Кеширование API запросов
- **SEO**: Оптимизация для поисковых систем

## 🔮 Планы развития

- [ ] Система авторизации пользователей
- [ ] Личный кабинет с историей заказов
- [ ] Интеграция с платежными системами
- [ ] Система отзывов и рейтингов
- [ ] Мультиязычность
- [ ] PWA (Progressive Web App)
- [ ] Уведомления о новых товарах
- [ ] Система рекомендаций

## 📞 Поддержка

При возникновении вопросов или проблем:
- Создайте issue в репозитории
- Напишите на email: support@party-store.ru
- Позвоните: +7 (999) 123-45-67

## 📄 Лицензия

MIT License - подробности в файле [LICENSE](LICENSE)

## Миграция для order_code

Добавьте поле order_code в таблицу orders:

```sql
ALTER TABLE orders ADD COLUMN order_code VARCHAR(32) UNIQUE;
```

После этого новые заказы будут получать уникальный код формата ORDER-YYYYMMDD-XXXXXX.

## Настройка email-уведомлений

Добавьте в .env следующие переменные для отправки писем:

SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM=shop@example.com

## Настройка YooKassa

Добавьте в .env:

YOOKASSA_SHOP_ID=your_shop_id
YOOKASSA_SECRET_KEY=your_secret_key
YOOKASSA_RETURN_URL=https://yourdomain.ru/payment/success
YOOKASSA_WEBHOOK_SECRET=your_webhook_secret

## Миграция для магазинов и наличия по городам

1. Создайте таблицу магазинов/филиалов/городов:

```sql
CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  city VARCHAR(64),
  address VARCHAR(128),
  is_active BOOLEAN DEFAULT TRUE
);
```

2. Создайте таблицу остатков товара по магазинам:

```sql
CREATE TABLE product_stocks (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  store_id INTEGER REFERENCES stores(id) ON DELETE CASCADE,
  stock_quantity INTEGER DEFAULT 0,
  UNIQUE(product_id, store_id)
);
```

## Кэширование с Redis

Для ускорения популярных запросов используйте Redis:

- Установите Redis локально или используйте облачный сервис (например, Upstash, Redis Cloud)
- Добавьте в .env:

REDIS_URL=redis://localhost:6379

## Защита от DDoS (Rate Limiting)

Для ограничения частоты запросов используйте middleware `lib/middleware/rateLimit.ts`:
- Подключайте его в начале каждого API route:

```ts
import { rateLimit } from '@/lib/middleware/rateLimit';

export async function GET(request: NextRequest) {
  const limitRes = await rateLimit(request);
  if (limitRes) return limitRes;
  // ... основной код ...
}
```

По умолчанию: 60 запросов в минуту на IP.

## Резервное копирование БД

Для регулярных бэкапов PostgreSQL используйте cron и pg_dump:

```sh
# Пример ежедневного бэкапа в 3:00
0 3 * * * pg_dump -U postgres -h localhost balloons_store > /path/to/backups/backup-$(date +\%F).sql
```

- Проверьте, что путь к pg_dump и параметры соответствуют вашей системе.
- Храните бэкапы в защищённом месте, используйте автоматическую очистку старых файлов.

---

**Создано с ❤️ для незабываемых праздников!** #   s h a r y 
 
 