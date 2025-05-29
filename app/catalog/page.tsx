import type { Metadata } from 'next';
import { Suspense } from 'react';
import CatalogClient from './CatalogClient';

export const metadata: Metadata = {
  title: 'Каталог товаров - Праздник Store',
  description: 'Полный каталог товаров для праздника: воздушные шары, декорации, подарки и многое другое.',
  openGraph: {
    title: 'Каталог товаров - Праздник Store',
    description: 'Полный каталог товаров для праздника: воздушные шары, декорации, подарки и многое другое.',
  },
};

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Каталог товаров
          </h1>
          <p className="text-lg text-gray-600">
            Найдите всё необходимое для вашего идеального праздника
          </p>
        </div>

        <Suspense fallback={
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="skeleton h-96 w-full" />
            </div>
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="skeleton h-96 w-full" />
                ))}
              </div>
            </div>
          </div>
        }>
          <CatalogClient />
        </Suspense>
      </div>
    </div>
  );
} 