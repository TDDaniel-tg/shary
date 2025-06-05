import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { safeRedisIncr, safeRedisExpire } from '@/lib/redis';
const WINDOW = 60; // секунд
const LIMIT = 60; // запросов

const memoryStore: Record<string, { count: number; ts: number }> = {};

export async function rateLimit(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const key = `ratelimit:${ip}`;

  // Пробуем использовать Redis
  const count = await safeRedisIncr(key);
  if (count !== null) {
    if (count === 1) {
      await safeRedisExpire(key, WINDOW);
    }
    if (count > LIMIT) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  } else {
    // Fallback на memory store
    const now = Math.floor(Date.now() / 1000);
    if (!memoryStore[key] || now - memoryStore[key].ts > WINDOW) {
      memoryStore[key] = { count: 1, ts: now };
    } else {
      memoryStore[key].count++;
    }
    if (memoryStore[key].count > LIMIT) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  }
  return null;
} 