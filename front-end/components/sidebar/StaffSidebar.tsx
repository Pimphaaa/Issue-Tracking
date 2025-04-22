"use client"

import { usePathname } from "next/navigation"
import { Home, ClipboardList } from "lucide-react"
import Link from "next/link"

export default function StaffSidebar({ sidebarOpen }: { sidebarOpen: boolean }) {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const navigation = [
    { name: "Dashboard", href: "/dashboard/staff", icon: Home, current: isActive("/dashboard/staff") },
    { name: "Issues Ticket", href: "/issues", icon: ClipboardList, current: isActive("/issues") },
  ]

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-[#FFFFFF] transition-all duration-300 ${
        sidebarOpen ? "w-64" : "w-16"
      }`}
    >
      <nav className="flex flex-col gap-4 p-4">
        {navigation.map((item) => (
          <SidebarItem key={item.href} href={item.href} icon={item.icon} label={item.name} current={item.current} sidebarOpen={sidebarOpen} />
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
  current,
}: {
  href: string
  icon: React.ElementType
  label: string
  sidebarOpen: boolean
  current: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-4 p-2 text-black rounded-md transition-all duration-200 ${
        current ? "bg-[#E5EFFF]" : "hover:bg-[#E5EFFF]"
      }`}
    >
      <div className="flex h-12 w-12 items-center justify-start -ml-1">
        <Icon className="h-6 w-6" />
      </div>
      {sidebarOpen && <span className="text-left">{label}</span>}
    </Link>
  )
}
