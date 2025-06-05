'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Перенаправляем на страницу логина
    router.push('/admin/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Перенаправление...</h1>
        <p className="text-gray-600">Вы будете перенаправлены на страницу входа.</p>
      </div>
    </div>
  );
}