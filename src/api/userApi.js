import axiosInstance from "../utils/axiosUtils";

export const getUserById = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch user with ID ${id}`);
    }
    catch (error) {
        console.log("get user by id error:", error);
        throw error;
    }
};
export const createUser = async (userData) => {
    try {
        const response = await axiosInstance.post('/user', userData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to create user');
    }
    catch (error) {
        console.log("create user error:", error);
        throw error;
    }
};
export const updateUser = async (id, userData) => {
    try {
        const response = await axiosInstance.put(`/user/${id}`, userData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update user with ID ${id}`);
    }
    catch (error) {
        console.log("update user error:", error);
        throw error;
    }
};
export const removeUser = async (id) => {
    try {
        const response = await axiosInstance.delete(`/user/${id}`);
        if (response.status === 204) {
            return response.data;
        }
        throw new Error(`Failed to remove user with ID ${id}`);
    }
    catch (error) {
        console.log("remove user error:", error);
        throw error;
    }
};
export const login = async (id) => {
    try {
        const response = await axiosInstance.post(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to login');
    }
    catch (error) {
        console.log("login error:", error);
        throw error;
    }
};
export const getCurrentUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/user/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to get current user with ID ${id}`);
    }
    catch (error) {
        console.log("get current user error:", error);
        throw error;
    }
};
