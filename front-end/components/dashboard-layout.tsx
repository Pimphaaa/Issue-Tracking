"use client"

import { useState } from "react"
import DashboardHeader from "@/components/DashboardHeader"
import AdminSidebar from "@/components/sidebar/AdminSidebar"
import StaffSidebar from "@/components/sidebar/StaffSidebar"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "staff"
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const renderSidebar = () => {
    switch (role) {
      case "admin":
        return <AdminSidebar sidebarOpen={sidebarOpen} />
      case "staff":
        return <StaffSidebar sidebarOpen={sidebarOpen} />
      default:
        return null
    }
  }

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#F3F7FA" }}>
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={role} />
      <div className="flex flex-1">
        {renderSidebar()}
        <main
          className={`flex-1 overflow-y-auto p-4 transition-all duration-300 md:p-8 ${
            sidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  )
}
