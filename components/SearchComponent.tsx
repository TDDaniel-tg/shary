'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Package } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  url: string;
}

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Закрытие поиска при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Фокус на инпут при открытии
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Поиск товаров
  useEffect(() => {
    const performSearch = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        // В реальном приложении - запрос к API
        const response = await fetch(`/api/products?search=${encodeURIComponent(query)}&limit=5`);
        const data = await response.json();
        
        // Преобразуем результаты для поиска
        const searchResults: SearchResult[] = data.products?.map((product: any) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          category: product.category,
          image: product.image,
          url: `/products/${product.id}`
        })) || [];

        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center w-10 h-10 text-gray-600 hover:text-pink-500 hover:bg-pink-50 rounded-full transition-colors"
        aria-label="Поиск"
      >
        <Search className="h-5 w-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          
          <div ref={searchRef} className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl">
            {/* Search Input */}
            <div className="flex items-center p-4 border-b border-gray-200">
              <Search className="h-5 w-5 text-gray-400 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск товаров..."
                className="flex-1 text-lg outline-none placeholder-gray-500"
              />
              <button
                onClick={handleClose}
                className="ml-3 p-1 text-gray-400 hover:text-gray-600 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {loading && (
                <div className="p-8 text-center">
                  <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-pink-500"></div>
                  <p className="mt-2 text-gray-600">Поиск...</p>
                </div>
              )}

              {!loading && query.length >= 2 && results.length === 0 && (
                <div className="p-8 text-center text-gray-500">
                  <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>По запросу "{query}" ничего не найдено</p>
                  <p className="text-sm mt-2">Попробуйте изменить поисковый запрос</p>
                </div>
              )}

              {!loading && query.length < 2 && (
                <div className="p-8 text-center text-gray-500">
                  <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Введите минимум 2 символа для поиска</p>
                  <div className="mt-4 text-sm">
                    <p className="font-medium mb-2">Популярные запросы:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['шары', 'день рождения', 'свадьба', 'декор'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setQuery(term)}
                          className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-2">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={result.url}
                      onClick={handleClose}
                      className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex-shrink-0 mr-3 overflow-hidden">
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/api/placeholder/48/48';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 truncate">
                          {result.name}
                        </p>
                        <p className="text-sm text-gray-500 capitalize">
                          {result.category}
                        </p>
                      </div>
                      <div className="text-right ml-3">
                        <p className="font-bold text-pink-600">
                          {formatPrice(result.price)}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {results.length >= 5 && (
                    <div className="p-3 border-t border-gray-200">
                      <Link
                        href={`/catalog?search=${encodeURIComponent(query)}`}
                        onClick={handleClose}
                        className="block text-center text-pink-500 hover:text-pink-600 font-medium"
                      >
                        Показать все результаты
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
} 