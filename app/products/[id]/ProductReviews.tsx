'use client';

import { useState, useEffect } from 'react';
import { Star, User, ThumbsUp, MessageCircle } from 'lucide-react';

interface Review {
  id: number;
  userId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  isModerated: boolean;
}

interface Props {
  productId: number;
}

export default function ProductReviews({ productId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    comment: '',
    userName: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Мок данные отзывов
  const mockReviews: Review[] = [
    {
      id: 1,
      userId: 1,
      userName: 'Анна К.',
      rating: 5,
      comment: 'Отличные воздушные шары! Качество превосходное, яркие цвета. Дети были в восторге на празднике!',
      date: '2024-01-15',
      helpful: 12,
      isModerated: true
    },
    {
      id: 2,
      userId: 2,
      userName: 'Михаил П.',
      rating: 4,
      comment: 'Хорошие шары, быстрая доставка. Один шар лопнул через день, но в целом качество нормальное.',
      date: '2024-01-10',
      helpful: 8,
      isModerated: true
    },
    {
      id: 3,
      userId: 3,
      userName: 'Елена С.',
      rating: 5,
      comment: 'Заказывала для свадьбы - все гости были в восторге! Шары держали форму весь день.',
      date: '2024-01-05',
      helpful: 15,
      isModerated: true
    }
  ];

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  const fetchReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/products/${productId}/reviews`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data.reviews || []);
      } else {
        // Используем мок данные если API недоступно
        setReviews(mockReviews);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      // Используем мок данные в случае ошибки
      setReviews(mockReviews);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.comment.trim() || !newReview.userName.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch(`/api/products/${productId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newReview,
          productId
        }),
      });

      if (response.ok) {
        // Добавляем новый отзыв в состояние (он будет ожидать модерации)
        const newReviewData: Review = {
          id: Date.now(),
          userId: 0,
          userName: newReview.userName,
          rating: newReview.rating,
          comment: newReview.comment,
          date: new Date().toISOString().split('T')[0],
          helpful: 0,
          isModerated: false
        };
        
        setReviews(prev => [newReviewData, ...prev]);
        setNewReview({ rating: 5, comment: '', userName: '' });
        setShowAddReview(false);
        alert('Спасибо! Ваш отзыв отправлен на модерацию.');
      } else {
        alert('Произошла ошибка при отправке отзыва');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('Произошла ошибка при отправке отзыва');
    } finally {
      setSubmitting(false);
    }
  };

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const starSize = size === 'lg' ? 'h-6 w-6' : 'h-4 w-4';
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${starSize} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Отзывы</h3>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 h-24 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Заголовок и статистика */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Отзывы ({reviews.length})</h3>
          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mt-1">
              {renderStars(Math.round(averageRating))}
              <span className="text-sm text-gray-600">
                {averageRating.toFixed(1)} из 5
              </span>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowAddReview(!showAddReview)}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center gap-2"
        >
          <MessageCircle className="h-4 w-4" />
          Оставить отзыв
        </button>
      </div>

      {/* Форма добавления отзыва */}
      {showAddReview && (
        <form onSubmit={handleSubmitReview} className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h4 className="font-semibold">Добавить отзыв</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя
            </label>
            <input
              type="text"
              value={newReview.userName}
              onChange={(e) => setNewReview(prev => ({ ...prev, userName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Оценка
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
                  className="p-1"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= newReview.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300 hover:text-yellow-200'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Комментарий
            </label>
            <textarea
              value={newReview.comment}
              onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Поделитесь своим мнением о товаре..."
              required
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={submitting}
              className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 disabled:opacity-50 transition-colors"
            >
              {submitting ? 'Отправка...' : 'Отправить отзыв'}
            </button>
            <button
              type="button"
              onClick={() => setShowAddReview(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Отмена
            </button>
          </div>
        </form>
      )}

      {/* Список отзывов */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Пока нет отзывов. Будьте первым!
          </p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-6">
              {!review.isModerated && (
                <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-3 py-1 rounded text-sm mb-3">
                  Отзыв ожидает модерации
                </div>
              )}
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.userName}</span>
                    {renderStars(review.rating)}
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{review.comment}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-pink-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      Полезно ({review.helpful})
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 