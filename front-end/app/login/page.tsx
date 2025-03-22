import type { Metadata } from "next"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Login - Issue Tracking System",
  description: "Login to the Issue Tracking System",
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { role?: string }
}) {
  const role = searchParams.role === "admin" ? "admin" : "staff"

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-muted-foreground mt-2">Login as {role === "admin" ? "Administrator" : "Staff Member"}</p>
        </div>
        <LoginForm role={role as "admin" | "staff"} />
      </div>
    </div>
  )
}

