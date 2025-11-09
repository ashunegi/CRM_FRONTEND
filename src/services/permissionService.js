// src/services/permissionService.js
import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api";

const COMPANY_ID =
  process.env.REACT_APP_COMPANY_ID || "23e75197-a219-4faf-b30b-f8376d87671e";
  
  const getToken = () => localStorage.getItem("token");
const getHeaders = () => ({
  "x-company-id": COMPANY_ID,
  Authorization: `Bearer ${getToken()}`,
  "Content-Type": "application/json",
});

export const permissionService = {
  async fetchUsers() {
    const res = await axios.get(`${API_BASE_URL}/role-permissions/get-managers-users`, { headers: getHeaders() });
    return res.data;
  },

  async createPermission(payload) {
    const res = await axios.post(`${API_BASE_URL}/role-permissions/create`, payload, { headers: getHeaders() });
    return res.data;
  },

  async fetchAllRolePermissions() {
    const res = await axios.get(`${API_BASE_URL}/role-permissions/get-permissions`, { headers: getHeaders() });
    return res.data;
  },

  async fetchSinglePermission(id) {
    const res = await axios.get(`${API_BASE_URL}/role-permissions/permission/${id}`, { headers: getHeaders() });
    return res.data;
  },

  async togglePermission(permissionId, permissionKey) {
    const res = await axios.patch(`${API_BASE_URL}/role-permissions/${permissionId}/toggle`, { permissionKey }, {
      headers: getHeaders(),
    });
    return res.data;
  },

  async fetchPermissionsForUser(userId, role) {
    const res = await axios.get(`${API_BASE_URL}/role-permissions/${role}/${userId}`, { headers: getHeaders() });
    return res.data;
  },
};
