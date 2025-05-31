import { Pool } from 'pg';
import Redis from 'ioredis';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'balloons_store',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;

export interface Product {
  id: number;
  name: string;
  slug: string;
  description?: string;
  short_description?: string;
  price: number;
  original_price?: number;
  category_id?: number;
  image_url?: string;
  images?: string[];
  rating: number;
  reviews_count: number;
  in_stock: boolean;
  stock_quantity: number;
  sku?: string;
  tags?: string[];
  meta_title?: string;
  meta_description?: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export class ProductModel {
  
  static async getAll(filters?: {
    category?: string;
    search?: string;
    featured?: boolean;
    limit?: number;
    offset?: number;
    store_id?: number;
  }): Promise<Product[]> {
    // Кэшируем только популярные запросы (без поиска)
    const canCache = redis && !filters?.search;
    const cacheKey = canCache ? `products:${JSON.stringify(filters)}` : null;
    if (canCache && cacheKey) {
      const cached = await redis!.get(cacheKey);
      if (cached) return JSON.parse(cached);
    }
    let query = `
      SELECT p.*, c.name as category_name
    `;
    if (filters?.store_id) {
      query += ', ps.stock_quantity';
    }
    query += ` FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
    `;
    if (filters?.store_id) {
      query += 'LEFT JOIN product_stocks ps ON ps.product_id = p.id AND ps.store_id = $storeId$ ';
    }
    query += 'WHERE p.is_active = true';
    const params: any[] = [];
    let paramIndex = 1;
    if (filters?.category) {
      query += ` AND c.slug = $${paramIndex}`;
      params.push(filters.category);
      paramIndex++;
    }
    if (filters?.search) {
      query += ` AND (p.name ILIKE $${paramIndex} OR p.description ILIKE $${paramIndex})`;
      params.push(`%${filters.search}%`);
      paramIndex++;
    }
    if (filters?.featured) {
      query += ` AND p.is_featured = true`;
    }
    if (filters?.store_id) {
      query += ` AND ps.stock_quantity > 0`;
    }
    query += ` ORDER BY p.sort_order ASC, p.created_at DESC`;
    if (filters?.limit) {
      query += ` LIMIT $${paramIndex}`;
      params.push(filters.limit);
      paramIndex++;
    }
    if (filters?.offset) {
      query += ` OFFSET $${paramIndex}`;
      params.push(filters.offset);
    }
    // Подстановка store_id
    let finalQuery = query;
    if (filters?.store_id) {
      finalQuery = query.replace(/\$storeId\$/g, `$${paramIndex}`);
      params.push(filters.store_id);
    }
    const result = await pool.query(finalQuery, params);
    if (canCache && cacheKey) {
      await redis!.set(cacheKey, JSON.stringify(result.rows), 'EX', 60); // 1 минута
    }
    return result.rows;
  }

  static async getById(id: number): Promise<Product | null> {
    const query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.id = $1 AND p.is_active = true
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  static async getBySlug(slug: string): Promise<Product | null> {
    const query = `
      SELECT p.*, c.name as category_name 
      FROM products p 
      LEFT JOIN categories c ON p.category_id = c.id 
      WHERE p.slug = $1 AND p.is_active = true
    `;
    const result = await pool.query(query, [slug]);
    return result.rows[0] || null;
  }

  static async getFeatured(limit: number = 8): Promise<Product[]> {
    return this.getAll({ featured: true, limit });
  }

  static async getByCategory(categorySlug: string, limit?: number): Promise<Product[]> {
    return this.getAll({ category: categorySlug, limit });
  }

  static async search(searchTerm: string, limit?: number): Promise<Product[]> {
    return this.getAll({ search: searchTerm, limit });
  }

  static async create(productData: Omit<Product, 'id' | 'created_at' | 'updated_at'>): Promise<Product> {
    const query = `
      INSERT INTO products (
        name, slug, description, short_description, price, original_price,
        category_id, image_url, images, rating, reviews_count, in_stock,
        stock_quantity, sku, tags, meta_title, meta_description, is_featured, is_active
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19
      ) RETURNING *
    `;
    
    const params = [
      productData.name,
      productData.slug,
      productData.description,
      productData.short_description,
      productData.price,
      productData.original_price,
      productData.category_id,
      productData.image_url,
      productData.images,
      productData.rating,
      productData.reviews_count,
      productData.in_stock,
      productData.stock_quantity,
      productData.sku,
      productData.tags,
      productData.meta_title,
      productData.meta_description,
      productData.is_featured,
      productData.is_active
    ];

    const result = await pool.query(query, params);
    return result.rows[0];
  }

  static async update(id: number, productData: Partial<Product>): Promise<Product | null> {
    const fields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    Object.entries(productData).forEach(([key, value]) => {
      if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && value !== undefined) {
        fields.push(`${key} = $${paramIndex}`);
        params.push(value);
        paramIndex++;
      }
    });

    if (fields.length === 0) return null;

    const query = `
      UPDATE products 
      SET ${fields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING *
    `;
    params.push(id);

    const result = await pool.query(query, params);
    return result.rows[0] || null;
  }

  static async delete(id: number): Promise<boolean> {
    const query = 'UPDATE products SET is_active = false WHERE id = $1';
    const result = await pool.query(query, [id]);
    return (result.rowCount ?? 0) > 0;
  }

  static async updateStock(id: number, quantity: number): Promise<void> {
    const query = 'UPDATE products SET stock_quantity = $2 WHERE id = $1';
    await pool.query(query, [id, quantity]);
  }

  static async updateRating(productId: number): Promise<void> {
    const query = `
      UPDATE products 
      SET 
        rating = (SELECT AVG(rating) FROM reviews WHERE product_id = $1 AND is_approved = true),
        reviews_count = (SELECT COUNT(*) FROM reviews WHERE product_id = $1 AND is_approved = true)
      WHERE id = $1
    `;
    await pool.query(query, [productId]);
  }
} 