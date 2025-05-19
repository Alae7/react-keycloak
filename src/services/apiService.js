import axios from 'axios';

const BASE_URL = 'http://localhost:8888/AUTH-SERVICE/auth'; // ← ton auth-service

const apiClient = axios.create({
    baseURL: BASE_URL,
});


apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('kc_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => Promise.reject(error));


export const getCurrentUser = () => apiClient.get('/current');

export const getAllUsers = () => apiClient.get('/all');

