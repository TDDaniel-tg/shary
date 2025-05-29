'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, CreditCard, Truck } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

export default function CartClient() {
  const { items, updateQuantity, removeItem, clearCart, total } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handlePromoCode = () => {
    // Простая логика промокода для демонстрации
    if (promoCode.toLowerCase() === 'save10') {
      setIsPromoApplied(true);
    }
  };

  const discount = isPromoApplied ? total * 0.1 : 0;
  const finalTotal = total - discount;
  const deliveryFee = finalTotal > 3000 ? 0 : 300;
  const grandTotal = finalTotal + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-8 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Корзина пуста</h2>
          <p className="text-gray-600 mb-6">
            Добавьте товары в корзину, чтобы продолжить покупки
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Перейти к каталогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Товары в корзине ({items.length})</h2>
              <button
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
              >
                Очистить корзину
              </button>
            </div>
          </div>

          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <Link
                        href={`/products/${item.id}`}
                        className="font-semibold text-gray-900 hover:text-pink-500 transition-colors"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-4"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="text-lg font-bold text-gray-900 mb-3">
                      {formatPrice(item.price)}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                        {item.quantity > 1 && (
                          <div className="text-sm text-gray-500">
                            {formatPrice(item.price)} × {item.quantity}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Shopping */}
        <Link
          href="/catalog"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-700 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Продолжить покупки
        </Link>
      </div>

      {/* Order Summary */}
      <div className="space-y-6">
        {/* Promo Code */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Промокод</h3>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Введите промокод"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              onClick={handlePromoCode}
              disabled={isPromoApplied || !promoCode}
              className="w-full py-3 px-4 border border-pink-500 text-pink-500 rounded-lg font-medium hover:bg-pink-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isPromoApplied ? 'Промокод применен' : 'Применить'}
            </button>
            
            {isPromoApplied && (
              <div className="text-green-600 text-sm">
                ✓ Скидка 10% применена!
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-semibold mb-4">Итого</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Товары ({items.reduce((sum, item) => sum + item.quantity, 0)} шт.)</span>
              <span>{formatPrice(total)}</span>
            </div>
            
            {isPromoApplied && (
              <div className="flex justify-between text-green-600">
                <span>Скидка по промокоду</span>
                <span>-{formatPrice(discount)}</span>
              </div>
            )}
            
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Доставка
              </span>
              <span>
                {deliveryFee === 0 ? (
                  <span className="text-green-600">Бесплатно</span>
                ) : (
                  formatPrice(deliveryFee)
                )}
              </span>
            </div>
            
            {deliveryFee > 0 && (
              <div className="text-sm text-gray-500">
                Бесплатная доставка от {formatPrice(3000)}
              </div>
            )}
            
            <hr className="my-4" />
            
            <div className="flex justify-between text-lg font-bold">
              <span>К оплате</span>
              <span>{formatPrice(grandTotal)}</span>
            </div>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <button className="w-full bg-pink-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 mb-4">
            <CreditCard className="h-5 w-5" />
            Оформить заказ
          </button>
          
          <div className="text-center text-sm text-gray-500">
            <p>Безопасная оплата через</p>
            <div className="flex justify-center gap-2 mt-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-xs">Visa</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs">MasterCard</span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs">МИР</span>
            </div>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="bg-gray-100 rounded-xl p-6">
          <h4 className="font-medium mb-3">Условия доставки</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• Доставка по Москве и МО</li>
            <li>• Бесплатная доставка от {formatPrice(3000)}</li>
            <li>• Доставка в течение 1-3 дней</li>
            <li>• Возможен самовывоз</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 