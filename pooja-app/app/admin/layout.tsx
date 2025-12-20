export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-4 font-semibold text-lg text-violet-500">
        Admin Dashboard
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  );
}
