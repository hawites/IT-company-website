import { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { InquiryForm } from '@/components/forms/InquiryForm';

export const metadata: Metadata = {
  title: 'Inquiry',
  description: 'Submit a business or solution inquiry to Edge Communication Technologies.',
};

export default function InquiryPage() {
  return (
    <>
      <PageHeader
        title="Business Inquiry"
        description="Tell us about your project or requirements. We'll get back to you shortly."
        breadcrumbs={[{ label: 'Contact', href: '/contact' }, { label: 'Inquiry' }]}
      />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <InquiryForm />
      </div>
    </>
  );
}
