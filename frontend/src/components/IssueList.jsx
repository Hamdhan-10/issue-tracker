import IssueCard from './IssueCard';

export default function IssueList({ issues, onStatusChange }) {
  if (!issues.length) return <p>No issues yet. Create one above!</p>;

  return (
    <div className="issue-list">
      {issues.map(issue => (
        <IssueCard key={issue.id} issue={issue} onStatusChange={onStatusChange} />
      ))}
    </div>
  );
}