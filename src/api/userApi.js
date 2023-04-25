import axiosInstance from '../utils/axiosUtils';

export const getCurrentUser = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`);
    return await response.json();
}
export const getUserById = async (id) => {
    const response = await axiosInstance.get(`/user/${id}`);
    return await response.json();
}
export const createUser = async () => {
    const response = await axiosInstance.post('/user');
    return await response.json();
}
export const updateUser = async (id) => {
    const response = await axiosInstance.put(`/user/${id}`);
    return await response.json();
}
export const removeUser = async (id) => {
    const response = await axiosInstance.delete(`/user/${id}`);
    return await response.json();
}
export const login = async () => {
    const response = await axiosInstance.post('/user/login');
    return await response.json();
}
