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

    // Моковые данные статистики (в реальном приложении данные берутся из БД)
    const stats = {
      totalProducts: 156,
      totalUsers: 1240,
      totalOrders: 523,
      totalRevenue: 2450000,
      pendingReviews: 12,
      todayOrders: 15,
      weeklyRevenue: 145000,
      popularProducts: [
        { name: 'Воздушные шары "Радуга"', sales: 45 },
        { name: 'Фольгированные звезды', sales: 38 },
        { name: 'Шары для моделирования', sales: 32 }
      ]
    };

    return NextResponse.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch stats' },
      { status: 500 }
    );
  }
} 