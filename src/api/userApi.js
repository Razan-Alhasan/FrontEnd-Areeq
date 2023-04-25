import axiosInstance from '../utils/axiosUtils';

export const getCurrentUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        return response.data;
    } catch (err) {
        console.log("get user err :", err);
    }
};
export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        return response.data;
    } catch (err) {
        console.log("get user by id err :", err);
    }
};
export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/user', userData);
        return response.data;
    } catch (err) {
        console.log("create user err :", err);
    }
};
export const updateUser = async (id, userData) => {
    try {
        const response = await axiosInstance.put(`/user/${id}`, userData);
        return response.data; user
    } catch (err) {
        console.log("update user err :", err);
    }
};
export const removeUser = async (id) => {
    try {
        const response = await axiosInstance.delete(`/user/${id}`);
        return response.data;
    } catch (err) {
        console.log("delete user  err :", err);
    }
};
export const login = async (id) => {
    try {
        const response = await axiosInstance.post('/user/login');
        return response.data;
    } catch (err) {
        console.log("login err :", err);
    }
};
