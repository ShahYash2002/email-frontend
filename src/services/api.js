import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.token;
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default api;
