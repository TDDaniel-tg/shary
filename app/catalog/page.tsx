import { Metadata } from 'next';
import CatalogClient from './CatalogClient';

export const metadata: Metadata = {
  title: 'Каталог товаров - Prime Balloons',
  description: 'Широкий выбор воздушных шаров и товаров для праздника в интернет-магазине Prime Balloons',
};

export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Каталог товаров</h1>
      <CatalogClient />
    </div>
  );
} 