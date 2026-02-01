import { HeroBanner } from '@/components/home/HeroBanner';
import { QuickLinks } from '@/components/home/QuickLinks';
import { ClientLogosSlider } from '@/components/home/ClientLogosSlider';
import { CoreServicesOverview } from '@/components/home/CoreServicesOverview';

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <QuickLinks />
      <ClientLogosSlider />
      <CoreServicesOverview />
    </>
  );
}
