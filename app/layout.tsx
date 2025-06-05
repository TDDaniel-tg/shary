import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { CartProvider } from '@/hooks/useCart';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: 'Праздник Store - Товары для праздника',
    template: '%s | Праздник Store',
  },
  description: 'Интернет-магазин товаров для праздника. Широкий ассортимент декораций, подарков и аксессуаров.',
  keywords: ['праздник', 'подарки', 'декорации', 'товары для праздника'],
  authors: [{ name: 'Праздник Store' }],
  creator: 'Праздник Store',
  publisher: 'Праздник Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://prazdnik-store.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://prazdnik-store.ru',
    siteName: 'Праздник Store',
    title: 'Праздник Store - Товары для праздника',
    description: 'Интернет-магазин товаров для праздника. Широкий ассортимент декораций, подарков и аксессуаров.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Праздник Store - Товары для праздника',
    description: 'Интернет-магазин товаров для праздника. Широкий ассортимент декораций, подарков и аксессуаров.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.example.com" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 antialiased`}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <FloatingActionButton />
          </div>
        </CartProvider>
      </body>
    </html>
  );
} 