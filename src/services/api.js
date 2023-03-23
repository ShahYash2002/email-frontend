import axios from "axios";

const api = axios.create({
  baseURL: "https://email-backend-api.onrender.com/",
  withCredentials: true,
  headers: {
    Origin: "https://my-mailbox.netlify.app/",
  },
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.token;
//   config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default api;
