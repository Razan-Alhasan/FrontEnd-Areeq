import axiosInstance from '../utils/axiosUtils';

export const getDiscounts = async () => {
    try {
        const response = await axiosInstance.get('/discounts');
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to fetch discounts');
    } catch (error) {
        console.error('Error fetching discounts:', error);
        throw error;
    }
};
export const getDiscountById = async (id) => {
    try {
        const response = await axiosInstance.get(`/discount/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch discount with ID ${id}`);
    } catch (error) {
        console.error(`Error fetching discount with ID ${id}:`, error);
        throw error;
    }
};
export const createDiscount = async (discountData) => {
    try {
        const response = await axiosInstance.post('/discount', discountData);
        if (response.status === 201) {
            return response.data;
        }
        throw new Error('Failed to create discount');
    } catch (error) {
        console.error('Error creating discount:', error);
        throw error;
    }
};
export const updateById = async (id, discountData) => {
    try {
        const response = await axiosInstance.put(`/discount/${id}`, discountData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update discount with ID ${id}`);
    } catch (error) {
        console.error(`Error updating discount with ID ${id}:`, error);
        throw error;
    }
};
export const deleteDiscount = async (id) => {
    try {
        const response = await axiosInstance.delete(`/discount/${id}`);
        if (response.status === 204) {
            return response.data;
        }
        throw new Error(`Failed to delete discount with ID ${id}`);
    } catch (error) {
        console.error(`Error deleting discount with ID ${id}:`, error);
        throw error;
    }
};
