import { Metadata } from 'next';
import CartClient from './CartClient';

export const metadata: Metadata = {
  title: 'Корзина - Интернет-магазин праздничных товаров',
  description: 'Корзина покупок с товарами для праздников и торжеств',
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Корзина</h1>
          <p className="text-gray-600">Проверьте выбранные товары и оформите заказ</p>
        </div>
        
        <CartClient />
      </div>
    </div>
  );
} 