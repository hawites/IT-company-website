import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import type { Executive } from '@/types';

export const metadata: Metadata = {
  title: 'Executive Management',
  description: 'Meet the leadership team at Edge Communication Technologies.',
};

const executives: Executive[] = [
  {
    id: '1',
    name: 'Executive Name One',
    title: 'Chief Executive Officer',
    bio: 'Leading Edge COMM-TECH with over 15 years of experience in ICT and telecommunications. Focused on delivering innovative solutions across Ethiopia and the region.',
    order: 1,
  },
  {
    id: '2',
    name: 'Executive Name Two',
    title: 'Chief Technology Officer',
    bio: 'Expert in network design, datacenter architecture, and cybersecurity. Ensures our solutions meet international standards and client requirements.',
    order: 2,
  },
  {
    id: '3',
    name: 'Executive Name Three',
    title: 'Director of Operations',
    bio: 'Oversees service delivery, NOC/SOC operations, and client support. Committed to continuous improvement and after-sales excellence.',
    order: 3,
  },
];

export default function ManagementPage() {
  return (
    <>
      <PageHeader
        title="Executive Management"
        description="Our leadership team brings deep expertise in ICT and telecommunications."
        breadcrumbs={[{ label: 'Company', href: '/company/about' }, { label: 'Executive Management' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <article key={exec.id} className="card">
              <div className="h-48 rounded-lg bg-gray-200" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{exec.name}</h3>
              <p className="text-primary-600">{exec.title}</p>
              <p className="mt-4 text-sm text-gray-600">{exec.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
