import { Pool } from 'pg';

// Настройка подключения к PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'balloons_store',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export interface Review {
  id: number;
  user_id?: number;
  product_id: number;
  user_name: string;
  rating: number;
  comment: string;
  is_moderated: boolean;
  helpful_count: number;
  created_at: Date;
  updated_at: Date;
}

export interface CreateReviewData {
  product_id: number;
  user_name: string;
  rating: number;
  comment: string;
  user_id?: number;
}

export class ReviewModel {
  // Получить все отзывы для товара (только модерированные)
  static async getByProductId(productId: number): Promise<Review[]> {
    try {
      const query = `
        SELECT * FROM reviews 
        WHERE product_id = $1 AND is_moderated = true
        ORDER BY created_at DESC
      `;
      const result = await pool.query(query, [productId]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching reviews:', error);
      throw error;
    }
  }

  // Получить все отзывы для админки (включая не модерированные)
  static async getAllForAdmin(limit: number = 50, offset: number = 0): Promise<Review[]> {
    try {
      const query = `
        SELECT 
          r.*,
          p.name as product_name
        FROM reviews r
        LEFT JOIN products p ON r.product_id = p.id
        ORDER BY r.created_at DESC
        LIMIT $1 OFFSET $2
      `;
      
      const result = await pool.query(query, [limit, offset]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching reviews for admin:', error);
      throw error;
    }
  }

  // Получить отзывы ожидающие модерации
  static async getPendingModeration(): Promise<Review[]> {
    try {
      const query = `
        SELECT r.*, p.name as product_name
        FROM reviews r
        LEFT JOIN products p ON r.product_id = p.id
        WHERE r.is_moderated = false
        ORDER BY r.created_at ASC
      `;
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.error('Error fetching pending reviews:', error);
      throw error;
    }
  }

  // Создать новый отзыв
  static async create(data: CreateReviewData): Promise<Review> {
    try {
      const query = `
        INSERT INTO reviews (
          product_id, user_id, user_name, rating, comment,
          is_moderated, helpful_count, created_at, updated_at
        ) VALUES ($1, $2, $3, $4, $5, false, 0, NOW(), NOW())
        RETURNING *
      `;
      const values = [data.product_id, data.user_id || null, data.user_name, data.rating, data.comment];
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      console.error('Error creating review:', error);
      throw error;
    }
  }

  // Модерировать отзыв (одобрить)
  static async approve(reviewId: number): Promise<boolean> {
    try {
      const query = `UPDATE reviews SET is_moderated = true, updated_at = NOW() WHERE id = $1 RETURNING id`;
      const result = await pool.query(query, [reviewId]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error approving review:', error);
      throw error;
    }
  }

  // Отклонить отзыв (удалить)
  static async reject(reviewId: number): Promise<boolean> {
    try {
      const query = `DELETE FROM reviews WHERE id = $1 RETURNING id`;
      const result = await pool.query(query, [reviewId]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error rejecting review:', error);
      throw error;
    }
  }

  // Увеличить счетчик полезности
  static async incrementHelpful(reviewId: number): Promise<boolean> {
    try {
      const query = `
        UPDATE reviews 
        SET helpful_count = helpful_count + 1, updated_at = NOW()
        WHERE id = $1 AND is_moderated = true
        RETURNING id
      `;
      
      const result = await pool.query(query, [reviewId]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error incrementing helpful count:', error);
      throw error;
    }
  }

  // Получить статистику отзывов для товара
  static async getProductReviewStats(productId: number): Promise<{
    totalReviews: number;
    averageRating: number;
    ratingDistribution: { rating: number; count: number }[];
  }> {
    try {
      // Общее количество и средний рейтинг
      const statsQuery = `
        SELECT 
          COUNT(*) as total_reviews,
          AVG(rating) as average_rating
        FROM reviews 
        WHERE product_id = $1 AND is_moderated = true
      `;
      
      const statsResult = await pool.query(statsQuery, [productId]);
      const stats = statsResult.rows[0];

      // Распределение по рейтингам
      const distributionQuery = `
        SELECT 
          rating,
          COUNT(*) as count
        FROM reviews 
        WHERE product_id = $1 AND is_moderated = true
        GROUP BY rating
        ORDER BY rating DESC
      `;
      
      const distributionResult = await pool.query(distributionQuery, [productId]);

      return {
        totalReviews: parseInt(stats.total_reviews),
        averageRating: parseFloat(stats.average_rating) || 0,
        ratingDistribution: distributionResult.rows.map(row => ({
          rating: row.rating,
          count: parseInt(row.count)
        }))
      };
    } catch (error) {
      console.error('Error fetching review stats:', error);
      throw error;
    }
  }

  // Получить отзыв по ID
  static async getById(reviewId: number): Promise<Review | null> {
    try {
      const query = `
        SELECT * FROM reviews WHERE id = $1
      `;
      
      const result = await pool.query(query, [reviewId]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error fetching review by ID:', error);
      throw error;
    }
  }

  // Удалить отзыв
  static async delete(reviewId: number): Promise<boolean> {
    try {
      const query = `DELETE FROM reviews WHERE id = $1 RETURNING id`;
      const result = await pool.query(query, [reviewId]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error deleting review:', error);
      throw error;
    }
  }
} 