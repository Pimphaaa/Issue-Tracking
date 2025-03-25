"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Filter, Search } from "lucide-react"
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
    id: "ISS-005",
    title: "Login screen freezes",
    status: "open",
    priority: "medium",
    requester: "Emma Wilson",
    created: "2023-05-16T08:20:00",
    assignedTo: null,
    description: "The login screen freezes after entering credentials on some devices.",
  },
  {
    id: "ISS-006",
    title: "Cannot reset password",
    status: "open",
    priority: "high",
    requester: "David Lee",
    created: "2023-05-16T11:45:00",
    assignedTo: null,
    description: "Users are not receiving password reset emails when requested.",
  },
]

const staffMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    department: "Technical Support",
    activeIssues: 3,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Michael Chen",
    department: "Customer Service",
    activeIssues: 5,
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    department: "IT",
    activeIssues: 2,
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function IssueAssignment() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [selectedIssue, setSelectedIssue] = useState<any>(null)
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false)

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.id.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesPriority = priorityFilter === "all" || issue.priority === priorityFilter

    return matchesSearch && matchesPriority && issue.status === "open"
  })

  const handleViewIssue = (issue: any) => {
    setSelectedIssue(issue)
    setIsIssueModalOpen(true)
  }

  const handleAssignIssue = (issueId: string, staffId: string) => {
    // In a real app, you would call your API here
    console.log(`Assigning issue ${issueId} to staff ${staffId}`)

    // For demo purposes, we'll just log it
    // In a real app, you would update your state with the response from the API
    setIsIssueModalOpen(false)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Open
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Issue Assignment</h1>
        <p className="text-muted-foreground">Assign open issues to staff members</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Open Issues</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
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
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Requester</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIssues.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center h-24">
                      No open issues found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredIssues.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell className="font-medium">{issue.id}</TableCell>
                      <TableCell>{issue.title}</TableCell>
                      <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                      <TableCell>{issue.requester}</TableCell>
                      <TableCell>{formatDate(issue.created)}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm" onClick={() => handleViewIssue(issue)}>
                          View & Assign
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Staff Workload</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {staffMembers.map((staff) => (
                <div key={staff.id} className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={staff.avatar} alt={staff.name} />
                    <AvatarFallback>{staff.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{staff.name}</p>
                      <span className="text-sm text-muted-foreground">{staff.activeIssues} active</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{staff.department}</p>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className={`h-2 rounded-full ${
                          staff.activeIssues > 4
                            ? "bg-destructive"
                            : staff.activeIssues > 2
                              ? "bg-amber-500"
                              : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(staff.activeIssues * 10, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

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
  )
}

