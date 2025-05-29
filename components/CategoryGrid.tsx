import Link from 'next/link';
import Image from 'next/image';

interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Воздушные шары',
    slug: 'vozdushnye-shary',
    image: '/images/categories/balloon.png',
    productCount: 245
  },
  {
    id: 2,
    name: 'Гендер party',
    slug: 'gender-party',
    image: '/images/categories/balloon.png',
    productCount: 89
  },
  {
    id: 3,
    name: 'Подарочные коробки',
    slug: 'podarochnye-korobki',
    image: '/images/categories/balloon.png',
    productCount: 156
  },
  {
    id: 4,
    name: 'Свечи и фонтаны',
    slug: 'svechi-i-fontany',
    image: '/images/categories/balloon.png',
    productCount: 78
  },
  {
    id: 5,
    name: 'Хлопушки',
    slug: 'hlopushki',
    image: '/images/categories/balloon.png',
    productCount: 45
  },
  {
    id: 6,
    name: 'Подарки',
    slug: 'podarki',
    image: '/images/categories/balloon.png',
    productCount: 312
  },
  {
    id: 7,
    name: 'Открытки и конверты',
    slug: 'otkrytki-i-konverty',
    image: '/images/categories/balloon.png',
    productCount: 134
  },
  {
    id: 8,
    name: 'Сервировка стола',
    slug: 'servirovka-stola',
    image: '/images/categories/balloon.png',
    productCount: 189
  },
  {
    id: 9,
    name: 'Фотозоны',
    slug: 'fotozony',
    image: '/images/categories/balloon.png',
    productCount: 67
  },
  {
    id: 10,
    name: 'Организация праздников под ключ',
    slug: 'organizaciya-prazdnikov',
    image: '/images/categories/balloon.png',
    productCount: 25
  }
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/catalog?category=${category.slug}`}
          className="group"
        >
          <div className="relative aspect-square bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Category Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
              <h3 className="font-bold text-sm md:text-base mb-1 group-hover:text-pink-300 transition-colors line-clamp-2">
                {category.name}
              </h3>
              <p className="text-xs text-gray-200">
                {category.productCount} товаров
              </p>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Arrow icon */}
            <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <svg 
                className="w-4 h-4 text-pink-500" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 