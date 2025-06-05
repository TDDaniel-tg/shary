import { Metadata } from 'next';
import { FileText, Scale, Users, AlertTriangle, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Пользовательское соглашение - Prime Balloons',
  description: 'Условия использования сайта и услуг Prime Balloons. Права и обязанности пользователей.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Пользовательское соглашение
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Условия использования сайта и услуг Prime Balloons. 
            Пожалуйста, внимательно ознакомьтесь с данным соглашением
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Версия 2.1 от 15 января 2024 г.
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">1. Общие положения</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Настоящее Пользовательское соглашение (далее - Соглашение) регулирует отношения 
                между ООО "Prime Balloons" (далее - Компания) и пользователями сайта primeballoons.ru 
                (далее - Сайт).
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Реквизиты Компании:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Полное наименование:</strong> Общество с ограниченной ответственностью "Prime Balloons"</li>
                  <li><strong>Юридический адрес:</strong> 119021, г. Москва, ул. Льва Толстого, д. 16</li>
                  <li><strong>ОГРН:</strong> 1234567890123</li>
                  <li><strong>ИНН:</strong> 7777888899</li>
                  <li><strong>КПП:</strong> 777701001</li>
                  <li><strong>Телефон:</strong> +7 (495) 773-43-75</li>
                  <li><strong>Email:</strong> info@primeballoons.ru</li>
                </ul>
              </div>
              
              <p>
                Использование Сайта означает полное и безоговорочное принятие пользователем 
                условий настоящего Соглашения. Если вы не согласны с какими-либо положениями 
                Соглашения, не используйте Сайт.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">2. Определения</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>В настоящем Соглашении используются следующие термины:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Сайт</h3>
                  <p className="text-sm text-gray-600">
                    Интернет-ресурс primeballoons.ru, включая все его страницы и функции
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Пользователь</h3>
                  <p className="text-sm text-gray-600">
                    Любое физическое лицо, использующее Сайт
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Услуги</h3>
                  <p className="text-sm text-gray-600">
                    Продажа воздушных шаров, доставка, оформление мероприятий
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Заказ</h3>
                  <p className="text-sm text-gray-600">
                    Оформленная через Сайт заявка на приобретение товаров или услуг
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Предмет соглашения</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Компания предоставляет Пользователю возможность использовать Сайт для:
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Основные возможности Сайта:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Просмотр каталога товаров</li>
                    <li>• Размещение заказов</li>
                    <li>• Получение информации об услугах</li>
                    <li>• Связь с службой поддержки</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Отслеживание статуса заказов</li>
                    <li>• Оставление отзывов</li>
                    <li>• Подписка на новости и акции</li>
                    <li>• Консультации по оформлению</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Права и обязанности Пользователя</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">👍 Права Пользователя:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Бесплатно пользоваться всеми возможностями Сайта</li>
                  <li>• Получать достоверную информацию о товарах и услугах</li>
                  <li>• Обращаться в службу поддержки по любым вопросам</li>
                  <li>• Отказаться от заказа в соответствии с условиями возврата</li>
                  <li>• Требовать защиты своих персональных данных</li>
                  <li>• Получать качественные товары и услуги</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">📋 Обязанности Пользователя:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Предоставлять достоверную информацию при заказе</li>
                  <li>• Соблюдать условия настоящего Соглашения</li>
                  <li>• Не нарушать права третьих лиц</li>
                  <li>• Не использовать Сайт в противоправных целях</li>
                  <li>• Уведомлять об изменении контактных данных</li>
                  <li>• Своевременно оплачивать заказанные товары и услуги</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🚫 Пользователю запрещается:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Использовать автоматизированные средства для массовых запросов</li>
                  <li>• Размещать вредоносный код или вирусы</li>
                  <li>• Нарушать работу Сайта любыми способами</li>
                  <li>• Копировать содержимое Сайта без разрешения</li>
                  <li>• Размещать спам или нежелательную рекламу</li>
                  <li>• Выдавать себя за других лиц или организации</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Права и обязанности Компании</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🏢 Компания обязуется:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Предоставлять качественные товары и услуги</li>
                  <li>• Обеспечивать работоспособность Сайта</li>
                  <li>• Защищать персональные данные пользователей</li>
                  <li>• Предоставлять техническую поддержку</li>
                  <li>• Соблюдать сроки доставки товаров</li>
                  <li>• Информировать об изменениях в работе</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">⚖️ Компания имеет право:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Изменять условия Соглашения с уведомлением</li>
                  <li>• Временно приостанавливать работу Сайта для обслуживания</li>
                  <li>• Отказать в обслуживании при нарушении условий</li>
                  <li>• Изменять ассортимент и цены на товары</li>
                  <li>• Запрашивать дополнительную информацию у пользователей</li>
                  <li>• Устанавливать ограничения на количество заказов</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Условия заказа и оплаты</h2>
            <div className="space-y-4 text-gray-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">📝 Оформление заказа</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Выбор товаров в каталоге</li>
                    <li>• Добавление в корзину</li>
                    <li>• Указание данных для доставки</li>
                    <li>• Подтверждение заказа</li>
                    <li>• Получение уведомления</li>
                  </ul>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">💳 Способы оплаты</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Наличными курьеру</li>
                    <li>• Банковской картой курьеру</li>
                    <li>• Онлайн на сайте</li>
                    <li>• Банковским переводом</li>
                    <li>• Электронными деньгами</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">⏰ Важные условия:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Заказ считается принятым после подтверждения менеджером</li>
                  <li>• Цены действительны на момент оформления заказа</li>
                  <li>• Минимальная сумма заказа для доставки - 1000 рублей</li>
                  <li>• Предоплата требуется для заказов свыше 10 000 рублей</li>
                  <li>• Сроки доставки рассчитываются с момента подтверждения заказа</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Доставка и возврат</h2>
            <div className="space-y-4 text-gray-700">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">🚚 Условия доставки</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Доставка по Москве и области</li>
                    <li>• Стандартная доставка: 2-4 часа</li>
                    <li>• Экспресс доставка: 1-2 часа</li>
                    <li>• Бесплатная доставка от 3000₽</li>
                    <li>• Точное время согласовывается</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">↩️ Условия возврата</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Возврат в течение 7 дней</li>
                    <li>• При браке или несоответствии</li>
                    <li>• Сохранность товарного вида</li>
                    <li>• Возврат денег в течение 10 дней</li>
                    <li>• Обмен на аналогичный товар</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <AlertTriangle className="h-8 w-8 text-yellow-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">8. Ответственность сторон</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">⚠️ Ограничение ответственности Компании:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Компания не несет ответственность за технические сбои связи</li>
                  <li>• За действия третьих лиц (курьерские службы, банки)</li>
                  <li>• За ущерб от неправильного использования товаров</li>
                  <li>• За косвенные убытки пользователей</li>
                  <li>• Максимальная ответственность ограничена стоимостью заказа</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">🔒 Ответственность Пользователя:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• За достоверность предоставленной информации</li>
                  <li>• За своевременную оплату заказов</li>
                  <li>• За соблюдение условий настоящего Соглашения</li>
                  <li>• За ущерб, причиненный Компании неправомерными действиями</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Разрешение споров</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Все споры и разногласия решаются путем переговоров. При невозможности 
                достижения соглашения спор рассматривается в суде по месту нахождения Компании.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">📞 Порядок рассмотрения жалоб:</h3>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>1. Обращение в службу поддержки по телефону или email</li>
                  <li>2. Рассмотрение жалобы в течение 3 рабочих дней</li>
                  <li>3. Предоставление ответа с планом решения проблемы</li>
                  <li>4. При необходимости - привлечение руководства</li>
                  <li>5. Документирование всех обращений и решений</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Заключительные положения</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Настоящее Соглашение вступает в силу с момента начала использования Сайта 
                и действует до отказа от его использования.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">📋 Изменения Соглашения:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Компания вправе изменять условия Соглашения</li>
                  <li>• Уведомление об изменениях размещается на Сайте</li>
                  <li>• Изменения вступают в силу через 3 дня после публикации</li>
                  <li>• Продолжение использования Сайта означает согласие с изменениями</li>
                </ul>
              </div>

              <p className="text-sm text-gray-500">
                Соглашение составлено на русском языке и регулируется законодательством 
                Российской Федерации.
              </p>
            </div>
          </section>

          {/* Contact Section - добавляем розовый блок */}
          <section className="mt-16 mb-12 bg-pink-500 rounded-xl p-8 shadow-sm text-white">
            <h2 className="text-3xl font-bold mb-6 text-center">Остались вопросы по условиям?</h2>
            <p className="text-lg mb-8 text-center">
              Свяжитесь с нами для получения разъяснений по любым пунктам соглашения
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+7 (495) 773-43-75" 
                className="flex items-center gap-3 bg-white text-pink-500 px-6 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors"
              >
                <Phone className="h-5 w-5" />
                +7 (495) 773-43-75
              </a>
              
              <a 
                href="mailto:legal@primeballoons.ru" 
                className="flex items-center gap-3 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                <Mail className="h-5 w-5" />
                legal@primeballoons.ru
              </a>
            </div>
            
            <div className="mt-8 text-center text-sm text-white/80">
              <p>Юридический отдел ООО "Prime Balloons"</p>
              <p>Время работы: Пн-Пт 9:00-18:00, Сб-Вс 10:00-16:00</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 