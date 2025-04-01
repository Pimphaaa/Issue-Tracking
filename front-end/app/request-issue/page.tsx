"use client"

import { useState } from "react";
import RequestForm from "@/components/request-form";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

export default function RequestIssuePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const role: "admin" | "staff" = "staff"; // กำหนด role ที่นี่

  return (
    <div className="flex flex-col">
      {/* เพิ่ม Sidebar */}
      <Sidebar role={role} sidebarOpen={sidebarOpen} />

      {/* เพิ่ม DashboardHeader */}
      <DashboardHeader 
        role={role} 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />

      <div className="flex flex-1 pt-20 pl-64"> {/* เพิ่ม pt-20 และ pl-64 เพื่อให้เนื้อหาไม่บังจาก Sidebar */}
        <div className="p-6 flex-1">
          <h1 className="text-2xl font-bold mb-4">Submit a Request</h1>
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
