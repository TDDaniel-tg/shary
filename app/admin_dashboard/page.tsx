'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Package, 
  Users, 
  ShoppingCart, 
  Star,
  Plus,
  TrendingUp,
  Eye,
  MessageSquare,
  Settings
} from 'lucide-react';

interface DashboardStats {
  totalProducts: number;
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  pendingReviews: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem('admin-token');
        if (!token) {
          router.push('/admin/login');
          return;
        }

        const response = await fetch('/api/admin/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setStats(data.data);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
        // Моковые данные для демонстрации
        setStats({
          totalProducts: 156,
          totalUsers: 1240,
          totalOrders: 523,
          totalRevenue: 2450000,
          pendingReviews: 12
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin-token');
    document.cookie = 'admin-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    router.push('/admin/login');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🎈 Balloons Store Admin</h1>
              <p className="text-sm text-gray-600">Панель управления интернет-магазином</p>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                Перейти на сайт
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                Выйти
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Быстрые действия</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/admin_dashboard/products/add"
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500"
            >
              <Plus className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900">Добавить товар</h3>
                <p className="text-sm text-gray-600">Создать новый товар</p>
              </div>
            </Link>

            <Link
              href="/admin_dashboard/products"
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500"
            >
              <Package className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-medium text-gray-900">Управление товарами</h3>
                <p className="text-sm text-gray-600">Редактировать каталог</p>
              </div>
            </Link>

            <Link
              href="/admin_dashboard/reviews"
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500"
            >
              <MessageSquare className="h-8 w-8 text-yellow-500" />
              <div>
                <h3 className="font-medium text-gray-900">Модерация отзывов</h3>
                <p className="text-sm text-gray-600">
                  {stats?.pendingReviews || 0} ожидают проверки
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Статистика</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-blue-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Товаров</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalProducts || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Пользователей</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalUsers || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <ShoppingCart className="h-8 w-8 text-purple-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Заказов</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats?.totalOrders || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-pink-500" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Выручка</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats ? formatCurrency(stats.totalRevenue) : '0 ₽'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Последняя активность</h2>
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>Новый заказ #1234</strong> - 2 минуты назад
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>Добавлен товар</strong> "Набор шаров Единорог" - 15 минут назад
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>Новый отзыв</strong> требует модерации - 1 час назад
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    <strong>Зарегистрирован пользователь</strong> anna@example.com - 2 часа назад
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 