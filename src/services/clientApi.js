import api from "./api";

export default {
  getClientsByType(type) {
    return api.get(`/client/${type}`);
  },
  getClientById(id) {
    return api.get(`/client/${id}/messages`);
  },
  getClientMessageById(id, msg_id) {
    return api.get(`/client/${id}/message/${msg_id}`);
  },
  addClient(username, type) {
    return api.post(`/client/`, { username, type });
  },
  updateClient(id, client) {
    return api.put(`/client/${id}`, client);
  },
};
