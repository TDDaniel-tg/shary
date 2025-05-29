'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Phone, Menu, X, User, ShoppingBag } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { AuthModal } from './AuthModal';
import { UserProfile } from './UserProfile';
import SearchComponent from './SearchComponent';
import SearchBox from './SearchBox';

interface UserData {
  id: number;
  username: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  childBirthDate?: string;
  telegramUsername?: string;
  createdAt: string;
  discount: number;
}

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const { items } = useCart();

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleAuthSuccess = (user: UserData) => {
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    setShowUserProfile(false);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top header */}
      <div className="bg-gray-100 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <nav className="hidden md:flex space-x-6 text-sm">
              <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                О нас
              </Link>
              <Link href="/catalog" className="text-gray-600 hover:text-pink-500 transition-colors">
                Каталог товаров и услуг
              </Link>
              <Link href="/delivery" className="text-gray-600 hover:text-pink-500 transition-colors">
                Оплата и доставка
              </Link>
              <Link href="/faq" className="text-gray-600 hover:text-pink-500 transition-colors">
                Вопросы и ответы
              </Link>
              <Link href="/discounts" className="text-gray-600 hover:text-pink-500 transition-colors">
                Скидки
              </Link>
              <Link href="/reviews" className="text-gray-600 hover:text-pink-500 transition-colors">
                Отзывы
              </Link>
              <Link href="/contacts" className="text-gray-600 hover:text-pink-500 transition-colors">
                Контакты
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              {currentUser ? (
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={() => setShowUserProfile(true)}
                    className="flex items-center text-gray-600 hover:text-pink-500 transition-colors"
                  >
                    <User className="h-4 w-4 mr-1" />
                    <span className="text-sm">{currentUser.firstName || currentUser.username}</span>
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-pink-500 text-sm transition-colors"
                  >
                    Выйти
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)} 
                  className="text-gray-600 hover:text-pink-500 text-sm transition-colors"
                >
                  Вход / Регистрация
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center group">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  <span className="text-white font-bold text-lg">🎈</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900 group-hover:text-pink-500 transition-colors">
                  Prime Balloons
                </span>
              </Link>

              <div className="flex-1 max-w-lg mx-8">
                <SearchBox />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {/* Phone */}
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-pink-500" />
                <div className="ml-3">
                  <div className="text-xs text-gray-500">Ежедневно, круглосуточно</div>
                  <a 
                    href="tel:+74957734375" 
                    className="text-lg font-semibold hover:text-pink-500 transition-colors"
                  >
                    +7 (495) 773-43-75
                  </a>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-3">
                <a 
                  href="https://wa.me/74957734375" 
                  className="group"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                    </svg>
                  </div>
                </a>
                <a 
                  href="https://t.me/prazdnikstore" 
                  className="group"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                </a>
              </div>

              {/* Cart */}
              <Link href="/cart" className="relative group">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <ShoppingBag className="h-6 w-6 text-gray-700 group-hover:text-pink-500 transition-colors" />
                    {totalItems > 0 && (
                      <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                        {totalItems}
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-pink-500 transition-colors">
                    Корзина
                  </span>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <nav className="px-4 py-2">
            {[
              { href: '/about', label: 'О нас' },
              { href: '/catalog', label: 'Каталог' },
              { href: '/delivery', label: 'Доставка' },
              { href: '/faq', label: 'FAQ' },
              { href: '/discounts', label: 'Скидки' },
              { href: '/reviews', label: 'Отзывы' },
              { href: '/contacts', label: 'Контакты' }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="block py-3 text-gray-600 hover:text-pink-500 transition-colors border-b border-gray-100 last:border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 py-4 border-t bg-gray-50">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-sm text-gray-500">Круглосуточно</div>
                <a 
                  href="tel:+74957734375" 
                  className="text-lg font-semibold text-gray-900"
                >
                  +7 (495) 773-43-75
                </a>
              </div>
              <Link 
                href="/cart" 
                className="flex items-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Корзина ({totalItems})</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal */}
      {isAuthModalOpen && (
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      {/* User Profile Modal */}
      {showUserProfile && currentUser && (
        <UserProfile 
          user={currentUser}
          isOpen={showUserProfile}
          onClose={() => setShowUserProfile(false)}
          onLogout={handleLogout}
        />
      )}
    </header>
  );
} 