import { NextRequest, NextResponse } from 'next/server';
import { updateReviewStatus } from '@/lib/db';

// Проверка авторизации админа (такая же, как в app/api/admin/products/route.ts)
function verifyAdminToken(request: NextRequest | Request) {
  const authorization = request.headers.get('authorization') || request.headers.get('Authorization');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return null;
  }

  const token = authorization.replace('Bearer ', '');
  
  try {
    // В реальном приложении здесь должна быть проверка JWT
    // Для демонстрации считаем, что любой непустой токен действителен
    if (token.length > 0) {
      return { role: 'admin' };
    }
    return null;
  } catch (error) {
    return null;
  }
}

// PUT /api/admin/reviews/[id]/reject - отклонить отзыв
export async function PUT(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Проверка авторизации
    const adminUser = verifyAdminToken(request);
    if (!adminUser) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const id = context.params.id;
    const updatedReview = updateReviewStatus(id, 'rejected');
    
    if (!updatedReview) {
      return NextResponse.json(
        { success: false, error: 'Review not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: updatedReview,
      message: 'Review rejected successfully'
    });
  } catch (error) {
    console.error(`Error rejecting review with ID ${context.params.id}:`, error);
    return NextResponse.json(
      { success: false, error: 'Failed to reject review' },
      { status: 500 }
    );
  }
} 