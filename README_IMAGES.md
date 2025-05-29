# Руководство по размещению изображений

## Структура папок для изображений

Все изображения должны быть размещены в папке `public/images/` со следующей структурой:

```
public/
├── images/
    ├── products/          # Изображения товаров
    ├── categories/        # Изображения категорий
    ├── banners/          # Баннеры для главной страницы
    └── icons/            # Иконки и логотипы
```

## Рекомендуемые форматы и размеры

### 1. Изображения товаров (`public/images/products/`)
- **Формат**: WebP (предпочтительно), JPEG, PNG
- **Размер**: 800x800px (квадратные)
- **Качество**: высокое (80-90%)
- **Именование**: `product-slug.webp` или `product-id.webp`

**Примеры файлов:**
- `balloon.png` (текущее изображение)
- `latex-balloons-mix.webp`
- `birthday-bouquet.webp`
- `foil-heart.webp`

### 2. Изображения категорий (`public/images/categories/`)
- **Формат**: WebP (предпочтительно), JPEG
- **Размер**: 400x300px (4:3)
- **Качество**: высокое (80-90%)
- **Именование**: `category-slug.webp`

**Примеры файлов:**
- `balloon.png` (текущее изображение)
- `latex-balloons.webp`
- `foil-balloons.webp`
- `numbers-letters.webp`

### 3. Баннеры (`public/images/banners/`)
- **Формат**: WebP (предпочтительно), JPEG
- **Размер**: 1920x600px (десктоп), 768x400px (мобайл)
- **Качество**: высокое (80-90%)
- **Именование**: `banner-name.webp`

**Примеры файлов:**
- `balloon.png` (текущее изображение)
- `hero-banner.webp`
- `sale-banner.webp`
- `delivery-banner.webp`

## Как добавлять изображения

### 1. Через файловую систему
Просто скопируйте файлы в соответствующие папки:
```bash
# Для товаров
copy ваш-файл.webp public/images/products/

# Для категорий  
copy ваш-файл.webp public/images/categories/

# Для баннеров
copy ваш-файл.webp public/images/banners/
```

### 2. Использование в коде
```tsx
// В React компонентах
<img src="/images/products/balloon.png" alt="Воздушные шары" />

// В CSS
background-image: url('/images/banners/balloon.png');
```

### 3. В базе данных
При добавлении товаров указывайте путь к изображению:
```sql
INSERT INTO products (name, image_url, ...) 
VALUES ('Воздушные шары', '/images/products/balloon.png', ...);
```

## Оптимизация изображений

### Рекомендуемые инструменты:
1. **Squoosh** (https://squoosh.app/) - онлайн оптимизатор
2. **ImageOptim** (macOS) / **FileOptimizer** (Windows)
3. **Next.js Image** компонент (автоматическая оптимизация)

### Использование Next.js Image компонента:
```tsx
import Image from 'next/image';

<Image
  src="/images/products/balloon.png"
  alt="Воздушные шары"
  width={800}
  height={800}
  priority // для важных изображений
/>
```

## Текущее изображение

В проекте сейчас используется одно изображение для всех товаров и категорий:
- **Файл**: `balloon.png`
- **Расположение**: 
  - `public/images/products/balloon.png`
  - `public/images/categories/balloon.png`
  - `public/images/banners/balloon.png`

## Примеры изображений для тестирования

Вы можете использовать бесплатные изображения воздушных шаров с:
- **Unsplash**: https://unsplash.com/s/photos/balloons
- **Pexels**: https://www.pexels.com/search/balloons/
- **Pixabay**: https://pixabay.com/images/search/balloons/

## Важные заметки

1. **Всегда используйте alt текст** для доступности
2. **Оптимизируйте размер файлов** для быстрой загрузки
3. **Используйте WebP формат** когда возможно
4. **Создавайте responsive изображения** для разных экранов
5. **Не забывайте про SEO** - используйте описательные имена файлов 