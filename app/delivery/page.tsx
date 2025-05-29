import { Metadata } from 'next';
import { Truck, Clock, MapPin, Calculator, Shield, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Доставка - Prime Balloons',
  description: 'Информация о доставке воздушных шаров и праздничного декора по Москве и области.',
};

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Доставка <span className="text-pink-500">Prime Balloons</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Быстрая и надежная доставка воздушных шаров и праздничного декора 
            по Москве и области круглосуточно
          </p>
        </section>

        {/* Delivery Zones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-pink-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">В пределах МКАД</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Стоимость:</span>
                  <span className="font-semibold text-pink-500">от 300 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Время:</span>
                  <span className="font-semibold">2-4 часа</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Экспресс:</span>
                  <span className="font-semibold">от 1 часа</span>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  Бесплатно при заказе от 3000 ₽
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">За МКАД до 10 км</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Стоимость:</span>
                  <span className="font-semibold text-blue-500">от 500 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Время:</span>
                  <span className="font-semibold">3-5 часов</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Экспресс:</span>
                  <span className="font-semibold">от 2 часов</span>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  Бесплатно при заказе от 5000 ₽
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">За МКАД 10-30 км</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Стоимость:</span>
                  <span className="font-semibold text-purple-500">от 800 ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Время:</span>
                  <span className="font-semibold">4-6 часов</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Экспресс:</span>
                  <span className="font-semibold">от 3 часов</span>
                </div>
                <div className="text-sm text-gray-500 mt-4">
                  Индивидуальный расчет
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Особенности доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">24/7 доставка</h3>
              </div>
              <p className="text-gray-600">
                Принимаем и доставляем заказы круглосуточно, включая выходные и праздники
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Собственный автопарк</h3>
              </div>
              <p className="text-gray-600">
                Специально оборудованные автомобили для бережной транспортировки шаров
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Гарантия качества</h3>
              </div>
              <p className="text-gray-600">
                Если товар пострадал при доставке - бесплатная замена или возврат средств
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Calculator className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Точный расчет</h3>
              </div>
              <p className="text-gray-600">
                Калькулятор доставки на сайте поможет рассчитать точную стоимость заранее
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <CreditCard className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Удобная оплата</h3>
              </div>
              <p className="text-gray-600">
                Оплата наличными, картой курьеру или онлайн на сайте
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Точность адреса</h3>
              </div>
              <p className="text-gray-600">
                Доставка точно в указанное место - квартира, офис, площадка мероприятия
              </p>
            </div>
          </div>
        </section>

        {/* Delivery Times */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Время доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Стандартная доставка</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Пн-Пт (9:00-18:00)</span>
                  <span className="font-semibold text-green-600">2-4 часа</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Пн-Пт (18:00-23:00)</span>
                  <span className="font-semibold text-blue-600">3-5 часов</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Выходные (9:00-20:00)</span>
                  <span className="font-semibold text-orange-600">3-6 часов</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Ночью (23:00-9:00)</span>
                  <span className="font-semibold text-purple-600">4-8 часов</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Экспресс-доставка</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">В пределах МКАД</span>
                  <span className="font-semibold text-pink-600">от 1 часа</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">За МКАД до 10 км</span>
                  <span className="font-semibold text-pink-600">от 2 часов</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">За МКАД 10-30 км</span>
                  <span className="font-semibold text-pink-600">от 3 часов</span>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-pink-700 font-medium">
                    Экспресс-доставка доступна при заказе от 2000 ₽
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Наличными курьеру</h3>
              <p className="text-gray-600 text-sm">
                Оплата наличными при получении заказа
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Картой курьеру</h3>
              <p className="text-gray-600 text-sm">
                Оплата банковской картой через терминал
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Онлайн на сайте</h3>
              <p className="text-gray-600 text-sm">
                Предоплата банковской картой через защищенную форму
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Delivery */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Есть вопросы по доставке?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Наши менеджеры ответят на все вопросы и помогут рассчитать стоимость доставки
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74957734375"
              className="bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              +7 (495) 773-43-75
            </a>
            <a
              href="mailto:info@primeballoons.ru"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors"
            >
              info@primeballoons.ru
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 