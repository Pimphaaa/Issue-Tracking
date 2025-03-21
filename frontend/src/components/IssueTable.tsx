import React, { useEffect, useState } from 'react';
import { fetchIssues } from '@/utils/api';

// กำหนดประเภทของแต่ละ issue
interface Issue {
  id: number;
  title: string;
  status: string;
}

const IssueTable = () => {
  const [issues, setIssues] = useState<Issue[]>([]); // กำหนดประเภทของ issues เป็น array ของ Issue

  useEffect(() => {
    const getIssues = async () => {
      const data = await fetchIssues();
      setIssues(data);
    };

    getIssues();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {issues.map(issue => (
          <tr key={issue.id}>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IssueTable;
