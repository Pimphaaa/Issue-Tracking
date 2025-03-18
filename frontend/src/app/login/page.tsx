'use client'; // ต้องใช้ 'use client' เพราะมีการใช้ useState และ onClick

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const role = searchParams.get('role'); // ดึง Role จาก URL query parameter

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // เรียก API เพื่อตรวจสอบการล็อกอิน
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, role }),
    });

    if (response.ok) {
      router.push(`/dashboard`); // Redirect ไปยัง Dashboard หลังจากล็อกอินสำเร็จ
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login as {role}</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}