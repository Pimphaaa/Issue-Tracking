"use client"

import { useState } from "react"
import StaffSidebar from "@/components/sidebar/StaffSidebar"
import DashboardHeader from "@/components/DashboardHeader"

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen flex-col" style={{ backgroundColor: "#F3F7FA" }}>
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role="staff" />

      <div className="flex flex-1">
        <StaffSidebar sidebarOpen={sidebarOpen} />
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
