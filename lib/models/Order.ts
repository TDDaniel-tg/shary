import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'balloons_store',
  password: process.env.DB_PASSWORD || 'password',
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
});

export interface Order {
  id: number;
  user_id?: number;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
  total_amount: number;
  delivery_address?: string;
  delivery_date: Date;
  delivery_time: string;
  payment_method: 'cash' | 'card' | 'online';
  payment_status: 'pending' | 'paid' | 'failed';
  notes?: string;
  created_at: Date;
  updated_at: Date;
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  product_price: number;
  quantity: number;
  total_price: number;
}

export interface CreateOrderData {
  user_id?: number;
  customer_name: string;
  customer_phone: string;
  customer_email?: string;
  delivery_address?: string;
  delivery_date: Date;
  delivery_time: string;
  payment_method: 'cash' | 'card' | 'online';
  notes?: string;
  items: {
    product_id: number;
    quantity: number;
    price: number;
  }[];
}

export class OrderModel {
  static async create(data: CreateOrderData): Promise<Order> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      const totalAmount = data.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      const orderQuery = `
        INSERT INTO orders (
          user_id, customer_name, customer_phone, customer_email,
          status, total_amount, delivery_address, delivery_date,
          delivery_time, payment_method, payment_status, notes,
          created_at, updated_at
        ) VALUES ($1, $2, $3, $4, 'pending', $5, $6, $7, $8, $9, 'pending', $10, NOW(), NOW())
        RETURNING *
      `;
      
      const orderValues = [
        data.user_id || null,
        data.customer_name,
        data.customer_phone,
        data.customer_email || null,
        totalAmount,
        data.delivery_address || null,
        data.delivery_date,
        data.delivery_time,
        data.payment_method,
        data.notes || null
      ];

      const orderResult = await client.query(orderQuery, orderValues);
      const order = orderResult.rows[0];

      for (const item of data.items) {
        const itemQuery = `
          INSERT INTO order_items (order_id, product_id, quantity, price, total_price)
          VALUES ($1, $2, $3, $4, $5)
        `;
        await client.query(itemQuery, [
          order.id,
          item.product_id,
          item.quantity,
          item.price,
          item.price * item.quantity
        ]);
      }

      await client.query('COMMIT');
      return order;
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error creating order:', error);
      throw error;
    } finally {
      client.release();
    }
  }

  static async getById(orderId: number): Promise<Order | null> {
    try {
      const query = `SELECT * FROM orders WHERE id = $1`;
      const result = await pool.query(query, [orderId]);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error fetching order:', error);
      throw error;
    }
  }

  static async getByUserId(userId: number, limit: number = 10, offset: number = 0): Promise<Order[]> {
    try {
      const query = `
        SELECT * FROM orders 
        WHERE user_id = $1 
        ORDER BY created_at DESC
        LIMIT $2 OFFSET $3
      `;
      const result = await pool.query(query, [userId, limit, offset]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching user orders:', error);
      throw error;
    }
  }

  static async updateStatus(orderId: number, status: Order['status']): Promise<boolean> {
    try {
      const query = `
        UPDATE orders 
        SET status = $1, updated_at = NOW() 
        WHERE id = $2 
        RETURNING id
      `;
      const result = await pool.query(query, [status, orderId]);
      return result.rows.length > 0;
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }

  static async getOrderItems(orderId: number): Promise<OrderItem[]> {
    try {
      const query = `
        SELECT 
          oi.*,
          p.name as product_name,
          p.price as product_price
        FROM order_items oi
        JOIN products p ON oi.product_id = p.id
        WHERE oi.order_id = $1
      `;
      const result = await pool.query(query, [orderId]);
      return result.rows;
    } catch (error) {
      console.error('Error fetching order items:', error);
      throw error;
    }
  }

  static async getAll(limit: number = 50, offset: number = 0, status?: string): Promise<Order[]> {
    try {
      let query = `SELECT * FROM orders`;
      const params: any[] = [];
      let paramIndex = 1;

      if (status) {
        query += ` WHERE status = $${paramIndex}`;
        params.push(status);
        paramIndex++;
      }

      query += ` ORDER BY created_at DESC LIMIT $${paramIndex} OFFSET $${paramIndex + 1}`;
      params.push(limit, offset);

      const result = await pool.query(query, params);
      return result.rows;
    } catch (error) {
      console.error('Error fetching orders:', error);
      throw error;
    }
  }

  static async getStats(): Promise<any> {
    try {
      const query = `
        SELECT 
          COUNT(*) as total_orders,
          COUNT(CASE WHEN status = 'delivered' THEN 1 END) as delivered_orders,
          SUM(CASE WHEN status = 'delivered' THEN total_amount ELSE 0 END) as total_revenue,
          AVG(CASE WHEN status = 'delivered' THEN total_amount ELSE NULL END) as avg_order_value
        FROM orders
      `;
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.error('Error fetching order stats:', error);
      throw error;
    }
  }

  static async update(orderId: number, data: Partial<Order>): Promise<Order | null> {
    try {
      const fields: string[] = [];
      const params: any[] = [];
      let paramIndex = 1;

      Object.entries(data).forEach(([key, value]) => {
        if (key !== 'id' && key !== 'created_at' && key !== 'updated_at' && value !== undefined) {
          fields.push(`${key} = $${paramIndex}`);
          params.push(value);
          paramIndex++;
        }
      });

      if (fields.length === 0) return null;

      const query = `
        UPDATE orders 
        SET ${fields.join(', ')}, updated_at = NOW() 
        WHERE id = $${paramIndex} 
        RETURNING *
      `;
      params.push(orderId);

      const result = await pool.query(query, params);
      return result.rows[0] || null;
    } catch (error) {
      console.error('Error updating order:', error);
      throw error;
    }
  }

  static async delete(orderId: number): Promise<boolean> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Удаляем товары заказа
      await client.query('DELETE FROM order_items WHERE order_id = $1', [orderId]);

      // Удаляем заказ
      const result = await client.query('DELETE FROM orders WHERE id = $1', [orderId]);

      await client.query('COMMIT');
      return (result.rowCount ?? 0) > 0;
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Error deleting order:', error);
      throw error;
    } finally {
      client.release();
    }
  }
} 