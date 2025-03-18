"use client";
import { useState } from "react";

export default function EditIssue({ issue }: { issue: any }) {
  const [title, setTitle] = useState(issue.title);
  const [status, setStatus] = useState(issue.status);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8080/issues/${issue.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: "", status }),
    });
    if (res.ok) {
      alert("Issue updated!");
      window.location.reload();
    } else {
      alert("Failed to update issue");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Update Issue
      </button>
    </form>
  );
}
