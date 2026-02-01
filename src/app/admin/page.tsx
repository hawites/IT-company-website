import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Content management for Edge COMM-TECH.',
};

export default function AdminDashboardPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Manage content for Edge Communication Technologies. Role-based access (Admin, Editor, HR, Marketing) is
        enforced via Firebase Auth and Firestore security rules.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/posts" className="card block">
          <h3 className="font-semibold text-gray-900">Blog Posts</h3>
          <p className="mt-1 text-sm text-gray-600">Create and edit blog posts, categories, tags.</p>
        </Link>
        <Link href="/admin/resources" className="card block">
          <h3 className="font-semibold text-gray-900">Resources</h3>
          <p className="mt-1 text-sm text-gray-600">News, press releases, success stories, events.</p>
        </Link>
        <Link href="/admin/projects" className="card block">
          <h3 className="font-semibold text-gray-900">Projects</h3>
          <p className="mt-1 text-sm text-gray-600">Portfolio and project details.</p>
        </Link>
        <Link href="/admin/jobs" className="card block">
          <h3 className="font-semibold text-gray-900">Careers</h3>
          <p className="mt-1 text-sm text-gray-600">Job listings and applications (HR role).</p>
        </Link>
        <Link href="/admin/team" className="card block">
          <h3 className="font-semibold text-gray-900">Executive Management</h3>
          <p className="mt-1 text-sm text-gray-600">Profile bios and team.</p>
        </Link>
        <Link href="/admin/clients" className="card block">
          <h3 className="font-semibold text-gray-900">Clients & Partners</h3>
          <p className="mt-1 text-sm text-gray-600">Logos and details.</p>
        </Link>
        <Link href="/admin/media" className="card block">
          <h3 className="font-semibold text-gray-900">Media Library</h3>
          <p className="mt-1 text-sm text-gray-600">Upload and manage images/files.</p>
        </Link>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        To enable CMS: configure Firebase (Auth, Firestore, Storage), add admin users and custom claims for roles, then
        implement login and Firestore reads/writes in these pages.
      </p>
    </>
  );
}
