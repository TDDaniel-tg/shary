import { NextRequest, NextResponse } from 'next/server';
import { ProductModel } from '@/lib/models/Product';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  description: string;
  tags: string[];
}

// Мокированные данные товаров
const products: Product[] = [
  {
    id: 1,
    name: 'Набор воздушных шаров "Радуга"',
    price: 1299,
    originalPrice: 1599,
    image: '/images/products/balloon.png',
    rating: 4.8,
    reviews: 124,
    category: 'Воздушные шары',
    inStock: true,
    description: 'Яркий набор воздушных шаров в цветах радуги. Идеально подходит для детских праздников и дней рождения.',
    tags: ['воздушные шары', 'детский праздник', 'радуга', 'день рождения']
  },
  {
    id: 2,
    name: 'Декор для дня рождения "Принцесса"',
    price: 2499,
    image: '/images/products/balloon.png',
    rating: 4.9,
    reviews: 89,
    category: 'Детские праздники',
    inStock: true,
    description: 'Полный набор декораций для создания сказочного праздника маленькой принцессы.',
    tags: ['принцесса', 'детский праздник', 'декор', 'розовый']
  },
  // Добавьте больше товаров по необходимости
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters = {
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
      featured: searchParams.get('featured') === 'true',
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined,
      store_id: searchParams.get('store_id') ? parseInt(searchParams.get('store_id')!) : undefined,
    };

    const products = await ProductModel.getAll(filters);

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch products' 
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Базовая валидация
    if (!body.name || !body.price) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name and price are required' 
        },
        { status: 400 }
      );
    }

    // Генерация slug из названия если не указан
    if (!body.slug) {
      body.slug = body.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const product = await ProductModel.create(body);

    return NextResponse.json({
      success: true,
      data: product
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create product' 
      },
      { status: 500 }
    );
  }
} 