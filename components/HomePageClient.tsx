'use client';

import Link from 'next/link';
import { ArrowRight, Gift, Truck, Shield, Headphones, Users, Clock, Package } from 'lucide-react';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSlider from '@/components/ProductSlider';
import CallbackModal from '@/components/CallbackModal';

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Создайте
              <span className="block text-yellow-300">незабываемый</span>
              <span className="block text-pink-200">праздник!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Широкий выбор воздушных шаров и праздничных украшений с доставкой по Москве
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition-all transform hover:scale-105"
              >
                Заказать сейчас
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Категории товаров
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите категорию для вашего особенного события
            </p>
          </div>
          
          <CategoryGrid />
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4">
                <Users className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
              <p className="text-gray-600 font-medium">Довольных клиентов</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4">
                <Clock className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Работаем без выходных</p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4">
                <Package className="h-10 w-10" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Товаров в каталоге</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные товары
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые востребованные товары для создания незабываемого праздника
            </p>
          </div>
          
          <ProductSlider />
          
          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-colors"
            >
              Все товары
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать идеальное оформление для вашего праздника
          </p>
          <CallbackModal />
        </div>
      </section>
    </div>
  );
} 