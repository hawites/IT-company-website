import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const solutions: Record<string, { title: string; sector: string; description: string; features: string[] }> = {
  'unified-communications': {
    title: 'Unified Communications',
    sector: 'Communications',
    description:
      'Phone services with unified voice, presence, chat, mobile, and data integrations. Edge COMM-TECH delivers enterprise-grade UC solutions tailored to your organization.',
    features: [
      'Unified voice and presence',
      'Chat and collaboration',
      'Mobile integration',
      'Data and video conferencing',
    ],
  },
  'it-services': {
    title: 'IT Service / Desktop Support',
    sector: 'IT',
    description:
      'Remote and on-site IT helpdesk support for enterprise network infrastructure, servers, software, and systems. Our team ensures high availability and user productivity.',
    features: [
      'Remote and on-site support',
      'Enterprise network and server management',
      'Software and system administration',
      'Helpdesk and ticketing',
    ],
  },
  'professional-services': {
    title: 'Professional Services',
    sector: 'Consulting',
    description:
      'Expert-level certified network and system engineers specializing in design, configuration, troubleshooting, and network equipment deployment.',
    features: [
      'Network design and architecture',
      'Configuration and deployment',
      'Troubleshooting and optimization',
      'Vendor-certified engineers',
    ],
  },
  'voice-data-internet': {
    title: 'Voice / Data / Internet Services',
    sector: 'Telecom',
    description:
      'Voice, data, and internet services with a wide array of plan options. Edge COMM-TECH integrates all telecom and unified communication elements end-to-end as fully managed services.',
    features: [
      'Voice and data plans',
      'Internet connectivity',
      'Fully managed services',
      'Flexible plan options',
    ],
  },
  'networks': {
    title: 'Networks (LAN/WLAN)',
    sector: 'Networks',
    description:
      'Our network group, together with partners including Cisco, Huawei, Juniper, Dell, Microsoft and others, delivers the experience and expertise needed for enterprise LAN and WLAN.',
    features: [
      'LAN and WLAN design',
      'Cisco, Huawei, Juniper, Dell, Microsoft',
      'Enterprise wireless',
      'Network optimization',
    ],
  },
  'datacenter': {
    title: 'Datacenter Facility',
    sector: 'Infrastructure',
    description:
      'Edge COMM-TECH designs and builds data center facilities with high-quality materials, industry-leading standards, Tier III/IV architecture, and SaaS, PaaS, IaaS models.',
    features: [
      'Tier III and Tier IV design',
      'SaaS, PaaS, IaaS',
      'Industry-leading standards',
      'Advanced architecture',
    ],
  },
  'noc-soc': {
    title: 'NOC and SOC Services',
    sector: 'Operations',
    description:
      'Build carrier-grade Network Operations Center and Security Operations Center. Monitor, respond, and optimize your infrastructure and security posture.',
    features: [
      '24/7 monitoring',
      'Incident response',
      'Security operations',
      'Carrier-grade NOC/SOC',
    ],
  },
  'cybersecurity': {
    title: 'Cybersecurity',
    sector: 'Security',
    description:
      'Complete portfolio of network and data security services and a staff of security professionals to protect your organization from threats.',
    features: [
      'Network and data security',
      'Security assessments',
      'Firewall and SIEM',
      'Security professionals',
    ],
  },
  'cctv-physical-security': {
    title: 'CCTV and Physical Security',
    sector: 'Security',
    description:
      'Design and install CCTV, access control systems, gate barriers, turnstiles, and related physical security solutions for residences and organizations.',
    features: [
      'CCTV and surveillance',
      'Access control',
      'Gate barriers and turnstiles',
      'Custom solutions',
    ],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions[slug];
  if (!solution) return { title: 'Solution Not Found' };
  return { title: solution.title, description: solution.description };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = solutions[slug];
  if (!solution) notFound();

  return (
    <>
      <PageHeader
        title={solution.title}
        description={solution.sector}
        breadcrumbs={[{ label: 'Solutions', href: '/solutions' }, { label: solution.title }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-lg text-gray-600">{solution.description}</p>
            <h2 className="mt-8 text-xl font-semibold text-gray-900">Key features</h2>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
              {solution.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          <aside>
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-gray-900">Get in touch</h3>
              <p className="mt-2 text-sm text-gray-600">Discuss this solution with our team.</p>
              <Link href="/contact" className="btn-primary mt-4 block w-full text-center">
                Contact Us
              </Link>
            </div>
          </aside>
        </div>
        <div className="mt-12">
          <Link href="/solutions" className="text-primary-600 hover:underline">
            ← All Solutions
          </Link>
        </div>
      </div>
    </>
  );
}
