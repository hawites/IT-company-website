export default function AdminMediaPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Media Library</h1>
      <p className="mt-2 text-gray-600">
        Upload and manage images/files in Firebase Storage. Use for blog, projects, team, clients.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add upload UI (Storage) and list/delete for media. Optional: store metadata in Firestore for reuse.
      </div>
    </>
  );
}
