'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Star, ShoppingCart, Grid, List } from 'lucide-react';
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
  description: string;
  tags: string[];
}

const categories = [
  'Все категории',
  'Воздушные шары',
  'Детские праздники',
  'Свадебные украшения',
  'Праздничная посуда',
  'Подарки и сувениры'
];

const sortOptions = [
  { value: 'popular', label: 'По популярности' },
  { value: 'price-asc', label: 'По цене: по возрастанию' },
  { value: 'price-desc', label: 'По цене: по убыванию' },
  { value: 'rating', label: 'По рейтингу' },
  { value: 'newest', label: 'Новинки' }
];

// Моковые данные на случай ошибки API
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Набор воздушных шаров "Радуга"',
    price: 1299,
    originalPrice: 1599,
    image: '/images/products/balloon.png',
    rating: 4.8,
    reviews: 124,
    category: 'Воздушные шары',
    inStock: true,
    description: 'Яркий набор воздушных шаров в цветах радуги. Идеально подходит для детских праздников и дней рождения.',
    tags: ['воздушные шары', 'детский праздник', 'радуга', 'день рождения']
  },
  {
    id: 2,
    name: 'Декор для дня рождения "Принцесса"',
    price: 2499,
    image: '/images/products/balloon.png',
    rating: 4.9,
    reviews: 89,
    category: 'Детские праздники',
    inStock: true,
    description: 'Полный набор декораций для создания сказочного праздника маленькой принцессы.',
    tags: ['принцесса', 'детский праздник', 'декор', 'розовый']
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
    inStock: true,
    description: 'Элегантная свадебная арка с живыми цветами для создания романтической атмосферы.',
    tags: ['свадьба', 'арка', 'цветы', 'декор']
  },
  {
    id: 4,
    name: 'Набор праздничной посуды золотой',
    price: 899,
    image: '/images/products/balloon.png',
    rating: 4.7,
    reviews: 203,
    category: 'Праздничная посуда',
    inStock: true,
    description: 'Элегантный набор одноразовой посуды в золотом цвете для торжественных мероприятий.',
    tags: ['посуда', 'золотой', 'праздник', 'элегантность']
  }
];

export default function CatalogClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addItem } = useCart();

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'Все категории') {
        params.append('category', selectedCategory);
      }
      if (searchQuery) {
        params.append('search', searchQuery);
      }
      
      const response = await fetch(`/api/products?${params.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch products');
      
      const data = await response.json();
      setProducts(data.data || mockProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
      // Используем моковые данные в случае ошибки
      setProducts(mockProducts);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    const category = searchParams?.get('category');
    const search = searchParams?.get('search');
    
    if (category) {
      setSelectedCategory(category);
    }
    if (search) {
      setSearchQuery(search);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateURL();
  };

  const updateURL = () => {
    const params = new URLSearchParams();
    if (selectedCategory !== 'Все категории') {
      params.append('category', selectedCategory);
    }
    if (searchQuery) {
      params.append('search', searchQuery);
    }
    
    const newURL = params.toString() ? `/catalog?${params.toString()}` : '/catalog';
    router.push(newURL);
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

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Filters Sidebar */}
      <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
          <h3 className="text-lg font-semibold mb-4">Фильтры</h3>
          
          {/* Categories */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Категории</h4>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    updateURL();
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-pink-100 text-pink-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <h4 className="font-medium mb-3">Цена</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">До 1000 ₽</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">1000 - 5000 ₽</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">5000 - 10000 ₽</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Свыше 10000 ₽</span>
              </label>
            </div>
          </div>

          {/* In Stock */}
          <div className="mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Только в наличии</span>
            </label>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="lg:col-span-3">
        {/* Search and Controls */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Поиск товаров..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </form>
            
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-pink-500 text-white' : 'text-gray-500'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-pink-500 text-white' : 'text-gray-500'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden p-3 border border-gray-300 rounded-lg text-gray-500"
              >
                <Filter className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="skeleton h-96 w-full" />
            ))}
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
          }>
            {sortedProducts.map((product) => (
              <div key={product.id} className={viewMode === 'grid' ? 'card group' : 'card'}>
                {viewMode === 'grid' ? (
                  // Grid View
                  <>
                    <div className="relative aspect-square overflow-hidden">
                      <Link href={`/products/${product.id}`}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </Link>
                      
                      {product.originalPrice && (
                        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                          -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                        </span>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="text-xs text-gray-500 mb-2">{product.category}</div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-pink-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
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
                      
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={!product.inStock}
                        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                          product.inStock
                            ? 'bg-pink-500 text-white hover:bg-pink-600'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {product.inStock ? 'В корзину' : 'Нет в наличии'}
                      </button>
                    </div>
                  </>
                ) : (
                  // List View
                  <div className="flex gap-4 p-4">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover rounded-lg"
                        sizes="128px"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 mb-1">{product.category}</div>
                      <Link href={`/products/${product.id}`}>
                        <h3 className="font-semibold text-gray-900 mb-2 hover:text-pink-500 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
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
                          
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={!product.inStock}
                          className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                            product.inStock
                              ? 'bg-pink-500 text-white hover:bg-pink-600'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          {product.inStock ? 'В корзину' : 'Нет в наличии'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        
        {!loading && sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-4">Товары не найдены</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Все категории');
                updateURL();
              }}
              className="btn-primary"
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 