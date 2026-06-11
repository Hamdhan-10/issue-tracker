import { useState } from 'react';
import { updateStatus } from '../api/issueApi';

export default function IssueCard({ issue, onStatusChange }) {
  const [currentStatus, setCurrentStatus] = useState(issue.status);

  const handleChange = async (e) => {
    const newStatus = e.target.value;
    await updateStatus(issue.id, newStatus);
    setCurrentStatus(newStatus);
    onStatusChange(issue.id, newStatus);
  };

  return (
    <div className={`issue-card status-${currentStatus}`}>
      <h3>{issue.title}</h3>
      <p>{issue.description}</p>
      <select value={currentStatus} onChange={handleChange}>
        <option value="open">Open</option>
        <option value="in_progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
    </div>
  );
}