import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Edge Communication Technologies is a leading ICT solutions provider in Ethiopia. Learn about our mission, vision, and team.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="A leading technology solution provider in Ethiopia, delivering innovative ICT solutions."
        breadcrumbs={[{ label: 'Company', href: '/company/about' }, { label: 'About Us' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>Our Mission</h2>
          <p>
            Edge Communication Technologies maintains a specialized professional service team of experts to advise,
            implement, and manage all aspects of communication and information technology for organizations across
            Ethiopia and the region.
          </p>
          <h2>What We Do</h2>
          <p>
            We are an innovative solutions provider for business technology services. From unified communications and
            enterprise networks to datacenter facilities and cybersecurity, we deliver end-to-end managed services
            tailored to our clients&apos; needs.
          </p>
          <h2>Our Approach</h2>
          <ul>
            <li>Secured solutions based on international standards</li>
            <li>Custom solutions for private residences, organizations, and factories</li>
            <li>Continuous follow-up and optimized after-sales support</li>
          </ul>
        </div>
        <div className="mt-16 flex flex-wrap gap-4">
          <Link href="/company/management" className="btn-primary">
            Meet Our Leadership
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
