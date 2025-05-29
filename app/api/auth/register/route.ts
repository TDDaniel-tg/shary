import { NextRequest, NextResponse } from 'next/server';
import { UserModel } from '@/lib/models/User';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, phone, first_name, last_name, middle_name } = body;

    // Валидация обязательных полей
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Проверка существования пользователя
    const existingUser = await UserModel.getByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: 'User already exists' },
        { status: 400 }
      );
    }

    // Создание пользователя
    const user = await UserModel.create({
      email,
      password,
      phone,
      first_name,
      last_name,
      middle_name
    });

    // Генерация JWT токена
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET || 'default-secret',
      { expiresIn: '7d' }
    );

    // Удаляем пароль из ответа
    const { password_hash, ...userWithoutPassword } = user;

    return NextResponse.json({
      success: true,
      data: {
        user: userWithoutPassword,
        token
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Error registering user:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to register user' },
      { status: 500 }
    );
  }
} 