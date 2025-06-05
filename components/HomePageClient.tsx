'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, Truck, Shield, Headphones, Users, Clock, Package } from 'lucide-react';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSlider from '@/components/ProductSlider';
import CallbackModal from '@/components/CallbackModal';
import AnimatedSection from '@/components/AnimatedSection';
import AnimatedCounter from '@/components/AnimatedCounter';
import ParallaxSection from '@/components/ParallaxSection';

export default function HomePageClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-pink-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/5" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/30 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-white/25 rounded-full blur-2xl"
            animate={{
              y: [0, 30, 0],
              x: [0, -10, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/40 rounded-full blur-lg"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
              Создайте
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                незабываемый
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                праздник!
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              Широкий выбор воздушных шаров и праздничных украшений с доставкой по Москве
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition-all transform hover:scale-105"
              >
                Заказать сейчас
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                <ArrowRight className="h-5 w-5" />
                  </motion.div>
              </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Категории товаров
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите категорию для вашего особенного события
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2}>
          <CategoryGrid />
          </AnimatedSection>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeDown" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <AnimatedSection animation="bounce" delay={0.1}>
            <div className="text-center p-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                <Users className="h-10 w-10" />
                </motion.div>
                <AnimatedCounter 
                  value={5000} 
                  suffix="+"
                  className="text-4xl font-bold text-gray-900 mb-2"
                />
                <p className="text-gray-600 font-medium">Довольных клиентов</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="bounce" delay={0.2}>
            <div className="text-center p-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                <Clock className="h-10 w-10" />
                </motion.div>
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Работаем без выходных</p>
            </div>
            </AnimatedSection>
            
            <AnimatedSection animation="bounce" delay={0.3}>
            <div className="text-center p-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-pink-100 text-pink-500 rounded-full mb-4"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                <Package className="h-10 w-10" />
                </motion.div>
                <AnimatedCounter 
                  value={1000} 
                  suffix="+"
                  className="text-4xl font-bold text-gray-900 mb-2"
                />
                <p className="text-gray-600 font-medium">Товаров в каталоге</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <ParallaxSection speed={0.3} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale" className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Популярные товары
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Самые востребованные товары для создания незабываемого праздника
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.2}>
          <ProductSlider />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={0.4} className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-colors"
            >
              Все товары
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
              <ArrowRight className="h-5 w-5" />
                </motion.div>
            </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-20 bg-pink-500 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 bg-white/30 rounded-full blur-xl"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/25 rounded-full blur-2xl"
            animate={{
              y: [0, 20, 0],
              x: [0, -15, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-xl mb-8 text-pink-100 max-w-2xl mx-auto">
            Наши специалисты помогут подобрать идеальное оформление для вашего праздника
          </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
          <CallbackModal />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
} 