'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail } from 'lucide-react';

// Нельзя экспортировать metadata из клиентского компонента, поэтому устанавливаем title через useEffect
// export const metadata: Metadata = {
//   title: 'FAQ - Prime Balloons',
//   description: 'Часто задаваемые вопросы о доставке воздушных шаров и праздничном декоре.',
// };

const faqData = [
  {
    category: 'Заказ и оплата',
    questions: [
      {
        question: 'Как сделать заказ?',
        answer: 'Вы можете сделать заказ через наш сайт, добавив товары в корзину, или позвонив по телефону +7 (495) 773-43-75. Наши менеджеры помогут оформить заказ и ответят на все вопросы.'
      },
      {
        question: 'Какие способы оплаты вы принимаете?',
        answer: 'Мы принимаем оплату наличными и банковской картой при получении заказа, а также онлайн-оплату на сайте. Все платежи защищены и проходят через сертифицированные платежные системы.'
      },
      {
        question: 'Можно ли отменить или изменить заказ?',
        answer: 'Да, заказ можно отменить или изменить до момента передачи в доставку. Свяжитесь с нами по телефону как можно раньше, и мы поможем внести изменения.'
      },
      {
        question: 'Выдаете ли вы чеки?',
        answer: 'Да, мы выдаем все необходимые документы: чеки, накладные. При необходимости можем предоставить документы для отчетности.'
      }
    ]
  },
  {
    category: 'Доставка',
    questions: [
      {
        question: 'Сколько стоит доставка?',
        answer: 'Стоимость доставки зависит от зоны: в пределах МКАД от 300₽, за МКАД до 10км от 500₽, за МКАД 10-30км от 800₽. Доставка бесплатна при заказе от 3000₽ в пределах МКАД.'
      },
      {
        question: 'Как быстро вы доставляете?',
        answer: 'Стандартная доставка: 2-4 часа в пределах МКАД. Экспресс-доставка возможна от 1 часа. Точное время зависит от загруженности и удаленности адреса.'
      },
      {
        question: 'Работаете ли вы ночью и в выходные?',
        answer: 'Да, мы работаем круглосуточно 7 дней в неделю. Ночная доставка возможна с небольшой доплатой.'
      },
      {
        question: 'Что если никого не будет дома при доставке?',
        answer: 'Наш курьер обязательно свяжется с вами перед доставкой. При необходимости можно договориться о переносе времени доставки или оставить заказ с соседями/консьержем.'
      }
    ]
  },
  {
    category: 'Товары и качество',
    questions: [
      {
        question: 'Какого качества ваши воздушные шары?',
        answer: 'Мы используем только сертифицированные шары известных производителей. Все товары проходят контроль качества перед отправкой клиенту.'
      },
      {
        question: 'Сколько держатся гелиевые шары?',
        answer: 'Обычные латексные шары с гелием держатся 8-12 часов, фольгированные - до 2-3 недель. Мы можем обработать шары HI-FLOAT для увеличения времени полета до 2-3 дней.'
      },
      {
        question: 'Можете ли вы надуть мои шары?',
        answer: 'Да, мы можем надуть шары, которые вы принесете. Стоимость услуги надувания: обычным воздухом - 20₽/шт, гелием - 50₽/шт.'
      },
      {
        question: 'Есть ли гарантия на товары?',
        answer: 'Да, мы гарантируем качество всех товаров. Если товар оказался бракованным или пострадал при доставке по нашей вине, мы заменим его бесплатно или вернем деньги.'
      }
    ]
  },
  {
    category: 'Оформление и услуги',
    questions: [
      {
        question: 'Делаете ли вы индивидуальные композиции?',
        answer: 'Да, наши дизайнеры создают уникальные композиции по вашему желанию. Пришлите фото или описание, и мы рассчитаем стоимость и возможность изготовления.'
      },
      {
        question: 'Можете ли вы оформить зал?',
        answer: 'Да, мы предоставляем услуги по оформлению залов, квартир, офисов для любых мероприятий. У нас есть команда профессиональных декораторов.'
      },
      {
        question: 'Сколько времени нужно для подготовки большого заказа?',
        answer: 'Обычно на подготовку заказа нужно 2-4 часа. Для больших заказов (свыше 20000₽) или сложных композиций может потребоваться до 24 часов.'
      },
      {
        question: 'Работаете ли вы с организациями?',
        answer: 'Да, мы работаем с юридическими лицами. Предоставляем все необходимые документы, работаем по договорам, предоставляем отсрочку платежа постоянным клиентам.'
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о заказе воздушных шаров и 
            праздничного декора в Prime Balloons
          </p>
        </section>

        {/* FAQ Sections */}
        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h2>
              
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openItems.includes(itemId);
                  
                  return (
                    <div 
                      key={questionIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-pink-500 flex-shrink-0" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-700 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-pink-100 mb-6">
              Наши специалисты готовы помочь вам в любое время дня и ночи
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+74957734375"
                className="bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (495) 773-43-75
              </a>
              <a
                href="mailto:info@primeballoons.ru"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-500 transition-colors flex items-center justify-center"
              >
                <Mail className="h-5 w-5 mr-2" />
                info@primeballoons.ru
              </a>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Полезные советы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">💡 Планируйте заранее</h3>
              <p className="text-gray-600 text-sm">
                Для больших мероприятий рекомендуем делать заказ за 1-2 дня, 
                особенно в праздничные периоды.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">🎈 Уход за шарами</h3>
              <p className="text-gray-600 text-sm">
                Избегайте резких перепадов температуры и прямых солнечных лучей 
                для продления жизни шаров.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">📱 Фото для заказа</h3>
              <p className="text-gray-600 text-sm">
                Присылайте фото желаемого оформления - это поможет нам точнее 
                понять ваши пожелания.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">🚚 Адрес доставки</h3>
              <p className="text-gray-600 text-sm">
                Указывайте точный адрес с номером подъезда и квартиры, 
                код домофона для быстрой доставки.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 