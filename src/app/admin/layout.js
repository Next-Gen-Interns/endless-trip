export default function AdminLayout({ children }) {
  return (
    <>
      {/* HEADER */}
      <header className="bg-[#4b1d63] text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-medium">Admin Dashboard</h1>
          <button className="bg-[#f97316] px-4 py-2 rounded-md font-semibold">
            Logout
          </button>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </>
  );
}
