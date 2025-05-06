import axios from "axios";
// Cliente genérico
const apiClient = axios.create({
  baseURL: 'http://localhost:2636/api',
  timeout: 5000
});

export const registerRequest = async (user) => {
  try {
    return await apiClient.post('/auth/register', user);
  } catch (err) {
    return { error: true, err };
  }
};
