import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

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

    // Моковые данные отзывов для модерации
    const pendingReviews = [
      {
        id: 1,
        user_name: 'Анна Петрова',
        product_name: 'Воздушные шары латексные "Радуга"',
        rating: 5,
        comment: 'Отличные шары! Качество превосходное, дети были в восторге. Обязательно закажем еще!',
        created_at: '2024-01-20T10:30:00Z',
        is_moderated: false
      },
      {
        id: 2,
        user_name: 'Михаил Иванов',
        product_name: 'Фольгированные шары "Звезда"',
        rating: 4,
        comment: 'Хорошие шары, быстрая доставка. Один шар немного помялся, но в целом доволен покупкой.',
        created_at: '2024-01-19T15:45:00Z',
        is_moderated: false
      },
      {
        id: 3,
        user_name: 'Елена Смирнова',
        product_name: 'Шары для моделирования ШДМ',
        rating: 5,
        comment: 'Заказывала для детского дня рождения - все прошло идеально! Шары хорошо держат форму.',
        created_at: '2024-01-18T09:15:00Z',
        is_moderated: false
      }
    ];

    return NextResponse.json({
      success: true,
      data: pendingReviews
    });

  } catch (error) {
    console.error('Error fetching pending reviews:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
} 