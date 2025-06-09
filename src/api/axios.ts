import axios from 'axios';

// Create axios instance with minimal config
// Let TanStack Query handle retries, timeouts, and caching
const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Simplified response interceptor - just return the data
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);

export default axiosInstance;
