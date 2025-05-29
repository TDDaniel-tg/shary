'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  ShoppingCart, 
  Phone,
  Star,
  TrendingUp,
  Calendar,
  DollarSign,
  Search,
  FileText,
  Globe,
  Edit3,
  Save,
  Plus,
  Eye,
  Trash2
} from 'lucide-react';

interface StatsCard {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down';
}

interface SEOSettings {
  titleTemplate: string;
  globalDescription: string;
}

interface Page {
  id: number;
  name: string;
  url: string;
  title: string;
  description: string;
  content: string;
  isRequired: boolean;
}

const statsData: StatsCard[] = [
  {
    title: 'Общая выручка',
    value: '₽2,345,000',
    change: '+12.5%',
    icon: <DollarSign className="h-6 w-6" />,
    trend: 'up'
  },
  {
    title: 'Заказы',
    value: '1,234',
    change: '+8.2%',
    icon: <ShoppingCart className="h-6 w-6" />,
    trend: 'up'
  },
  {
    title: 'Клиенты',
    value: '5,678',
    change: '+15.3%',
    icon: <Users className="h-6 w-6" />,
    trend: 'up'
  },
  {
    title: 'Товары',
    value: '1,023',
    change: '+3.1%',
    icon: <Package className="h-6 w-6" />,
    trend: 'up'
  }
];

