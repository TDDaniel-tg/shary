import { NextRequest, NextResponse } from 'next/server';
import { YooKassa } from 'yookassa';
import jwt from 'jsonwebtoken';

const shopId = process.env.YOOKASSA_SHOP_ID;
const secretKey = process.env.YOOKASSA_SECRET_KEY;
const yookassa = new YooKassa({ shopId, secretKey });

export async function POST(request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization');
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return NextResponse.json({ success: false, error: 'Authorization required' }, { status: 401 });
    }
    const token = authorization.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'default-secret');
    if (decoded.role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin only' }, { status: 403 });
    }
    const { paymentId, amount, orderId } = await request.json();
    if (!paymentId || !amount || !orderId) {
      return NextResponse.json({ success: false, error: 'paymentId, amount, orderId required' }, { status: 400 });
    }
    const refund = await yookassa.createRefund({
      payment_id: paymentId,
      amount: { value: amount.toFixed(2), currency: 'RUB' },
      description: `Возврат по заказу ${orderId}`,
      metadata: { orderId }
    });
    return NextResponse.json({ success: true, refund });
  } catch (error) {
    console.error('YooKassa refund error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create refund' }, { status: 500 });
  }
} 