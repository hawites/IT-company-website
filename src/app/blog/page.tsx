import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights and updates from Edge Communication Technologies.',
};

const posts = [
  { id: '1', title: 'The Future of Unified Communications in Ethiopia', category: 'Technology', date: '2024-01-20', slug: 'future-uc-ethiopia', tags: ['UC', 'Ethiopia'] },
  { id: '2', title: 'Cybersecurity Best Practices for Enterprises', category: 'Security', date: '2024-01-15', slug: 'cybersecurity-best-practices', tags: ['Security', 'Enterprise'] },
  { id: '3', title: 'Building Tier III Data Centers: Key Considerations', category: 'Infrastructure', date: '2024-01-10', slug: 'tier-iii-datacenters', tags: ['Datacenter', 'Infrastructure'] },
];

const categories = ['All', 'Technology', 'Security', 'Infrastructure', 'Networks'];

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights and updates from our team."
        breadcrumbs={[{ label: 'Blog' }]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === 'All' ? '/blog' : `/blog?category=${cat.toLowerCase()}`}
              className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-700"
            >
              {cat}
            </Link>
          ))}
        </div>
        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="card block transition hover:border-primary-200"
            >
              <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
              <p className="mt-2 text-sm text-gray-500">
                {post.category} · {new Date(post.date).toLocaleDateString('en-US')}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
