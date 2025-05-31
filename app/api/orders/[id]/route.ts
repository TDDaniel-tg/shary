import { NextRequest, NextResponse } from 'next/server';
import { OrderModel, sendOrderStatusEmail } from '@/lib/models/Order';
import jwt from 'jsonwebtoken';

// Получение заказа по ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid order ID' },
        { status: 400 }
      );
    }

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

    const order = await OrderModel.getById(orderId);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    // Проверяем права доступа
    if (decoded.role !== 'admin' && order.user_id !== decoded.userId) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      data: order
    });

  } catch (error) {
    console.error('Error getting order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get order' },
      { status: 500 }
    );
  }
}

// Обновление заказа
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid order ID' },
        { status: 400 }
      );
    }

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

    // Проверяем существование заказа
    const existingOrder = await OrderModel.getById(orderId);
    if (!existingOrder) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    // Проверяем права доступа
    if (decoded.role !== 'admin' && existingOrder.user_id !== decoded.userId) {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    const body = await request.json();
    
    // Для обычных пользователей разрешаем изменять только определенные поля
    let allowedFields = ['delivery_address', 'delivery_date', 'delivery_time', 'phone', 'email', 'notes'];
    
    // Админ может изменять статус
    if (decoded.role === 'admin') {
      allowedFields.push('status');
    }

    // Фильтруем только разрешенные поля
    const updateData: any = {};
    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    // Преобразуем дату если она есть
    if (updateData.delivery_date) {
      updateData.delivery_date = new Date(updateData.delivery_date);
    }

    const prevStatus = existingOrder.status;
    const updatedOrder = await OrderModel.update(orderId, updateData);

    if (!updatedOrder) {
      return NextResponse.json(
        { success: false, error: 'Failed to update order' },
        { status: 500 }
      );
    }

    // Если статус изменился и есть email — отправляем уведомление
    if (
      decoded.role === 'admin' &&
      updateData.status &&
      updateData.status !== prevStatus &&
      updatedOrder.customer_email &&
      updatedOrder.order_code
    ) {
      await sendOrderStatusEmail(
        updatedOrder.customer_email,
        updatedOrder.order_code,
        updateData.status
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedOrder
    });

  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

// Удаление заказа (только для админа)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = parseInt(params.id);
    
    if (isNaN(orderId)) {
      return NextResponse.json(
        { success: false, error: 'Invalid order ID' },
        { status: 400 }
      );
    }

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

    // Только админ может удалять заказы
    if (decoded.role !== 'admin') {
      return NextResponse.json(
        { success: false, error: 'Access denied' },
        { status: 403 }
      );
    }

    const deleted = await OrderModel.delete(orderId);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete order' },
      { status: 500 }
    );
  }
} 