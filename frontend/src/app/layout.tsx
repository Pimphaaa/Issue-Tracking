export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 p-6">
        <nav className="mb-4 p-4 bg-blue-600 text-white rounded">
          <h1 className="text-xl font-bold">Issue Tracker</h1>
        </nav>
        {children}
      </body>
    </html>
  );
}
