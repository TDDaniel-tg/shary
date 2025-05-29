'use client';

import { useState } from 'react';
import { X, Phone, User, MessageSquare, CheckCircle } from 'lucide-react';

interface CallbackFormData {
  name: string;
  lastName: string;
  phone: string;
  description: string;
}

export default function CallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    lastName: '',
    phone: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/callbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Произошла ошибка');
      }

      const result = await response.json();
      console.log('Callback request sent:', result);
      
      // Показать экран успеха
      setSuccess(true);
      
      // Сбросить форму
      setFormData({
        name: '',
        lastName: '',
        phone: '',
        description: ''
      });
    } catch (error) {
      console.error('Error sending callback request:', error);
      alert(error instanceof Error ? error.message : 'Произошла ошибка. Попробуйте позже или позвоните нам напрямую.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const formatPhoneNumber = (value: string) => {
    // Удаляем все не цифры
    const phoneNumber = value.replace(/\D/g, '');
    
    // Форматируем номер телефона
    if (phoneNumber.length >= 11) {
      return `+7 (${phoneNumber.slice(1, 4)}) ${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const closeModal = () => {
    setIsOpen(false);
    setSuccess(false);
    // Сбросить форму при закрытии
    setTimeout(() => {
      setFormData({
        name: '',
        lastName: '',
        phone: '',
        description: ''
      });
    }, 300);
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 bg-white text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-50 transition-all transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
        Перезвонить вам?
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
          
          <div className="relative bg-white rounded-xl p-6 w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>

            {success ? (
              // Success Screen
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Запрос отправлен!
                </h2>
                <p className="text-gray-600 mb-6">
                  Спасибо! Мы свяжемся с вами в течение 15 минут.
                </p>
                <button
                  onClick={closeModal}
                  className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors"
                >
                  Закрыть
                </button>
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>Или позвоните нам прямо сейчас:</p>
                  <a 
                    href="tel:+74957734375" 
                    className="text-pink-500 hover:text-pink-600 font-medium"
                  >
                    +7 (495) 773-43-75
                  </a>
                </div>
              </div>
            ) : (
              // Form Screen
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 text-pink-500 rounded-full mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Заказать обратный звонок
                  </h2>
                  <p className="text-gray-600">
                    Оставьте ваши контакты и мы свяжемся с вами в течение 15 минут
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <User className="h-4 w-4 inline mr-2" />
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                      placeholder="Введите ваше имя"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Фамилия
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      placeholder="Введите вашу фамилию"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <MessageSquare className="h-4 w-4 inline mr-2" />
                      О чем хотели бы обсудить?
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                      placeholder="Кратко опишите ваш вопрос или пожелания..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Отправляем...' : 'Отправить запрос'}
                  </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>Или позвоните нам прямо сейчас:</p>
                  <a 
                    href="tel:+74957734375" 
                    className="text-pink-500 hover:text-pink-600 font-medium"
                  >
                    +7 (495) 773-43-75
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
} 