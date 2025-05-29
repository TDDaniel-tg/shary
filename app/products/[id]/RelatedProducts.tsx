'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
}

interface Props {
  productId: number;
  categoryId?: number;
}

export default function RelatedProducts({ productId, categoryId }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Мок данные похожих товаров
  const mockProducts: Product[] = [
    {
      id: 2,
      name: 'Воздушные шары "Сердце" красные',
      price: 299,
      image: '/images/products/balloon.png',
      rating: 4.8,
      reviews: 24,
      discount: 15
    },
    {
      id: 3,
      name: 'Фольгированные шары "Звезда"',
      price: 450,
      image: '/images/products/balloon.png',
      rating: 4.9,
      reviews: 18
    },
    {
      id: 4,
      name: 'Шары для моделирования ШДМ',
      price: 199,
      image: '/images/products/balloon.png',
      rating: 4.7,
      reviews: 31
    },
    {
      id: 5,
      name: 'Светящиеся LED шары',
      price: 799,
      image: '/images/products/balloon.png',
      rating: 4.6,
      reviews: 12,
      discount: 20
    },
    {
      id: 6,
      name: 'Шары металлик золото',
      price: 349,
      image: '/images/products/balloon.png',
      rating: 4.8,
      reviews: 27
    },
    {
      id: 7,
      name: 'Конфетти шары прозрачные',
      price: 599,
      image: '/images/products/balloon.png',
      rating: 4.9,
      reviews: 15
    }
  ];

  useEffect(() => {
    fetchRelatedProducts();
  }, [productId, categoryId]);

  const fetchRelatedProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/related?productId=${productId}&categoryId=${categoryId || ''}`);
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      } else {
        // Используем мок данные если API недоступно
        const filteredProducts = mockProducts.filter(p => p.id !== productId);
        setProducts(filteredProducts.slice(0, 4));
      }
    } catch (error) {
      console.error('Error fetching related products:', error);
      // Используем мок данные в случае ошибки
      const filteredProducts = mockProducts.filter(p => p.id !== productId);
      setProducts(filteredProducts.slice(0, 4));
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Похожие товары</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded-lg mb-3"></div>
              <div className="space-y-2">
                <div className="bg-gray-200 h-4 rounded"></div>
                <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">Похожие товары</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <Link href={`/products/${product.id}`}>
              <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3">
                {/* Скидка */}
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold z-10">
                    -{product.discount}%
                  </div>
                )}

                {/* Кнопка избранного */}
                <button
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-pink-50"
                  onClick={(e) => {
                    e.preventDefault();
                    // Логика добавления в избранное
                    console.log('Add to favorites:', product.id);
                  }}
                >
                  <Heart className="h-4 w-4 text-gray-600 hover:text-pink-500" />
                </button>

                {/* Изображение товара */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-1">
                {/* Название товара */}
                <h4 className="font-medium text-gray-900 group-hover:text-pink-600 transition-colors line-clamp-2">
                  {product.name}
                </h4>

                {/* Рейтинг и отзывы */}
                <div className="flex items-center gap-2">
                  {renderStars(product.rating)}
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Цена */}
                <div className="flex items-center gap-2">
                  {product.discount ? (
                    <>
                      <span className="text-lg font-semibold text-pink-600">
                        {Math.round(product.price * (1 - product.discount / 100))} ₽
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        {product.price} ₽
                      </span>
                    </>
                  ) : (
                    <span className="text-lg font-semibold text-gray-900">
                      {product.price} ₽
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Кнопка "Показать еще" */}
      <div className="text-center">
        <Link 
          href="/catalog"
          className="inline-flex items-center px-6 py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition-colors"
        >
          Посмотреть все товары
        </Link>
      </div>
    </div>
  );
} 