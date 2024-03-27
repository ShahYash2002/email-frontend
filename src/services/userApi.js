import api from "./api";

export default {
  signin(email, password) {
    return api.post(`/user/signin`, { email, password });
  },
  signup(name, email, password) {
    return api.post(`/user/signup`, { name, email, password });
  },
  config() {
    return api.get(`/user/config`);
  },
};
