'use client';

const placeholderLogos = [
  { name: 'Bonga University', slug: 'bonga' },
  { name: 'Bahir Dar University', slug: 'bahir-dar' },
  { name: 'Yekatit 12 Hospital', slug: 'yekatit' },
  { name: 'Mizan Tepi University', slug: 'mizan-tepi' },
  { name: 'Haramaya University', slug: 'haramaya' },
  { name: 'Client 6', slug: 'client-6' },
  { name: 'Client 7', slug: 'client-7' },
  { name: 'Client 8', slug: 'client-8' },
];

export function ClientLogosSlider() {
  return (
    <section className="border-b border-gray-200 bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading text-center">Trusted by Leading Organizations</h2>
        <p className="section-subheading mx-auto max-w-2xl text-center">
          Universities, hospitals, and enterprises across Ethiopia rely on Edge COMM-TECH for their technology needs.
        </p>
        <div className="mt-12 overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {[...placeholderLogos, ...placeholderLogos].map((client, i) => (
              <div
                key={`${client.slug}-${i}`}
                className="flex h-20 min-w-[140px] flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white px-6 shadow-sm"
              >
                <span className="text-center text-sm font-medium text-gray-500">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
