import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

// В реальном приложении это будет храниться в базе данных
let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/catalog</loc>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://example.com/contacts</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://example.com/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://example.com/delivery</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://example.com/payment</loc>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

export async function GET() {
  try {
    return new NextResponse(sitemapContent, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при получении sitemap' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();
    
    if (!content) {
      return NextResponse.json({ error: 'Контент не может быть пустым' }, { status: 400 });
    }

    sitemapContent = content;
    
    // Сохраняем в файл
    try {
      const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
      writeFileSync(sitemapPath, content);
    } catch (fileError) {
      console.error('Ошибка при записи файла:', fileError);
    }

    return NextResponse.json({ message: 'sitemap.xml успешно обновлен' });
  } catch (error) {
    return NextResponse.json({ error: 'Ошибка при обновлении sitemap' }, { status: 500 });
  }
} 