import type { Metadata } from "next"
import StaffDashboard from "@/components/staff-dashboard"

export const metadata: Metadata = {
  title: "Staff Dashboard - Issue Tracking System",
  description: "Staff Dashboard for the Issue Tracking System",
}

export default function StaffDashboardPage() {
  return <StaffDashboard />
}

