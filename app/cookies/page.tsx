import { Metadata } from 'next';
import { Cookie, Settings, Shield, BarChart3, Target, Eye, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Политика использования cookies - Prime Balloons',
  description: 'Информация о том, как Prime Balloons использует файлы cookies для улучшения работы сайта.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cookie className="h-8 w-8 text-orange-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Политика использования cookies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Узнайте, как мы используем файлы cookies для улучшения вашего опыта 
            на сайте Prime Balloons и как управлять настройками
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
              <Eye className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Что такое cookies?</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                Cookies (куки) — это небольшие текстовые файлы, которые сохраняются на вашем 
                устройстве при посещении веб-сайтов. Они помогают сайтам запоминать информацию 
                о ваших действиях и предпочтениях.
              </p>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🍪 Почему мы используем cookies:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Запоминание ваших предпочтений</li>
                    <li>• Сохранение товаров в корзине</li>
                    <li>• Улучшение функциональности сайта</li>
                    <li>• Персонализация контента</li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Анализ посещаемости</li>
                    <li>• Обеспечение безопасности</li>
                    <li>• Показ релевантной рекламы</li>
                    <li>• Техническая поддержка</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-sm text-gray-600">
                Файлы cookies не могут причинить вред вашему компьютеру и не содержат вирусов. 
                Они не могут получить доступ к вашим файлам или личной информации.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center mb-6">
              <Settings className="h-8 w-8 text-orange-500 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Типы cookies, которые мы используем</h2>
            </div>
            <div className="space-y-6 text-gray-700">
              
              {/* Необходимые cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="h-6 w-6 text-green-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Необходимые cookies</h3>
                  <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Всегда активны
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Эти cookies необходимы для базового функционирования сайта и не могут быть отключены.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Что они делают:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Обеспечивают работу корзины покупок</li>
                    <li>• Запоминают ваш выбор языка</li>
                    <li>• Поддерживают сессию авторизации</li>
                    <li>• Обеспечивают безопасность платежей</li>
                    <li>• Сохраняют настройки доступности</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Срок хранения: сессия или до 30 дней
                </p>
              </div>

              {/* Аналитические cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-6 w-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Аналитические cookies</h3>
                  <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    Можно отключить
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Помогают нам понять, как посетители используют сайт, чтобы улучшить его работу.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Что они отслеживают:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Количество посетителей и просмотров страниц</li>
                    <li>• Время, проведенное на сайте</li>
                    <li>• Источники трафика</li>
                    <li>• Популярные страницы и функции</li>
                    <li>• Ошибки и проблемы производительности</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-gray-500">
                    Используемые сервисы: Google Analytics, Яндекс.Метрика
                  </p>
                  <p className="text-xs text-gray-500">
                    Срок хранения: до 2 лет
                  </p>
                </div>
              </div>

              {/* Функциональные cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-purple-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Функциональные cookies</h3>
                  <span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    Можно отключить
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Позволяют сайту запоминать ваши предпочтения для более персонализированного опыта.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Что они запоминают:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Ваши предпочтения по товарам</li>
                    <li>• Историю просмотров</li>
                    <li>• Настройки отображения каталога</li>
                    <li>• Сохраненные адреса доставки</li>
                    <li>• Список желаний</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Срок хранения: до 1 года
                </p>
              </div>

              {/* Маркетинговые cookies */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-red-500 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Маркетинговые cookies</h3>
                  <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Можно отключить
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  Используются для показа персонализированной рекламы и измерения эффективности рекламных кампаний.
                </p>
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Для чего используются:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Показ релевантных рекламных объявлений</li>
                    <li>• Ретаргетинг на других сайтах</li>
                    <li>• Измерение эффективности рекламы</li>
                    <li>• Персонализация предложений</li>
                    <li>• Социальные медиа интеграции</li>
                  </ul>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-xs text-gray-500">
                    Партнеры: Google Ads, Facebook, VKontakte
                  </p>
                  <p className="text-xs text-gray-500">
                    Срок хранения: до 2 лет
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Как управлять cookies</h2>
            <div className="space-y-6 text-gray-700">
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">🔧 Настройки браузера</h3>
                <p className="text-gray-600 mb-4">
                  Вы можете управлять cookies через настройки вашего браузера:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Google Chrome</h4>
                    <p className="text-sm text-gray-600">
                      Настройки → Конфиденциальность и безопасность → Файлы cookie
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox</h4>
                    <p className="text-sm text-gray-600">
                      Настройки → Приватность и защита → Куки и данные сайтов
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                    <p className="text-sm text-gray-600">
                      Настройки → Конфиденциальность → Управление данными веб‑сайтов
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge</h4>
                    <p className="text-sm text-gray-600">
                      Настройки → Файлы cookie и разрешения сайтов
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">⚠️ Важная информация</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Отключение необходимых cookies может нарушить работу сайта</li>
                  <li>• Некоторые функции могут стать недоступными</li>
                  <li>• Ваши настройки и корзина могут не сохраняться</li>
                  <li>• Возможны проблемы с авторизацией и оплатой</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">✅ Рекомендуемые настройки</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Оставить включенными:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Необходимые cookies</li>
                      <li>• Функциональные cookies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Можно отключить:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Маркетинговые cookies</li>
                      <li>• Аналитические cookies (по желанию)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Третьи стороны и cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Некоторые cookies устанавливаются третьими сторонами для предоставления 
                дополнительных сервисов на нашем сайте.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Google Analytics</h3>
                  <p className="text-sm text-gray-600">
                    Анализ посещаемости и поведения пользователей
                  </p>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs hover:underline"
                  >
                    Политика конфиденциальности →
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Яндекс.Метрика</h3>
                  <p className="text-sm text-gray-600">
                    Веб-аналитика и исследование поведения
                  </p>
                  <a 
                    href="https://yandex.ru/legal/confidential/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 text-xs hover:underline"
                  >
                    Политика конфиденциальности →
                  </a>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Платежные системы</h3>
                  <p className="text-sm text-gray-600">
                    Обработка платежей и предотвращение мошенничества
                  </p>
                  <p className="text-xs text-gray-500">
                    Различные политики у провайдеров
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Изменения в политике cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Мы можем периодически обновлять эту политику для отражения изменений 
                в наших практиках или по другим операционным, правовым или регулятивным причинам.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">📝 Что происходит при изменениях:</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Обновленная политика публикуется на сайте</li>
                  <li>• Дата последнего обновления указывается в начале документа</li>
                  <li>• При значительных изменениях мы можем уведомить вас дополнительно</li>
                  <li>• Рекомендуем периодически просматривать эту страницу</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Вопросы о cookies?</h2>
            <p className="text-orange-100 mb-6">
              Свяжитесь с нами, если у вас есть вопросы о том, как мы используем cookies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74957734375"
                className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (495) 773-43-75
              </a>
              <a
                href="mailto:privacy@primeballoons.ru"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                privacy@primeballoons.ru
              </a>
            </div>
            
            <div className="mt-8 text-sm text-orange-200">
              <p>Отдел по защите данных ООО "Prime Balloons"</p>
              <p>Обычно отвечаем в течение 24 часов</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 