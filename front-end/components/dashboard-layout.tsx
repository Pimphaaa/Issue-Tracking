"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar"
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
  Settings,
  Shield,
  User,
  Users,
} from "lucide-react"

interface DashboardLayoutProps {
  children: React.ReactNode
  role: "admin" | "staff"
}

export default function DashboardLayout({ children, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top navigation */}
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center gap-2">
          {role === "admin" ? <Shield className="h-6 w-6 text-primary" /> : <Users className="h-6 w-6 text-primary" />}
          <span className="text-lg font-semibold">
            มูลนิธิแม่ฟ้าหลวง 👩🏻
            <span className="ml-2 text-xs text-muted-foreground">{role === "admin" ? "Admin" : "Staff"}</span>
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <div className="relative">
            <Button variant="outline" className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline-block">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* ใช้ Sidebar component */}
        <Sidebar role={role} />

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:ml-64 md:p-8">{children}</main>
      </div>
    </div>
  )
}
