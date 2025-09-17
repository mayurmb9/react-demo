// modular service layer for posts
import api from './axiosInstance';
import { ENDPOINTS } from './endpoints';

export const getPost = (id) => api.get(ENDPOINTS.getPost(id));

export const createPost = (data) => api.post(ENDPOINTS.createPost, data);
