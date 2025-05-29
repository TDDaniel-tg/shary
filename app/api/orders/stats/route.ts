import { NextRequest, NextResponse } from 'next/server';
import { OrderModel } from '@/lib/models/Order';
import jwt from 'jsonwebtoken';

// Получение статистики заказов (только для админа)
export async function GET(request: NextRequest) {
  try {
    // Получение токена из заголовка авторизации
    const authorization = request.headers.get('authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return NextResponse.json(
        { success: false, error: 'Authorization token required' },
        { status: 401 }
      );
    }

    const token = authorization.replace('Bearer ', '');
    
    // Верификация токена
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret') as any;
    
    // Только админ может получать статистику
    if (decoded.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    const stats = await OrderModel.getStats();

    return NextResponse.json({
      success: true,
      data: stats
    });

  } catch (error) {
    console.error('Error getting order stats:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get order stats' },
      { status: 500 }
    );
  }
} 