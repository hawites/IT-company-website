'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const sectors = ['All', 'Education', 'Healthcare', 'Government', 'Enterprise', 'Telecom'];

const projects = [
  { id: '1', title: 'Bonga University Network & UC', client: 'Bonga University', sector: 'Education', year: '2024', slug: 'bonga-university' },
  { id: '2', title: 'Bahir Dar University Infrastructure', client: 'Bahir Dar University', sector: 'Education', year: '2024', slug: 'bahir-dar-university' },
  { id: '3', title: 'Yekatit 12 Hospital IT & Security', client: 'Yekatit 12 Hospital', sector: 'Healthcare', year: '2023', slug: 'yekatit-12-hospital' },
  { id: '4', title: 'Mizan Tepi University Campus Network', client: 'Mizan Tepi University', sector: 'Education', year: '2023', slug: 'mizan-tepi-university' },
  { id: '5', title: 'Haramaya University Datacenter', client: 'Haramaya University', sector: 'Education', year: '2023', slug: 'haramaya-university' },
  { id: '6', title: 'Enterprise NOC/SOC Deployment', client: 'Confidential', sector: 'Enterprise', year: '2023', slug: 'enterprise-noc-soc' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.sector === filter);

  return (
    <>
      <PageHeader
        title="Projects"
        description="Our portfolio of successful implementations across Ethiopia."
        breadcrumbs={[{ label: 'Projects' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setFilter(s)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === s ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="card group overflow-hidden"
            >
              <div className="aspect-video rounded-lg bg-gray-200" />
              <h3 className="mt-4 font-semibold text-gray-900 group-hover:text-primary-600">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{project.client}</p>
              <p className="mt-2 text-xs text-gray-500">{project.sector} · {project.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
