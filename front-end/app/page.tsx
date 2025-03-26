import Image from "next/image"
import RoleSelection from "../components/role-selection"

export default function Home() {
  return (
    <div
      className="relative min-h-screen bg-center"
      style={{
        backgroundImage: "url('/mountain1.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom center",
      }}
    >

      <header className="w-full bg-[#242532] text-white py-4 px-6 flex items-center gap-4">

        <Image src="/logo-mfl.png" alt="Logo MFU Foundation" width={60} height={60} className="h-10 w-10" />

        <h1 className="text-lg font-semibold">
          Issue Tracking System <br />
          <span className="text-sm">มูลนิธิแม่ฟ้าหลวง ในพระบรมราชูปถัมภ์</span>
        </h1>
      </header>


      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-start pt-35 p-4">
        <div>
          <RoleSelection />
        </div>
      </main>
    </div>
  )
}