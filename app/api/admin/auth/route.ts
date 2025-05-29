import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    
    // Тестовые данные для входа
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@balloons.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
    
    if (email === adminEmail && password === adminPassword) {
      // Создаем JWT токен
      const token = jwt.sign(
        { 
          userId: 1, 
          email: adminEmail, 
          role: 'admin' 
        },
        process.env.JWT_SECRET || 'default-secret',
        { expiresIn: '24h' }
      );

      return NextResponse.json({ 
        success: true, 
        token,
        user: {
          id: 1,
          email: adminEmail,
          role: 'admin'
        }
      });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Неверный email или пароль' 
      }, { status: 401 });
    }
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Ошибка сервера' 
    }, { status: 500 });
  }
} 