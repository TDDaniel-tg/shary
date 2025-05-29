import { NextRequest, NextResponse } from 'next/server';
import { ProductModel } from '@/lib/models/Product';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

// Проверка авторизации админа
function verifyAdminToken(request: NextRequest) {
  const authorization = request.headers.get('authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }

  const token = authorization.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as any;
    if (decoded.role !== 'admin') {
      return null;
    }
    return decoded;
  } catch (error) {
    return null;
  }
}

// Функция для сохранения изображения
async function saveImage(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Создаем уникальное имя файла
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;
  const uploadDir = join(process.cwd(), 'public', 'images', 'products');
  
  // Создаем директорию если не существует
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }

  const filePath = join(uploadDir, fileName);
  await writeFile(filePath, buffer);

  return `/images/products/${fileName}`;
}

// Создание товара
export async function POST(request: NextRequest) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    
    // Извлекаем данные из FormData
    const name = formData.get('name') as string;
    const slug = formData.get('slug') as string;
    const description = formData.get('description') as string;
    const short_description = formData.get('short_description') as string;
    const price = parseFloat(formData.get('price') as string);
    const original_price = formData.get('original_price') ? parseFloat(formData.get('original_price') as string) : undefined;
    const category_id = parseInt(formData.get('category_id') as string);
    const stock_quantity = parseInt(formData.get('stock_quantity') as string);
    const sku = formData.get('sku') as string;
    const meta_title = formData.get('meta_title') as string;
    const meta_description = formData.get('meta_description') as string;
    const is_featured = formData.get('is_featured') === 'true';
    const tags = JSON.parse(formData.get('tags') as string || '[]');
    const imageFile = formData.get('image') as File;

    // Валидация обязательных полей
    if (!name || !description || !price || !category_id || stock_quantity < 0) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Генерация slug если не указан
    const finalSlug = slug || name
      .toLowerCase()
      .replace(/[^a-zа-я0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

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
      images: [image_url], // массив изображений
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

    const product = await ProductModel.create(productData);

    return NextResponse.json({
      success: true,
      data: product
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

// Получение всех товаров для админки
export async function GET(request: NextRequest) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(request.url);
    
    const filters = {
      category: searchParams.get('category') || undefined,
      search: searchParams.get('search') || undefined,
      featured: searchParams.get('featured') === 'true',
      limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
      offset: searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : undefined,
    };

    // Получаем все товары (включая неактивные для админки)
    const products = await ProductModel.getAll(filters);

    return NextResponse.json({
      success: true,
      data: products,
      count: products.length
    });

  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 