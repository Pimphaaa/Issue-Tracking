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


---

## 🎨 Style Guide ที่ใช้ในโปรเจกต์

### 🧱 Layout

| Property        | ใช้ทำอะไร                                      |
|-----------------|------------------------------------------------|
| `flex`          | การขยายพื้นที่อัตโนมัติ                      |
| `flexDirection` | แนวจัดวาง (`row`, `column`)                   |
| `justifyContent`| จัดแนววัตถุในแนวตั้ง (`center`, `space-between`) |
| `alignItems`    | จัดแนววัตถุในแนวนอน (`center`, `flex-end`)   |
| `position`      | การจัดตำแหน่ง (`relative`, `absolute`)       |
| `top`, `left`, `right`, `bottom` | ใช้เมื่อใช้ `absolute` เพื่อจัดตำแหน่ง |

---

### 🎨 Appearance

| Property         | ใช้ทำอะไร                              |
|------------------|----------------------------------------|
| `backgroundColor`| สีพื้นหลัง                            |
| `borderRadius`   | มุมโค้ง                                |
| `borderWidth` / `borderColor` | เส้นขอบ                  |
| `opacity`        | ความโปร่งใส (ค่า 0 - 1)               |
| `elevation`      | เงา (เฉพาะ Android)                   |
| `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` | เงา (เฉพาะ iOS) |

---

### 🔤 Text

| Property    | ใช้ทำอะไร                                      |
|-------------|------------------------------------------------|
| `fontSize`  | ขนาดตัวอักษร                                 |
| `fontWeight`| ความหนาของตัวอักษร (`normal`, `bold`, `100-900`) |
| `color`     | สีข้อความ                                     |
| `textAlign` | การจัดข้อความ (`left`, `center`, `right`)     |
| `lineHeight`| ระยะห่างระหว่างบรรทัด                        |

---

### 📏 Size & Space

| Property          | ใช้ทำอะไร                            |
|-------------------|--------------------------------------|
| `width`, `height` | กำหนดขนาดความกว้างและความสูง      |
| `padding`, `paddingTop`, `paddingHorizontal` ฯลฯ | ระยะห่างด้านใน |
| `margin`, `marginBottom`, `marginVertical` ฯลฯ | ระยะห่างด้านนอก |

---

## 📸 ตัวอย่างหน้าจอ (Screenshot)
> _📌 แนะนำให้ใส่รูป screenshot จากแอป_

