import type { Metadata } from "next"
import IssueAssignment from "@/components/issue-assignment"

export const metadata: Metadata = {
  title: "Issue Assignment - Issue Tracking System",
  description: "Assign issues to staff members in the Issue Tracking System",
}

export default function IssueAssignmentPage() {
  return <IssueAssignment />
}

