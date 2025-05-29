import { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Prime Balloons - Воздушные шары и украшения премиум класса',
  description: 'Prime Balloons - широкий выбор премиальных воздушных шаров и праздничных украшений с доставкой по Москве. Более 1000 товаров для вашего идеального праздника.',
  keywords: 'prime balloons, воздушные шары, праздничные товары, декор, день рождения, свадьба, украшения, доставка москва',
  openGraph: {
    title: 'Prime Balloons - Создайте незабываемый праздник',
    description: 'Prime Balloons - широкий выбор премиальных воздушных шаров и праздничных украшений с доставкой по Москве',
    type: 'website',
  },
};

export default function HomePage() {
  return <HomePageClient />;
} 