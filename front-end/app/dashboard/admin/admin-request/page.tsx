"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Plus } from "lucide-react" 
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const mockAdminIssues = [
  {
    id: "ISS-101",
    title: "Request for new feature",
    status: "open",
    priority: "medium",
    created: "2024-06-01",
  },
  {
    id: "ISS-102",
    title: "Bug in admin dashboard",
    status: "resolved",
    priority: "high",
    created: "2024-06-03",
  },
]

export default function AdminIssuePage() {
  const [issues, setIssues] = useState(mockAdminIssues)
  const router = useRouter()

  const handleNewRequest = () => {
    router.push("/new-request")
  }

  return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold tracking-tight">My Request 🌷</h1>
          <Button
            onClick={handleNewRequest}
            className="bg-[#0070FF] hover:bg-[#005ce0] text-white flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            คำร้องใหม่
            </Button>
      </div>

        <div className="grid gap-4">
          {issues.length === 0 ? (
            <p className="text-muted-foreground">ยังไม่มีคำร้อง</p>
          ) : (
            issues.map((issue) => (
              <Card key={issue.id}>
                <CardHeader>
                  <CardTitle>{issue.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-1">
                  <p>สถานะ: {issue.status}</p>
                  <p>ความสำคัญ: {issue.priority}</p>
                  <p>วันที่ร้องขอ: {issue.created}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
  )
}
