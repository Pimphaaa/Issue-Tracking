'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'admin' | 'staff' | null>(null);

  const handleRoleSelection = (role: 'admin' | 'staff') => {
    setSelectedRole(role);
    router.push(`/login?role=${role}`); // ส่ง Role ไปยังหน้า Login
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-cover bg-fixed">
      {/* หัวข้อมูลนิธิ */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide drop-shadow-lg animate-fade-in-up">
          มูลนิธิแม่ฟ้าหลวง ในพระบรมราชูปถัมภ์
        </h1>
        <p className="text-xl text-white opacity-90 animate-fade-in-delay">
          Mae Fah Luang Foundation under Royal Patronage
        </p>
      </div>

      {/* ปุ่มเลือก Role */}
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center border border-white/10 animate-fade-in-up">
        <h2 className="text-4xl font-bold text-white mb-8">Select Your Role</h2>
        <div className="space-y-8">
          <button
            onClick={() => handleRoleSelection('admin')}
            className="w-72 px-10 py-5 bg-white/30 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/40 transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105"
          >
            <span className="text-3xl">👑</span>
            <span className="text-lg">ADMIN</span>
          </button>
          <button
            onClick={() => handleRoleSelection('staff')}
            className="w-72 px-10 py-5 bg-white/30 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/40 transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105"
          >
            <span className="text-3xl">👩‍💼</span>
            <span className="text-lg">STAFF</span>
          </button>
        </div>
      </div>
    </div>
  );
}
