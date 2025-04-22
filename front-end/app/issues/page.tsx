"use client"

import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Filter, Search, Edit, Tag, User } from "lucide-react"
import DashboardLayout from "@/components/dashboard-layout"

const issues = [
  {
    id: "ISS-001",
    title: "App crashes on startup",
    status: "open",
    priority: "high",
    requester: "John Doe",
    created: "2023-05-15T10:30:00",
    dueDate: "2023-05-20T00:00:00",
    assignedTo: "Sarah Johnson",
    description: "The app crashes immediately after the splash screen on Android devices.",
  },
  {
    id: "ISS-005",
    title: "Login screen freezes",
    status: "open",
    priority: "medium",
    requester: "Emma Wilson",
    created: "2023-05-16T08:20:00",
    dueDate: "2023-05-25T00:00:00",
    assignedTo: "Michael Chen",
    description: "The login screen freezes after entering credentials on some devices.",
  },
  {
    id: "ISS-006",
    title: "Cannot reset password",
    status: "open",
    priority: "high",
    requester: "David Lee",
    created: "2023-05-16T11:45:00",
    dueDate: "2023-05-22T00:00:00",
    assignedTo: "Emily Rodriguez",
    description: "Users are not receiving password reset emails when requested.",
  },
]

export default function IssueListPage() {
  const [idSearch, setIdSearch] = useState("")
  const [titleSearch, setTitleSearch] = useState("")
  const [assigneeSearch, setAssigneeSearch] = useState("")
  const [priorityFilter, setPriorityFilter] = useState("all")
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)

  const filteredIssues = issues.filter((issue) => {
    const matchesId = issue.id.toLowerCase().includes(idSearch.toLowerCase())
    const matchesTitle = issue.title.toLowerCase().includes(titleSearch.toLowerCase())
    const matchesAssignee =
      issue.assignedTo?.toLowerCase().includes(assigneeSearch.toLowerCase()) ?? false
    const matchesPriority = priorityFilter === "all" || issue.priority === priorityFilter

    return matchesId && matchesTitle && matchesAssignee && matchesPriority
  })

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
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

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6 pl-4 mt-4">
        <div className="flex items-center justify-between py-6">
          <h1 className="text-2xl font-bold tracking-tight">Issue Assignment 👨🏻‍💻</h1>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Open Issues</CardTitle>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setIsSearchExpanded(!isSearchExpanded)}
              className="flex items-center gap-2"
            >
              <Search className="h-4 w-4" />
              {isSearchExpanded ? "Hide Search" : "Advanced Search"}
            </Button>
          </CardHeader>
          <CardContent>
            {isSearchExpanded && (
              <div className="bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium flex items-center gap-1 text-slate-500">
                      <Tag className="h-4 w-4" />
                      <span>Issue ID</span>
                    </div>
                    <Input
                      placeholder="Search by ID"
                      value={idSearch}
                      onChange={(e) => setIdSearch(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium flex items-center gap-1 text-slate-500">
                      <Search className="h-4 w-4" />
                      <span>Issue Title</span>
                    </div>
                    <Input
                      placeholder="Search by Title"
                      value={titleSearch}
                      onChange={(e) => setTitleSearch(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium flex items-center gap-1 text-slate-500">
                      <User className="h-4 w-4" />
                      <span>Assignee</span>
                    </div>
                    <Input
                      placeholder="Search by Assignee"
                      value={assigneeSearch}
                      onChange={(e) => setAssigneeSearch(e.target.value)}
                      className="bg-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm font-medium flex items-center gap-1 text-slate-500">
                      <Filter className="h-4 w-4" />
                      <span>Priority</span>
                    </div>
                    <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Filter by priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>เลขที่ใบงาน</TableHead>
                  <TableHead>เรื่อง</TableHead>
                  <TableHead>ผู้รับผิดชอบ</TableHead>
                  <TableHead>Due date</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredIssues.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center h-24">
                      No issues found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredIssues.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell>{issue.id}</TableCell>
                      <TableCell>{issue.title}</TableCell>
                      <TableCell>{issue.assignedTo ?? "Unassigned"}</TableCell>
                      <TableCell>{formatDate(issue.dueDate)}</TableCell>
                      <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                      <TableCell>{getStatusBadge(issue.status)}</TableCell>
                      <TableCell>
                        <Button asChild variant="ghost" size="icon">
                          <Link href={`/dashboard/admin/issues/${issue.id}`}>
                            <Edit className="w-4 h-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
