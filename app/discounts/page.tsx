import { Metadata } from 'next';
import { Gift, Percent, Users, Calendar, Star, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Скидки и акции - Prime Balloons',
  description: 'Действующие скидки и акции на воздушные шары и праздничный декор в Prime Balloons.',
};

export default function DiscountsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Percent className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Скидки и акции <span className="text-pink-500">Prime Balloons</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выгодные предложения и специальные условия для наших клиентов. 
            Экономьте на покупке воздушных шаров и праздничного декора!
          </p>
        </section>

        {/* Current Offers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Действующие акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Free Delivery */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-white text-pink-500 px-3 py-1 rounded-full text-sm font-bold">
                  АКЦИЯ
                </div>
              </div>
              <Gift className="h-12 w-12 mb-4 text-pink-200" />
              <h3 className="text-2xl font-bold mb-3">Бесплатная доставка</h3>
              <p className="text-pink-100 mb-4">
                При заказе от 3000₽ доставка по Москве в пределах МКАД абсолютно бесплатно
              </p>
              <div className="text-sm text-pink-200">
                Действует постоянно
              </div>
            </div>

            {/* Bulk Discount */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200">
              <div className="flex justify-between items-start mb-4">
                <Users className="h-12 w-12 text-blue-500" />
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-bold">
                  -15%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Оптовая скидка</h3>
              <p className="text-gray-600 mb-4">
                Скидка 15% при заказе от 50 шаров одного вида или комплектующих
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Для организаций и крупных мероприятий
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200">
              <div className="flex justify-between items-start mb-4">
                <Star className="h-12 w-12 text-purple-500" />
                <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-bold">
                  -10%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Программа лояльности</h3>
              <p className="text-gray-600 mb-4">
                Постоянная скидка 10% для клиентов, сделавших более 5 заказов
              </p>
              <div className="text-sm text-purple-600 font-medium">
                Автоматически после 5-го заказа
              </div>
            </div>

            {/* Night Orders */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-200">
              <div className="flex justify-between items-start mb-4">
                <Calendar className="h-12 w-12 text-indigo-500" />
                <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
                  -5%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ночные заказы</h3>
              <p className="text-gray-600 mb-4">
                Скидка 5% на все заказы, оформленные с 23:00 до 9:00
              </p>
              <div className="text-sm text-indigo-600 font-medium">
                Действует круглый год
              </div>
            </div>

            {/* Weekend Special */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <div className="flex justify-between items-start mb-4">
                <Tag className="h-12 w-12 text-green-500" />
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                  2+1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Выходной бонус</h3>
              <p className="text-gray-600 mb-4">
                Каждый третий латексный шар в подарок при заказе в выходные дни
              </p>
              <div className="text-sm text-green-600 font-medium">
                Суббота и воскресенье
              </div>
            </div>

            {/* First Order */}
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200">
              <div className="flex justify-between items-start mb-4">
                <Gift className="h-12 w-12 text-orange-500" />
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-bold">
                  -20%
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Первый заказ</h3>
              <p className="text-gray-600 mb-4">
                Скидка 20% на первый заказ для новых клиентов при сумме от 2000₽
              </p>
              <div className="text-sm text-orange-600 font-medium">
                Промокод: WELCOME20
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Offers */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Сезонные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎄</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Новогодние скидки</h3>
              <p className="text-gray-600 mb-4">
                В декабре действуют специальные цены на новогоднее оформление и тематические шары
              </p>
              <div className="text-sm text-red-600 font-medium">
                Скидки до 25% в декабре
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">День Святого Валентина</h3>
              <p className="text-gray-600 mb-4">
                14 февраля особые предложения на романтические композиции и шары в форме сердца
              </p>
              <div className="text-sm text-pink-600 font-medium">
                Специальные наборы от 990₽
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">8 Марта</h3>
              <p className="text-gray-600 mb-4">
                В марте действуют скидки на букеты из шаров и весеннее оформление
              </p>
              <div className="text-sm text-purple-600 font-medium">
                Букеты от 599₽
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Выпускной сезон</h3>
              <p className="text-gray-600 mb-4">
                Май-июнь специальные цены на оформление выпускных в детских садах и школах
              </p>
              <div className="text-sm text-blue-600 font-medium">
                Пакеты оформления от 5000₽
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Discounts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Как получить скидку</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Укажите промокод</h3>
                    <p className="text-gray-600 text-sm">
                      При оформлении заказа введите промокод в специальное поле
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Позвоните менеджеру</h3>
                    <p className="text-gray-600 text-sm">
                      Скажите о желании использовать скидку при телефонном заказе
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Автоматические скидки</h3>
                    <p className="text-gray-600 text-sm">
                      Некоторые скидки применяются автоматически при соблюдении условий
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">💡 Полезно знать:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Скидки не суммируются между собой</li>
                  <li>• Применяется наибольшая из возможных скидок</li>
                  <li>• Некоторые акции имеют ограниченный срок действия</li>
                  <li>• Скидки действуют на товары, не участвующие в других акциях</li>
                  <li>• Условия акций могут изменяться</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Discounts */}
        <section className="mb-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Корпоративные скидки</h2>
            <p className="text-blue-100 text-lg">
              Специальные условия для организаций и постоянных клиентов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">15%</div>
              <h3 className="font-semibold mb-2">Детские сады и школы</h3>
              <p className="text-sm text-blue-100">
                Постоянная скидка для образовательных учреждений
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">15%</div>
              <h3 className="font-semibold mb-2">Event-агентства</h3>
              <p className="text-sm text-blue-100">
                Специальные условия для организаторов мероприятий
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold mb-2">15%</div>
              <h3 className="font-semibold mb-2">VIP-клиенты</h3>
              <p className="text-sm text-blue-100">
                Максимальная скидка при заказах свыше 100 000₽
              </p>
            </div>
          </div>
        </section>

        {/* Contact for Discounts */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Нужна персональная скидка?</h2>
            <p className="text-gray-600 mb-8">
              Обратитесь к нашим менеджерам для обсуждения индивидуальных условий 
              сотрудничества и специальных предложений
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74957734375"
                className="bg-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
              >
                Позвонить менеджеру
              </a>
              <a
                href="mailto:info@primeballoons.ru"
                className="border-2 border-pink-500 text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-500 hover:text-white transition-colors"
              >
                Написать на почту
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 