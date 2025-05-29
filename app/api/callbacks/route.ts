import { NextRequest, NextResponse } from 'next/server';

interface CallbackRequest {
  name: string;
  lastName?: string;
  phone: string;
  description?: string;
  createdAt: string;
}

// В реальном приложении данные будут храниться в базе данных
const callbacks: CallbackRequest[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Валидация данных
    if (!body.name || !body.phone) {
      return NextResponse.json(
        { error: 'Имя и телефон являются обязательными полями' },
        { status: 400 }
      );
    }

    // Создание нового запроса на обратный звонок
    const newCallback: CallbackRequest = {
      name: body.name.trim(),
      lastName: body.lastName?.trim() || '',
      phone: body.phone.trim(),
      description: body.description?.trim() || '',
      createdAt: new Date().toISOString()
    };

    // Сохранение в массив (в реальном приложении - в базу данных)
    callbacks.push(newCallback);

    // В реальном приложении здесь было бы:
    // - Отправка уведомления менеджеру
    // - Сохранение в CRM систему
    // - Отправка SMS/Email уведомлений
    
    console.log('New callback request:', newCallback);

    return NextResponse.json(
      { 
        message: 'Запрос на обратный звонок успешно отправлен',
        id: callbacks.length 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error processing callback request:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Простая проверка авторизации (в реальном приложении нужна более надежная)
    const authHeader = request.headers.get('authorization');
    if (!authHeader || authHeader !== 'Bearer admin-token') {
      return NextResponse.json(
        { error: 'Доступ запрещен' },
        { status: 401 }
      );
    }

    // Получение параметров запроса
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // Получение заявок с пагинацией
    const paginatedCallbacks = callbacks
      .slice()
      .reverse() // Показываем сначала новые
      .slice(offset, offset + limit);

    return NextResponse.json({
      callbacks: paginatedCallbacks,
      total: callbacks.length,
      hasMore: offset + limit < callbacks.length
    });
  } catch (error) {
    console.error('Error fetching callbacks:', error);
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
} 