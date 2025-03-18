"use client";
import { useState } from "react";

export default function AddIssue() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Open");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description: "", status }),
    });
    if (res.ok) {
      alert("Issue added!");
      window.location.reload();
    } else {
      alert("Failed to add issue");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Issue
      </button>
    </form>
  );
}
