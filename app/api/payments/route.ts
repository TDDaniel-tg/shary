import { NextRequest, NextResponse } from 'next/server';
import { YooKassa } from 'yookassa';

const shopId = process.env.YOOKASSA_SHOP_ID;
const secretKey = process.env.YOOKASSA_SECRET_KEY;
const returnUrl = process.env.YOOKASSA_RETURN_URL;

const yookassa = new YooKassa({ shopId, secretKey });

export async function POST(request: NextRequest) {
  try {
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