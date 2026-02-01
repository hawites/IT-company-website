import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Clients & Partners',
  description: 'Organizations we work with and technology partners.',
};

const clients = [
  { name: 'Bonga University' },
  { name: 'Bahir Dar University' },
  { name: 'Yekatit 12 Hospital' },
  { name: 'Mizan Tepi University' },
  { name: 'Haramaya University' },
];

const partners = [
  { name: 'Cisco' },
  { name: 'Dell' },
  { name: 'HP' },
  { name: 'Huawei' },
  { name: 'Palo Alto Networks' },
  { name: 'Tripp Lite' },
  { name: 'Vertiv' },
];

export default function ClientsPartnersPage() {
  return (
    <>
      <PageHeader
        title="Clients & Partners"
        description="Organizations we serve and technology partners we work with."
        breadcrumbs={[{ label: 'Clients & Partners' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">Our Clients</h2>
          <p className="mt-2 text-gray-600">Leading organizations across Ethiopia trust Edge COMM-TECH.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <div key={c.name} className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 shadow-sm">
                <span className="text-center font-medium text-gray-700">{c.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900">Our Partners</h2>
          <p className="mt-2 text-gray-600">We work with industry-leading technology partners.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.name} className="flex h-20 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4">
                <span className="text-center text-sm font-medium text-gray-600">{p.name}</span>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}
