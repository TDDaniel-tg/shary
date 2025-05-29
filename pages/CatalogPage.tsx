'use client';

import { useState, useEffect } from 'react';
import { Product, getProductStringValue } from '@/lib/types';
import { filterProducts } from '@/lib/filterUtils';

// Интерфейс для фильтров
interface Filters {
  [key: string]: string[];
}

export default function CatalogPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<Filters>({});

  // ✅ ИСПРАВЛЕННАЯ функция фильтрации
  const applyFilters = (products: Product[], filters: Filters) => {
    let result = [...products];
    
    Object.entries(filters).forEach(([key, values]) => {
      if (values.length > 0) {
        result = result.filter(p => {
          // ✅ СТАЛО (исправлено):
          const productValue = getProductStringValue(p, key);
          
          return values.includes(productValue);
        });
      }
    });

    return result;
  };

  // Альтернативный способ - используя готовую функцию
  const filteredProducts = filterProducts(products, filters);

  // Функция для получения уникальных значений свойства
  const getUniqueValues = (products: Product[], key: string): string[] => {
    const values = products.map(p => {
      // ✅ Безопасный доступ к свойству
      return getProductStringValue(p, key);
    }).filter(value => value !== '');
    
    return Array.from(new Set(values));
  };

  // Функция поиска продуктов
  const searchProducts = (query: string, searchKey: string) => {
    return products.filter(p => {
      // ✅ Безопасный доступ к свойству для поиска
      const productValue = getProductStringValue(p, searchKey);
      return productValue.toLowerCase().includes(query.toLowerCase());
    });
  };

  // Функция сортировки
  const sortProducts = (products: Product[], sortBy: string, order: 'asc' | 'desc' = 'asc') => {
    return [...products].sort((a, b) => {
      // ✅ Безопасный доступ для сортировки
      const valueA = getProductStringValue(a, sortBy);
      const valueB = getProductStringValue(b, sortBy);

      if (order === 'asc') {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  };

  // Загрузка продуктов
  useEffect(() => {
    // Имитация загрузки данных
    const mockProducts: Product[] = [
      {
        id: 1,
        name: 'Воздушные шары "Радуга"',
        price: 1299,
        image: '/images/products/balloon.png',
        rating: 4.8,
        reviews: 124,
        category: 'Воздушные шары',
        inStock: true,
        description: 'Яркие воздушные шары',
        tags: ['праздник', 'дети'],
        color: 'разноцветные'
      },
      {
        id: 2,
        name: 'Декор "Принцесса"',
        price: 2499,
        image: '/images/products/decor.png',
        rating: 4.9,
        reviews: 89,
        category: 'Детские праздники',
        inStock: true,
        description: 'Декорации для принцессы',
        tags: ['принцесса', 'розовый'],
        color: 'розовый'
      }
    ];
    
    setProducts(mockProducts);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        {/* Фильтры */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Фильтры</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Фильтр по категориям */}
            <div>
              <h3 className="font-medium mb-2">Категории</h3>
              {getUniqueValues(products, 'category').map(category => (
                <label key={category} className="flex items-center mb-2">
                  <input 
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) => {
                      const newFilters = { ...filters };
                      if (e.target.checked) {
                        newFilters.category = [...(newFilters.category || []), category];
                      } else {
                        newFilters.category = (newFilters.category || []).filter(c => c !== category);
                      }
                      setFilters(newFilters);
                    }}
                  />
                  {category}
                </label>
              ))}
            </div>

            {/* Фильтр по цветам */}
            <div>
              <h3 className="font-medium mb-2">Цвета</h3>
              {getUniqueValues(products, 'color').map(color => (
                <label key={color} className="flex items-center mb-2">
                  <input 
                    type="checkbox"
                    className="mr-2"
                    onChange={(e) => {
                      const newFilters = { ...filters };
                      if (e.target.checked) {
                        newFilters.color = [...(newFilters.color || []), color];
                      } else {
                        newFilters.color = (newFilters.color || []).filter(c => c !== color);
                      }
                      setFilters(newFilters);
                    }}
                  />
                  {color}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Список товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">Категория: {getProductStringValue(product, 'category')}</p>
              <p className="text-gray-600 mb-2">Цвет: {getProductStringValue(product, 'color')}</p>
              <p className="text-xl font-bold text-blue-600">{product.price} ₽</p>
              <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Товары не найдены</p>
            <button
              onClick={() => setFilters({})}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 