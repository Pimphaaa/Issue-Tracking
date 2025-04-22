"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, ChevronDown, Menu, User, LogOut } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface DashboardHeaderProps {
  role: "admin" | "staff"
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export default function DashboardHeader({ role, sidebarOpen, setSidebarOpen }: DashboardHeaderProps) {
  const router = useRouter()

const handleLogout = () => {
  console.log("Logging out...")
  router.replace("/")
}



  return (
    <header className="fixed top-0 left-0 w-full z-10 flex h-16 items-center gap-4 border-b bg-[#242532] px-4 sm:px-6">
      <Button variant="ghost" size="icon" className="text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <Menu className="h-8 w-8" />
      </Button>

      <div className="flex items-center gap-2">
        <Image src="/logo-mfl.png" alt="Logo MFU Foundation" width={60} height={60} className="h-10 w-10" />
        <span className="text-lg font-semibold text-white">
          มูลนิธิแม่ฟ้าหลวง
          <span className="ml-2 text-xs text-gray-400">{role === "admin" ? "Admin" : "Staff"}</span>
        </span>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-white hover:bg-gray-700">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
        </Button>

        {/* ปุ่มโปรไฟล์พร้อม Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 text-white hover:bg-gray-700">
              <User className="h-5 w-5" />
              <span className="hidden sm:inline-block">John Doe</span>
              <ChevronDown className="h-4 w-4 text-white" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
