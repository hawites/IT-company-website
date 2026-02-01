import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const types: Record<string, { title: string; description: string }> = {
  news: { title: 'News', description: 'Company news and updates from Edge COMM-TECH.' },
  press: { title: 'Press Releases', description: 'Official press releases and announcements.' },
  'success-stories': { title: 'Success Stories', description: 'Client success stories and case studies.' },
  events: { title: 'Events & Webinars', description: 'Upcoming events and webinars.' },
};

const placeholderItems = [
  { id: '1', title: 'Edge COMM-TECH Expands Datacenter Services', date: '2024-01-15', slug: 'expands-datacenter' },
  { id: '2', title: 'New Partnership with Leading Vendor', date: '2024-01-10', slug: 'new-partnership' },
  { id: '3', title: 'University Campus Network Success', date: '2024-01-05', slug: 'university-success' },
];

type Props = { params: Promise<{ type: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type } = await params;
  const meta = types[type];
  if (!meta) return { title: 'Resources' };
  return { title: meta.title, description: meta.description };
}

export default async function ResourceTypePage({ params }: Props) {
  const { type } = await params;
  const meta = types[type];
  if (!meta) return null;

  return (
    <>
      <PageHeader
        title={meta.title}
        description={meta.description}
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: meta.title }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {placeholderItems.map((item) => (
            <Link
              key={item.id}
              href={`/resources/${type}/${item.slug}`}
              className="card block transition hover:border-primary-200"
            >
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{new Date(item.date).toLocaleDateString('en-US')}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
