import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Перенаправление с /admin на /admin/login (если не вход в админку)
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // Перенаправляем все подпути /admin/* (кроме /admin/login) на /admin_dashboard/*
  if (pathname.startsWith('/admin/') && pathname !== '/admin/login') {
    // Создаем новый URL заменяя /admin/ на /admin_dashboard/
    const newPath = pathname.replace('/admin/', '/admin_dashboard/');
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Проверяем доступ к /admin_dashboard и всем его подпутям
  if (pathname.startsWith('/admin_dashboard')) {
    const token = request.cookies.get('admin-token')?.value;

    if (!token) {
      // Если нет токена, перенаправляем на страницу логина
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    // Базовая проверка формата токена JWT (должен содержать две точки)
    const tokenParts = token.split('.');
    if (tokenParts.length !== 3) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/admin_dashboard/:path*'],
};