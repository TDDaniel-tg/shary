import { Metadata } from 'next';
import { RotateCcw, Clock, CheckCircle, AlertCircle, Phone, Mail, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Возврат товаров - Prime Balloons',
  description: 'Условия возврата и обмена товаров Prime Balloons. Сроки, правила и процедура возврата.',
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <RotateCcw className="h-8 w-8 text-green-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Возврат товаров
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы заботимся о ваших правах как покупателя. Узнайте о простой процедуре 
            возврата и обмена товаров Prime Balloons
          </p>
          <p className="text-sm text-gray-500 mt-4">
            В соответствии с Законом РФ "О защите прав потребителей"
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Сроки возврата</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Мы предоставляем максимально гибкие условия возврата в рамках действующего законодательства.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">✅ Стандартный возврат</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-green-500 mr-2" />
                      <span className="text-lg font-semibold text-green-600">14 дней</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Для качественных товаров при сохранении товарного вида
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Воздушные шары (неиспользованные)</li>
                      <li>• Праздничная атрибутика</li>
                      <li>• Декоративные элементы</li>
                      <li>• Подарочная упаковка</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">🚀 Ускоренный возврат</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-500 mr-2" />
                      <span className="text-lg font-semibold text-blue-600">7 дней</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      При наличии дефектов или несоответствии заказу
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Бракованные товары</li>
                      <li>• Неправильная комплектация</li>
                      <li>• Повреждения при доставке</li>
                      <li>• Несоответствие описанию</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <h3 className="font-semibold text-gray-900 mb-2">⏰ Важно помнить:</h3>
                <p className="text-sm text-gray-600">
                  Срок возврата начинает исчисляться с момента получения товара. 
                  Выходные и праздничные дни включаются в срок возврата.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Условия возврата</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">✅ Товар подлежит возврату, если:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Сохранен товарный вид</li>
                    <li>• Сохранена оригинальная упаковка</li>
                    <li>• Не нарушена целостность изделия</li>
                    <li>• Сохранены все бирки и этикетки</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Есть документ о покупке</li>
                    <li>• Не истек срок возврата</li>
                    <li>• Товар не использовался</li>
                    <li>• Нет следов эксплуатации</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">❌ Не подлежат возврату:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Использованные воздушные шары</li>
                    <li>• Персонализированные товары</li>
                    <li>• Товары с индивидуальными надписями</li>
                    <li>• Скоропортящиеся товары</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Товары, изготовленные под заказ</li>
                    <li>• Гигиенические принадлежности</li>
                    <li>• Товары в поврежденной упаковке</li>
                    <li>• Распакованные наборы для творчества</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">⚡ Особые случаи:</h3>
                <div className="space-y-3">
                  <div className="border border-orange-200 rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Брак или дефект</h4>
                    <p className="text-sm text-gray-600">
                      Возврат в течение всего гарантийного срока, независимо от состояния упаковки
                    </p>
                  </div>
                  <div className="border border-orange-200 rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Ошибка при доставке</h4>
                    <p className="text-sm text-gray-600">
                      Немедленный обмен на правильный товар за наш счет
                    </p>
                  </div>
                  <div className="border border-orange-200 rounded-lg p-4 bg-white">
                    <h4 className="font-semibold text-gray-900 mb-2">Повреждение при транспортировке</h4>
                    <p className="text-sm text-gray-600">
                      Полная компенсация или замена товара
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Package className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Процедура возврата</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-6">📋 Пошаговая инструкция:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Свяжитесь с нами</h4>
                      <p className="text-sm text-gray-600">
                        Позвоните по телефону +7 (495) 773-43-75 или напишите на returns@primeballoons.ru
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Получите номер возврата</h4>
                      <p className="text-sm text-gray-600">
                        Мы выдадим вам уникальный номер возврата и инструкции для дальнейших действий
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Подготовьте товар</h4>
                      <p className="text-sm text-gray-600">
                        Упакуйте товар в оригинальную упаковку, приложите документы о покупке
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Передайте товар</h4>
                      <p className="text-sm text-gray-600">
                        Выберите удобный способ: курьер заберет товар или привезите в наш офис
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Получите возврат</h4>
                      <p className="text-sm text-gray-600">
                        Деньги поступят на ваш счет в течение 10 рабочих дней после получения товара
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">🚚 Способы передачи товара</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Курьер заберет бесплатно (при заказе свыше 3000₽)</li>
                    <li>• Доставка в офис по адресу: ул. Льва Толстого, 16</li>
                    <li>• Почтовая пересылка (за ваш счет)</li>
                    <li>• Передача через пункты выдачи</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">💰 Способы возврата денег</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• На банковскую карту (2-5 рабочих дней)</li>
                    <li>• Наличными в офисе</li>
                    <li>• Банковским переводом</li>
                    <li>• Зачет при следующей покупке</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <AlertCircle className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Расходы на возврат</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">🎁 Мы оплачиваем доставку</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• При браке или дефекте товара</li>
                    <li>• При ошибке в комплектации заказа</li>
                    <li>• При повреждении во время доставки</li>
                    <li>• При несоответствии описанию на сайте</li>
                    <li>• Для заказов свыше 5000₽ (в любом случае)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">💸 Покупатель оплачивает</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• При возврате качественного товара</li>
                    <li>• При изменении решения о покупке</li>
                    <li>• При заказах до 3000₽</li>
                    <li>• При почтовой пересылке</li>
                    <li>• При самостоятельной доставке в офис</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">💡 Полезная информация:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Стоимость обратной доставки: от 300₽ в пределах МКАД</li>
                  <li>• При возврате нескольких товаров доставка оплачивается один раз</li>
                  <li>• Деньги за доставку возвращаются только при браке товара</li>
                  <li>• Возможна частичная компенсация доставки для постоянных клиентов</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Обмен товаров</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Кроме возврата денег, мы предлагаем удобный обмен товаров на аналогичные 
                или других артикулов с доплатой разности в цене.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RotateCcw className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Равноценный обмен</h3>
                  <p className="text-sm text-gray-600">
                    На товар такой же стоимости без дополнительных платежей
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Обмен с доплатой</h3>
                  <p className="text-sm text-gray-600">
                    На более дорогой товар с доплатой разности
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Package className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Обмен с возвратом</h3>
                  <p className="text-sm text-gray-600">
                    На менее дорогой товар с возвратом разности
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Нужна помощь с возвратом?</h2>
            <p className="text-green-100 mb-6">
              Наши специалисты готовы помочь с оформлением возврата или ответить на любые вопросы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74957734375"
                className="bg-white text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (495) 773-43-75
              </a>
              <a
                href="mailto:returns@primeballoons.ru"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-500 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                returns@primeballoons.ru
              </a>
            </div>
            
            <div className="mt-8 text-sm text-green-200">
              <p>Отдел возвратов работает: Пн-Пт 9:00-19:00, Сб-Вс 10:00-18:00</p>
              <p>Среднее время рассмотрения заявки: 2 часа</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 