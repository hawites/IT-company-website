import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Solutions & Services',
  description: 'Unified Communications, IT Services, Networks, Datacenter, Cybersecurity, and more from Edge COMM-TECH.',
};

const services = [
  { title: 'Unified Communications', slug: 'unified-communications', sector: 'Communications', description: 'Voice, presence, chat, mobile, and data integrations.' },
  { title: 'IT Service / Desktop Support', slug: 'it-services', sector: 'IT', description: 'Remote and on-site helpdesk for enterprise infrastructure.' },
  { title: 'Professional Services', slug: 'professional-services', sector: 'Consulting', description: 'Design, configuration, and troubleshooting by certified engineers.' },
  { title: 'Voice / Data / Internet', slug: 'voice-data-internet', sector: 'Telecom', description: 'Fully managed telecom and unified communication services.' },
  { title: 'Networks (LAN/WLAN)', slug: 'networks', sector: 'Networks', description: 'Cisco, Huawei, Juniper, Dell, Microsoft and more.' },
  { title: 'Datacenter Facility', slug: 'datacenter', sector: 'Infrastructure', description: 'Tier III/IV data centers, SaaS, PaaS, IaaS.' },
  { title: 'NOC and SOC Services', slug: 'noc-soc', sector: 'Operations', description: 'Carrier-grade network and security operations centers.' },
  { title: 'Cybersecurity', slug: 'cybersecurity', sector: 'Security', description: 'Network and data security, security professionals.' },
  { title: 'CCTV and Physical Security', slug: 'cctv-physical-security', sector: 'Security', description: 'CCTV, access control, gate barriers, turnstiles.' },
];

const sectors = [...new Set(services.map((s) => s.sector))];

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        title="Solutions & Services"
        description="End-to-end managed services for communication and information technology."
        breadcrumbs={[{ label: 'Solutions' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <aside className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">By sector</h3>
            <ul className="mt-4 space-y-2">
              {sectors.map((sector) => (
                <li key={sector}>
                  <a href={`#${sector.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-gray-600 hover:text-primary-600">
                    {sector}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {sectors.map((sector) => (
                <section key={sector} id={sector.toLowerCase().replace(/\s+/g, '-')}>
                  <h2 className="text-xl font-semibold text-gray-900">{sector}</h2>
                  <div className="mt-4 space-y-4">
                    {services
                      .filter((s) => s.sector === sector)
                      .map((service) => (
                        <Link
                          key={service.slug}
                          href={`/solutions/${service.slug}`}
                          className="card block transition hover:border-primary-200"
                        >
                          <h3 className="font-semibold text-gray-900">{service.title}</h3>
                          <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                          <span className="mt-2 inline-block text-sm font-medium text-primary-600">Learn more →</span>
                        </Link>
                      ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
