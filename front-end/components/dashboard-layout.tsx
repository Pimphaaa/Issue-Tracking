"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar"
import DashboardHeader from "@/components/DashboardHeader"
import { Menu } from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "staff"
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader role={role} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar role={role} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:ml-64 md:p-8">{children}</main>
      </div>
    </div>
  )
}
