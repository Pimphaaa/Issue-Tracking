"use client"

import { Button } from "@/components/ui/button"
import { Bell, ChevronDown, User } from "lucide-react"
import Image from "next/image"  // ต้อง import Image เพื่อใช้งาน

interface DashboardHeaderProps {
  role: "admin" | "staff"
}

export default function DashboardHeader({ role }: DashboardHeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex h-16 items-center gap-4 border-b bg-[#242532] px-4 sm:px-6">
      {/* โลโก้ */}
      <div className="flex items-center gap-2">
        <Image 
          src="/logo-mfl.png" 
          alt="Logo MFU Foundation" 
          width={60} 
          height={60} 
          className="h-10 w-10"
        />
        <span className="text-lg font-semibold text-white"> 
          มูลนิธิแม่ฟ้าหลวง
          <span className="ml-2 text-xs text-muted-foreground">{role === "admin" ? "Admin" : "Staff"}</span>
        </span>
      </div>

      {/* ด้านขวาของ header */}
      <div className="ml-auto flex items-center gap-4">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-primary"></span>
        </Button>
        <div className="relative">
          <Button variant="outline" className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="hidden sm:inline-block text-black"> 
              John Doe
            </span>
            <ChevronDown className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </header>
  )
}
