import { NextRequest, NextResponse } from 'next/server';

// Интерфейс для мета-тегов
interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  altImages?: Record<string, string>;
  titleTemplate?: string;
}

// Хранилище мета-тегов (в реальном приложении - база данных)
const metaStorage: Record<string, MetaTags> = {
  home: {
    title: 'Воздушные шары в Москве - доставка праздника на дом',
    description: 'Большой выбор воздушных шаров для любого праздника. Быстрая доставка по Москве. Гарантия качества.',
    keywords: 'воздушные шары, шары с гелием, доставка шаров, праздничные шары, Москва',
    titleTemplate: '{title} | Шары и декор'
  },
  catalog: {
    title: 'Каталог воздушных шаров и праздничного декора',
    description: 'Широкий ассортимент воздушных шаров, подарочных коробок, свечей и праздничного декора. Доставка по Москве.',
    keywords: 'каталог шаров, воздушные шары, праздничный декор, подарочные коробки',
    titleTemplate: '{category} - {title} | Шары и декор'
  }
};

// Функция для транслитерации
function transliterate(text: string): string {
  const translitMap: Record<string, string> = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
    'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya',
    ' ': '-', '_': '-'
  };

  return text.toLowerCase().split('').map(char => translitMap[char] || char).join('');
}

// Автогенерация ALT для изображений
function generateImageAlt(imageName: string, category?: string): string {
  const cleanName = imageName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
  const transliterated = transliterate(cleanName);
  
  if (category) {
    return `${transliterated}-${transliterate(category)}`;
  }
  
  return transliterated;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || 'home';
    
    const metaTags = metaStorage[page];
    
    if (!metaTags) {
      return NextResponse.json({ error: 'Страница не найдена' }, { status: 404 });
    }
    
    return NextResponse.json(metaTags);
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при получении мета-тегов' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { page, metaTags } = await request.json();
    
    if (!page || !metaTags) {
      return NextResponse.json({ error: 'Страница и мета-теги обязательны' }, { status: 400 });
    }
    
    // Автогенерация ALT для изображений если не указано
    if (metaTags.altImages) {
      Object.keys(metaTags.altImages).forEach(imageKey => {
        if (!metaTags.altImages[imageKey]) {
          metaTags.altImages[imageKey] = generateImageAlt(imageKey, metaTags.category);
        }
      });
    }
    
    metaStorage[page] = metaTags;
    
    return NextResponse.json({ 
      message: 'Мета-теги успешно обновлены',
      metaTags: metaStorage[page]
    });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при обновлении мета-тегов' }, { status: 500 });
  }
}

// Генерация ALT для изображения
export async function PUT(request: NextRequest) {
  try {
    const { imageName, category } = await request.json();
    
    if (!imageName) {
      return NextResponse.json({ error: 'Название изображения обязательно' }, { status: 400 });
    }
    
    const altText = generateImageAlt(imageName, category);
    
    return NextResponse.json({ 
      altText,
      transliterated: transliterate(imageName)
    });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при генерации ALT' }, { status: 500 });
  }
} 