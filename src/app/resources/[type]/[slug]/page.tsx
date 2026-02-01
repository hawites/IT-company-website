import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const types: Record<string, string> = {
  news: 'News',
  press: 'Press Releases',
  'success-stories': 'Success Stories',
  events: 'Events & Webinars',
};

type Props = { params: Promise<{ type: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { type, slug } = await params;
  const typeLabel = types[type] ?? 'Resource';
  return { title: `${slug.replace(/-/g, ' ')} | ${typeLabel}` };
}

export default async function ResourceDetailPage({ params }: Props) {
  const { type, slug } = await params;
  const typeLabel = types[type] ?? 'Resource';

  return (
    <>
      <PageHeader
        title={slug.replace(/-/g, ' ')}
        breadcrumbs={[{ label: 'Resources', href: '/resources' }, { label: typeLabel, href: `/resources/${type}` }, { label: slug }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Placeholder content for this resource. In production, content will be loaded from Firestore based on type and slug.
          </p>
        </div>
        <div className="mt-8">
          <Link href={`/resources/${type}`} className="text-primary-600 hover:underline">
            ← Back to {typeLabel}
          </Link>
        </div>
      </div>
    </>
  );
}
