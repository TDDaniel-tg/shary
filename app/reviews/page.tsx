'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { Star, StarHalf, MessageCircle, ThumbsUp, Calendar, User } from 'lucide-react';

// Нельзя экспортировать metadata из клиентского компонента
// export const metadata: Metadata = {
//   title: 'Отзывы клиентов - Prime Balloons',
//   description: 'Отзывы довольных клиентов о качестве воздушных шаров и обслуживании Prime Balloons.',
// };

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  title: string;
  text: string;
  service: string;
  helpful: number;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Анна М.",
    rating: 5,
    date: "2024-01-15",
    title: "Превосходное качество и сервис!",
    text: "Заказывала оформление детского дня рождения. Шары держались всё торжество, цвета яркие, дочка была в восторге! Доставили точно в срок, курьер очень вежливый. Обязательно обратимся снова!",
    service: "Детский день рождения",
    helpful: 12,
    verified: true
  },
  {
    id: 2,
    name: "Михаил П.",
    rating: 5,
    date: "2024-01-10",
    title: "Спасли свадьбу!",
    text: "В последний момент подвели другие декораторы. Обратились в Prime Balloons - за 4 часа сделали потрясающее оформление зала! Все гости были в восторге от арки из шаров. Огромное спасибо!",
    service: "Свадебное оформление",
    helpful: 8,
    verified: true
  },
  {
    id: 3,
    name: "Елена К.",
    rating: 4,
    date: "2024-01-08",
    title: "Хорошее качество, быстрая доставка",
    text: "Заказывала шары для корпоратива. Доставили быстро, шары качественные. Единственный минус - хотелось бы больше вариантов цветов в каталоге. В целом довольна!",
    service: "Корпоративное мероприятие",
    helpful: 5,
    verified: true
  },
  {
    id: 4,
    name: "Дмитрий В.",
    rating: 5,
    date: "2024-01-05",
    title: "Отличная команда профессионалов",
    text: "Организовывали открытие нового офиса. Дизайнеры Prime Balloons создали потрясающую композицию, которая идеально вписалась в наш корпоративный стиль. Рекомендую!",
    service: "Корпоративное мероприятие",
    helpful: 7,
    verified: true
  },
  {
    id: 5,
    name: "Мария Л.",
    rating: 5,
    date: "2024-01-03",
    title: "Романтический сюрприз удался!",
    text: "Заказывала оформление для предложения руки и сердца. Все было выполнено в лучшем виде! Парень остался доволен, а главное - девушка сказала 'Да'! Спасибо за помощь в создании волшебного момента!",
    service: "Романтическое оформление",
    helpful: 15,
    verified: true
  },
  {
    id: 6,
    name: "Игорь С.",
    rating: 4,
    date: "2023-12-28",
    title: "Новогоднее чудо для детей",
    text: "Заказывали новогоднее оформление детского сада. Дети были в восторге! Качество шаров отличное, но немного задержали доставку. В целом остались довольны результатом.",
    service: "Новогоднее оформление",
    helpful: 4,
    verified: true
  },
  {
    id: 7,
    name: "Ольга Т.",
    rating: 5,
    date: "2023-12-25",
    title: "Лучший подарок маме!",
    text: "Заказывала букет из шаров на юбилей мамы. Получился невероятно красивый и стильный букет! Мама была тронута до слез. Качество на высоте, доставка точно в срок.",
    service: "Юбилей",
    helpful: 9,
    verified: true
  },
  {
    id: 8,
    name: "Александр Н.",
    rating: 5,
    date: "2023-12-20",
    title: "Профессиональный подход",
    text: "Сотрудничаем уже второй год для оформления корпоративных мероприятий. Всегда высокое качество, креативные решения и индивидуальный подход. Рекомендую как надежного партнера!",
    service: "Корпоративное партнерство",
    helpful: 11,
    verified: true
  }
];

const stats = {
  totalReviews: 247,
  averageRating: 4.8,
  ratings: {
    5: 195,
    4: 38,
    3: 10,
    2: 3,
    1: 1
  }
};

export default function ReviewsPage() {
  const [selectedService, setSelectedService] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const services = ['all', 'Детский день рождения', 'Свадебное оформление', 'Корпоративное мероприятие', 'Романтическое оформление'];

  const filteredReviews = reviews.filter(review => 
    selectedService === 'all' || review.service === selectedService
  );

  const sortedReviews = filteredReviews.sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'oldest') {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    } else if (sortBy === 'helpful') {
      return b.helpful - a.helpful;
    }
    return 0;
  });

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }

    return stars;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Отзывы клиентов <span className="text-pink-500">Prime Balloons</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мнения наших довольных клиентов о качестве воздушных шаров и уровне обслуживания
          </p>
        </section>

        {/* Statistics */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-pink-500 mb-2">{stats.averageRating}</div>
              <div className="flex justify-center mb-2">
                {renderStars(stats.averageRating)}
              </div>
              <p className="text-gray-600">Средняя оценка</p>
              <p className="text-sm text-gray-500">{stats.totalReviews} отзывов</p>
            </div>
            
            <div className="space-y-2">
              {Object.entries(stats.ratings).reverse().map(([rating, count]) => (
                <div key={rating} className="flex items-center">
                  <span className="w-8 text-sm text-gray-600">{rating}</span>
                  <Star className="h-4 w-4 text-yellow-400 mx-1" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div 
                      className="bg-pink-500 h-2 rounded-full" 
                      style={{ width: `${(count / stats.totalReviews) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-12 text-sm text-gray-600">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Фильтр по услугам
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="all">Все услуги</option>
                  {services.slice(1).map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сортировка
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="rating">По рейтингу</option>
                  <option value="helpful">По полезности</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="mb-16">
          <div className="space-y-6">
            {sortedReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                      <User className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 flex items-center">
                        {review.name}
                        {review.verified && (
                          <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                            Проверенный отзыв
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatDate(review.date)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-gray-500 mb-1">{review.service}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {review.helpful}
                    </div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-2">{review.title}</h4>
                <p className="text-gray-700 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Write Review CTA */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Поделитесь своим мнением!</h2>
          <p className="text-xl mb-8 text-pink-100">
            Ваш отзыв поможет другим клиентам сделать правильный выбор
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74957734375"
              className="bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Позвонить и заказать
            </a>
            <a
              href="mailto:info@primeballoons.ru"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors"
            >
              Написать отзыв
            </a>
          </div>
        </section>

        {/* Review Guidelines */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">💡 Правила написания отзывов:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Отзывы должны быть основаны на личном опыте использования наших услуг</li>
              <li>• Мы проверяем все отзывы перед публикацией</li>
              <li>• Запрещены оскорбления, нецензурная лексика и спам</li>
              <li>• Отзывы не должны содержать рекламу сторонних услуг</li>
              <li>• Мы оставляем за собой право редактировать или удалять неподходящие отзывы</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 