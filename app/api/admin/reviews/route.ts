import { NextRequest, NextResponse } from 'next/server';
import { getAllReviews } from '@/lib/db';
import type { Review } from '@/lib/db';

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

// GET /api/admin/reviews - получить все отзывы
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

    // Получаем отзывы из базы данных
    const reviews = getAllReviews();
    
    return NextResponse.json({
      success: true,
      data: reviews,
      count: reviews.length
    });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 