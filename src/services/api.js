import axios from "axios";

const api = axios.create({
  baseURL: "https://email-backend-api.onrender.com",
  withCredentials: true,
});

export default api;
