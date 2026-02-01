export default function AdminProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
      <p className="mt-2 text-gray-600">
        Manage portfolio projects. Wire to Firestore collection <code className="rounded bg-gray-100 px-1">projects</code> and Storage for images.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add CRUD UI and Firestore/Storage integration for projects.
      </div>
    </>
  );
}
