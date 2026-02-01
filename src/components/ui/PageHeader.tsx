import Link from 'next/link';

type PageHeaderProps = {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 flex text-sm text-gray-500">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-2">/</span>
                {b.href ? (
                  <Link href={b.href} className="hover:text-primary-600">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-gray-700">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="section-heading">{title}</h1>
        {description && <p className="section-subheading mt-2">{description}</p>}
      </div>
    </header>
  );
}
