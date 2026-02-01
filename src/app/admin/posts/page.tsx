import Link from 'next/link';

export default function AdminPostsPage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Blog Posts</h1>
        <Link href="/admin/posts/new" className="btn-primary">
          New Post
        </Link>
      </div>
      <p className="mt-2 text-gray-600">
        Create and edit blog posts. Rich text editor, categories, tags, scheduling, and drafts. Wire to Firestore
        collection <code className="rounded bg-gray-100 px-1">posts</code>.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        No posts yet. Add Firestore read/write and a rich text editor (e.g. TipTap or similar) to manage posts.
      </div>
    </>
  );
}
