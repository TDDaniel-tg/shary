import { NextRequest, NextResponse } from 'next/server';
import { OrderModel } from '@/lib/models/Order';

export async function POST(request: NextRequest) {
  try {
    const event = await request.json();
    if (event.event === 'payment.succeeded') {
      const orderId = event.object.metadata?.orderId;
      if (orderId) {
        await OrderModel.update(Number(orderId), { payment_status: 'paid', status: 'confirmed' });
      }
    }
    if (event.event === 'refund.succeeded') {
      const orderId = event.object.metadata?.orderId;
      if (orderId) {
        await OrderModel.update(Number(orderId), { payment_status: 'refunded', status: 'cancelled' });
      }
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('YooKassa webhook error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 