import axios from 'axios';
import { TOKEN_KEY } from './constants';

const token = localStorage.getItem(TOKEN_KEY);

const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  headers,
});

export default api;
