import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Heart, Share2, ChevronRight, Truck, Shield, RotateCcw } from 'lucide-react';
import AddToCartButton from './AddToCartButton';
import ProductReviews from './ProductReviews';
import RelatedProducts from './RelatedProducts';

interface Props {
  params: {
    id: string;
  };
}

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  category: string;
  features: string[];
  meta_title?: string;
  meta_description?: string;
}

// Мок данные для демонстрации
const mockProduct: Product = {
  id: 1,
  name: 'Воздушные шары латексные "Радуга"',
  description: 'Яркие латексные воздушные шары высокого качества. Идеально подходят для детских праздников, дней рождения и других торжественных мероприятий. Изготовлены из безопасного латекса, не токсичны.',
  price: 250,
  image_url: '/images/products/balloon.png',
  rating: 4.8,
  reviews: 47,
  inStock: true,
  category: 'Латексные шары',
  features: [
    'Диаметр: 30 см',
    'Материал: натуральный латекс',
    'Безопасные красители',
    'В комплекте: 10 шт',
    'Цвета: красный, синий, желтый, зеленый'
  ],
  meta_title: 'Воздушные шары латексные "Радуга" - купить в интернет-магазине',
  meta_description: 'Яркие латексные воздушные шары "Радуга" для праздников. Высокое качество, безопасные материалы. Доставка по всей России.'
};

async function getProduct(id: string): Promise<Product | null> {
  try {
    // Попытка получить товар из API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/products/${id}`, {
      next: { revalidate: 3600 } // Обновляем кеш каждый час
    });
    
    if (response.ok) {
      const data = await response.json();
      return data.product;
    }
  } catch (error) {
    console.error('Error fetching product:', error);
  }
  
  // Возвращаем мок данные если API недоступно
  if (parseInt(id) === 1) {
    return mockProduct;
  }
  
  return null;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const product = await getProduct(params.id);
  
  if (!product) {
    return {
      title: 'Товар не найден',
      description: 'Запрашиваемый товар не найден'
    };
  }

  return {
    title: product.meta_title || `${product.name} - купить воздушные шары`,
    description: product.meta_description || product.description || 'Качественные воздушные шары для любого праздника',
    openGraph: {
      title: product.name,
      description: product.description || 'Качественные воздушные шары',
      images: product.image_url ? [product.image_url] : [],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description || 'Качественные воздушные шары',
      images: product.image_url ? [product.image_url] : []
    }
  };
}

export async function generateStaticParams() {
  // Генерируем статические пути для популярных товаров
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' }
  ];
}

export default async function ProductPage(
  { params }: Props
) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-5 w-5 ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Хлебные крошки */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-pink-600">
              Главная
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/catalog" className="text-gray-500 hover:text-pink-600">
              Каталог
            </Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Изображения товара */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg aspect-square">
              <Image
                src={product.image_url || '/images/products/balloon.png'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
                <Heart className="h-5 w-5 text-gray-600 hover:text-pink-500" />
              </button>
              <button className="absolute top-4 right-16 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors">
                <Share2 className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Информация о товаре */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                {renderStars(product.rating)}
                <span className="text-sm text-gray-600">
                  ({product.reviews} отзывов)
                </span>
                <span className={`text-sm px-2 py-1 rounded ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </span>
              </div>

              <div className="text-3xl font-bold text-pink-600 mb-6">
                {product.price} ₽
              </div>
            </div>

            {/* Описание */}
            {product.description && (
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Описание</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {/* Характеристики */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Характеристики</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопка добавления в корзину */}
            <AddToCartButton 
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image_url || '/images/products/balloon.png',
                inStock: product.inStock
              }} 
            />

            {/* Преимущества */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="text-sm font-medium">Быстрая доставка</div>
                  <div className="text-xs text-gray-500">По Москве за 2 часа</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="text-sm font-medium">Гарантия качества</div>
                  <div className="text-xs text-gray-500">30 дней возврата</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <RotateCcw className="h-5 w-5 text-pink-500" />
                <div>
                  <div className="text-sm font-medium">Обмен/возврат</div>
                  <div className="text-xs text-gray-500">Легкий возврат</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Отзывы */}
        <div className="mt-16">
          <ProductReviews productId={product.id} />
        </div>

        {/* Похожие товары */}
        <div className="mt-16">
          <RelatedProducts productId={product.id} />
        </div>
      </div>
    </div>
  );
} 