"use client"

import { Home, Settings, Users } from "lucide-react"
import Link from "next/link"

interface SidebarProps {
  role: "admin" | "staff"
  sidebarOpen: boolean
}

export default function Sidebar({ role, sidebarOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 top-0 h-full bg-[#1E1F29] transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <nav className="flex flex-col gap-4 p-4">
        <SidebarItem href="/dashboard" icon={<Home />} label="Dashboard" sidebarOpen={sidebarOpen} />
        <SidebarItem href="/users" icon={<Users />} label="Users" sidebarOpen={sidebarOpen} />
        <SidebarItem href="/settings" icon={<Settings />} label="Settings" sidebarOpen={sidebarOpen} />
      </nav>
    </aside>
  )
}

function SidebarItem({ href, icon, label, sidebarOpen }: { href: string; icon: React.ReactNode; label: string; sidebarOpen: boolean }) {
  return (
    <Link href={href} className="flex items-center gap-4 p-2 text-white hover:bg-gray-700 rounded-md">
      <div className="flex h-12 w-12 items-center justify-center">
        {icon}
      </div>
      {sidebarOpen && <span>{label}</span>}
    </Link>
  )
}
