"use client";
import { useState } from "react";

export default function IssueTable({ issues }: { issues: any[] }) {
  const [selectedIssue, setSelectedIssue] = useState(null);

  const deleteIssue = async (id: number) => {
    const res = await fetch(`http://localhost:8080/issues/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Issue deleted!");
      window.location.reload();
    } else {
      alert("Failed to delete issue");
    }
  };

  return (
    <div className="border rounded-lg p-4 bg-white">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="text-center border-b">
              <td className="p-2 border">{issue.id}</td>
              <td className="p-2 border">{issue.title}</td>
              <td className="p-2 border">{issue.status}</td>
              <td className="p-2 border">
                <button onClick={() => deleteIssue(issue.id)} className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
