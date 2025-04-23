"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"

const mockIssues = [
  {
    id: "ISS-001",
    title: "App crashes on startup",
    status: "assigned",
    priority: "high",
    requester: "John Doe",
    requesterInfo: {
      department: "IT",
      email: "john@example.com",
      phone: "0899999999",
      location: "Building A, Floor 3",
      requestDate: "2023-05-15",
      serviceDate: "2023-05-20",
    },
    created: "2023-05-15T10:30:00",
    assignedTo: null,
    description: "The app crashes immediately after the splash screen on Android devices.",
  },
]

function getStatusStep(status: string) {
  switch (status) {
    case "open":
      return 25
    case "approved":
      return 50
    case "assigned":
      return 75
    case "resolved":
      return 100
    default:
      return 0
  }
}

export default function IssueDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const issue = mockIssues.find((issue) => issue.id === id)

  if (!issue) return notFound()

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      {/* ส่วนที่ 1: แสดงเลขที่ใบงาน บอก Issue ที่เข้ามา และบอกสถานะ */}
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">เลขที่ใบงาน: {issue.id}</p>
              <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
            </div>
            <div className="flex gap-2">
              <Badge className={getStatusColor(issue.status)}>{issue.status}</Badge>
              <Badge variant="outline">{issue.priority}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">ผู้ขอ:</span> {issue.requester}
            </div>
            <div>
              <span className="text-gray-500">วันที่สร้าง:</span> {new Date(issue.created).toLocaleString()}
            </div>
            <div>
              <span className="text-gray-500">มอบหมายให้:</span> {issue.assignedTo || "ยังไม่ได้มอบหมาย"}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-sm mb-1">รายละเอียด:</p>
            <p>{issue.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* ส่วนที่ 2: แสดง Progress ที่ดูดี */}
      <Card className="shadow-md">
        <CardContent className="pt-6 pb-4">
          <h2 className="text-lg font-semibold mb-4">สถานะการดำเนินการ</h2>
          <Progress value={getStatusStep(issue.status)} className="h-3 mb-6 bg-gray-200 [&>div]:bg-[#82D01E]" />
          <div className="flex justify-between text-sm">
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'open' || issue.status === 'approved' || issue.status === 'assigned' || issue.status === 'resolved' ? 'bg-[#16325B] text-white' : 'bg-gray-200'}`}>1</div>
              <span className="mt-2 text-center">ผู้ขอ</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'approved' || issue.status === 'assigned' || issue.status === 'resolved' ? 'bg-[#16325B] text-white' : 'bg-gray-200'}`}>2</div>
              <span className="mt-2 text-center">อนุมัติงาน</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'assigned' || issue.status === 'resolved' ? 'bg-[#16325B] text-white' : 'bg-gray-200'}`}>3</div>
              <span className="mt-2 text-center">รับงาน</span>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${issue.status === 'resolved' ? 'bg-[#16325B] text-white' : 'bg-gray-200'}`}>4</div>
              <span className="mt-2 text-center">ปิดงาน</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ส่วนที่ 3: ข้อมูลผู้ขอใช้บริการ และ รายละเอียดการขอใช้บริการ */}
      <Card className="shadow-md">
        <CardHeader className="bg-[#16325B] text-white p-4 rounded-t-lg">
          <CardTitle>ข้อมูลผู้ขอใช้บริการ และ รายละเอียดการขอใช้บริการ</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          <div>
            <Label className="mb-2 block">ชื่อผู้ใช้บริการ</Label>
            <Input disabled value={issue.requester} />
          </div>
          <div>
            <Label className="mb-2 block">หน่วยงาน</Label>
            <Input disabled value={issue.requesterInfo.department} />
          </div>
          <div>
            <Label className="mb-2 block">อีเมลล์</Label>
            <Input disabled value={issue.requesterInfo.email} />
          </div>
          <div>
            <Label className="mb-2 block">เบอร์โทรศัพท์</Label>
            <Input disabled value={issue.requesterInfo.phone} />
          </div>
          <div>
            <Label className="mb-2 block">สถานที่เข้ารับบริการ</Label>
            <Input disabled value={issue.requesterInfo.location} />
          </div>
          <div>
            <Label className="mb-2 block">วันที่ขอบริการ</Label>
            <Input disabled value={issue.requesterInfo.requestDate} />
          </div>
          <div>
            <Label className="mb-2 block">วันที่ต้องการใช้บริการ</Label>
            <Input disabled value={issue.requesterInfo.serviceDate} />
          </div>
        </CardContent>
      </Card>

      {/* ส่วนที่ 4: รายละเอียดการจ่ายงาน */}
      <Card className="shadow-md">
        <CardHeader className="bg-[#16325B] text-white p-4 rounded-t-lg">
          <CardTitle>รายละเอียดการจ่ายงาน</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <Label className="mb-2 block">ระดับความสำคัญ (Priority)</Label>
            <Select defaultValue={issue.priority}>
              <SelectTrigger className="w-full md:w-[240px]">
                <SelectValue placeholder="เลือก Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low (ภายใน 7 วัน)</SelectItem>
                <SelectItem value="medium">Medium (ภายใน 5 วัน)</SelectItem>
                <SelectItem value="high">High (ภายใน 2 วัน)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">เลือกหน่วยงานที่รับผิดชอบ</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[240px]">
                <SelectValue placeholder="เลือกหน่วยงาน" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it-support">IT Support</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="hr">HR</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="mb-2 block">เลือกผู้รับผิดชอบ</Label>
            <Select>
              <SelectTrigger className="w-full md:w-[240px]">
                <SelectValue placeholder="เลือกผู้รับผิดชอบ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="alice">Alice</SelectItem>
                <SelectItem value="bob">Bob</SelectItem>
                <SelectItem value="charlie">Charlie</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getStatusColor(status: string) {
  switch (status) {
    case "open":
      return "bg-yellow-50 text-yellow-700 border-yellow-200"
    case "approved":
      return "bg-blue-50 text-blue-700 border-blue-200"
    case "assigned":
      return "bg-purple-50 text-purple-700 border-purple-200"
    case "resolved":
      return "bg-green-50 text-green-700 border-green-200"
    default:
      return "border"
  }
}