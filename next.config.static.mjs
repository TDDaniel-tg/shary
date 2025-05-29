/** @type {import('next').NextConfig} */
const staticConfig = {
  // Полный статический экспорт - создает index.html
  output: 'export',
  
  // Добавляет trailing slash к URL
  trailingSlash: true,
  
  // Отключаем оптимизацию изображений для статического экспорта
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Компрессия
  compress: true,
  
  // Оптимизация для production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Папка для вывода статических файлов - корневая папка
  distDir: '.',

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
};

export default staticConfig; 