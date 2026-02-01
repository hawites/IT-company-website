import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Edge Communication Technologies. View open positions and apply with your CV.',
};

const jobs = [
  {
    id: '1',
    title: 'Senior Network Engineer',
    department: 'Networks',
    location: 'Addis Ababa',
    type: 'Full-time',
  },
  {
    id: '2',
    title: 'IT Support Specialist',
    department: 'IT Services',
    location: 'Addis Ababa',
    type: 'Full-time',
  },
  {
    id: '3',
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Addis Ababa',
    type: 'Full-time',
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        title="Careers"
        description="Join our team of technology experts. We are always looking for talented individuals."
        breadcrumbs={[{ label: 'Careers' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {jobs.map((job) => (
            <Link
              key={job.id}
              href={`/careers/${job.id}`}
              className="card block transition hover:border-primary-200"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {job.department} · {job.location} · {job.type}
                  </p>
                </div>
                <span className="text-sm font-medium text-primary-600">View & Apply →</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">
          Don&apos;t see a fit? Send your CV to{' '}
          <a href="mailto:hr@edgecomm-tech.com" className="text-primary-600 hover:underline">
            hr@edgecomm-tech.com
          </a>
        </p>
      </div>
    </>
  );
}
