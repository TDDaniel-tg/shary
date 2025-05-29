import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Если точно /admin без подпути, редиректим на /admin/login
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Проверяем, если это старая админская панель (кроме страницы логина)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Проверяем наличие JWT токена (полная проверка будет в API)
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      // Перенаправляем на страницу логина
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Базовая проверка формата токена JWT (должен содержать точки)
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // Проверяем новую админскую панель
  if (pathname.startsWith('/admin_dashboard')) {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/admin_dashboard/:path*'],
}; 