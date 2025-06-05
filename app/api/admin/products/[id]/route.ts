import { NextRequest, NextResponse } from 'next/server';
import { getProductById, updateProduct, deleteProduct } from '@/lib/db';
import type { Product } from '@/lib/db';

// Проверка авторизации админа (такая же, как в app/api/admin/products/route.ts)
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

// GET /api/admin/products/[id] - получить товар по ID
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const id = context.params.id;
    const product = getProductById(id);
    
    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error(`Error fetching product with ID ${context.params.id}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT /api/admin/products/[id] - обновить товар
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const id = context.params.id;
    const formData = await request.formData();
    
    // Извлекаем данные из FormData
    const updates: Record<string, any> = {};
    
    // Имя товара
    const name = formData.get('name');
    if (name) updates.name = name as string;
    
    // Описание
    const description = formData.get('description');
    if (description) updates.description = description as string;
    
    // Цена
    const price = formData.get('price');
    if (price) updates.price = parseFloat(price as string);
    
    // Цена со скидкой
    const salePrice = formData.get('salePrice') || formData.get('original_price');
    if (salePrice) {
      const salePriceValue = parseFloat(salePrice as string);
      updates.salePrice = !isNaN(salePriceValue) ? salePriceValue : null;
    }
    
    // Категория
    const category = formData.get('category') || formData.get('category_id');
    if (category) updates.category = category as string;
    
    // Количество товара
    const stock = formData.get('stock') || formData.get('stock_quantity');
    if (stock) updates.stock = parseInt(stock as string);
    
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
    const updatedProduct = updateProduct(id, updates);
    
    if (!updatedProduct) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: updatedProduct
    });
  } catch (error) {
    console.error(`Error updating product with ID ${context.params.id}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/products/[id] - удалить товар
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const id = context.params.id;
    const success = deleteProduct(id);
    
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    console.error(`Error deleting product with ID ${context.params.id}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete product' },
      { status: 500 }
    );
  }
} 