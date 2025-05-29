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

export async function POST(request: NextRequest) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { reviewId } = await request.json();

    if (!reviewId) {
      return NextResponse.json(
        { success: false, error: 'Review ID is required' },
        { status: 400 }
      );
    }

    // Имитация отклонения отзыва в базе данных
    console.log(`Rejecting review ${reviewId} by admin ${adminUser.email}`);

    return NextResponse.json({
      success: true,
      message: 'Review rejected successfully'
    });

  } catch (error) {
    console.error('Error rejecting review:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to reject review' },
      { status: 500 }
    );
  }
} 