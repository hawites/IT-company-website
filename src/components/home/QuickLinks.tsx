import Link from 'next/link';

const links = [
  { href: '/solutions', label: 'Solutions', description: 'Unified Communications, Networks, Cybersecurity & more' },
  { href: '/projects', label: 'Projects', description: 'Our portfolio of successful implementations' },
  { href: '/careers', label: 'Careers', description: 'Join our team of technology experts' },
];

export function QuickLinks() {
  return (
    <section className="border-b border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-xl border border-gray-200 bg-gray-50/50 p-6 transition hover:border-primary-200 hover:bg-primary-50/50"
            >
              <span className="text-lg font-semibold text-primary-600 group-hover:text-primary-700">{link.label}</span>
              <span className="mt-2 text-sm text-gray-600">{link.description}</span>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 group-hover:underline">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
