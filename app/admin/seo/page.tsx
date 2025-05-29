'use client';

import { useState, useEffect } from 'react';
import { Save, Globe, FileText, Image, Search } from 'lucide-react';

interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  altImages?: Record<string, string>;
  titleTemplate?: string;
}

export default function SEOPage() {
  const [activeTab, setActiveTab] = useState('meta');
  const [metaTags, setMetaTags] = useState<MetaTags>({
    title: '',
    description: '',
    keywords: '',
    titleTemplate: ''
  });
  const [robotsContent, setRobotsContent] = useState('');
  const [sitemapContent, setSitemapContent] = useState('');
  const [selectedPage, setSelectedPage] = useState('home');
  const [imageName, setImageName] = useState('');
  const [imageCategory, setImageCategory] = useState('');
  const [generatedAlt, setGeneratedAlt] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const pages = [
    { value: 'home', label: 'Главная страница' },
    { value: 'catalog', label: 'Каталог' },
    { value: 'contacts', label: 'Контакты' },
    { value: 'about', label: 'О компании' },
    { value: 'delivery', label: 'Доставка' },
    { value: 'payment', label: 'Оплата' }
  ];

  useEffect(() => {
    loadMetaTags();
    loadRobots();
    loadSitemap();
  }, [selectedPage]);

  const loadMetaTags = async () => {
    try {
      const response = await fetch(`/api/seo/meta?page=${selectedPage}`);
      if (response.ok) {
        const data = await response.json();
        setMetaTags(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки мета-тегов:', error);
    }
  };

  const loadRobots = async () => {
    try {
      const response = await fetch('/api/seo/robots');
      if (response.ok) {
        const data = await response.text();
        setRobotsContent(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки robots.txt:', error);
    }
  };

  const loadSitemap = async () => {
    try {
      const response = await fetch('/api/seo/sitemap');
      if (response.ok) {
        const data = await response.text();
        setSitemapContent(data);
      }
    } catch (error) {
      console.error('Ошибка загрузки sitemap.xml:', error);
    }
  };

  const saveMetaTags = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/meta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: selectedPage,
          metaTags
        }),
      });

      if (response.ok) {
        setMessage('Мета-теги успешно сохранены');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Ошибка при сохранении мета-тегов');
      setTimeout(() => setMessage(''), 3000);
    }
    setLoading(false);
  };

  const saveRobots = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/robots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: robotsContent }),
      });

      if (response.ok) {
        setMessage('robots.txt успешно сохранен');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Ошибка при сохранении robots.txt');
      setTimeout(() => setMessage(''), 3000);
    }
    setLoading(false);
  };

  const saveSitemap = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/seo/sitemap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: sitemapContent }),
      });

      if (response.ok) {
        setMessage('sitemap.xml успешно сохранен');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Ошибка при сохранении sitemap.xml');
      setTimeout(() => setMessage(''), 3000);
    }
    setLoading(false);
  };

  const generateAlt = async () => {
    if (!imageName) return;
    
    try {
      const response = await fetch('/api/seo/meta', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageName,
          category: imageCategory
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setGeneratedAlt(data.altText);
      }
    } catch (error) {
      console.error('Ошибка генерации ALT:', error);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">SEO Управление</h1>

      {message && (
        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          {message}
        </div>
      )}

      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('meta')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'meta'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Globe className="w-4 h-4 inline mr-2" />
            Мета-теги
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'robots'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <FileText className="w-4 h-4 inline mr-2" />
            robots.txt
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'sitemap'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Search className="w-4 h-4 inline mr-2" />
            sitemap.xml
          </button>
          <button
            onClick={() => setActiveTab('images')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'images'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Image className="w-4 h-4 inline mr-2" />
            ALT изображений
          </button>
        </nav>
      </div>

      {activeTab === 'meta' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Выберите страницу
            </label>
            <select
              value={selectedPage}
              onChange={(e) => setSelectedPage(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              {pages.map(page => (
                <option key={page.value} value={page.value}>
                  {page.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Шаблон заголовка
              </label>
              <input
                type="text"
                value={metaTags.titleTemplate || ''}
                onChange={(e) => setMetaTags({...metaTags, titleTemplate: e.target.value})}
                placeholder="{title} | Шары и декор"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Используйте {'{title}'} и {'{category}'} как переменные
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                META TITLE
              </label>
              <input
                type="text"
                value={metaTags.title}
                onChange={(e) => setMetaTags({...metaTags, title: e.target.value})}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                META DESCRIPTION
              </label>
              <textarea
                value={metaTags.description}
                onChange={(e) => setMetaTags({...metaTags, description: e.target.value})}
                rows={3}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords
              </label>
              <input
                type="text"
                value={metaTags.keywords || ''}
                onChange={(e) => setMetaTags({...metaTags, keywords: e.target.value})}
                placeholder="ключевое слово, еще слово, третье слово"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={saveMetaTags}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <Save className="w-4 h-4 mr-2" />
              {loading ? 'Сохраняем...' : 'Сохранить мета-теги'}
            </button>
          </div>
        </div>
      )}

      {activeTab === 'robots' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Редактирование robots.txt</h2>
          <textarea
            value={robotsContent}
            onChange={(e) => setRobotsContent(e.target.value)}
            rows={10}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
            placeholder="User-agent: *&#10;Disallow: /admin/&#10;&#10;Sitemap: https://example.com/sitemap.xml"
          />
          <button
            onClick={saveRobots}
            disabled={loading}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Сохраняем...' : 'Сохранить robots.txt'}
          </button>
        </div>
      )}

      {activeTab === 'sitemap' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Редактирование sitemap.xml</h2>
          <textarea
            value={sitemapContent}
            onChange={(e) => setSitemapContent(e.target.value)}
            rows={15}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
          />
          <button
            onClick={saveSitemap}
            disabled={loading}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Сохраняем...' : 'Сохранить sitemap.xml'}
          </button>
        </div>
      )}

      {activeTab === 'images' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Генератор ALT для изображений</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Название изображения
              </label>
              <input
                type="text"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                placeholder="Красивые воздушные шары.jpg"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Категория (опционально)
              </label>
              <input
                type="text"
                value={imageCategory}
                onChange={(e) => setImageCategory(e.target.value)}
                placeholder="воздушные шары"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              onClick={generateAlt}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Генерировать ALT
            </button>

            {generatedAlt && (
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сгенерированный ALT:
                </label>
                <code className="block p-2 bg-white border rounded text-sm">
                  {generatedAlt}
                </code>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
} 