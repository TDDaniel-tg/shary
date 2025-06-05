import { NextRequest, NextResponse } from 'next/server';

const shopId = process.env.YOOKASSA_SHOP_ID;
const secretKey = process.env.YOOKASSA_SECRET_KEY;
const returnUrl = process.env.YOOKASSA_RETURN_URL;

// Условный импорт YooKassa только если модуль доступен
let yookassa: any = null;
if (shopId && secretKey) {
  try {
    const { YooKassa } = require('yookassa');
    yookassa = new YooKassa({ shopId, secretKey });
  } catch (error) {
    console.warn('YooKassa module not available');
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!yookassa) {
      return NextResponse.json({ success: false, error: 'Payment system not configured' }, { status: 503 });
    }

    const { orderId, amount, email } = await request.json();
    if (!orderId || !amount || !email) {
      return NextResponse.json({ success: false, error: 'orderId, amount, email required' }, { status: 400 });
    }
    const payment = await yookassa.createPayment({
      amount: { value: amount.toFixed(2), currency: 'RUB' },
      confirmation: {
        type: 'redirect',
        return_url: returnUrl
      },
      capture: true,
      description: `Оплата заказа ${orderId}`,
      metadata: { orderId },
      receipt: {
        customer: { email },
        items: [
          {
            description: `Заказ ${orderId}`,
            quantity: 1,
            amount: { value: amount.toFixed(2), currency: 'RUB' },
            vat_code: 1
          }
        ]
      }
    });
    return NextResponse.json({ success: true, payment_url: payment.confirmation.confirmation_url });
  } catch (error) {
    console.error('YooKassa payment error:', error);
    return NextResponse.json({ success: false, error: 'Failed to create payment' }, { status: 500 });
  }
} 