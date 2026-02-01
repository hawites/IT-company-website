import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ConditionalLayout } from '@/components/layout/ConditionalLayout';
import { AnalyticsScript } from '@/components/analytics/AnalyticsScript';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Edge Communication Technologies | ICT Solutions Provider in Ethiopia',
    template: '%s | Edge COMM-TECH',
  },
  description:
    'Edge Communication Technologies is a leading technology solution provider in Ethiopia. Unified Communications, IT Services, Networks, Datacenter, Cybersecurity, and more.',
  keywords: ['ICT', 'Ethiopia', 'Unified Communications', 'Networks', 'Cybersecurity', 'Datacenter', 'Edge COMM-TECH'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <ConditionalLayout>{children}</ConditionalLayout>
        <AnalyticsScript />
      </body>
    </html>
  );
}
