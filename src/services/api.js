import axios from "axios";

const api = axios.create({
  baseURL: "https://mailmaster.alwaysdata.net/api",
  withCredentials: true,
});

export default api;
