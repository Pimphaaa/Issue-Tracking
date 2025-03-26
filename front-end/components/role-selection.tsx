"use client"

import { useRouter } from "next/navigation"
import { UserCog, Users } from "lucide-react"

export default function RoleSelection() {
  const router = useRouter()

  const handleRoleSelect = (role: "admin" | "staff") => {
    router.push(`/login?role=${role}`)
  }

  return (
    <div className="w-full max-w-lg space-y-6">
      <h2 className="text-xl font-semibold text-center">เลือกบทบาทของคุณ</h2>
      
      <div className="grid grid-cols-2 gap-6">
        {/* Admin Card */}
        <div
          className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-300 rounded-xl cursor-pointer shadow-md transition-all hover:shadow-lg hover:border-primary/50 hover:bg-primary/10"
          onClick={() => handleRoleSelect("admin")}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <UserCog className="h-8 w-8 text-primary" />
          </div>
          <p className="font-medium text-lg">Admin</p>
          <p className="text-sm text-gray-500 text-center">Assign tasks & manage the system</p>
        </div>

        {/* Staff Card */}
        <div
          className="flex flex-col items-center justify-center gap-3 p-6 border border-gray-300 rounded-xl cursor-pointer shadow-md transition-all hover:shadow-lg hover:border-primary/50 hover:bg-primary/10"
          onClick={() => handleRoleSelect("staff")}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <p className="font-medium text-lg">Staff</p>
          <p className="text-sm text-gray-500 text-center">Manage team & resolve issues</p>
        </div>
      </div>
    </div>
  )
}
