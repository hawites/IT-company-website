import Link from 'next/link';

const footerLinks = {
  solutions: [
    { href: '/solutions', label: 'Solutions Overview' },
    { href: '/solutions/unified-communications', label: 'Unified Communications' },
    { href: '/solutions/it-services', label: 'IT & Desktop Support' },
    { href: '/solutions/networks', label: 'Networks (LAN/WLAN)' },
    { href: '/solutions/datacenter', label: 'Datacenter' },
    { href: '/solutions/cybersecurity', label: 'Cybersecurity' },
  ],
  company: [
    { href: '/company/about', label: 'About Us' },
    { href: '/company/management', label: 'Executive Management' },
    { href: '/careers', label: 'Careers' },
  ],
  resources: [
    { href: '/resources', label: 'Resources' },
    { href: '/blog', label: 'Blog' },
    { href: '/clients-partners', label: 'Clients & Partners' },
  ],
  contact: [
    { href: '/contact', label: 'Contact' },
    { href: '/contact/inquiry', label: 'Inquiry' },
  ],
};

const contactInfo = [
  { label: 'Address', value: 'Addis Ababa, Bole Next to Ambassador Hotel, Lubaba Building 3rd Floor' },
  { label: 'Phone', value: '+251 92 255 5055 / +251 91 153 8809' },
  { label: 'Email', value: 'info@edgecomm-tech.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-primary-600">Edge</span>
              <span className="text-xl font-medium text-gray-800"> COMM-TECH</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-gray-600">
              A leading technology solution provider in Ethiopia. We advise, implement, and manage communication and
              information technology.
            </p>
            <div className="mt-6 space-y-2">
              {contactInfo.map((item) => (
                <div key={item.label} className="text-sm">
                  <span className="font-medium text-gray-700">{item.label}:</span>{' '}
                  <span className="text-gray-600">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-600 hover:text-primary-600">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Edge Communication Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
