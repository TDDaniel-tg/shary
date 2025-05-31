import { NextRequest, NextResponse } from 'next/server';
import { OrderModel, CreateOrderData } from '@/lib/models/Order';
import jwt from 'jsonwebtoken';

// Получение заказов
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
    
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');
    const status = searchParams.get('status') || undefined;

    // Проверяем роль пользователя
    if (decoded.role === 'admin') {
      // Админ может получить все заказы
      const orders = await OrderModel.getAll(limit, offset, status);
      return NextResponse.json({
        success: true,
        data: orders
      });
    } else {
      // Обычный пользователь получает только свои заказы
      const orders = await OrderModel.getByUserId(decoded.userId, limit, offset);
      return NextResponse.json({
        success: true,
        data: orders
      });
    }

  } catch (error) {
    console.error('Error getting orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get orders' },
      { status: 500 }
    );
  }
}

// Создание заказа
export async function POST(request: NextRequest) {
  try {
    let decoded: any = null;
    const authorization = request.headers.get('authorization');
    if (authorization && authorization.startsWith('Bearer ')) {
      const token = authorization.replace('Bearer ', '');
      decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
    }

    const body = await request.json();
    const { items, delivery_address, delivery_date, delivery_time, payment_method, customer_name, customer_phone, customer_email, notes } = body;

    // Валидация обязательных полей
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Items are required' },
        { status: 400 }
      );
    }

    if (!customer_name || !customer_phone || !customer_email || !delivery_address) {
      return NextResponse.json(
        { success: false, error: 'Customer name, phone, email and address are required' },
        { status: 400 }
      );
    }

    // Валидация товаров
    for (const item of items) {
      if (!item.product_id || !item.quantity || !item.price) {
        return NextResponse.json(
          { success: false, error: 'Each item must have product_id, quantity and price' },
          { status: 400 }
        );
      }
    }

    const orderData: CreateOrderData = {
      user_id: decoded?.userId || null,
      customer_name,
      customer_phone,
      customer_email,
      items,
      delivery_address,
      delivery_date: delivery_date ? new Date(delivery_date) : new Date(),
      delivery_time: delivery_time || '10:00',
      payment_method: payment_method || 'cash',
      notes
    };

    const order = await OrderModel.create(orderData);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Failed to create order' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: order
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
} 