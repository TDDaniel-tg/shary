'use client';

import { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    if (!product.inStock) return;

    setIsAdding(true);
    
    try {
      // Добавляем товар в корзину нужное количество раз
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        });
      }
      
      // Показываем уведомление об успешном добавлении
      // В реальном приложении здесь был бы toast или notification
      alert(`${product.name} добавлен в корзину!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Произошла ошибка при добавлении товара в корзину');
    } finally {
      setIsAdding(false);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => Math.min(prev + 1, 10)); // максимум 10 штук
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(prev - 1, 1)); // минимум 1 штука
  };

  if (!product.inStock) {
    return (
      <button
        disabled
        className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center gap-2"
      >
        <ShoppingCart className="h-5 w-5" />
        Нет в наличии
      </button>
    );
  }

  return (
    <div className="space-y-4">
      {/* Выбор количества */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">Количество:</span>
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={decrementQuantity}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-2 min-w-[3rem] text-center">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="p-2 hover:bg-gray-100 transition-colors"
            disabled={quantity >= 10}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Кнопка добавления в корзину */}
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className="w-full bg-pink-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
      >
        <ShoppingCart className="h-5 w-5" />
        {isAdding ? 'Добавление...' : 'Добавить в корзину'}
      </button>
    </div>
  );
} 