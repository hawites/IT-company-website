import { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';

const posts: Record<string, { title: string; category: string; date: string; author: string; excerpt: string; content: string; tags: string[] }> = {
  'future-uc-ethiopia': {
    title: 'The Future of Unified Communications in Ethiopia',
    category: 'Technology',
    date: '2024-01-20',
    author: 'Edge COMM-TECH',
    excerpt: 'How UC is transforming business communication across Ethiopia.',
    content: 'Placeholder content. In production, rich text will be loaded from Firestore.',
    tags: ['UC', 'Ethiopia'],
  },
  'cybersecurity-best-practices': {
    title: 'Cybersecurity Best Practices for Enterprises',
    category: 'Security',
    date: '2024-01-15',
    author: 'Edge COMM-TECH',
    excerpt: 'Key practices to protect your organization from threats.',
    content: 'Placeholder content. In production, rich text will be loaded from Firestore.',
    tags: ['Security', 'Enterprise'],
  },
  'tier-iii-datacenters': {
    title: 'Building Tier III Data Centers: Key Considerations',
    category: 'Infrastructure',
    date: '2024-01-10',
    author: 'Edge COMM-TECH',
    excerpt: 'What to consider when designing and building Tier III facilities.',
    content: 'Placeholder content. In production, rich text will be loaded from Firestore.',
    tags: ['Datacenter', 'Infrastructure'],
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Blog' };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return null;

  return (
    <>
      <PageHeader
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">
          {post.category} · {new Date(post.date).toLocaleDateString('en-US')} · {post.author}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700">
              {tag}
            </span>
          ))}
        </div>
        <div className="prose prose-lg mt-8 max-w-none">
          <p>{post.content}</p>
        </div>
        <div className="mt-12">
          <Link href="/blog" className="text-primary-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
