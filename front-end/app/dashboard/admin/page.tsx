import type { Metadata } from "next"
import AdminDashboard from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard - Issue Tracking System",
  description: "Admin Dashboard for the Issue Tracking System",
}

export default function AdminDashboardPage() {
  return <AdminDashboard />
}

