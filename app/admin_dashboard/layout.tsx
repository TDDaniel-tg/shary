'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  Phone, 
  Star,
  Globe, 
  FileText,
  Settings,
  Menu,
  X,
  BarChart3,
  ShoppingBag,
  LogOut,
  Home
} from 'lucide-react';

const navigation = [
  { name: 'Панель управления', href: '/admin_dashboard', icon: LayoutDashboard },
  { name: 'Заказы', href: '/admin_dashboard/orders', icon: ShoppingBag },
  { name: 'Товары', href: '/admin_dashboard/products', icon: Package },
  { name: 'Клиенты', href: '/admin_dashboard/customers', icon: Users },
  { name: 'Заявки на звонок', href: '/admin_dashboard/callbacks', icon: Phone },
  { name: 'Отзывы', href: '/admin_dashboard/reviews', icon: Star },
  { name: 'SEO', href: '/admin_dashboard/seo', icon: Globe },
  { name: 'Контент', href: '/admin_dashboard/content', icon: FileText },
  { name: 'Настройки', href: '/admin_dashboard/settings', icon: Settings },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname() || '';
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  // Определяем, находимся ли мы на странице админ-панели
  const isAdminDashboard = pathname.startsWith('/admin_dashboard');

  // Отключаем отображение хедера для страниц админ-панели
  const showHeader = false; // Изменено с true на false для отключения хедера

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Мобильная боковая панель */}
      <div
        className={`fixed inset-0 flex z-40 md:hidden ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Закрыть боковую панель</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <span className="text-xl font-bold text-pink-600">🎈 Balloons Admin</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                    pathname === item.href || pathname.startsWith(`${item.href}/`)
                      ? 'bg-pink-50 text-pink-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? 'text-pink-600'
                        : 'text-gray-400 group-hover:text-gray-500'
                    }`}
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="flex-shrink-0 group block w-full"
            >
              <div className="flex items-center">
                <div>
                  <LogOut className="inline-block h-5 w-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-red-500">Выйти</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 w-14">
          {/* Заглушка для обеспечения фокуса */}
        </div>
      </div>

      {/* Десктопная боковая панель */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex-shrink-0 flex items-center px-4">
                <span className="text-xl font-bold text-pink-600">🎈 Balloons Admin</span>
              </div>
              <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      pathname === item.href || pathname.startsWith(`${item.href}/`)
                        ? 'bg-pink-50 text-pink-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${
                        pathname === item.href || pathname.startsWith(`${item.href}/`)
                          ? 'text-pink-600'
                          : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div className="flex items-center justify-between w-full">
                <Link
                  href="/"
                  className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <Home className="mr-3 h-5 w-5 text-gray-400" />
                  На сайт
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-sm font-medium text-red-500 hover:text-red-700"
                >
                  <LogOut className="mr-3 h-5 w-5" />
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Открыть боковую панель</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
    </div>
  );
}