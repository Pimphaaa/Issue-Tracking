"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Users, Home, ClipboardList, PlusCircle, Settings } from "lucide-react"

interface SidebarProps {
  role: "admin" | "staff"
}

export default function Sidebar({ role }: SidebarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

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
    <>
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
    </>
  )
}
