"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users } from "lucide-react"

export default function RoleSelection() {
  const router = useRouter()

  const handleRoleSelect = (role: "admin" | "staff") => {
    router.push(`/login?role=${role}`)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>เลือกบทบาทของคุณ</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div
          className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all border-border hover:border-primary/50 hover:bg-primary/5"
          onClick={() => handleRoleSelect("admin")}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">Admin</p>
            <p className="text-sm text-muted-foreground">Assign tasks to staff and manage the system</p>
          </div>
        </div>

        <div
          className="flex items-center gap-4 p-4 border rounded-lg cursor-pointer transition-all border-border hover:border-primary/50 hover:bg-primary/5"
          onClick={() => handleRoleSelect("staff")}
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
            <Users className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="font-medium">Staff</p>
            <p className="text-sm text-muted-foreground">Manage team and resolve assigned issues</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

