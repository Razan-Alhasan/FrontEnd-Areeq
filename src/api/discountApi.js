import axiosInstance from '../utils/axiosUtils';

export const getDiscounts = async () => {
    try {
        const response = await axiosInstance.get('/discounts');
        return response.data;
    } catch (err) {
        console.log("get discounts err :", err);
    }
};
export const getDiscountById = async (id) => {
    try {
        const response = await axiosInstance.get(`/discount/${id}`);
        return response.data;
    } catch (err) {
        console.log("get discount by id err :", err);
    }
};
export const createDiscount = async (discountData) => {
    try {
        const response = await axiosInstance.post('/discount', discountData);
        return response.data;
    } catch (err) {
        console.log("create discount err :", err);
    }
};
export const updateById = async (id, discountData) => {
    try {
        const response = await axiosInstance.put(`/discount/${id}`, discountData);
        return response.data;
    } catch (err) {
        console.log("update discount err :", err);
    }
};
export const deleteDiscount = async (id) => {
    try {
        const response = await axiosInstance.delete(`/discount/${id}`);
        return response.data;
    } catch (err) {
        console.log("delete discount  err :", err);
    }
};
