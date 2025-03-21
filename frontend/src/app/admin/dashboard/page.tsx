// /app/admin/dashboard/page.tsx
import React from 'react';
import IssueTable from '@/components/IssueTable';

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <IssueTable />
    </div>
  );
};

export default Dashboard;
