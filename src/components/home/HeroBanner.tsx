import Link from 'next/link';

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Innovative ICT Solutions for Your Business
          </h1>
          <p className="mt-6 text-lg text-primary-100 sm:text-xl">
            Edge Communication Technologies is a leading technology solution provider in Ethiopia. We advise,
            implement, and manage all aspects of communication and information technology.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/solutions" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="btn-secondary border-white text-white hover:bg-white/10 hover:border-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
