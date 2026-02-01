import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const projects: Record<
  string,
  { title: string; client: string; sector: string; year: string; scope: string; technologies: string[]; summary: string }
> = {
  'bonga-university': {
    title: 'Bonga University Network & Unified Communications',
    client: 'Bonga University',
    sector: 'Education',
    year: '2024',
    scope: 'Campus-wide LAN/WLAN, unified communications, and internet connectivity.',
    technologies: ['Cisco', 'Unified Communications', 'WLAN', 'Firewall'],
    summary:
      'Edge COMM-TECH designed and deployed a campus-wide network and unified communications solution for Bonga University, enabling reliable connectivity and collaboration across the institution.',
  },
  'bahir-dar-university': {
    title: 'Bahir Dar University Infrastructure',
    client: 'Bahir Dar University',
    sector: 'Education',
    year: '2024',
    scope: 'Network infrastructure, datacenter support, and IT services.',
    technologies: ['Cisco', 'Huawei', 'Datacenter', 'NOC'],
    summary:
      'Comprehensive infrastructure upgrade including network design, datacenter support, and NOC services for Bahir Dar University.',
  },
  'yekatit-12-hospital': {
    title: 'Yekatit 12 Hospital IT & Security',
    client: 'Yekatit 12 Hospital',
    sector: 'Healthcare',
    year: '2023',
    scope: 'IT infrastructure, cybersecurity, CCTV, and access control.',
    technologies: ['Cybersecurity', 'CCTV', 'Access Control', 'Network'],
    summary:
      'Full IT and physical security solution for Yekatit 12 Hospital, including network, cybersecurity, and CCTV deployment.',
  },
  'mizan-tepi-university': {
    title: 'Mizan Tepi University Campus Network',
    client: 'Mizan Tepi University',
    sector: 'Education',
    year: '2023',
    scope: 'Campus LAN/WLAN and internet services.',
    technologies: ['LAN', 'WLAN', 'Internet', 'Firewall'],
    summary: 'Campus network and internet services for Mizan Tepi University.',
  },
  'haramaya-university': {
    title: 'Haramaya University Datacenter',
    client: 'Haramaya University',
    sector: 'Education',
    year: '2023',
    scope: 'Datacenter design and implementation.',
    technologies: ['Datacenter', 'Tier III', 'Networking', 'Storage'],
    summary: 'Datacenter facility design and implementation for Haramaya University.',
  },
  'enterprise-noc-soc': {
    title: 'Enterprise NOC/SOC Deployment',
    client: 'Confidential',
    sector: 'Enterprise',
    year: '2023',
    scope: 'Network and Security Operations Center build-out.',
    technologies: ['NOC', 'SOC', 'SIEM', 'Monitoring'],
    summary: 'Carrier-grade NOC and SOC deployment for a large enterprise client.',
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return { title: 'Project Not Found' };
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <>
      <PageHeader
        title={project.title}
        description={`${project.client} · ${project.sector} · ${project.year}`}
        breadcrumbs={[{ label: 'Projects', href: '/projects' }, { label: project.title }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-xl bg-gray-200" />
            <p className="mt-6 text-gray-600">{project.summary}</p>
            <h2 className="mt-8 text-xl font-semibold text-gray-900">Scope</h2>
            <p className="mt-2 text-gray-600">{project.scope}</p>
            <h2 className="mt-6 text-xl font-semibold text-gray-900">Technologies</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <aside>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Project details</h3>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="text-gray-500">Client</dt>
                  <dd className="font-medium text-gray-900">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Sector</dt>
                  <dd className="font-medium text-gray-900">{project.sector}</dd>
                </div>
                <div>
                  <dt className="text-gray-500">Year</dt>
                  <dd className="font-medium text-gray-900">{project.year}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
        <div className="mt-12">
          <Link href="/projects" className="text-primary-600 hover:underline">
            ← All Projects
          </Link>
        </div>
      </div>
    </>
  );
}
