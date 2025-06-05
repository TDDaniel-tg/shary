// Централизованная конфигурация Redis с fallback
let redis: any = null;
let isRedisAvailable = false;

// Инициализация Redis только на сервере
if (typeof window === 'undefined' && process.env.REDIS_URL) {
  try {
    const Redis = require('ioredis');
    redis = new Redis(process.env.REDIS_URL);
    isRedisAvailable = true;
    
    redis.on('error', (error: any) => {
      console.warn('Redis connection error:', error);
      isRedisAvailable = false;
    });
    
    redis.on('connect', () => {
      console.log('Redis connected successfully');
      isRedisAvailable = true;
    });
  } catch (error) {
    console.warn('Redis module not available, caching disabled');
    redis = null;
    isRedisAvailable = false;
  }
}

export { redis, isRedisAvailable };

// Безопасные методы для работы с Redis
export const safeRedisGet = async (key: string): Promise<string | null> => {
  if (!redis || !isRedisAvailable) return null;
  
  try {
    return await redis.get(key);
  } catch (error) {
    console.warn('Redis GET error:', error);
    return null;
  }
};

export const safeRedisSet = async (
  key: string, 
  value: string, 
  expiration?: number
): Promise<boolean> => {
  if (!redis || !isRedisAvailable) return false;
  
  try {
    if (expiration) {
      await redis.set(key, value, 'EX', expiration);
    } else {
      await redis.set(key, value);
    }
    return true;
  } catch (error) {
    console.warn('Redis SET error:', error);
    return false;
  }
};

export const safeRedisIncr = async (key: string): Promise<number | null> => {
  if (!redis || !isRedisAvailable) return null;
  
  try {
    return await redis.incr(key);
  } catch (error) {
    console.warn('Redis INCR error:', error);
    return null;
  }
};

export const safeRedisExpire = async (key: string, seconds: number): Promise<boolean> => {
  if (!redis || !isRedisAvailable) return false;
  
  try {
    await redis.expire(key, seconds);
    return true;
  } catch (error) {
    console.warn('Redis EXPIRE error:', error);
    return false;
  }
}; 