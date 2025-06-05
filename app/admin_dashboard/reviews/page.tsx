'use client';

import { useState, useEffect } from 'react';
import { Check, X, Eye, ThumbsUp, RefreshCcw } from 'lucide-react';
import type { Review } from '@/lib/db';

export default function ReviewsModeration() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Загрузка отзывов
  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Получаем токен из localStorage
      const token = localStorage.getItem('admin-token');
      if (!token) {
        // Если токена нет, перенаправляем на страницу входа
        window.location.href = '/admin/login';
        return;
      }
      
      // Запрос к API
      const response = await fetch('/api/admin/reviews', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        setReviews(data.data);
      } else {
        setError(data.error || 'Не удалось загрузить отзывы');
      }
    } catch (error) {
      console.error('Ошибка при загрузке отзывов:', error);
      setError('Произошла ошибка при загрузке отзывов');
      
      // Для демонстрации используем моковые данные в случае ошибки
      setReviews([
        {
          id: '1',
          productId: '1',
          productName: 'Набор шаров "День рождения"',
          userName: 'Анна Иванова',
          rating: 5,
          content: 'Отличный набор шаров! Яркие цвета, качественный материал. Доставили вовремя. Всем рекомендую!',
          status: 'pending',
          createdAt: '2023-09-15T14:30:00Z'
        },
        {
          id: '2',
          productId: '2',
          productName: 'Фольгированная цифра "5"',
          userName: 'Петр Сидоров',
          rating: 4,
          content: 'Хорошая цифра, но немного меньше, чем я ожидал. В целом доволен покупкой.',
          status: 'pending',
          createdAt: '2023-09-10T09:45:00Z'
        },
        {
          id: '3',
          productId: '3',
          productName: 'Воздушные шары "Единорог"',
          userName: 'Мария Петрова',
          rating: 2,
          content: 'Не понравилось качество шаров. Один лопнул сразу же после надувания. Разочарована.',
          status: 'pending',
          createdAt: '2023-09-12T16:20:00Z'
        },
        {
          id: '4',
          productId: '4',
          productName: 'Набор шаров "Свадьба"',
          userName: 'Сергей Николаев',
          rating: 5,
          content: 'Идеально подошли для нашей свадьбы! Гости были в восторге. Спасибо за качественный товар!',
          status: 'approved',
          createdAt: '2023-08-28T11:15:00Z'
        },
        {
          id: '5',
          productId: '5',
          productName: 'Латексные шары, розовые',
          userName: 'Ольга Смирнова',
          rating: 1,
          content: 'Ужасное качество. Половина шаров лопнула при надувании. Больше не буду заказывать.',
          status: 'rejected',
          createdAt: '2023-09-05T13:40:00Z'
        },
        {
          id: '6',
          productId: '1',
          productName: 'Набор шаров "День рождения"',
          userName: 'Дмитрий Козлов',
          rating: 4,
          content: 'Неплохой набор, но есть недочеты. В целом, праздник удался!',
          status: 'approved',
          createdAt: '2023-09-01T18:30:00Z'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Фильтрация отзывов по текущей вкладке
  const filteredReviews = reviews.filter(review => review.status === activeTab);

  // Обработчик одобрения отзыва
  const handleApproveReview = async (id: string) => {
    try {
      setLoading(true);
      
      // Получаем токен из localStorage
      const token = localStorage.getItem('admin-token');
      if (!token) {
        window.location.href = '/admin/login';
        return;
      }
      
      // Запрос к API
      const response = await fetch(`/api/admin/reviews/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Обновляем состояние отзывов
        setReviews(reviews.map(review => 
          review.id === id ? { ...review, status: 'approved' as const } : review
        ));
        
        // Закрываем модальное окно, если это был просматриваемый отзыв
        if (selectedReview?.id === id) {
          setSelectedReview(null);
        }
      } else {
        setError(data.error || 'Не удалось одобрить отзыв');
      }
    } catch (error) {
      console.error('Ошибка при одобрении отзыва:', error);
      
      // Для демонстрации обновляем состояние отзывов локально
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, status: 'approved' as const } : review
      ));
      
      // Закрываем модальное окно, если это был просматриваемый отзыв
      if (selectedReview?.id === id) {
        setSelectedReview(null);
      }
    } finally {
      setLoading(false);
    }
  };

  // Обработчик отклонения отзыва
  const handleRejectReview = async (id: string) => {
    try {
      setLoading(true);
      
      // Получаем токен из localStorage
      const token = localStorage.getItem('admin-token');
      if (!token) {
        window.location.href = '/admin/login';
        return;
      }
      
      // Запрос к API
      const response = await fetch(`/api/admin/reviews/${id}/reject`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        if (response.status === 401) {
          window.location.href = '/admin/login';
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success) {
        // Обновляем состояние отзывов
        setReviews(reviews.map(review => 
          review.id === id ? { ...review, status: 'rejected' as const } : review
        ));
        
        // Закрываем модальное окно, если это был просматриваемый отзыв
        if (selectedReview?.id === id) {
          setSelectedReview(null);
        }
      } else {
        setError(data.error || 'Не удалось отклонить отзыв');
      }
    } catch (error) {
      console.error('Ошибка при отклонении отзыва:', error);
      
      // Для демонстрации обновляем состояние отзывов локально
      setReviews(reviews.map(review => 
        review.id === id ? { ...review, status: 'rejected' as const } : review
      ));
      
      // Закрываем модальное окно, если это был просматриваемый отзыв
      if (selectedReview?.id === id) {
        setSelectedReview(null);
      }
    } finally {
      setLoading(false);
    }
  };

  // Форматирование даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // Отображение рейтинга в виде звезд
  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <ThumbsUp
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Модерация отзывов</h1>
      
      {error && (
        <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      )}
      
      {/* Вкладки для фильтрации отзывов */}
      <div className="mb-6 border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('pending')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Ожидают проверки ({reviews.filter(r => r.status === 'pending').length})
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'approved'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Одобренные ({reviews.filter(r => r.status === 'approved').length})
          </button>
          <button
            onClick={() => setActiveTab('rejected')}
            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'rejected'
                ? 'border-pink-500 text-pink-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Отклоненные ({reviews.filter(r => r.status === 'rejected').length})
          </button>
        </nav>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center p-8">
          <RefreshCcw className="animate-spin h-8 w-8 text-pink-500" />
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {filteredReviews.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Товар
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Пользователь
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Рейтинг
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Отзыв
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Дата
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredReviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{review.productName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{review.userName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStars(review.rating)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-2">{review.content}</div>
                      <button
                        onClick={() => setSelectedReview(review)}
                        className="mt-1 text-xs text-pink-600 hover:text-pink-900"
                      >
                        Читать полностью
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{formatDate(review.createdAt)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        {activeTab === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApproveReview(review.id)}
                              className="text-green-600 hover:text-green-900"
                              title="Одобрить"
                            >
                              <Check className="h-5 w-5" />
                            </button>
                            <button
                              onClick={() => handleRejectReview(review.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Отклонить"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => setSelectedReview(review)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Просмотреть"
                        >
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-8 text-gray-500">
              {activeTab === 'pending' ? 'Нет отзывов, ожидающих проверки' : 
               activeTab === 'approved' ? 'Нет одобренных отзывов' : 
               'Нет отклоненных отзывов'}
            </div>
          )}
        </div>
      )}
      
      {/* Модальное окно для просмотра полного отзыва */}
      {selectedReview && (
        <div className="fixed inset-0 overflow-y-auto z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setSelectedReview(null)}></div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                      Отзыв на товар: {selectedReview.productName}
                    </h3>
                    
                    <div className="mt-4 space-y-4">
                      <div>
                        <p className="text-sm text-gray-500">Пользователь</p>
                        <p className="text-sm font-medium">{selectedReview.userName}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Дата</p>
                        <p className="text-sm font-medium">{formatDate(selectedReview.createdAt)}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Рейтинг</p>
                        <div className="mt-1">{renderStars(selectedReview.rating)}</div>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Текст отзыва</p>
                        <p className="text-sm mt-1">{selectedReview.content}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Статус</p>
                        <p className={`text-sm font-medium ${
                          selectedReview.status === 'approved' ? 'text-green-600' : 
                          selectedReview.status === 'rejected' ? 'text-red-600' : 
                          'text-yellow-500'
                        }`}>
                          {selectedReview.status === 'approved' ? 'Одобрен' : 
                           selectedReview.status === 'rejected' ? 'Отклонен' : 
                           'Ожидает проверки'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                {selectedReview.status === 'pending' && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleApproveReview(selectedReview.id)}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Одобрить
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRejectReview(selectedReview.id)}
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Отклонить
                    </button>
                  </>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:mt-0 sm:w-auto sm:text-sm"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 