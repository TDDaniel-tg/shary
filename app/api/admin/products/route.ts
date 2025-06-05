import { NextRequest, NextResponse } from 'next/server';
import { ProductModel } from '@/lib/models/Product';
import jwt from 'jsonwebtoken';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { getAllProducts, createProduct, deleteProduct } from '@/lib/db';
import type { Product } from '@/lib/db';

// Проверка авторизации админа
function verifyAdminToken(request: NextRequest | Request) {
  const authorization = request.headers.get('authorization') || request.headers.get('Authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }

  const token = authorization.replace('Bearer ', '');
  
  try {
    // В реальном приложении здесь должна быть проверка JWT
    // Для демонстрации считаем, что любой непустой токен действителен
    if (token.length > 0) {
      return { role: 'admin' };
    }
    return null;
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

// Получение всех товаров и создание нового товара
export async function GET(request: NextRequest | Request) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Используем новую функцию для получения товаров из JSON файла
    const products = getAllProducts();

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

// Создание товара
export async function POST(request: NextRequest | Request) {
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
    
    // Извлекаем базовые данные из FormData
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const priceStr = formData.get('price') as string;
    const salePriceStr = formData.get('salePrice') as string || formData.get('original_price') as string;
    const category = formData.get('category') as string || formData.get('category_id') as string;
    const stockStr = formData.get('stock') as string || formData.get('stock_quantity') as string;
    const featured = formData.get('featured') === 'true' || formData.get('is_featured') === 'true';
    const published = formData.get('published') === 'true' || true;
    
    // Парсим числовые значения
    const price = parseFloat(priceStr);
    const salePrice = salePriceStr ? parseFloat(salePriceStr) : null;
    const stock = parseInt(stockStr);
    
    // Валидация обязательных полей
    if (!name || !description || isNaN(price) || !category || isNaN(stock) || stock < 0) {
      return NextResponse.json(
        { success: false, error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    // Обработка изображения
    let images = ['/images/products/placeholder.jpg']; // по умолчанию
    const imageFile = formData.get('image') as File;
    if (imageFile && imageFile.size > 0) {
      const imagePath = await saveImage(imageFile);
      images = [imagePath];
    }

    // Создаем новый товар используя новую функцию из lib/db
    const newProduct = createProduct({
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

    return NextResponse.json({
      success: true,
      data: newProduct
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
} 