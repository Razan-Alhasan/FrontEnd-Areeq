import axiosInstance from '../utils/axiosUtils';

export const getDiscounts = async () => {
    const response = await axiosInstance.get('/discounts');
    return await response.json();
}
export const getDiscountById = async (id) => {
    const response = await axiosInstance.get(`/discount/${id}`);
    return await response.json();
}
export const createDiscount = async () => {
    const response = await axiosInstance.post('/discount');
    return await response.json();
}
export const updateById = async (id) => {
    const response = await axiosInstance.put(`/discount/${id}`);
    return await response.json();
}
export const deleteDiscount = async (id) => {
    const response = await axiosInstance.delete(`/discount/${id}`);
    return await response.json();
}
