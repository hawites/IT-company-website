import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'News, press releases, success stories, and events from Edge Communication Technologies.',
};

const sections = [
  { title: 'News', href: '/resources/news', description: 'Company news and updates' },
  { title: 'Press Releases', href: '/resources/press', description: 'Official press releases' },
  { title: 'Success Stories', href: '/resources/success-stories', description: 'Client success stories and case studies' },
  { title: 'Events & Webinars', href: '/resources/events', description: 'Upcoming events and webinars' },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Resources"
        description="News, press releases, success stories, and events."
        breadcrumbs={[{ label: 'Resources' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="card group block transition hover:border-primary-200"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600">{section.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{section.description}</p>
              <span className="mt-4 inline-block text-sm font-medium text-primary-600">View →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
