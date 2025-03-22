import RoleSelection from "../components/role-selection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Issue Tracking System</h1>
          <p className="text-muted-foreground mt-2">มูลนิธิแม่ฟ้าหลวง ในพระบรมราชูปถัมภ์</p>
        </div>
        <RoleSelection />
      </div>
    </main>
  )
}

