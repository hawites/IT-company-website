import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Edge Communication Technologies. Addis Ababa, Ethiopia.',
};

const contactInfo = [
  { label: 'Address', value: 'Addis Ababa, Bole Next to Ambassador Hotel, Lubaba Building 3rd Floor' },
  { label: 'Phone', value: '+251 92 255 5055 / +251 91 153 8809' },
  { label: 'Email', value: 'info@edgecomm-tech.com' },
  { label: 'Sales', value: 'sales@edgecomm-tech.com' },
  { label: 'Support', value: 'support@edgecomm-tech.com' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team. We're here to help."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Contact information</h2>
            <ul className="mt-6 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <span className="block text-sm font-medium text-gray-500">{item.label}</span>
                  <span className="mt-1 block text-gray-900">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-xl font-semibold text-gray-900">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
