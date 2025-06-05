'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, X, Upload, RefreshCcw } from 'lucide-react';

// Категории товаров (в реальном проекте могут быть загружены с сервера)
const categories = [
  { id: 'party', name: 'Праздники' },
  { id: 'numbers', name: 'Цифры' },
  { id: 'themed', name: 'Тематические' },
  { id: 'single', name: 'Однотонные' },
  { id: 'sets', name: 'Наборы' },
  { id: 'accessories', name: 'Аксессуары' }
];

interface FormData {
  name: string;
  description: string;
  price: string;
  salePrice: string;
  category: string;
  stock: string;
  images: File[];
  featured: boolean;
  published: boolean;
}

export default function AddProductPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    price: '',
    salePrice: '',
    category: '',
    stock: '',
    images: [],
    featured: false,
    published: true
  });
  
  // Обработка изменения текстовых полей формы
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Обработка изменения чекбоксов
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  // Обработка загрузки изображений
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Создаем превью изображений
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      setImagePreview(prev => [...prev, ...newPreviews]);
      
      // Добавляем файлы в форму
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...newFiles]
      }));
    }
  };
  
  // Удаление загруженного изображения
  const handleRemoveImage = (index: number) => {
    // Удаляем превью
    const newPreviews = [...imagePreview];
    URL.revokeObjectURL(newPreviews[index]); // Освобождаем память
    newPreviews.splice(index, 1);
    setImagePreview(newPreviews);
    
    // Удаляем файл из состояния
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };
  
  // Отправка формы
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.category || !formData.stock) {
      alert('Пожалуйста, заполните все обязательные поля');
      return;
    }
    
    try {
      setSubmitting(true);
      
      // В реальном проекте здесь должен быть запрос к API для создания товара и загрузки изображений
      // const formDataToSend = new FormData();
      // Object.keys(formData).forEach(key => {
      //   if (key === 'images') {
      //     formData.images.forEach(image => {
      //       formDataToSend.append('images', image);
      //     });
      //   } else {
      //     formDataToSend.append(key, formData[key]);
      //   }
      // });
      
      // const response = await fetch('/api/admin/products', {
      //   method: 'POST',
      //   body: formDataToSend
      // });
      
      // Имитация задержки запроса
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Имитация успешного ответа
      alert('Товар успешно добавлен!');
      router.push('/admin_dashboard/products');
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
      alert('Произошла ошибка при добавлении товара');
    } finally {
      setSubmitting(false);
    }
  };
  
  // Отмена и возврат на страницу списка товаров
  const handleCancel = () => {
    if (window.confirm('Вы уверены, что хотите отменить создание товара? Все введенные данные будут потеряны.')) {
      router.push('/admin_dashboard/products');
    }
  };
  
  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Добавление нового товара</h1>
        <div className="space-x-2">
          <button
            type="button"
            onClick={handleCancel}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <X className="h-4 w-4 mr-2" />
            Отмена
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <RefreshCcw className="animate-spin h-4 w-4 mr-2" />
            ) : (
              <Save className="h-4 w-4 mr-2" />
            )}
            Сохранить
          </button>
        </div>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg">
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Основная информация */}
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Название товара <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Описание
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Цена <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₽</span>
                    </div>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      min="0"
                      step="1"
                      required
                      value={formData.price}
                      onChange={handleChange}
                      className="pl-7 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="salePrice" className="block text-sm font-medium text-gray-700">
                    Цена со скидкой
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₽</span>
                    </div>
                    <input
                      type="number"
                      id="salePrice"
                      name="salePrice"
                      min="0"
                      step="1"
                      value={formData.salePrice}
                      onChange={handleChange}
                      className="pl-7 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Категория <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  >
                    <option value="">Выберите категорию</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Количество в наличии <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="stock"
                    name="stock"
                    min="0"
                    step="1"
                    required
                    value={formData.stock}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                  />
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <input
                    id="featured"
                    name="featured"
                    type="checkbox"
                    checked={formData.featured}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                    Рекомендуемый товар
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    id="published"
                    name="published"
                    type="checkbox"
                    checked={formData.published}
                    onChange={handleCheckboxChange}
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="published" className="ml-2 block text-sm text-gray-700">
                    Опубликован
                  </label>
                </div>
              </div>
            </div>
            
            {/* Загрузка изображений */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Изображения товара
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                      >
                        <span>Загрузить изображения</span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">или перетащите их сюда</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF до 10MB
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Превью загруженных изображений */}
              {imagePreview.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {imagePreview.map((src, index) => (
                    <div key={index} className="relative rounded-lg overflow-hidden h-32 bg-gray-100">
                      <img src={src} alt={`Preview ${index + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => handleRemoveImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={handleCancel}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Сохранение...' : 'Сохранить товар'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
} 