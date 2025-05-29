'use client';

import { useState, useEffect } from 'react';
import { Save, Plus, Edit3, Eye, Trash2 } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  metaTitle?: string;
  metaDescription?: string;
  isRequired: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function PagesManagement() {
  const [pages, setPages] = useState<Page[]>([]);
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Обязательные страницы
  const requiredPages = [
    { slug: 'contacts', title: 'Контакты', isRequired: true },
    { slug: 'about', title: 'О компании', isRequired: true },
    { slug: 'payment', title: 'Оплата', isRequired: true },
    { slug: 'delivery', title: 'Доставка', isRequired: true },
    { slug: 'returns', title: 'Гарантия и возврат', isRequired: true },
    { slug: 'privacy', title: 'Политика конфиденциальности', isRequired: true }
  ];

  useEffect(() => {
    initializePages();
  }, []);

  const initializePages = () => {
    // Инициализируем обязательные страницы если их нет
    const initialPages: Page[] = requiredPages.map(page => ({
      id: page.slug,
      title: page.title,
      slug: page.slug,
      content: getDefaultContent(page.slug),
      metaTitle: getDefaultMetaTitle(page.slug),
      metaDescription: getDefaultMetaDescription(page.slug),
      isRequired: page.isRequired,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }));

    setPages(initialPages);
  };

  const getDefaultContent = (slug: string): string => {
    const defaultContents: Record<string, string> = {
      contacts: `
# Контактная информация

## Наши контакты

**Телефон:** +7 (495) 123-45-67  
**Email:** info@balloons-moscow.ru  
**Адрес:** г. Москва, ул. Примерная, д. 123

## График работы

- Понедельник - Пятница: 9:00 - 20:00
- Суббота - Воскресенье: 10:00 - 18:00

## Доставка

Мы осуществляем доставку воздушных шаров и праздничного декора по всей Москве и Московской области.

### Зоны доставки:
- В пределах МКАД - бесплатно от 2000 руб
- За МКАД - стоимость рассчитывается индивидуально

## Как нас найти

Наш офис находится в центре Москвы, рядом с метро "Примерная". 
Вы можете приехать к нам для личного заказа или консультации.
`,
      about: `
# О нашей компании

## Кто мы

Мы - команда профессионалов, которая уже более 10 лет создает праздничное настроение для жителей Москвы. Наша компания специализируется на продаже и доставке воздушных шаров, праздничного декора и подарочных наборов.

## Наша миссия

Сделать каждый праздник незабываемым! Мы верим, что качественные воздушные шары и красивый декор способны создать атмосферу радости и веселья на любом мероприятии.

## Почему выбирают нас

### Качество
- Только сертифицированные материалы
- Проверенные поставщики из Европы и Азии
- Контроль качества на каждом этапе

### Сервис
- Быстрая доставка по Москве
- Профессиональные консультации
- Индивидуальный подход к каждому клиенту

### Опыт
- Более 10 лет на рынке
- Тысячи довольных клиентов
- Участие в крупных мероприятиях города

## Наша команда

В нашей команде работают опытные специалисты, которые помогут вам выбрать идеальное решение для вашего праздника.
`,
      payment: `
# Способы оплаты

## Мы принимаем

### Наличными
- При самовывозе из офиса
- Курьеру при доставке

### Банковские карты
- Visa, MasterCard, МИР
- Онлайн оплата на сайте
- Терминал при самовывозе

### Электронные платежи
- Яндекс.Деньги
- QIWI Кошелек
- WebMoney

### Банковский перевод
- Для юридических лиц
- По счету на реквизиты компании

## Безопасность платежей

Все онлайн платежи проходят через защищенные каналы связи. Мы используем современные технологии шифрования данных для обеспечения безопасности ваших платежей.

## Возврат средств

В случае отказа от заказа или возврата товара, возврат средств осуществляется в течение 5-10 рабочих дней на тот же способ оплаты, который использовался при покупке.
`,
      delivery: `
# Доставка

## Зоны доставки

### Москва (в пределах МКАД)
- **Бесплатная доставка** от 2000 рублей
- Стоимость доставки при заказе до 2000 рублей - 300 рублей
- Время доставки: 2-4 часа

### Московская область
- Стоимость рассчитывается индивидуально
- Зависит от удаленности и объема заказа
- Время доставки: 4-8 часов

## Срочная доставка

Возможна срочная доставка в течение 1-2 часов за дополнительную плату:
- В пределах МКАД: +500 рублей
- За МКАД: +1000 рублей

## Время работы службы доставки

- **Будние дни:** 9:00 - 20:00
- **Выходные:** 10:00 - 18:00

## Самовывоз

Вы можете забрать заказ самостоятельно из нашего офиса:
- **Адрес:** г. Москва, ул. Примерная, д. 123
- **Время работы:** Пн-Пт 9:00-20:00, Сб-Вс 10:00-18:00
- При самовывозе действует скидка 5%

## Особенности доставки шаров с гелием

- Шары с гелием доставляются в специальных контейнерах
- Время "жизни" гелиевых шаров: фольгированные - до 2 недель, латексные - 8-12 часов
- Возможна накачка шаров гелием непосредственно перед мероприятием
`,
      returns: `
# Гарантия и возврат

## Гарантия качества

Мы гарантируем высокое качество всех наших товаров. Каждый товар проходит тщательную проверку перед отправкой клиенту.

### На что распространяется гарантия:
- Качество материалов
- Соответствие заявленным характеристикам
- Целостность упаковки

### Сроки гарантии:
- Воздушные шары: 30 дней с момента покупки
- Праздничный декор: 60 дней
- Подарочные наборы: 30 дней

## Условия возврата

### Возврат возможен в следующих случаях:
- Товар не подошел по размеру или цвету
- Обнаружен производственный брак
- Товар не соответствует описанию на сайте

### Условия для возврата:
- Товар не был в употреблении
- Сохранена оригинальная упаковка
- Есть документ, подтверждающий покупку
- Обращение в течение 14 дней с момента покупки

## Процедура возврата

1. **Свяжитесь с нами** по телефону +7 (495) 123-45-67 или email
2. **Опишите причину** возврата и приложите фото товара
3. **Получите инструкции** по дальнейшим действиям
4. **Верните товар** любым удобным способом

## Возврат денежных средств

- Возврат осуществляется в течение 10 рабочих дней
- Средства возвращаются тем же способом, которым была произведена оплата
- При возврате товара надлежащего качества стоимость доставки не возмещается

## Обмен товара

Вместо возврата вы можете обменять товар на аналогичный или другой товар из нашего ассортимента. При обмене на товар большей стоимости доплачивается разница.
`,
      privacy: `
# Политика конфиденциальности

## Общие положения

Настоящая Политика конфиденциальности описывает, как мы собираем, используем и защищаем вашу личную информацию при использовании нашего веб-сайта.

## Какую информацию мы собираем

### Личная информация:
- Имя, фамилия
- Номер телефона
- Адрес электронной почты
- Адрес доставки

### Техническая информация:
- IP-адрес
- Тип браузера
- Операционная система
- Страницы, которые вы посещаете на нашем сайте

## Как мы используем информацию

Мы используем собранную информацию для:
- Обработки и выполнения заказов
- Связи с клиентами по вопросам заказа
- Улучшения качества обслуживания
- Отправки информации о новых товарах и акциях (с вашего согласия)

## Защита информации

Мы принимаем все необходимые меры для защиты вашей личной информации:
- Использование SSL-шифрования
- Ограниченный доступ к базам данных
- Регулярное обновление систем безопасности

## Передача информации третьим лицам

Мы не продаем и не передаем вашу личную информацию третьим лицам, за исключением случаев:
- Необходимости выполнения заказа (курьерские службы)
- Требований законодательства

## Файлы cookie

Наш сайт использует файлы cookie для:
- Запоминания ваших предпочтений
- Анализа трафика сайта
- Улучшения пользовательского опыта

## Ваши права

Вы имеете право:
- Запросить информацию о ваших данных
- Требовать исправления неточных данных
- Запросить удаление ваших данных
- Отозвать согласие на обработку данных

## Изменения в политике

Мы можем обновлять эту Политику конфиденциальности. О существенных изменениях мы будем уведомлять вас по электронной почте.

## Контакты

По вопросам обработки персональных данных обращайтесь:
- Email: privacy@balloons-moscow.ru
- Телефон: +7 (495) 123-45-67
`
    };

    return defaultContents[slug] || '';
  };

  const getDefaultMetaTitle = (slug: string): string => {
    const titles: Record<string, string> = {
      contacts: 'Контакты - Воздушные шары в Москве с доставкой',
      about: 'О компании - Профессиональная доставка шаров в Москве',
      payment: 'Способы оплаты - Удобные варианты оплаты заказа',
      delivery: 'Доставка воздушных шаров по Москве и области',
      returns: 'Гарантия и возврат - Условия возврата товара',
      privacy: 'Политика конфиденциальности - Защита персональных данных'
    };

    return titles[slug] || '';
  };

  const getDefaultMetaDescription = (slug: string): string => {
    const descriptions: Record<string, string> = {
      contacts: 'Контактная информация компании по доставке воздушных шаров в Москве. Телефон, адрес, график работы. Заказывайте шары с доставкой!',
      about: 'О нашей компании - более 10 лет создаем праздничное настроение. Качественные воздушные шары и декор с доставкой по Москве.',
      payment: 'Удобные способы оплаты заказа: наличными, картой, онлайн. Безопасные платежи и гарантия возврата средств.',
      delivery: 'Быстрая доставка воздушных шаров по Москве и области. Бесплатная доставка от 2000 руб. Срочная доставка за 1-2 часа.',
      returns: 'Условия гарантии и возврата товара. Возврат в течение 14 дней, обмен товара, гарантия качества на все виды продукции.',
      privacy: 'Политика конфиденциальности сайта. Защита персональных данных клиентов, использование cookie, права пользователей.'
    };

    return descriptions[slug] || '';
  };

  const handleEdit = (page: Page) => {
    setSelectedPage(page);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (!selectedPage) return;

    setLoading(true);
    try {
      // В реальном приложении здесь будет API вызов
      const updatedPages = pages.map(p => 
        p.id === selectedPage.id 
          ? { ...selectedPage, updatedAt: new Date().toISOString() }
          : p
      );
      
      setPages(updatedPages);
      setIsEditing(false);
      setSelectedPage(null);
      setMessage('Страница успешно сохранена');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Ошибка при сохранении страницы');
      setTimeout(() => setMessage(''), 3000);
    }
    setLoading(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedPage(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Управление страницами</h1>

      {message && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}

      {!isEditing ? (
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold">Список страниц</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Название
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    URL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Статус
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Последнее обновление
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Действия
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pages.map((page) => (
                  <tr key={page.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {page.title}
                          </div>
                          {page.isRequired && (
                            <div className="text-xs text-blue-600">Обязательная страница</div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      /{page.slug}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        page.isActive 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {page.isActive ? 'Активна' : 'Неактивна'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(page.updatedAt).toLocaleDateString('ru-RU')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button
                        onClick={() => handleEdit(page)}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              Редактирование: {selectedPage?.title}
            </h2>
            <div className="space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Отмена
              </button>
              <button
                onClick={handleSave}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              >
                <Save className="w-4 h-4 mr-2" />
                {loading ? 'Сохраняем...' : 'Сохранить'}
              </button>
            </div>
          </div>

          {selectedPage && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Название страницы
                  </label>
                  <input
                    type="text"
                    value={selectedPage.title}
                    onChange={(e) => setSelectedPage({...selectedPage, title: e.target.value})}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL (slug)
                  </label>
                  <input
                    type="text"
                    value={selectedPage.slug}
                    onChange={(e) => setSelectedPage({...selectedPage, slug: e.target.value})}
                    disabled={selectedPage.isRequired}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    META Title
                  </label>
                  <input
                    type="text"
                    value={selectedPage.metaTitle || ''}
                    onChange={(e) => setSelectedPage({...selectedPage, metaTitle: e.target.value})}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    META Description
                  </label>
                  <textarea
                    value={selectedPage.metaDescription || ''}
                    onChange={(e) => setSelectedPage({...selectedPage, metaDescription: e.target.value})}
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Содержимое страницы (Markdown)
                </label>
                <textarea
                  value={selectedPage.content}
                  onChange={(e) => setSelectedPage({...selectedPage, content: e.target.value})}
                  rows={20}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                  placeholder="Введите содержимое страницы в формате Markdown..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  Поддерживается Markdown разметка: # заголовки, **жирный**, *курсив*, списки и т.д.
                </p>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={selectedPage.isActive}
                  onChange={(e) => setSelectedPage({...selectedPage, isActive: e.target.checked})}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isActive" className="ml-2 block text-sm text-gray-900">
                  Страница активна и доступна для просмотра
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 