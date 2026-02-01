'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const nav = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/posts', label: 'Blog Posts' },
  { href: '/admin/resources', label: 'Resources' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/jobs', label: 'Careers' },
  { href: '/admin/team', label: 'Team / Management' },
  { href: '/admin/clients', label: 'Clients & Partners' },
  { href: '/admin/media', label: 'Media Library' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/admin" className="font-semibold text-primary-600">
            Edge Admin
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              View site
            </Link>
            <span className="text-sm text-gray-500">(Login required)</span>
          </div>
        </div>
      </header>
      <div className="mx-auto flex max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <aside className="w-56 flex-shrink-0">
          <nav className="space-y-1 rounded-lg border border-gray-200 bg-white p-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  pathname === item.href ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
