import { NextRequest, NextResponse } from 'next/server';

// В реальном приложении это будет храниться в базе данных
let robotsContent = `User-agent: *
Disallow: /admin/
Disallow: /api/
Allow: /

Sitemap: https://example.com/sitemap.xml`;

export async function GET() {
  return new NextResponse(robotsContent, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const { content } = await request.json();
    
    if (!content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    // В реальном приложении - сохранение в базу данных и обновление файла
    robotsContent = content;
    
    return NextResponse.json({ 
      message: 'Robots.txt updated successfully',
      content: robotsContent 
    });
  } catch (error) {
    console.error('Error updating robots.txt:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 