import { Product, getProductStringValue } from './types';

// Интерфейс для фильтров
export interface ProductFilters {
  [key: string]: string[];
}

// Функция для фильтрации продуктов
export function filterProducts(
  products: Product[], 
  filters: ProductFilters
): Product[] {
  return products.filter(product => {
    return Object.entries(filters).every(([key, values]) => {
      if (values.length === 0) return true;
      
      // Безопасный доступ к свойству продукта
      const productValue = getProductStringValue(product, key);
      
      return values.includes(productValue);
    });
  });
}

// Функция для получения уникальных значений свойства
export function getUniqueProductValues(
  products: Product[], 
  key: string
): string[] {
  const values = products
    .map(product => getProductStringValue(product, key))
    .filter(value => value !== '');
  
  return Array.from(new Set(values));
}

// Пример использования для фильтрации по цвету
export function filterByColor(products: Product[], colors: string[]): Product[] {
  return filterProducts(products, { color: colors });
}

// Пример использования для фильтрации по категории
export function filterByCategory(products: Product[], categories: string[]): Product[] {
  return filterProducts(products, { category: categories });
} 