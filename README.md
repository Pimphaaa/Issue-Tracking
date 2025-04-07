# Issue Tracking System  💒

This is an issue tracking system with the following components:

## Update Code
   - อัพเดททุกครั้งก่อนเริ่มทำ
     ```bash
     git pull origin main
##✅ วิธีแก้ไข
1️⃣ ใช้ git pull --rebase เพื่อรวมโค้ดจาก remote ก่อน

      git pull --rebase origin main
จากนั้นลอง push ใหม่

      git push origin main

## Tech Stack:
- **Frontend**: Next.js (Admin Dashboard)
- **Backend**: Golang (Gin Framework)
- **Mobile**: React Native (User App)
- **Database**: MySQL


## Setup Instructions:

### Backend
1. Navigate to the `backend` directory.
   ```bash
   cd backend
2. Run the following command to start the server:
   ```bash
   go run main.go
3. The backend will be available at:
   http://localhost:8080/


### Frontend (Admin Dashboard)

1. Navigate to the frontend directory:
   ```bash
   cd front-end
2. Install dependencies and run the dev server:
   ```bash
   npm run dev
3. The frontend will be available at:
   http://localhost:3000/


### Mobile (User App)
1. Navigate to the mobile directory.
   ```bash
   cd user
2. Start the user app:
   ```bash
   npm start

📚 ตัวอย่างหมวดหมู่ของ style ที่ใช้บ่อย ๆ:
🧱 Layout
Property	ใช้ทำอะไร
flex	การขยายพื้นที่อัตโนมัติ
flexDirection	แนวจัดวาง (row, column)
justifyContent	แนวตั้ง (center, flex-start, flex-end, space-between)
alignItems	แนวนอน (center, flex-start, flex-end)
position	ตำแหน่ง (relative, absolute)
top, left, right, bottom	จัดตำแหน่งเมื่อใช้ position: 'absolute'
🎨 Appearance
Property	ใช้ทำอะไร
backgroundColor	สีพื้นหลัง
borderRadius	มุมโค้ง
borderWidth, borderColor	เส้นขอบ
opacity	ความโปร่งใส (0 - 1)
elevation	เงา (เฉพาะ Android)
shadowColor, shadowOffset, shadowOpacity, shadowRadius	เงา (เฉพาะ iOS)
🔤 Text
Property	ใช้ทำอะไร
fontSize	ขนาดตัวอักษร
fontWeight	ความหนา (normal, bold, 100-900)
color	สีข้อความ
textAlign	ชิดซ้าย ขวา กลาง (left, center, right)
lineHeight	ระยะห่างระหว่างบรรทัด
📏 Size & Space
Property	ใช้ทำอะไร
width, height	ความกว้าง ความสูง
padding, paddingHorizontal, paddingVertical, paddingTop, paddingBottom, etc.	ระยะห่างด้านใน
margin, marginHorizontal, marginVertical, etc.
