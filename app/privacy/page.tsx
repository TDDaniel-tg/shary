import { Metadata } from 'next';
import { Shield, Lock, Eye, Database, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Политика конфиденциальности - Prime Balloons',
  description: 'Политика конфиденциальности и обработки персональных данных Prime Balloons.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Политика конфиденциальности
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных и 
            обеспечиваем их безопасность в соответствии с российским законодательством
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Последнее обновление: 15 января 2024 г.
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Database className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">1. Общие положения</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Настоящая Политика конфиденциальности персональных данных (далее - Политика) 
                действует в отношении всей информации, размещенной на сайте Prime Balloons, 
                расположенном по адресу primeballoons.ru (далее - Сайт).
              </p>
              <p>
                Использование Сайта означает безоговорочное согласие пользователя с настоящей 
                Политикой и указанными в ней условиями обработки его персональной информации; 
                в случае несогласия с этими условиями пользователь должен воздержаться от 
                использования Сайта.
              </p>
              <p>
                <strong>Оператор персональных данных:</strong> ООО "Prime Balloons"<br />
                <strong>Юридический адрес:</strong> 119021, г. Москва, ул. Льва Толстого, д. 16<br />
                <strong>ОГРН:</strong> 1234567890123<br />
                <strong>ИНН:</strong> 7777888899
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Eye className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">2. Какие данные мы собираем</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Мы можем собирать следующие категории персональных данных:</p>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Персональная информация:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Имя, фамилия, отчество</li>
                  <li>• Номер телефона</li>
                  <li>• Адрес электронной почты</li>
                  <li>• Адрес доставки</li>
                  <li>• Дата рождения (при необходимости)</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Техническая информация:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• IP-адрес</li>
                  <li>• Тип браузера и операционной системы</li>
                  <li>• Файлы cookies</li>
                  <li>• Страницы, которые вы посещаете на нашем сайте</li>
                  <li>• Время и дата посещения</li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Коммерческая информация:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• История заказов</li>
                  <li>• Предпочтения в товарах</li>
                  <li>• Способы оплаты</li>
                  <li>• Отзывы и оценки</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">3. Цели обработки данных</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>Мы используем ваши персональные данные для следующих целей:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Обработка заказов</h3>
                  <p className="text-sm text-gray-600">
                    Оформление, подтверждение и выполнение ваших заказов, 
                    организация доставки товаров
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Связь с клиентами</h3>
                  <p className="text-sm text-gray-600">
                    Уведомления о статусе заказа, ответы на вопросы, 
                    техническая поддержка
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Улучшение сервиса</h3>
                  <p className="text-sm text-gray-600">
                    Анализ предпочтений, персонализация предложений, 
                    улучшение качества обслуживания
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Маркетинг</h3>
                  <p className="text-sm text-gray-600">
                    Информирование о новых товарах, акциях и специальных 
                    предложениях (с вашего согласия)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Правовые основания обработки</h2>
            <div className="space-y-4 text-gray-700">
              <p>Обработка ваших персональных данных осуществляется на следующих правовых основаниях:</p>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <strong>Согласие субъекта персональных данных</strong> - при регистрации на сайте, 
                    оформлении заказа, подписке на рассылку
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <strong>Исполнение договора</strong> - обработка данных для выполнения 
                    обязательств по договору купли-продажи
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-600 text-sm font-bold">3</span>
                  </div>
                  <div>
                    <strong>Законные интересы оператора</strong> - улучшение качества услуг, 
                    безопасность, предотвращение мошенничества
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Передача данных третьим лицам</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Мы не продаем, не обмениваем и не передаем ваши персональные данные третьим лицам 
                без вашего согласия, за исключением случаев, предусмотренных настоящей Политикой.
              </p>
              
              <p>Передача данных может осуществляться в следующих случаях:</p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Службы доставки:</h3>
                <p className="text-sm text-gray-600">
                  Передача контактных данных и адреса доставки курьерским службам для выполнения заказа
                </p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Платежные системы:</h3>
                <p className="text-sm text-gray-600">
                  Передача данных для обработки платежей (в зашифрованном виде)
                </p>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Требования закона:</h3>
                <p className="text-sm text-gray-600">
                  По требованию государственных органов в рамках их полномочий
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Защита персональных данных</h2>
            <div className="space-y-4 text-gray-700">
              <p>Мы применяем следующие меры для защиты ваших персональных данных:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🔐 Техническая защита</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• SSL-шифрование</li>
                    <li>• Защищенные серверы</li>
                    <li>• Регулярные обновления</li>
                    <li>• Антивирусная защита</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">👥 Организационная защита</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ограниченный доступ</li>
                    <li>• Обучение персонала</li>
                    <li>• Политики безопасности</li>
                    <li>• Аудит доступа</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Ваши права</h2>
            <div className="space-y-4 text-gray-700">
              <p>Согласно Федеральному закону "О персональных данных" вы имеете право:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Получить информацию</h3>
                  <p className="text-sm text-gray-600">
                    О целях и способах обработки ваших персональных данных
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Уточнить данные</h3>
                  <p className="text-sm text-gray-600">
                    Внести изменения в неточные или неполные данные
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Отозвать согласие</h3>
                  <p className="text-sm text-gray-600">
                    На обработку персональных данных в любое время
                  </p>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Удалить данные</h3>
                  <p className="text-sm text-gray-600">
                    Потребовать удаления ваших персональных данных
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Cookies и аналитика</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Наш сайт использует файлы cookies для улучшения работы сайта и персонализации 
                пользовательского опыта.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Мы используем следующие типы cookies:</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• <strong>Необходимые</strong> - для работы корзины и авторизации</li>
                  <li>• <strong>Аналитические</strong> - для анализа посещаемости (Google Analytics, Яндекс.Метрика)</li>
                  <li>• <strong>Маркетинговые</strong> - для показа релевантной рекламы</li>
                  <li>• <strong>Функциональные</strong> - для запоминания ваших предпочтений</li>
                </ul>
              </div>
              
              <p className="text-sm">
                Вы можете управлять cookies в настройках вашего браузера или отключить их, 
                однако это может повлиять на функциональность сайта.
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