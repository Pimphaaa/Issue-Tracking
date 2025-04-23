"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function NewRequestPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <Card className="shadow-md">
        <CardHeader className="bg-[#16325B] text-white p-4 rounded-t-lg">
          <CardTitle>ฟอร์มคำร้องใหม่</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 p-6 md:grid-cols-2">
          <div>
            <Label className="mb-2 block">ชื่อผู้เข้าใช้บริการ</Label>
            <Input placeholder="กรอกชื่อผู้ใช้บริการ" />
          </div>
          <div>
            <Label className="mb-2 block">หน่วยงาน</Label>
            <Input placeholder="กรอกหน่วยงาน" />
          </div>
          <div>
            <Label className="mb-2 block">อีเมลล์</Label>
            <Input type="email" placeholder="example@email.com" />
          </div>
          <div>
            <Label className="mb-2 block">เบอร์โทรศัพท์</Label>
            <Input type="tel" placeholder="0812345678" />
          </div>
          <div>
            <Label className="mb-2 block">สถานที่เข้ารับบริการ</Label>
            <Input placeholder="กรอกสถานที่" />
          </div>
          <div>
            <Label className="mb-2 block">วันที่ขอบริการ</Label>
            <Input type="date" />
          </div>
          <div>
            <Label className="mb-2 block">วันที่ต้องการใช้บริการ</Label>
            <Input type="date" />
          </div>
          <div>
            <Label className="mb-2 block">ประเภทงาน</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกประเภทงาน" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="self-document">คำร้องขอเอกสาร (รับด้วยตนเอง)</SelectItem>
                <SelectItem value="pdf-document">คำร้องขอเอกสาร (ดาวน์โหลด PDF)</SelectItem>
                <SelectItem value="it-service">คำร้องขอบริการด้าน IT</SelectItem>
                <SelectItem value="repair">แจ้งปัญหาและร้องขอการซ่อมแซม</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader className="bg-[#16325B] text-white p-4 rounded-t-lg">
          <CardTitle>รายละเอียดคำร้อง</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <Label className="mb-2 block">สรุปความต้องการโดยย่อ</Label>
            <Input placeholder="กรอกสรุปความต้องการโดยย่อ" />
          </div>
          <div>
            <Label className="mb-2 block">รายละเอียดเพิ่มเติม</Label>
            <Textarea placeholder="กรอกรายละเอียดเพิ่มเติม" rows={5} />
          </div>
          <div className="text-right">
            <Button className="bg-[#16325B] text-white hover:bg-[#1f4072]">ส่งคำร้อง</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
