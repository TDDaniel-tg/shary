import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Контакты - Prime Balloons',
  description: 'Контактная информация Prime Balloons. Адрес, телефон, email и время работы.',
};

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами удобным способом. Мы всегда готовы помочь создать ваш незабываемый праздник
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Как с нами связаться
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Телефон</h3>
                    <a 
                      href="tel:+74957734375" 
                      className="text-pink-500 hover:text-pink-600 text-lg font-medium"
                    >
                      +7 (495) 773-43-75
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Бесплатные консультации и оформление заказов
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <a 
                      href="mailto:info@prazdnikstore.ru" 
                      className="text-pink-500 hover:text-pink-600 text-lg font-medium"
                    >
                      info@prazdnikstore.ru
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Для письменных обращений и предложений
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Адрес</h3>
                    <p className="text-gray-700 text-lg">
                      г. Москва, ул. Примерная, д. 123
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      Самовывоз по предварительной договоренности
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-pink-500" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Время работы</h3>
                    <div className="text-gray-700">
                      <p className="text-lg font-medium">Ежедневно, круглосуточно</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Принимаем заказы и консультируем клиентов 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Мессенджеры
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/74957734375" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">WhatsApp</p>
                    <p className="text-sm text-gray-600">Быстрые ответы</p>
                  </div>
                </a>

                <a 
                  href="https://t.me/prazdnikstore" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">Telegram</p>
                    <p className="text-sm text-gray-600">Онлайн чат</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Как нас найти
              </h2>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600">Карта будет загружена</p>
                  <p className="text-sm text-gray-500">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Полезная информация
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 bg-pink-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🚚 Доставка по Москве
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Бесплатная доставка при заказе от 3000 рублей. 
                    Срочная доставка в течение 2-4 часов.
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    💰 Способы оплаты
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Наличными при получении, картой онлайн, 
                    банковским переводом для юридических лиц.
                  </p>
                </div>

                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ⭐ Гарантия качества
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Все товары сертифицированы. Возврат и обмен 
                    в течение 14 дней при сохранении товарного вида.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Часто задаваемые вопросы
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Как быстро вы доставляете заказы?
                </h3>
                <p className="text-gray-700 text-sm">
                  Стандартная доставка в течение дня заказа. 
                  Срочная доставка 2-4 часа с момента оплаты.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Можно ли заказать оформление праздника?
                </h3>
                <p className="text-gray-700 text-sm">
                  Да, мы предоставляем услуги по комплексному 
                  оформлению праздников под ключ.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Есть ли скидки для постоянных клиентов?
                </h3>
                <p className="text-gray-700 text-sm">
                  Да, у нас действует система скидок и бонусная 
                  программа для постоянных покупателей.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Работаете ли вы с юридическими лицами?
                </h3>
                <p className="text-gray-700 text-sm">
                  Конечно! Предоставляем все необходимые документы 
                  и работаем по договорам с отсрочкой платежа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 