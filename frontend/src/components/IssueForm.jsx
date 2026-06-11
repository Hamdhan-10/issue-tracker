import { useState } from 'react';

export default function IssueForm({ onSubmit }) {
  const [form, setForm] = useState({ title: '', description: '', status: 'open' });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(form);
      setForm({ title: '', description: '', status: 'open' });
      setErrors({});
    } catch (err) {
      if (err.response?.status === 422) setErrors(err.response.data.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="issue-form">
      <h2>New Issue</h2>
      <div>
        <input
          placeholder="Title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
        {errors.title && <span className="error">{errors.title[0]}</span>}
      </div>
      <div>
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        {errors.description && <span className="error">{errors.description[0]}</span>}
      </div>
      <div>
        <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="resolved">Resolved</option>
        </select>
      </div>
      <button type="submit">Create Issue</button>
    </form>
  );
}