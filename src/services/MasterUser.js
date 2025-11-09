import axios from "axios";

const COMPANY_ID =
  process.env.REACT_APP_COMPANY_ID || "23e75197-a219-4faf-b30b-f8376d87671e";
  
  const authApi = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

/**
 * Master User Signup
 * @param {Object} userData - { email, password }
 */
export const signupMasterUser = async (userData) => {
  try {
    const response = await authApi.post("/masteruser/signup", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Signup failed" };
  }
};

/**
 * Master User Login
 * @param {Object} credentials - { email, password }
 */
export const loginMasterUser = async (credentials) => {
  try {
    localStorage.removeItem("masterToken");

    const response = await authApi.post("/masteruser/login", credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Login failed" };
  }
};

//logout
export const logoutMasterUser = async () => {
  const token = localStorage.getItem("masterToken");

  try {
    const response = await authApi.post(
      "/masteruser/logout",
      {},
      {
        headers: {
          'x-company-id': COMPANY_ID,
          Authorization: `Bearer ${token}`, // ✅ Securely attached token
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error.response?.data || { error: "Logout failed" };
  }
};

// ✅ Public Route Wrapper for Master User Pages
// export const MasterPublicRoute = ({ children }) => {
//   const masterToken = localStorage.getItem("masterToken");

//   // If already logged in, redirect to actual dashboard URL
//   return masterToken ? <Navigate to="/dashboard" replace /> : children;
// };

