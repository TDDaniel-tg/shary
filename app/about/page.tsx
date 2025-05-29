import { Metadata } from 'next';
import { Heart, Award, Truck, Users, Star, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'О компании - Prime Balloons',
  description: 'История компании Prime Balloons, наши преимущества и команда специалистов по оформлению праздников.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            О компании <span className="text-pink-500">Prime Balloons</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаем незабываемые моменты с 2018 года, превращая обычные дни в настоящие праздники
            с помощью качественных воздушных шаров и праздничного декора
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Prime Balloons начинал свою деятельность как небольшая семейная компания, 
                  которая видела свою миссию в том, чтобы дарить радость и создавать 
                  атмосферу праздника для каждого клиента.
                </p>
                <p>
                  За годы работы мы выросли в одну из ведущих компаний Москвы по оформлению 
                  праздников, но при этом сохранили индивидуальный подход к каждому заказу 
                  и внимание к деталям.
                </p>
                <p>
                  Сегодня Prime Balloons - это команда профессионалов, современный склад 
                  с широким ассортиментом товаров и собственная служба доставки, 
                  работающая круглосуточно.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎈</div>
                  <p className="text-gray-600">Фото нашего магазина</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Любовь к деталям</h3>
              <p className="text-gray-600">
                Мы уделяем внимание каждой мелочи, чтобы ваш праздник был идеальным
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Качество</h3>
              <p className="text-gray-600">
                Используем только сертифицированные материалы от проверенных поставщиков
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Клиентоориентированность</h3>
              <p className="text-gray-600">
                Каждый клиент для нас особенный, и мы готовы воплотить любую идею
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Prime Balloons в цифрах</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">5000+</div>
              <p className="text-gray-600 font-medium">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">1000+</div>
              <p className="text-gray-600 font-medium">Товаров в каталоге</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">24/7</div>
              <p className="text-gray-600 font-medium">Работаем круглосуточно</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">6</div>
              <p className="text-gray-600 font-medium">Лет на рынке</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👨‍💼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Алексей Иванов</h3>
              <p className="text-pink-500 font-medium mb-3">Основатель и директор</p>
              <p className="text-gray-600 text-sm">
                15+ лет в сфере праздничного декора. Лично контролирует качество каждого заказа.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">👩‍🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Мария Петрова</h3>
              <p className="text-pink-500 font-medium mb-3">Главный дизайнер</p>
              <p className="text-gray-600 text-sm">
                Создает уникальные композиции и помогает воплотить самые смелые идеи клиентов.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Сергей Смирнов</h3>
              <p className="text-pink-500 font-medium mb-3">Руководитель доставки</p>
              <p className="text-gray-600 text-sm">
                Обеспечивает быструю и аккуратную доставку заказов по всей Москве.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Быстрая доставка</h3>
              </div>
              <p className="text-gray-600">
                Доставляем заказы по Москве от 2 часов. Собственная служба доставки работает 24/7.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Гарантия качества</h3>
              </div>
              <p className="text-gray-600">
                Все товары сертифицированы. Гарантируем замену или возврат средств при браке.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-pink-500 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Круглосуточно</h3>
              </div>
              <p className="text-gray-600">
                Принимаем заказы и консультируем клиентов 24 часа в сутки, 7 дней в неделю.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-4">Готовы создать ваш идеальный праздник?</h2>
          <p className="text-xl mb-8 text-pink-100">
            Свяжитесь с нами для консультации и персонального предложения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+74957734375"
              className="bg-white text-pink-500 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              Позвонить сейчас
            </a>
            <a
              href="/catalog"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors"
            >
              Смотреть каталог
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 