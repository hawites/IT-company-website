export default function AdminResourcesPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Resources</h1>
      <p className="mt-2 text-gray-600">
        Manage news, press releases, success stories, and events. Wire to Firestore collection{' '}
        <code className="rounded bg-gray-100 px-1">resources</code>.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add CRUD UI and Firestore integration for resources by type (news, press, success-story, event).
      </div>
    </>
  );
}
