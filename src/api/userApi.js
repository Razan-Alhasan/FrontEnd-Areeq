import axiosInstance from "../utils/axiosUtils";

export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        console.log("get user by id error:", error);
    }
};
export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/user', userData);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        console.log("create user error:", error);
    }
};
export const updateUser = async (id, userData) => {
    try {
        const response = await axiosInstance.put(`/user/${id}`, userData);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        console.log("update user error:", error);
    }
};
export const removeUser = async (id) => {
    try {
        const response = await axiosInstance.delete(`/user/${id}`);
        if (response.status === 204) {
            return response.data;
        }
    }
    catch (error) {
        console.log("remove user error:", error);
    }
};
export const login = async (id) => {
    try {
        const response = await axiosInstance.post(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        console.log("login error:", error);
    }
};
export const getCurrentUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
    }
    catch (error) {
        console.log("get current user error:", error);
    }
};
