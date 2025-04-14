"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, CheckCircle2, Clock, Filter, Search, User } from "lucide-react"
import { Input } from "@/components/ui/input"
import DashboardLayout from "@/components/dashboard-layout"
import IssueDetailModal from "@/components/issue-detail-modal"

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

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedIssue, setSelectedIssue] = useState<any>(null)
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false)

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus = statusFilter === "all" || issue.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Open
          </Badge>
        )
      case "assigned":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Assigned
          </Badge>
        )
      case "in_progress":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            In Progress
          </Badge>
        )
      case "resolved":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Resolved
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge variant="secondary">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleViewIssue = (issue: any) => {
    setSelectedIssue(issue)
    setIsIssueModalOpen(true)
  }

  const handleAssignIssue = (issueId: string, staffId: string) => {
    // In a real app, you would call your API here
    console.log(`Assigning issue ${issueId} to staff ${staffId}`)

    // For demo purposes, we'll update the local state
    const updatedIssues = issues.map((issue) => {
      if (issue.id === issueId) {
        const staffMember = staffMembers.find((s) => s.id.toString() === staffId)
        return {
          ...issue,
          assignedTo: staffMember?.name,
          status: "assigned",
        }
      }
      return issue
    })

    // In a real app, you would update your state with the response from the API
    // setIssues(updatedIssues);
    setIsIssueModalOpen(false)
  }

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-6">
        <div className="py-10 flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard 👩🏻</h1>
        </div>

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

        <Tabs defaultValue="issues" className="w-full">
          <TabsList>
            <TabsTrigger value="issues">Issue Requests</TabsTrigger>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
          </TabsList>
          <TabsContent value="issues" className="space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search issues..."
                  className="w-full pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="assigned">Assigned</SelectItem>
                    <SelectItem value="in_progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Priority</TableHead>
                      <TableHead>Requester</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Assigned To</TableHead>
                      <TableHead className="w-[80px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredIssues.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={8} className="text-center h-24">
                          No issues found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredIssues.map((issue) => (
                        <TableRow key={issue.id}>
                          <TableCell className="font-medium">{issue.id}</TableCell>
                          <TableCell>{issue.title}</TableCell>
                          <TableCell>{getStatusBadge(issue.status)}</TableCell>
                          <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                          <TableCell>{issue.requester}</TableCell>
                          <TableCell>{formatDate(issue.created)}</TableCell>
                          <TableCell>
                            {issue.assignedTo || (
                              <Select>
                                <SelectTrigger className="w-[140px]">
                                  <SelectValue placeholder="Assign" />
                                </SelectTrigger>
                                <SelectContent>
                                  {staffMembers.map((staff) => (
                                    <SelectItem key={staff.id} value={staff.name}>
                                      {staff.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" onClick={() => handleViewIssue(issue)}>
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="staff" className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">Staff Members</h2>
              <Button>Add Staff Member</Button>
            </div>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Active Issues</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {staffMembers.map((staff) => (
                      <TableRow key={staff.id}>
                        <TableCell className="font-medium">{staff.id}</TableCell>
                        <TableCell>{staff.name}</TableCell>
                        <TableCell>{staff.department}</TableCell>
                        <TableCell>
                          {issues.filter((i) => i.assignedTo === staff.name && i.status !== "resolved").length}
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        {selectedIssue && (
          <IssueDetailModal
            issue={selectedIssue}
            isOpen={isIssueModalOpen}
            onClose={() => setIsIssueModalOpen(false)}
            role="admin"
            staffMembers={staffMembers}
            onAssign={handleAssignIssue}
          />
        )}
      </div>
    </DashboardLayout>
  )
}

