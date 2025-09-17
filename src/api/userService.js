// modular service layer for users
import api from './axiosInstance';
import { ENDPOINTS } from './endpoints';

export const getAllUsers = () => api.get(ENDPOINTS.getAllUsers);

export const getUserPosts = (userId) =>
  api.get(ENDPOINTS.getAllPosts, { params: { userId } });
