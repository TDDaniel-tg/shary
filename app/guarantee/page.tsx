import { Metadata } from 'next';
import { Shield, Star, Clock, CheckCircle2, Award, Users, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Гарантии качества - Prime Balloons',
  description: 'Гарантии качества товаров и услуг Prime Balloons. Политика качества, стандарты и обязательства.',
};

export default function GuaranteePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Гарантии качества
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем высочайшее качество всех товаров и услуг. 
            Ваше доверие — основа нашего успеха
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span>5 лет опыта</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-green-500 mr-1" />
              <span>5000+ довольных клиентов</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Наши гарантии</h2>
            </div>
            <div className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">100% качество товаров</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Все товары проходят тщательную проверку качества перед отправкой. 
                    Мы работаем только с проверенными поставщиками.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Контроль качества на всех этапах</li>
                    <li>• Сертифицированные материалы</li>
                    <li>• Проверка перед упаковкой</li>
                    <li>• Гарантия соответствия описанию</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <Clock className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Соблюдение сроков</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Гарантируем доставку в оговоренные сроки. При нарушении сроков по нашей вине — 
                    скидка 20% на заказ.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Точное планирование доставки</li>
                    <li>• SMS-уведомления о статусе</li>
                    <li>• Компенсация за опоздания</li>
                    <li>• Приоритетная доставка при срочности</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Безопасность товаров</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Все воздушные шары и аксессуары соответствуют требованиям безопасности 
                    и имеют необходимые сертификаты.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Экологически чистые материалы</li>
                    <li>• Безопасность для детей</li>
                    <li>• Сертификаты соответствия</li>
                    <li>• Гипоаллергенные материалы</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <Star className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">Профессиональное оформление</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Наши декораторы имеют профессиональное образование и опыт работы более 3 лет. 
                    Гарантируем эстетичность и стиль.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Опытные декораторы</li>
                    <li>• Индивидуальный подход</li>
                    <li>• Согласование концепции</li>
                    <li>• Фото-отчет по завершении</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Политика качества</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">🎯 Наша миссия</h3>
                <p className="text-gray-600 mb-4">
                  Создавать незабываемые моменты радости, предоставляя качественные товары и услуги 
                  для праздничного оформления. Мы стремимся превосходить ожидания клиентов на каждом этапе.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Контроль качества</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Поддержка клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600 mb-2">0%</div>
                    <div className="text-sm text-gray-600">Компромиссов с качеством</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">⭐ Стандарты качества</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Входной контроль</h4>
                      <p className="text-sm text-gray-600">
                        Проверка каждой партии товаров на соответствие техническим требованиям и стандартам качества
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Контроль хранения</h4>
                      <p className="text-sm text-gray-600">
                        Соблюдение условий хранения: температурный режим, влажность, защита от солнечных лучей
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Предотгрузочная проверка</h4>
                      <p className="text-sm text-gray-600">
                        Финальная проверка товаров перед упаковкой и отправкой клиенту
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Обратная связь</h4>
                      <p className="text-sm text-gray-600">
                        Сбор отзывов клиентов и постоянное улучшение процессов на основе полученных данных
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Сертификаты и лицензии</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">📜 Документы соответствия</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Обязательные сертификаты:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Сертификат соответствия ГОСТ Р</li>
                      <li>• Декларация о соответствии ТР ТС</li>
                      <li>• Санитарно-эпидемиологическое заключение</li>
                      <li>• Сертификат пожарной безопасности</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Дополнительные гарантии:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Сертификат ISO 9001 (система менеджмента качества)</li>
                      <li>• Экологический сертификат EcoMark</li>
                      <li>• Сертификат безопасности для детских товаров</li>
                      <li>• Лицензия на розничную торговлю</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Безопасность</h4>
                  <p className="text-xs text-gray-600">
                    Все товары прошли проверку на безопасность и соответствуют российским стандартам
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Качество</h4>
                  <p className="text-xs text-gray-600">
                    Система менеджмента качества ISO 9001 гарантирует стабильно высокое качество
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="h-8 w-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Экология</h4>
                  <p className="text-xs text-gray-600">
                    Экологически чистые материалы, безопасные для здоровья и окружающей среды
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Гарантийные обязательства</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">🛡️ Что мы гарантируем:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Качество материалов</h4>
                        <p className="text-sm text-gray-600">
                          Воздушные шары не лопнут при правильном надувании в течение 24 часов
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Яркость цветов</h4>
                        <p className="text-sm text-gray-600">
                          Цвета не выгорают и не тускнеют в течение всего срока эксплуатации
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Герметичность</h4>
                        <p className="text-sm text-gray-600">
                          Шары с гелием держат форму не менее 8-12 часов (в зависимости от размера)
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Комплектность</h4>
                        <p className="text-sm text-gray-600">
                          100% соответствие заказа по количеству, цветам и аксессуарам
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Декоративное оформление</h4>
                        <p className="text-sm text-gray-600">
                          Профессиональное оформление согласно утвержденному эскизу
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Сроки доставки</h4>
                        <p className="text-sm text-gray-600">
                          Точное соблюдение согласованного времени доставки ±15 минут
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">⚠️ Действие гарантии прекращается:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• При механических повреждениях по вине клиента</li>
                    <li>• При неправильном хранении или использовании</li>
                    <li>• При воздействии острых предметов</li>
                    <li>• При превышении рекомендуемого размера надувания</li>
                  </ul>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• При контакте с горячими поверхностями</li>
                    <li>• При хранении в неподходящих условиях</li>
                    <li>• При самостоятельном ремонте или модификации</li>
                    <li>• По истечении гарантийного срока</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Процедура предъявления претензий</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">📞 Как связаться с нами при возникновении проблем:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Немедленное обращение</h4>
                      <p className="text-sm text-gray-600">
                        Обратитесь к нам сразу при обнаружении дефекта. Чем быстрее, тем проще решить проблему.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Фото-фиксация</h4>
                      <p className="text-sm text-gray-600">
                        Сделайте фотографии дефекта или проблемы для быстрого решения вопроса.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Детали заказа</h4>
                      <p className="text-sm text-gray-600">
                        Сообщите номер заказа, дату доставки и детали проблемы.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Быстрое решение</h4>
                      <p className="text-sm text-gray-600">
                        Мы найдем оптимальное решение в течение 2 часов в рабочее время.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">🕐 Сроки рассмотрения</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Срочные вопросы: до 2 часов</li>
                    <li>• Стандартные претензии: до 24 часов</li>
                    <li>• Сложные случаи: до 3 рабочих дней</li>
                    <li>• Экспертиза товара: до 7 рабочих дней</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">🎁 Возможные решения</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Бесплатная замена товара</li>
                    <li>• Полный возврат денег</li>
                    <li>• Частичная компенсация</li>
                    <li>• Дополнительные бонусы</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Гарантируем качество на 100%!</h2>
            <p className="text-blue-100 mb-6">
              Если у вас возникли вопросы по качеству товаров или услуг, мы всегда готовы помочь
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74957734375"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (495) 773-43-75
              </a>
              <a
                href="mailto:quality@primeballoons.ru"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                quality@primeballoons.ru
              </a>
            </div>
            
            <div className="mt-8 text-sm text-blue-200">
              <p>Отдел качества работает: Пн-Вс 9:00-21:00</p>
              <p>Среднее время решения проблем: 2 часа</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 