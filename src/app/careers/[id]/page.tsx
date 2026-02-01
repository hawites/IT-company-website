import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { JobApplicationForm } from '@/components/forms/JobApplicationForm';

const jobs: Record<string, { title: string; department: string; location: string; type: string; description: string; requirements: string[] }> = {
  '1': {
    title: 'Senior Network Engineer',
    department: 'Networks',
    location: 'Addis Ababa',
    type: 'Full-time',
    description:
      'Design, configure, and troubleshoot enterprise network infrastructure. Work with Cisco, Huawei, Juniper and other leading vendors. Support LAN/WLAN and datacenter networks.',
    requirements: [
      'Bachelor’s degree in Computer Science, IT, or related field',
      '5+ years of experience in network engineering',
      'CCNA/CCNP or equivalent certification preferred',
      'Strong knowledge of routing, switching, and firewall technologies',
    ],
  },
  '2': {
    title: 'IT Support Specialist',
    department: 'IT Services',
    location: 'Addis Ababa',
    type: 'Full-time',
    description:
      'Provide remote and on-site IT helpdesk support for enterprise infrastructure, servers, software, and systems. Ensure high availability and user satisfaction.',
    requirements: [
      'Degree or diploma in IT or related field',
      '2+ years of desktop support experience',
      'Experience with Windows Server, Active Directory, and common business applications',
      'Excellent communication and problem-solving skills',
    ],
  },
  '3': {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Addis Ababa',
    type: 'Full-time',
    description:
      'Support NOC/SOC operations, monitor security events, and implement security best practices. Work with firewalls, SIEM, and incident response.',
    requirements: [
      'Bachelor’s degree in Cybersecurity, IT, or related field',
      '3+ years in security operations or similar role',
      'Familiarity with Palo Alto, Cisco security products, or similar',
      'Relevant certifications (e.g., Security+, CEH) a plus',
    ],
  },
};

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const job = jobs[id];
  if (!job) return { title: 'Job Not Found' };
  return { title: job.title, description: job.description };
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const job = jobs[id];
  if (!job) notFound();

  return (
    <>
      <PageHeader
        title={job.title}
        description={`${job.department} · ${job.location} · ${job.type}`}
        breadcrumbs={[{ label: 'Careers', href: '/careers' }, { label: job.title }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-xl font-semibold text-gray-900">About the role</h2>
              <p className="mt-4 text-gray-600">{job.description}</p>
            </section>
            <section className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Requirements</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                {job.requirements.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </section>
          </div>
          <div>
            <div className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-lg font-semibold text-gray-900">Apply for this position</h3>
              <JobApplicationForm jobId={id} jobTitle={job.title} />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Link href="/careers" className="text-primary-600 hover:underline">
            ← Back to Careers
          </Link>
        </div>
      </div>
    </>
  );
}
