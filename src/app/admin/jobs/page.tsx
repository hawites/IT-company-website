export default function AdminJobsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Careers / Job Listings</h1>
      <p className="mt-2 text-gray-600">
        Manage job listings and view applications. HR and Admin roles. Wire to Firestore{' '}
        <code className="rounded bg-gray-100 px-1">jobs</code> and <code className="rounded bg-gray-100 px-1">applications</code>.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add CRUD for jobs and list view for applications (with CV links from Storage).
      </div>
    </>
  );
}
