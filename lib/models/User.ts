import { Pool } from 'pg';
import bcrypt from 'bcrypt';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'prime_balloons',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export interface User {
  id: number;
  username?: string;
  email: string;
  phone?: string;
  password_hash?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  birth_date?: string;
  child_birth_date?: string;
  telegram_username?: string;
  role: string; // 'user' | 'admin'
  discount: number;
  total_orders: number;
  total_spent: number;
  is_active: boolean;
  email_verified: boolean;
  phone_verified: boolean;
  created_at: string;
  updated_at: string;
}

export class UserModel {
  
  static async getAll(filters?: {
    limit?: number;
    offset?: number;
    active?: boolean;
  }): Promise<User[]> {
    let query = 'SELECT * FROM users WHERE 1=1';
    const params: any[] = [];
    let paramIndex = 1;

    if (filters?.active !== undefined) {
      query += ` AND is_active = $${paramIndex}`;
      params.push(filters.active);
      paramIndex++;
    }

    query += ' ORDER BY created_at DESC';

    if (filters?.limit) {
      query += ` LIMIT $${paramIndex}`;
      params.push(filters.limit);
      paramIndex++;
    }

    if (filters?.offset) {
      query += ` OFFSET $${paramIndex}`;
      params.push(filters.offset);
    }

    const result = await pool.query(query, params);
    return result.rows;
  }

  static async getById(id: number): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE id = $1 AND is_active = true';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  static async getByEmail(email: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0] || null;
  }

  static async getByPhone(phone: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE phone = $1';
    const result = await pool.query(query, [phone]);
    return result.rows[0] || null;
  }

  static async create(userData: {
    email: string;
    password?: string;
    phone?: string;
    first_name?: string;
    last_name?: string;
    middle_name?: string;
  }): Promise<User> {
    const hashedPassword = userData.password 
      ? await bcrypt.hash(userData.password, 10) 
      : null;

    const query = `
      INSERT INTO users (
        email, password_hash, phone, first_name, last_name, middle_name
      ) VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *
    `;
    
    const params = [
      userData.email,
      hashedPassword,
      userData.phone,
      userData.first_name,
      userData.last_name,
      userData.middle_name
    ];

    const result = await pool.query(query, params);
    return result.rows[0];
  }

  static async update(id: number, userData: Partial<User>): Promise<User | null> {
    const fields: string[] = [];
    const params: any[] = [];
    let paramIndex = 1;

    Object.entries(userData).forEach(([key, value]) => {
      if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && value !== undefined) {
        fields.push(`${key} = $${paramIndex}`);
        params.push(value);
        paramIndex++;
      }
    });

    if (fields.length === 0) return null;

    const query = `
      UPDATE users 
      SET ${fields.join(', ')} 
      WHERE id = $${paramIndex} 
      RETURNING *
    `;
    params.push(id);

    const result = await pool.query(query, params);
    return result.rows[0] || null;
  }

  static async updatePassword(id: number, newPassword: string): Promise<boolean> {
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const query = 'UPDATE users SET password_hash = $2 WHERE id = $1';
    const result = await pool.query(query, [id, hashedPassword]);
    return (result.rowCount ?? 0) > 0;
  }

  static async verifyPassword(email: string, password: string): Promise<User | null> {
    const user = await this.getByEmail(email);
    if (!user || !user.password_hash) return null;

    const isValid = await bcrypt.compare(password, user.password_hash);
    return isValid ? user : null;
  }

  static async verifyEmail(id: number): Promise<boolean> {
    const query = 'UPDATE users SET email_verified = true WHERE id = $1';
    const result = await pool.query(query, [id]);
    return (result.rowCount ?? 0) > 0;
  }

  static async verifyPhone(id: number): Promise<boolean> {
    const query = 'UPDATE users SET phone_verified = true WHERE id = $1';
    const result = await pool.query(query, [id]);
    return (result.rowCount ?? 0) > 0;
  }

  static async updateStats(id: number, orderTotal: number): Promise<void> {
    const query = `
      UPDATE users 
      SET 
        total_orders = total_orders + 1,
        total_spent = total_spent + $2
      WHERE id = $1
    `;
    await pool.query(query, [id, orderTotal]);
  }

  static async applyDiscount(id: number, discount: number): Promise<boolean> {
    const query = 'UPDATE users SET discount = $2 WHERE id = $1';
    const result = await pool.query(query, [id, discount]);
    return (result.rowCount ?? 0) > 0;
  }

  static async deactivate(id: number): Promise<boolean> {
    const query = 'UPDATE users SET is_active = false WHERE id = $1';
    const result = await pool.query(query, [id]);
    return (result.rowCount ?? 0) > 0;
  }

  static async getLoyalCustomers(minOrders: number = 5): Promise<User[]> {
    const query = 'SELECT * FROM users WHERE total_orders >= $1 AND is_active = true ORDER BY total_spent DESC';
    const result = await pool.query(query, [minOrders]);
    return result.rows;
  }
} 