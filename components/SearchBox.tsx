'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  price?: number;
  image?: string;
  category: string;
  url: string;
  type: 'product' | 'category' | 'page';
}

interface SearchBoxProps {
  placeholder?: string;
  className?: string;
}

export default function SearchBox({ placeholder = "Поиск товаров...", className = "" }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState<string[]>([
    'воздушные шары',
    'шары с гелием',
    'день рождения',
    'свадебный декор',
    'детский праздник',
    'подарочные коробки'
  ]);

  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Загружаем историю поисков из localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length >= 2) {
      performSearch(query);
    } else {
      setResults([]);
    }
  }, [query]);

  const performSearch = async (searchQuery: string) => {
    setLoading(true);
    try {
      // Имитация поиска - в реальном приложении это будет API вызов
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const mockResults: SearchResult[] = [
        {
          id: '1',
          title: 'Воздушные шары красные',
          description: 'Набор красных латексных шаров для праздника',
          price: 299,
          image: '/images/red-balloons.jpg',
          category: 'Воздушные шары',
          url: '/products/1',
          type: 'product' as const
        },
        {
          id: '2',
          title: 'Шары с гелием "С Днем Рождения"',
          description: 'Фольгированные шары с надписью',
          price: 599,
          image: '/images/birthday-balloons.jpg',
          category: 'Праздничные шары',
          url: '/products/2',
          type: 'product' as const
        },
        {
          id: 'cat1',
          title: 'Детские праздники',
          description: 'Все для детского дня рождения',
          category: 'Категория',
          url: '/catalog?category=kids',
          type: 'category' as const
        }
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setResults(mockResults);
    } catch (error) {
      console.error('Ошибка поиска:', error);
    }
    setLoading(false);
  };

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      // Добавляем в историю поисков
      const newRecent = [searchQuery, ...recentSearches.filter(s => s !== searchQuery)].slice(0, 5);
      setRecentSearches(newRecent);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
      
      // Перенаправляем на страницу результатов
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  const selectSuggestion = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch(suggestion);
  };

  const removeFromRecent = (searchToRemove: string) => {
    const newRecent = recentSearches.filter(s => s !== searchToRemove);
    setRecentSearches(newRecent);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
          {loading && (
            <div className="p-4 text-center text-gray-500">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-sm">Поиск...</p>
            </div>
          )}

          {!loading && query.length >= 2 && results.length > 0 && (
            <div>
              <div className="p-3 border-b border-gray-100">
                <h3 className="text-sm font-medium text-gray-900">Результаты поиска</h3>
              </div>
              {results.map((result) => (
                <Link
                  key={result.id}
                  href={result.url}
                  className="block p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    {result.image && (
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                          src={result.image} 
                          alt={result.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {result.title}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs text-gray-400">{result.category}</span>
                        {result.price && (
                          <span className="text-sm font-medium text-blue-600">
                            {result.price} ₽
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!loading && query.length >= 2 && results.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              <p className="text-sm">Ничего не найдено по запросу "{query}"</p>
              <button
                onClick={() => handleSearch(query)}
                className="mt-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Искать в каталоге
              </button>
            </div>
          )}

          {!loading && query.length < 2 && (
            <div>
              {recentSearches.length > 0 && (
                <div>
                  <div className="p-3 border-b border-gray-100">
                    <h3 className="text-sm font-medium text-gray-900 flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Недавние поиски
                    </h3>
                  </div>
                  {recentSearches.map((search, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <button
                        onClick={() => selectSuggestion(search)}
                        className="flex-1 text-left text-sm text-gray-700 hover:text-gray-900"
                      >
                        {search}
                      </button>
                      <button
                        onClick={() => removeFromRecent(search)}
                        className="p-1 text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div>
                <div className="p-3 border-b border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Популярные запросы
                  </h3>
                </div>
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => selectSuggestion(search)}
                    className="block w-full text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100 last:border-b-0"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 