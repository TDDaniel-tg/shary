'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Набор воздушных шаров "Радуга"',
    price: 1299,
    originalPrice: 1599,
    image: '/images/products/balloon.png',
    rating: 4.8,
    reviews: 124,
    category: 'Воздушные шары',
    inStock: true
  },
  {
    id: 2,
    name: 'Декор для дня рождения "Принцесса"',
    price: 2499,
    image: '/images/products/balloon.png',
    rating: 4.9,
    reviews: 89,
    category: 'Детские праздники',
    inStock: true
  },
  {
    id: 3,
    name: 'Свадебная арка с цветами',
    price: 8999,
    originalPrice: 10999,
    image: '/images/products/balloon.png',
    rating: 5.0,
    reviews: 56,
    category: 'Свадебные украшения',
    inStock: true
  },
  {
    id: 4,
    name: 'Набор праздничной посуды золотой',
    price: 899,
    image: '/images/products/balloon.png',
    rating: 4.7,
    reviews: 203,
    category: 'Праздничная посуда',
    inStock: true
  },
  {
    id: 5,
    name: 'Фотозона "Тропический рай"',
    price: 3999,
    originalPrice: 4999,
    image: '/images/products/balloon.png',
    rating: 4.9,
    reviews: 78,
    category: 'Фотозоны',
    inStock: false
  }
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { addItem } = useCart();

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= featuredProducts.length - itemsPerView.desktop + 1 
          ? 0 
          : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= featuredProducts.length - itemsPerView.desktop + 1 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? featuredProducts.length - itemsPerView.desktop 
        : prevIndex - 1
    );
  };

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
        aria-label="Предыдущий слайд"
      >
        <ChevronLeft className="h-5 w-5 text-gray-600" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors hidden md:flex items-center justify-center"
        aria-label="Следующий слайд"
      >
        <ChevronRight className="h-5 w-5 text-gray-600" />
      </button>

      {/* Products grid */}
      <div className="overflow-hidden mx-8 md:mx-12">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
            width: `${(featuredProducts.length * 100) / itemsPerView.desktop}%`
          }}
        >
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / featuredProducts.length}%` }}
            >
              <div className="card group h-full flex flex-col">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden">
                  <Link href={`/products/${product.id}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading={product.id <= 2 ? undefined : "lazy"}
                      priority={product.id <= 2}
                    />
                  </Link>
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded">
                        Нет в наличии
                      </span>
                    )}
                  </div>

                  {/* Quick add button */}
                  {product.inStock && (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="absolute bottom-3 right-3 bg-pink-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-pink-600"
                      aria-label="Добавить в корзину"
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 flex-grow flex flex-col">
                  <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                  
                  <Link href={`/products/${product.id}`}>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-500 transition-colors">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= product.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        product.inStock
                          ? 'bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {product.inStock ? 'В корзину' : 'Нет в наличии'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: featuredProducts.length - itemsPerView.desktop + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-pink-500' : 'bg-gray-300'
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 