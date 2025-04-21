import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/components/dashboard-layout"

const mockIssues = [
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
  // ...เพิ่ม issue อื่น ๆ ตามต้องการ
]

function getStatusColor(status: string) {
  switch (status) {
    case "open":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "assigned":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "in_progress":
      return "bg-purple-50 text-purple-700 border-purple-200"
    case "resolved":
      return "bg-green-50 text-green-700 border-green-200"
    default:
      return "border"
  }
}

export default function IssueDetailPage({ params }: { params: { id: string } }) {
  const issue = mockIssues.find((issue) => issue.id === params.id)

  if (!issue) return notFound()

  return (
    <DashboardLayout role="admin">
      <div className="max-w-3xl mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>{issue.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge className={getStatusColor(issue.status)}>{issue.status}</Badge>
              <Badge variant="outline">{issue.priority}</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p><strong>Issue ID:</strong> {issue.id}</p>
            <p><strong>Requester:</strong> {issue.requester}</p>
            <p><strong>Created:</strong> {new Date(issue.created).toLocaleString()}</p>
            <p><strong>Assigned To:</strong> {issue.assignedTo || "Unassigned"}</p>
            <p><strong>Description:</strong></p>
            <p>{issue.description}</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
