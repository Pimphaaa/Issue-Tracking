export const fetchDashboardData = async () => {
    const response = await fetch('/api/dashboard') // เรียก API ที่ backend
    if (!response.ok) {
      throw new Error('ไม่สามารถโหลดข้อมูลได้') // ถ้า response ไม่สำเร็จ
    }
    return await response.json() // คืนค่าข้อมูลในรูปแบบ JSON
  }
  