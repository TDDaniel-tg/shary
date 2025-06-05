import fs from 'fs';
import path from 'path';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice: number | null;
  category: string;
  stock: number;
  images: string[];
  featured: boolean;
  published: boolean;
  createdAt: string;
}

interface Review {
  id: string;
  productId: string;
  productName: string;
  userName: string;
  rating: number;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface DbData {
  products: Product[];
  reviews: Review[];
}

// Путь к JSON файлам
const DB_DIR = path.join(process.cwd(), 'lib', 'db');
const PRODUCTS_FILE = path.join(DB_DIR, 'products.json');
const REVIEWS_FILE = path.join(DB_DIR, 'reviews.json');

// Функция для чтения данных из JSON файла
export function readJsonFile<T>(filePath: string): T {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContent) as T;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    throw error;
  }
}

// Функция для записи данных в JSON файл
export function writeJsonFile<T>(filePath: string, data: T): void {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString, 'utf8');
  } catch (error) {
    console.error(`Error writing to file ${filePath}:`, error);
    throw error;
  }
}

// Функции для работы с товарами
export function getAllProducts(): Product[] {
  const data = readJsonFile<{ products: Product[] }>(PRODUCTS_FILE);
  return data.products;
}

export function getProductById(id: string): Product | null {
  const products = getAllProducts();
  return products.find(product => product.id === id) || null;
}

export function createProduct(product: Omit<Product, 'id' | 'createdAt'>): Product {
  const products = getAllProducts();
  const newId = (Math.max(...products.map(p => parseInt(p.id)), 0) + 1).toString();
  
  const newProduct: Product = {
    ...product,
    id: newId,
    createdAt: new Date().toISOString()
  };
  
  products.push(newProduct);
  writeJsonFile(PRODUCTS_FILE, { products });
  
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Omit<Product, 'id' | 'createdAt'>>): Product | null {
  const products = getAllProducts();
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return null;
  }
  
  const updatedProduct = {
    ...products[productIndex],
    ...updates
  };
  
  products[productIndex] = updatedProduct;
  writeJsonFile(PRODUCTS_FILE, { products });
  
  return updatedProduct;
}

export function deleteProduct(id: string): boolean {
  const products = getAllProducts();
  const productIndex = products.findIndex(p => p.id === id);
  
  if (productIndex === -1) {
    return false;
  }
  
  products.splice(productIndex, 1);
  writeJsonFile(PRODUCTS_FILE, { products });
  
  return true;
}

// Функции для работы с отзывами
export function getAllReviews(): Review[] {
  const data = readJsonFile<{ reviews: Review[] }>(REVIEWS_FILE);
  return data.reviews;
}

export function getReviewsByStatus(status: 'pending' | 'approved' | 'rejected'): Review[] {
  const reviews = getAllReviews();
  return reviews.filter(review => review.status === status);
}

export function getReviewById(id: string): Review | null {
  const reviews = getAllReviews();
  return reviews.find(review => review.id === id) || null;
}

export function updateReviewStatus(id: string, status: 'pending' | 'approved' | 'rejected'): Review | null {
  const reviews = getAllReviews();
  const reviewIndex = reviews.findIndex(r => r.id === id);
  
  if (reviewIndex === -1) {
    return null;
  }
  
  reviews[reviewIndex].status = status;
  writeJsonFile(REVIEWS_FILE, { reviews });
  
  return reviews[reviewIndex];
}

export function createReview(review: Omit<Review, 'id' | 'createdAt' | 'status'>): Review {
  const reviews = getAllReviews();
  const newId = (Math.max(...reviews.map(r => parseInt(r.id)), 0) + 1).toString();
  
  const newReview: Review = {
    ...review,
    id: newId,
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  
  reviews.push(newReview);
  writeJsonFile(REVIEWS_FILE, { reviews });
  
  return newReview;
}

export function deleteReview(id: string): boolean {
  const reviews = getAllReviews();
  const reviewIndex = reviews.findIndex(r => r.id === id);
  
  if (reviewIndex === -1) {
    return false;
  }
  
  reviews.splice(reviewIndex, 1);
  writeJsonFile(REVIEWS_FILE, { reviews });
  
  return true;
}

// Экспортируем типы
export type { Product, Review }; 