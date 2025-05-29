'use client';

import { useState } from 'react';
import { X, User, Mail, Phone, Calendar, Gift, MapPin, Edit2, Save } from 'lucide-react';

interface UserData {
  id: number;
  username: string;
  email: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  birthDate?: string;
  childBirthDate?: string;
  telegramUsername?: string;
  createdAt: string;
  discount: number;
}

interface UserProfileProps {
  user: UserData;
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export function UserProfile({ user, isOpen, onClose, onLogout }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  if (!isOpen) return null;

  const handleSave = () => {
    // Здесь должна быть логика сохранения данных пользователя
    console.log('Saving user data:', editedUser);
    setIsEditing(false);
  };

  const handleInputChange = (field: keyof UserData, value: string) => {
    setEditedUser(prev => ({ ...prev, [field]: value }));
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative bg-white rounded-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Профиль пользователя</h2>
          <div className="flex items-center gap-3">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Save className="h-4 w-4" />
                Сохранить
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Edit2 className="h-4 w-4" />
                Редактировать
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {/* User Avatar and Basic Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
              <User className="h-10 w-10 text-pink-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                {editedUser.firstName || editedUser.username}
                {editedUser.lastName && ` ${editedUser.lastName}`}
              </h3>
              <p className="text-gray-600">{editedUser.email}</p>
              <div className="flex items-center gap-2 mt-1">
                <Gift className="h-4 w-4 text-pink-500" />
                <span className="text-sm text-pink-600 font-medium">
                  Скидка: {editedUser.discount}%
                </span>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Личная информация</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <User className="h-4 w-4 inline mr-2" />
                  Имя
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.firstName || ''}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">{editedUser.firstName || 'Не указано'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Фамилия
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.lastName || ''}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">{editedUser.lastName || 'Не указано'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Отчество
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.middleName || ''}
                    onChange={(e) => handleInputChange('middleName', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">{editedUser.middleName || 'Не указано'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Calendar className="h-4 w-4 inline mr-2" />
                  Дата рождения
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editedUser.birthDate || ''}
                    onChange={(e) => handleInputChange('birthDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">
                    {editedUser.birthDate ? formatDate(editedUser.birthDate) : 'Не указано'}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Контактная информация</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Email
                </label>
                <p className="text-gray-900">{editedUser.email}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Телефон
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={editedUser.phone || ''}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">{editedUser.phone || 'Не указано'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telegram
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={editedUser.telegramUsername || ''}
                    onChange={(e) => handleInputChange('telegramUsername', e.target.value)}
                    placeholder="@username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">{editedUser.telegramUsername || 'Не указано'}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  День рождения ребенка
                </label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editedUser.childBirthDate || ''}
                    onChange={(e) => handleInputChange('childBirthDate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                ) : (
                  <p className="text-gray-900">
                    {editedUser.childBirthDate ? formatDate(editedUser.childBirthDate) : 'Не указано'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Account Information */}
          <div className="mt-8 pt-6 border-t">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Информация об аккаунте</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Дата регистрации
                </label>
                <p className="text-gray-900">{formatDate(editedUser.createdAt)}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID пользователя
                </label>
                <p className="text-gray-900">#{editedUser.id}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 pt-6 border-t flex justify-between">
            <button
              onClick={onLogout}
              className="px-6 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
            >
              Выйти из аккаунта
            </button>
            
            <div className="text-sm text-gray-500">
              Последний вход: сегодня
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 