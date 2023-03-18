import api from "./api";

export default {
  signin(email, password) {
    return api.post(`/user/signin`, { email, password });
  },
  config() {
    return api.get(`/user/config`);
  },
};
