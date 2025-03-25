"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  ChevronDown,
  ClipboardList,
  Home,
  LogOut,
  Menu,
  PlusCircle,
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
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  // Update the navigation array to include the new pages
  const navigation = [
    {
      name: "Dashboard",
      href: `/dashboard/${role}`,
      icon: Home,
      current: isActive(`/dashboard/${role}`),
    },
    {
      name: role === "admin" ? "Issue Assignment" : "Issues",
      href: `/dashboard/${role}/issues`,
      icon: ClipboardList,
      current: isActive(`/dashboard/${role}/issues`),
    },
    {
      name: role === "admin" ? "Staff" : "Team",
      href: `/dashboard/${role}/${role === "admin" ? "staff" : "team"}`,
      icon: Users,
      current: isActive(`/dashboard/${role}/${role === "admin" ? "staff" : "team"}`),
    },
    {
      name: "Request Issue",
      href: "/request-issue",
      icon: PlusCircle,
      current: isActive("/request-issue"),
    },
    {
      name: "Settings",
      href: `/dashboard/${role}/settings`,
      icon: Settings,
      current: isActive(`/dashboard/${role}/settings`),
    },
  ]

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
            มูลนิธิแม่ฟ้าหลวง
            <span className="ml-2 text-xs text-muted-foreground">{role === "admin" ? "Admin" : "Staff"}</span>
          </span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
            <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span className="hidden sm:inline-block">John Doe</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-20 mt-16 w-64 transform border-r bg-background transition-transform duration-200 ease-in-out md:translate-x-0 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  item.current
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Backdrop for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-10 bg-background/80 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:ml-64 md:p-8">{children}</main>
      </div>
    </div>
  )
}

