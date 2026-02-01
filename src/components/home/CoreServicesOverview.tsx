import Link from 'next/link';

const services = [
  {
    title: 'Unified Communications',
    description: 'Phone services with unified voice, presence, chat, mobile, and data integrations.',
    href: '/solutions/unified-communications',
    icon: '📞',
  },
  {
    title: 'IT Service / Desktop Support',
    description: 'Remote and on-site IT helpdesk for enterprise networks, servers, and systems.',
    href: '/solutions/it-services',
    icon: '🖥️',
  },
  {
    title: 'Voice / Data / Internet',
    description: 'Wide array of plan options and fully managed telecom and unified communication services.',
    href: '/solutions/voice-data-internet',
    icon: '🌐',
  },
  {
    title: 'Networks (LAN/WLAN)',
    description: 'Design and deployment with Cisco, Huawei, Juniper, Dell, Microsoft and more.',
    href: '/solutions/networks',
    icon: '🔗',
  },
  {
    title: 'Datacenter Facility',
    description: 'Tier III/IV data centers with SaaS, PaaS, IaaS and industry-leading standards.',
    href: '/solutions/datacenter',
    icon: '🏢',
  },
  {
    title: 'Cybersecurity & NOC/SOC',
    description: 'Network and data security, NOC and SOC services, CCTV and physical security.',
    href: '/solutions/cybersecurity',
    icon: '🔒',
  },
];

export function CoreServicesOverview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Our Core Services</h2>
        <p className="section-subheading max-w-2xl">
          We are an innovative solutions provider for business technology services. Our specialized team advises,
          implements, and manages communication and information technology.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.href} href={service.href} className="card group">
              <span className="text-2xl" role="img" aria-hidden>
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary-600">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600 group-hover:underline">
                Learn more
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/solutions" className="btn-primary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
