import api from "./api";

export default {
  getClientsByType(type) {
    return api.get(`/client/${type}`);
  },
  getClientById(id) {
    return api.get(`/client/${id}/messages`);
  },
  addClient(client) {
    return api.post(`/client/`, client);
  },
  updateClient(id, client) {
    return api.put(`/client/${id}`, client);
  },
};
