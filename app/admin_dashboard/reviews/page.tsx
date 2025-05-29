'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Star, Check, X, Clock } from 'lucide-react';

interface Review {
  id: number;
  user_name: string;
  product_name: string;
  rating: number;
  comment: string;
  created_at: string;
  is_moderated: boolean;
}

export default function ReviewsModerationPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [processingId, setProcessingId] = useState<number | null>(null);
  const router = useRouter();

  // Мок данные для демонстрации
  const mockReviews: Review[] = [
    {
      id: 1,
      user_name: 'Анна Петрова',
      product_name: 'Воздушные шары латексные "Радуга"',
      rating: 5,
      comment: 'Отличные шары! Качество превосходное, дети были в восторге. Обязательно закажем еще!',
      created_at: '2024-01-20T10:30:00Z',
      is_moderated: false
    },
    {
      id: 2,
      user_name: 'Михаил Иванов',
      product_name: 'Фольгированные шары "Звезда"',
      rating: 4,
      comment: 'Хорошие шары, быстрая доставка. Один шар немного помялся, но в целом доволен покупкой.',
      created_at: '2024-01-19T15:45:00Z',
      is_moderated: false
    },
    {
      id: 3,
      user_name: 'Елена Смирнова',
      product_name: 'Шары для моделирования ШДМ',
      rating: 5,
      comment: 'Заказывала для детского дня рождения - все прошло идеально! Шары хорошо держат форму.',
      created_at: '2024-01-18T09:15:00Z',
      is_moderated: false
    }
  ];

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('admin-token');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      const response = await fetch('/api/admin/reviews/pending', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data.data || []);
      } else {
        console.log('API недоступно, используем мок данные');
        setReviews(mockReviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews(mockReviews);
    } finally {
      setLoading(false);
    }
  };

  const handleReviewAction = async (reviewId: number, action: 'approve' | 'reject') => {
    setProcessingId(reviewId);
    try {
      const token = localStorage.getItem('admin-token');
      const response = await fetch(`/api/admin/reviews/${reviewId}/${action}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        alert(action === 'approve' ? 'Отзыв одобрен!' : 'Отзыв отклонен!');
        // Удаляем отзыв из списка
        setReviews(prev => prev.filter(review => review.id !== reviewId));
      } else {
        alert('Ошибка при обработке отзыва');
      }
    } catch (error) {
      console.error('Error processing review:', error);
      alert('Произошла ошибка при обработке отзыва');
    } finally {
      setProcessingId(null);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('ru-RU');
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin_dashboard"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Назад к панели управления
          </Link>
          
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Модерация отзывов</h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>{reviews.length} отзывов ожидают модерации</span>
            </div>
          </div>
        </div>

        {/* Reviews List */}
        {reviews.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-gray-400 mb-4">
              <Check className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Все отзывы обработаны!
            </h3>
            <p className="text-gray-600">
              Нет отзывов, ожидающих модерации
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{review.user_name}</h3>
                    <p className="text-sm text-gray-600">{review.product_name}</p>
                    <p className="text-xs text-gray-500 mt-1">{formatDate(review.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-600">({review.rating}/5)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {review.comment}
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => handleReviewAction(review.id, 'approve')}
                    disabled={processingId === review.id}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    <Check className="h-4 w-4" />
                    Одобрить
                  </button>
                  
                  <button
                    onClick={() => handleReviewAction(review.id, 'reject')}
                    disabled={processingId === review.id}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    <X className="h-4 w-4" />
                    Отклонить
                  </button>

                  {processingId === review.id && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
                      <span className="text-sm">Обработка...</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600">Ожидают модерации</div>
            <div className="text-2xl font-bold text-yellow-600">{reviews.length}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600">Одобрено сегодня</div>
            <div className="text-2xl font-bold text-green-600">12</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-sm text-gray-600">Отклонено сегодня</div>
            <div className="text-2xl font-bold text-red-600">3</div>
          </div>
        </div>
      </div>
    </div>
  );
} 