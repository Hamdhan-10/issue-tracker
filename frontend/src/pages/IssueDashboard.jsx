import { useState, useEffect } from 'react';
import { getIssues, createIssue } from '../api/issueApi';
import IssueForm from '../components/IssueForm';
import IssueList from '../components/IssueList';

export default function IssueDashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues().then(res => setIssues(res.data));
  }, []);

  const handleCreate = async (data) => {
    const res = await createIssue(data);
    setIssues(prev => [res.data, ...prev]);
  };

  const handleStatusChange = (id, status) => {
    setIssues(prev => prev.map(i => i.id === id ? { ...i, status } : i));
  };

  return (
    <div className="dashboard">
      <h1>Issue Tracker</h1>
      <IssueForm onSubmit={handleCreate} />
      <IssueList issues={issues} onStatusChange={handleStatusChange} />
    </div>
  );
}