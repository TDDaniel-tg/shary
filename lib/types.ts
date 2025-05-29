// Основной интерфейс Product
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  description: string;
  tags: string[];
  color?: string; // Добавляем color как опциональное свойство
  brand?: string; // Добавляем brand как опциональное свойство
  material?: string; // Добавляем material как опциональное свойство
}

// Тип для ключей, по которым можно фильтровать
export type FilterableProductKeys = keyof Product;

// Тип для значений свойств продукта
export type ProductPropertyValue = string | number | boolean | string[] | undefined;

// Функция для безопасного получения значения свойства
export function getProductProperty(
  product: Product, 
  key: string
): ProductPropertyValue {
  if (key in product) {
    const value = product[key as keyof Product];
    return value;
  }
  return undefined;
}

// Функция для безопасного получения строкового значения свойства
export function getProductStringValue(
  product: Product, 
  key: string
): string {
  const value = getProductProperty(product, key);
  
  // Обрабатываем массивы (например, tags)
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  
  return value?.toString() || '';
} 