import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Prime Balloons</h3>
            <p className="text-gray-600 mb-4">
              Prime Balloons - ваш надежный партнер в создании незабываемых праздников. 
              Мы предлагаем широкий ассортимент качественных воздушных шаров и праздничного декора 
              с быстрой доставкой по Москве.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                className="text-gray-400 hover:text-red-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Покупателям</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/catalog" className="hover:text-white transition-colors">
                  Каталог товаров
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white transition-colors">
                  Доставка и оплата
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Возврат товара
                </Link>
              </li>
              <li>
                <Link href="/guarantee" className="hover:text-white transition-colors">
                  Гарантии
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Категории</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link 
                  href="/catalog?category=Воздушные шары" 
                  className="hover:text-white transition-colors"
                >
                  Воздушные шары
                </Link>
              </li>
              <li>
                <Link 
                  href="/catalog?category=Детские праздники" 
                  className="hover:text-white transition-colors"
                >
                  Детские праздники
                </Link>
              </li>
              <li>
                <Link 
                  href="/catalog?category=Свадебные украшения" 
                  className="hover:text-white transition-colors"
                >
                  Свадебные украшения
                </Link>
              </li>
              <li>
                <Link 
                  href="/catalog?category=Праздничная посуда" 
                  className="hover:text-white transition-colors"
                >
                  Праздничная посуда
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+7(999)123-45-67" className="hover:text-white transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@prazdnik-store.ru" className="hover:text-white transition-colors">
                  info@prazdnik-store.ru
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>г. Москва, ул. Праздничная, д. 15</span>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-sm text-gray-400">
                Режим работы: Пн-Вс 9:00-21:00
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Праздник Store. Все права защищены.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Использование cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 