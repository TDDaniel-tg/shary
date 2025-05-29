/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем полный статический экспорт, используем гибридный режим
  // output: 'export', // Закомментировано для сохранения API
  
  // Добавляет trailing slash к URL
  trailingSlash: true,
  
  // Пропускаем перенаправления trailing slash
  skipTrailingSlashRedirect: true,
  
  // Оптимизация изображений
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Внешние пакеты для сервера
  serverExternalPackages: ['jsonwebtoken'],

  // Компрессия
  compress: true,
  
  // Оптимизация для production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Генерация статических страниц
  generateStaticParams: async () => {
    // Здесь можно определить статические параметры для динамических маршрутов
    return [];
  },

  // Webpack оптимизации
  webpack: (config, { isServer }) => {
    // Фикс для ошибки 'self is not defined'
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
    } else {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
    }

    return config;
  },

  // Настройка базового пути (если нужно разместить не в корне)
  // basePath: '/my-app',
  
  // Префикс для статических ресурсов (если нужен CDN)
  // assetPrefix: 'https://cdn.mydomain.com',

  // Заголовки для оптимизации
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },

  // Перенаправления
  async rewrites() {
    return [
      {
        source: '/index.html',
        destination: '/',
      },
    ];
  },
};

export default nextConfig; 