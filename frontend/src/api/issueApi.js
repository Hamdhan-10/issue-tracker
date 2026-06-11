import axios from 'axios';

const api = axios.create({ baseURL: 'http://127.0.0.1:8000/api' });

export const getIssues = () => api.get('/issues');
export const createIssue = (data) => api.post('/issues', data);
export const updateStatus = (id, status) => api.patch(`/issues/${id}/status`, { status });