"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import DashboardHeader from "@/components/DashboardHeader"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "staff"
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true) // เปิด sidebar เริ่มต้น

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} role={role} />

      <div className="flex flex-1">
        <Sidebar role={role} sidebarOpen={sidebarOpen} />
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
