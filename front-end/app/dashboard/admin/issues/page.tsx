"use client"

import { useState } from "react"
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
import { ChevronDown, Edit, X } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface Issue {
  id: string;
  title: string;
  status: string;
  priority: string;
  requester: string;
  created: string;
  dueDate: string;
  assignedTo: string;
  description: string;
}

interface FilterState {
  id: string;
  title: string;
  assignedTo: string;
  priority: string;
  status: string;
}

const issues: Issue[] = [
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
  const [filters, setFilters] = useState<FilterState>({
    id: "",
    title: "",
    assignedTo: "",
    priority: "all",
    status: "all"
  })

  const updateFilter = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const clearFilter = (key: keyof FilterState) => {
    setFilters(prev => ({
      ...prev,
      [key]: key === "priority" || key === "status" ? "all" : ""
    }))
  }

  const filteredIssues = issues.filter((issue) => {
    const matchesId = issue.id.toLowerCase().includes(filters.id.toLowerCase())
    const matchesTitle = issue.title.toLowerCase().includes(filters.title.toLowerCase())
    const matchesAssignee = filters.assignedTo === "" || 
      (issue.assignedTo?.toLowerCase().includes(filters.assignedTo.toLowerCase()) ?? false)
    const matchesPriority = filters.priority === "all" || issue.priority === filters.priority
    const matchesStatus = filters.status === "all" || issue.status === filters.status

    return matchesId && matchesTitle && matchesAssignee && matchesPriority && matchesStatus
  })

  const formatDate = (dateString: string) => {
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

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== "" && value !== "all"
  )

  return (
    <div>
      <div className="flex items-center justify-between py-6">
        <h1 className="text-2xl font-bold tracking-tight">Issue Assignment 👨🏻‍💻</h1>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setFilters({
              id: "",
              title: "",
              assignedTo: "",
              priority: "all",
              status: "all"
            })}
            className="flex items-center gap-1 text-sm"
          >
            <X className="h-3 w-3" />
            Clear all filters
          </Button>
        )}
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Open Issues</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1 -ml-3 font-medium">
                        เลขที่ใบงาน
                        <ChevronDown className="h-3 w-3" />
                        {filters.id && <Badge variant="secondary" className="ml-1">{filters.id}</Badge>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 p-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Filter by ID</p>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Search ID"
                            value={filters.id}
                            onChange={(e) => updateFilter("id", e.target.value)}
                            className="h-8"
                          />
                          {filters.id && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8" 
                              onClick={() => clearFilter("id")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1 -ml-3 font-medium">
                        เรื่อง
                        <ChevronDown className="h-3 w-3" />
                        {filters.title && <Badge variant="secondary" className="ml-1">{filters.title}</Badge>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 p-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Filter by Title</p>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Search title"
                            value={filters.title}
                            onChange={(e) => updateFilter("title", e.target.value)}
                            className="h-8"
                          />
                          {filters.title && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8" 
                              onClick={() => clearFilter("title")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1 -ml-3 font-medium">
                        ผู้รับผิดชอบ
                        <ChevronDown className="h-3 w-3" />
                        {filters.assignedTo && <Badge variant="secondary" className="ml-1">{filters.assignedTo}</Badge>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-60 p-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Filter by Assignee</p>
                        <div className="flex gap-2">
                          <Input
                            placeholder="Search assignee"
                            value={filters.assignedTo}
                            onChange={(e) => updateFilter("assignedTo", e.target.value)}
                            className="h-8"
                          />
                          {filters.assignedTo && (
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8" 
                              onClick={() => clearFilter("assignedTo")}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead>Due date</TableHead>

                <TableHead>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1 -ml-3 font-medium">
                        Priority
                        <ChevronDown className="h-3 w-3" />
                        {filters.priority !== "all" && (
                          <Badge variant="secondary" className="ml-1">
                            {filters.priority}
                          </Badge>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-36 p-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Filter by Priority</p>
                        <Select value={filters.priority} onValueChange={(value) => updateFilter("priority", value)}>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 flex gap-1 -ml-3 font-medium">
                        Status
                        <ChevronDown className="h-3 w-3" />
                        {filters.status !== "all" && (
                          <Badge variant="secondary" className="ml-1">
                            {filters.status}
                          </Badge>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-36 p-3">
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Filter by Status</p>
                        <Select value={filters.status} onValueChange={(value) => updateFilter("status", value)}>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="open">Open</SelectItem>
                            {/* Add more status options as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableHead>

                <TableHead>Action</TableHead>
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
                    <TableCell>{issue.id}</TableCell>
                    <TableCell>{issue.title}</TableCell>
                    <TableCell>{issue.assignedTo ?? "Unassigned"}</TableCell>
                    <TableCell>{formatDate(issue.dueDate)}</TableCell>
                    <TableCell>{getPriorityBadge(issue.priority)}</TableCell>
                    <TableCell>{getStatusBadge(issue.status)}</TableCell>
                    <TableCell>
                      <Button asChild variant="ghost" size="icon">
                        <Link href={`/dashboard/admin/issues/${issue.id}`}>
                          <Edit className="w-4 w-4" />
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
  )
}