"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Clock, User } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"
import IssueDetailModal from "@/components/issue-detail-modal"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"


// Mock data
const issues = [
  {
    id: "ISS-001",
    title: "App crashes on startup",
    status: "open",
    priority: "high",
    requester: "John Doe",
    created: "2023-05-15T10:30:00",
    assignedTo: null,
    description: "The app crashes immediately after the splash screen on Android devices.",
  },
  {
    id: "ISS-002",
    title: "Cannot upload profile picture",
    status: "assigned",
    priority: "medium",
    requester: "Jane Smith",
    created: "2023-05-14T09:15:00",
    assignedTo: "Staff 1",
    description: "When trying to upload a profile picture, the app freezes and then crashes.",
  },
  {
    id: "ISS-003",
    title: "Payment processing error",
    status: "in_progress",
    priority: "high",
    requester: "Bob Johnson",
    created: "2023-05-13T14:45:00",
    assignedTo: "Staff 2",
    description: "Users are getting an error message when trying to process payments through the app.",
  },
  {
    id: "ISS-004",
    title: "Notification not working",
    status: "resolved",
    priority: "low",
    requester: "Alice Brown",
    created: "2023-05-12T11:20:00",
    assignedTo: "Staff 1",
    description: "Push notifications are not being received on iOS devices.",
  },
]

const staffMembers = [
  { id: 1, name: "Staff 1", department: "Technical Support" },
  { id: 2, name: "Staff 2", department: "Customer Service" },
  { id: 3, name: "Staff 3", department: "IT" },
]

const performanceData = [
  { name: "Total", value: issues.length },
  { name: "Open", value: issues.filter((i) => i.status === "open").length },
  { name: "In Progress", value: issues.filter((i) => i.status === "in_progress" || i.status === "assigned").length },
  { name: "Resolved", value: issues.filter((i) => i.status === "resolved").length },
]


export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIssue, setSelectedIssue] = useState<any>(null)
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false)

  const today = new Date().toISOString().split("T")[0]
  const todayIssues = issues.filter((i) => i.created.startsWith(today))

  const handleViewIssue = (issue: any) => {
    setSelectedIssue(issue)
    setIsIssueModalOpen(true)
  }

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-6">
        <div className="py-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard 👩🏻</h1>
        </div>

        {/* Performance Analytics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{issues.length}</div>
              <p className="text-xs text-muted-foreground">+2 from yesterday</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Issues</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{issues.filter((i) => i.status === "open").length}</div>
              <p className="text-xs text-muted-foreground">Waiting for assignment</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {issues.filter((i) => i.status === "in_progress" || i.status === "assigned").length}
              </div>
              <p className="text-xs text-muted-foreground">Being handled by staff</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Resolved</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{issues.filter((i) => i.status === "resolved").length}</div>
              <p className="text-xs text-muted-foreground">Completed issues</p>
            </CardContent>
          </Card>
        </div>

        {/* Today New Ticket */}
        <div className="space-y-4">
          <h1 className="text-xl font-semibold">Today New Ticket</h1>
          {todayIssues.length === 0 ? (
            <p className="text-muted-foreground">No new tickets today</p>
          ) : (
            todayIssues.map((issue) => (
              <Card key={issue.id}>
                <CardHeader>
                  <CardTitle>{issue.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">{issue.description}</p>
                  <div className="flex gap-2 items-center text-sm">
                    <span>Status: {issue.status}</span>
                    <span className="ml-4">Priority: {issue.priority}</span>
                    <Button size="sm" variant="ghost" onClick={() => handleViewIssue(issue)}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {selectedIssue && (
          <IssueDetailModal
            issue={selectedIssue}
            isOpen={isIssueModalOpen}
            onClose={() => setIsIssueModalOpen(false)}
            role="admin"
            staffMembers={staffMembers}
            onAssign={(id, staffId) => {
              console.log(`Assigning ${id} to ${staffId}`)
              setIsIssueModalOpen(false)
            }}
          />
        )}
      </div>
    </DashboardLayout>
  )
}
