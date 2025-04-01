"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Alert } from "@/components/ui/alert";


const RequestForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "",
    requester: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // ✅ เพิ่ม TypeScript type ให้ event handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.title || !formData.description || !formData.category || !formData.requester) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit request");

      setSuccessMessage("Request submitted successfully!");
      setFormData({ title: "", description: "", priority: "Medium", category: "", requester: "" });
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-xl font-bold mb-4">Submit a Request</h2>
      
      {/* ✅ แก้ไข Alert ให้ใช้ variant ที่รองรับ */}
      {successMessage && <Alert variant="default">{successMessage}</Alert>}
      {errorMessage && <Alert variant="destructive">{errorMessage}</Alert>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <Textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />

        {/* ✅ ใช้ onValueChange กับ Select */}
        <Select value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select Priority" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>

        <Input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <Input name="requester" placeholder="Your Name" value={formData.requester} onChange={handleChange} required />

        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </div>
  );
};

export default RequestForm;
