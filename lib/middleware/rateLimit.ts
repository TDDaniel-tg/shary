// @ts-ignore
import Redis from 'ioredis';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const redis = process.env.REDIS_URL ? new Redis(process.env.REDIS_URL) : null;
const WINDOW = 60; // секунд
const LIMIT = 60; // запросов

const memoryStore: Record<string, { count: number; ts: number }> = {};

export async function rateLimit(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const key = `ratelimit:${ip}`;

  if (redis) {
    const count = await redis.incr(key);
    if (count === 1) {
      await redis.expire(key, WINDOW);
    }
    if (count > LIMIT) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
  } else {
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