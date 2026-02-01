export default function AdminTeamPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Executive Management</h1>
      <p className="mt-2 text-gray-600">
        Manage team profiles and bios. Wire to Firestore collection <code className="rounded bg-gray-100 px-1">team</code>.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add CRUD for executive/team members and image upload to Storage.
      </div>
    </>
  );
}
