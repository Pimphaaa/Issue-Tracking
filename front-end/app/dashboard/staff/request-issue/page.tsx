"use client"

import { useState } from "react";
import RequestForm from "@/components/request-form";

export default function RequestIssuePage() {
  const role: "admin" | "staff" = "staff";

  return (
      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold mb-4">Submit a Request</h1>
        <RequestForm />
      </div>
  );
}