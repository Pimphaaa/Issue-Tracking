"use client"

import { usePathname } from "next/navigation"
import { Home, ClipboardList, Users, PlusCircle, Settings } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  role: "admin" | "staff"
  sidebarOpen: boolean
}

export default function Sidebar({ role, sidebarOpen }: SidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const navigation = [
    { name: "Dashboard", href: `/dashboard/${role}`, icon: Home, current: isActive(`/dashboard/${role}`) },
    { name: role === "admin" ? "Issue Assignment" : "Issues", href: `/dashboard/${role}/issues`, icon: ClipboardList, current: isActive(`/dashboard/${role}/issues`) },
    { name: role === "admin" ? "Staff" : "Team", href: `/dashboard/${role}/${role === "admin" ? "staff" : "team"}`, icon: Users, current: isActive(`/dashboard/${role}/${role === "admin" ? "staff" : "team"}`) },
    { name: "Request Issue", href: "/request-issue", icon: PlusCircle, current: isActive("/request-issue") },
    { name: "Settings", href: `/dashboard/${role}/settings`, icon: Settings, current: isActive(`/dashboard/${role}/settings`) },
  ]

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#1E1F29] transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <nav className="flex flex-col gap-4 p-4">
        {navigation.map((item) => (
          <SidebarItem key={item.href} href={item.href} icon={item.icon} label={item.name} sidebarOpen={sidebarOpen} active={item.current} />
        ))}
      </nav>
    </aside>
  )
}

function SidebarItem({
  href,
  icon: Icon,
  label,
  sidebarOpen,
  active,
}: {
  href: string
  icon: React.ElementType
  label: string
  sidebarOpen: boolean
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-2 text-white rounded-md transition-all duration-200 ${
        active ? "bg-gray-700" : "hover:bg-gray-800"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <Icon className="h-6 w-6" />
      </div>
      {sidebarOpen && <span>{label}</span>}
    </Link>
  )
}
