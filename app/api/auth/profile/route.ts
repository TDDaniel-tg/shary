import { NextRequest, NextResponse } from 'next/server';
import { UserModel } from '@/lib/models/User';
import jwt from 'jsonwebtoken';

// Получение профиля пользователя
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
    
    // Получение пользователя из базы данных
    const user = await UserModel.getById(decoded.userId);
    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Удаляем пароль из ответа
    const { password_hash, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Error getting user profile:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to get profile' },
      { status: 500 }
    );
  }
}

// Обновление профиля пользователя
export async function PUT(request: NextRequest) {
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
    
    const body = await request.json();
    const { first_name, last_name, phone } = body;

    // Обновление профиля пользователя
    const updatedUser = await UserModel.update(decoded.userId, {
      first_name,
      last_name,
      phone
    });

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    // Удаляем пароль из ответа
    const { password_hash, ...userWithoutPassword } = updatedUser;

    return NextResponse.json({
      success: true,
      data: userWithoutPassword
    });

  } catch (error) {
    console.error('Error updating user profile:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update profile' },
      { status: 500 }
    );
  }
} 