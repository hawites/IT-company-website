export default function AdminClientsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Clients & Partners</h1>
      <p className="mt-2 text-gray-600">
        Manage client and partner logos. Wire to Firestore collection{' '}
        <code className="rounded bg-gray-100 px-1">clients_partners</code> and Storage for logos.
      </p>
      <div className="mt-6 rounded-lg border border-gray-200 p-4 text-sm text-gray-500">
        Add CRUD for clients/partners and logo upload.
      </div>
    </>
  );
}