const requiredPages: Page[] = [
  {
    id: 1,
    name: 'Контакты',
    url: '/contacts',
    title: 'Контакты - Воздушные шары с доставкой',
    description: 'Контактная информация магазина воздушных шаров. Адрес, телефон, email и время работы.',
    content: '',
    isRequired: true
  },
  {
    id: 2,
    name: 'О компании',
    url: '/about',
    title: 'О компании - Воздушные шары и праздничные товары',
    description: 'История компании, наши преимущества и команда специалистов по оформлению праздников.',
    content: '',
    isRequired: true
  },
  {
    id: 3,
    name: 'Оплата',
    url: '/payment',
    title: 'Способы оплаты - Воздушные шары',
    description: 'Удобные способы оплаты: наличными, картой, онлайн. Безопасные платежи.',
    content: '',
    isRequired: true
  },
  {
    id: 4,
    name: 'Доставка',
    url: '/delivery',
    title: 'Доставка воздушных шаров по Москве',
    description: 'Быстрая доставка воздушных шаров и праздничных товаров по Москве. Условия и стоимость.',
    content: '',
    isRequired: true
  },
  {
    id: 5,
    name: 'Гарантия и возврат',
    url: '/warranty',
    title: 'Гарантия и возврат товаров',
    description: 'Условия возврата и обмена товаров. Гарантии качества воздушных шаров.',
    content: '',
    isRequired: true
  },
  {
    id: 6,
    name: 'Политика конфиденциальности',
    url: '/privacy',
    title: 'Политика конфиденциальности',
    description: 'Политика обработки персональных данных и конфиденциальности.',
    content: '',
    isRequired: true
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [seoSettings, setSeoSettings] = useState<SEOSettings>({
    titleTemplate: 'купить с доставкой на дом',
    globalDescription: 'Широкий выбор воздушных шаров и праздничных товаров с быстрой доставкой по Москве. Качественные товары для незабываемых праздников.'
  });
  const [robotsTxt, setRobotsTxt] = useState(`User-agent: *
Disallow: /admin/
Disallow: /api/
Allow: /

Sitemap: https://example.com/sitemap.xml`);

  const [sitemapXml, setSitemapXml] = useState(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/catalog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`);

  const [pages, setPages] = useState<Page[]>(requiredPages);
  const [editingPage, setEditingPage] = useState<Page | null>(null);

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: BarChart3 },
    { id: 'seo', label: 'SEO настройки', icon: Search },
    { id: 'pages', label: 'Страницы сайта', icon: FileText },
    { id: 'robots', label: 'Robots.txt', icon: Globe },
    { id: 'sitemap', label: 'Sitemap.xml', icon: Globe },
    { id: 'products', label: 'Товары', icon: Package },
    { id: 'orders', label: 'Заказы', icon: ShoppingCart },
    { id: 'customers', label: 'Клиенты', icon: Users },
    { id: 'callbacks', label: 'Обратные звонки', icon: Phone },
    { id: 'reviews', label: 'Отзывы', icon: Star },
    { id: 'settings', label: 'Настройки', icon: Settings },
  ];

  const handleSaveRobots = async () => {
    try {
      const response = await fetch('/api/seo/robots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: robotsTxt }),
      });

      if (response.ok) {
        alert('Robots.txt сохранен успешно');
      } else {
        throw new Error('Ошибка сохранения');
      }
    } catch (error) {
      console.error('Error saving robots.txt:', error);
      alert('Ошибка при сохранении robots.txt');
    }
  };

  const handleSaveSitemap = async () => {
    try {
      const response = await fetch('/api/seo/sitemap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: sitemapXml }),
      });

      if (response.ok) {
        alert('Sitemap.xml сохранен успешно');
      } else {
        throw new Error('Ошибка сохранения');
      }
    } catch (error) {
      console.error('Error saving sitemap.xml:', error);
      alert('Ошибка при сохранении sitemap.xml');
    }
  };

  const handleSavePage = (page: Page) => {
    if (editingPage) {
      setPages(prev => prev.map(p => p.id === editingPage.id ? page : p));
      setEditingPage(null);
      alert('Страница сохранена');
    }
  };

  const generateAltText = (productName: string): string => {
    return productName
      .toLowerCase()
      .replace(/[^a-zA-Zа-яёА-ЯЁ0-9\s]/g, '')
      .replace(/[а-яё]/g, (match) => {
        const map: { [key: string]: string } = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
          'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
          'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
          'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
          'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        };
        return map[match] || match;
      })
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Админ панель</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {new Date().toLocaleDateString('ru-RU', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-pink-100 text-pink-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm font-medium ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} за месяц
                        </p>
                      </div>
                      <div className="p-3 bg-pink-100 rounded-full text-pink-600">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Последние заказы</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between py-2">
                        <div>
                          <p className="font-medium text-gray-900">Заказ #{1000 + i}</p>
                          <p className="text-sm text-gray-600">Иван Петров</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-gray-900">₽{(Math.random() * 5000 + 1000).toFixed(0)}</p>
                          <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                            Оплачен
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Обратные звонки</h3>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="border-l-4 border-pink-500 pl-4 py-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">Анна Смирнова</p>
                            <p className="text-sm text-gray-600">+7 (999) 123-45-67</p>
                            <p className="text-xs text-gray-500">Вопрос по оформлению свадьбы</p>
                          </div>
                          <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded-full">
                            Новый
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">SEO настройки</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Шаблон META TITLE для каталога
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Будет добавлено после названия товара. Например: "Воздушный шар Три кота" + ваш текст
                    </p>
                    <input
                      type="text"
                      value={seoSettings.titleTemplate}
                      onChange={(e) => setSeoSettings(prev => ({ ...prev, titleTemplate: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="купить с доставкой на дом"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Глобальный META DESCRIPTION
                    </label>
                    <textarea
                      value={seoSettings.globalDescription}
                      onChange={(e) => setSeoSettings(prev => ({ ...prev, globalDescription: e.target.value }))}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Описание для всего каталога"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Пример ALT текста для изображений
                    </label>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-2">
                        Название товара: "Воздушный шар Три кота"
                      </p>
                      <p className="text-sm font-medium">
                        ALT текст: {generateAltText("Воздушный шар Три кота")}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      console.log('Saving SEO settings:', seoSettings);
                      alert('SEO настройки сохранены');
                    }}
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Сохранить настройки
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pages' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Страницы сайта</h2>
                </div>

                <div className="space-y-4">
                  {pages.map((page) => (
                    <div key={page.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-medium text-gray-900">{page.name}</h3>
                          <p className="text-sm text-gray-500">{page.url}</p>
                          {page.isRequired && (
                            <span className="inline-block px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full mt-1">
                              Обязательная страница
                            </span>
                          )}
                        </div>
                        <button
                          onClick={() => setEditingPage(page)}
                          className="text-pink-500 hover:text-pink-600 flex items-center gap-1"
                        >
                          <Edit3 className="h-4 w-4" />
                          Редактировать
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Title:</strong> {page.title}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Description:</strong> {page.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Редактирование Robots.txt</h2>
              
              <div className="space-y-4">
                <textarea
                  value={robotsTxt}
                  onChange={(e) => setRobotsTxt(e.target.value)}
                  rows={15}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-sm"
                />
                
                <button
                  onClick={handleSaveRobots}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Сохранить robots.txt
                </button>
              </div>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Редактирование Sitemap.xml</h2>
              
              <div className="space-y-4">
                <textarea
                  value={sitemapXml}
                  onChange={(e) => setSitemapXml(e.target.value)}
                  rows={20}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 font-mono text-sm"
                />
                
                <button
                  onClick={handleSaveSitemap}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Сохранить sitemap.xml
                </button>
              </div>
            </div>
          )}

          {/* Остальные табы остаются как заглушки */}
          {activeTab === 'products' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Управление товарами</h2>
              <div className="text-center py-12 text-gray-500">
                <Package className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал управления товарами в разработке</p>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Заказы</h2>
              <div className="text-center py-12 text-gray-500">
                <ShoppingCart className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал управления заказами в разработке</p>
              </div>
            </div>
          )}

          {activeTab === 'customers' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Клиенты</h2>
              <div className="text-center py-12 text-gray-500">
                <Users className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал управления клиентами в разработке</p>
              </div>
            </div>
          )}

          {activeTab === 'callbacks' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Обратные звонки</h2>
              <div className="text-center py-12 text-gray-500">
                <Phone className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал управления обратными звонками в разработке</p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Отзывы</h2>
              <div className="text-center py-12 text-gray-500">
                <Star className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал управления отзывами в разработке</p>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Настройки</h2>
              <div className="text-center py-12 text-gray-500">
                <Settings className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Функционал настроек в разработке</p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Modal for editing pages */}
      {editingPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setEditingPage(null)} />
          
          <div className="relative bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Редактирование страницы: {editingPage.name}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  META Title
                </label>
                <input
                  type="text"
                  value={editingPage.title}
                  onChange={(e) => setEditingPage(prev => prev ? { ...prev, title: e.target.value } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  META Description
                </label>
                <textarea
                  value={editingPage.description}
                  onChange={(e) => setEditingPage(prev => prev ? { ...prev, description: e.target.value } : null)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Содержимое страницы
                </label>
                <textarea
                  value={editingPage.content}
                  onChange={(e) => setEditingPage(prev => prev ? { ...prev, content: e.target.value } : null)}
                  rows={10}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="HTML контент страницы..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => editingPage && handleSavePage(editingPage)}
                  className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
                >
                  <Save className="h-4 w-4" />
                  Сохранить
                </button>
                <button
                  onClick={() => setEditingPage(null)}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Отмена
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 