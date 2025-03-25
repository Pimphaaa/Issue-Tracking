"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, User, AlertCircle, CheckCircle2 } from "lucide-react"

interface IssueDetailModalProps {
  issue: any
  isOpen: boolean
  onClose: () => void
  role: "admin" | "staff"
  staffMembers?: any[]
  onAssign?: (issueId: string, staffId: string) => void
  onStatusChange?: (issueId: string, status: string) => void
  onAddComment?: (issueId: string, comment: string) => void
}

export default function IssueDetailModal({
  issue,
  isOpen,
  onClose,
  role,
  staffMembers = [],
  onAssign,
  onStatusChange,
  onAddComment,
}: IssueDetailModalProps) {
  const [selectedStaff, setSelectedStaff] = useState<string>("")
  const [newStatus, setNewStatus] = useState<string>(issue?.status || "")
  const [comment, setComment] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("details")

  // Mock comments data
  const comments = [
    {
      id: 1,
      user: "John Doe",
      role: "Admin",
      text: "Assigning this to Sarah for investigation.",
      timestamp: "2023-05-15T11:30:00",
    },
    {
      id: 2,
      user: "Sarah Smith",
      role: "Staff",
      text: "I'm looking into this issue. Will update soon.",
      timestamp: "2023-05-15T13:45:00",
    },
    {
      id: 3,
      user: "Jane Doe",
      role: "User",
      text: "Thank you for the quick response!",
      timestamp: "2023-05-15T14:20:00",
    },
  ]

  // Mock activity data
  const activities = [
    {
      id: 1,
      type: "status_change",
      from: "open",
      to: "assigned",
      user: "John Doe",
      timestamp: "2023-05-15T11:30:00",
    },
    {
      id: 2,
      type: "assigned",
      to: "Sarah Smith",
      user: "John Doe",
      timestamp: "2023-05-15T11:31:00",
    },
    {
      id: 3,
      type: "status_change",
      from: "assigned",
      to: "in_progress",
      user: "Sarah Smith",
      timestamp: "2023-05-15T13:45:00",
    },
  ]

  const handleAssign = () => {
    if (onAssign && selectedStaff) {
      onAssign(issue.id, selectedStaff)
      setSelectedStaff("")
    }
  }

  const handleStatusChange = () => {
    if (onStatusChange && newStatus !== issue.status) {
      onStatusChange(issue.id, newStatus)
    }
  }

  const handleAddComment = () => {
    if (onAddComment && comment.trim()) {
      onAddComment(issue.id, comment)
      setComment("")
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
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!issue) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <span className="font-mono text-sm text-muted-foreground">{issue.id}</span>
            {issue.title}
          </DialogTitle>
          <DialogDescription className="flex flex-wrap items-center gap-2 pt-1">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              <span>Reported by: {issue.requester}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>Created: {formatDate(issue.created)}</span>
            </div>
            <div className="flex items-center gap-2">Status: {getStatusBadge(issue.status)}</div>
            <div className="flex items-center gap-2">Priority: {getPriorityBadge(issue.priority)}</div>
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="details" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Description</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {issue.description ||
                    "The user is experiencing issues with the application. The app crashes when they try to upload a profile picture."}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium">Steps to Reproduce</h3>
                <ol className="mt-1 list-decimal list-inside text-sm text-muted-foreground">
                  <li>Go to profile settings</li>
                  <li>Click on "Change Profile Picture"</li>
                  <li>Select an image from the gallery</li>
                  <li>App crashes immediately</li>
                </ol>
              </div>

              <div>
                <h3 className="text-sm font-medium">Device Information</h3>
                <div className="mt-1 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>Device: iPhone 13</div>
                  <div>OS: iOS 16.2</div>
                  <div>App Version: 2.4.1</div>
                  <div>Network: WiFi</div>
                </div>
              </div>

              {role === "admin" && issue.status === "open" && (
                <div className="space-y-2 pt-4">
                  <h3 className="text-sm font-medium">Assign to Staff</h3>
                  <div className="flex gap-2">
                    <Select value={selectedStaff} onValueChange={setSelectedStaff}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select staff member" />
                      </SelectTrigger>
                      <SelectContent>
                        {staffMembers.map((staff) => (
                          <SelectItem key={staff.id} value={staff.id.toString()}>
                            {staff.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Button onClick={handleAssign} disabled={!selectedStaff}>
                      Assign
                    </Button>
                  </div>
                </div>
              )}

              {role === "staff" && (issue.status === "assigned" || issue.status === "in_progress") && (
                <div className="space-y-2 pt-4">
                  <h3 className="text-sm font-medium">Update Status</h3>
                  <div className="flex gap-2">
                    <Select value={newStatus} onValueChange={setNewStatus}>
                      <SelectTrigger className="w-[200px]">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        {issue.status === "assigned" && <SelectItem value="in_progress">In Progress</SelectItem>}
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button onClick={handleStatusChange} disabled={newStatus === issue.status}>
                      Update
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="comments" className="space-y-4 pt-4">
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{comment.user}</span>
                      <Badge variant="outline" className="text-xs">
                        {comment.role}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(comment.timestamp)}</span>
                    </div>
                    <p className="text-sm">{comment.text}</p>
                  </div>
                </div>
              ))}

              <Separator />

              <div className="space-y-2">
                <h3 className="text-sm font-medium">Add Comment</h3>
                <Textarea
                  placeholder="Type your comment here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button onClick={handleAddComment} disabled={!comment.trim()}>
                  Post Comment
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4 pt-4">
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex gap-3">
                  {activity.type === "status_change" ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                    </div>
                  ) : activity.type === "assigned" ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <User className="h-4 w-4 text-purple-600" />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{formatDate(activity.timestamp)}</span>
                    </div>
                    <p className="text-sm">
                      {activity.type === "status_change" ? (
                        <>
                          <span className="font-medium">{activity.user}</span> changed status from{" "}
                          <span className="font-medium">{activity.from}</span> to{" "}
                          <span className="font-medium">{activity.to}</span>
                        </>
                      ) : activity.type === "assigned" ? (
                        <>
                          <span className="font-medium">{activity.user}</span> assigned this issue to{" "}
                          <span className="font-medium">{activity.to}</span>
                        </>
                      ) : (
                        <>
                          <span className="font-medium">{activity.user}</span> resolved this issue
                        </>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

