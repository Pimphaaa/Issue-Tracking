interface DashboardPageProps {
    data: any; // ประเภทของข้อมูลที่คุณรับมา
  }
  
  const DashboardPage = ({ data }: DashboardPageProps) => {
    return (
      <div>
        <h2>Dashboard</h2>
        {/* แสดงข้อมูลที่ดึงมาจาก API */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }
  
  export default DashboardPage
  