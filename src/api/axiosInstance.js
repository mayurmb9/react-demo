//axios instance + interceptors
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Request interceptor (e.g., attach token)
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(`[Request] ${config.method.toUpperCase()} → ${config.url}`);
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor (central error handling)
api.interceptors.response.use(
  response => response,
  error => {
    console.error(`[Error] ${error.response?.status} → ${error.message}`);
    return Promise.reject(error);
  }
);

export default api;
