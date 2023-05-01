import axiosInstance from '../utils/axiosUtils';

export const getOfferById = async (id) => {
    try {
        const response = await axiosInstance.get(`/offer/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch offer with ID ${id}`);
    } catch (error) {
        console.error(`Error fetching offer with ID ${id}:`, error);
        throw error;
    }
};
export const createOffer = async (offerData) => {
    try {
        const response = await axiosInstance.post('/offer', offerData);
        if (response.status === 201) {
            return response.data;
        }
        throw new Error('Failed to create offer');
    } catch (error) {
        console.error('Error creating offer:', error);
        throw error;
    }
};

export const updateOffer = async (id, offerData) => {
    try {
        const response = await axiosInstance.patch(`/offer/${id}`, offerData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update offer with ID ${id}`);
    } catch (error) {
        console.error(`Error updating offer with ID ${id}:`, error);
        throw error;
    }
};
export const deleteOffer = async (id) => {
    try {
        const response = await axiosInstance.delete(`/offer/${id}`);
        if (response.status === 204) {
            return response.data;
        }
        throw new Error(`Failed to delete offer with ID ${id}`);
    } catch (error) {
        console.error(`Error delete offer with ID ${id}:`, error);
        throw error;
    }
};
export const getAllOffer = async () => {
    try {
        const response = await axiosInstance.get(`/offers`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to get all offers with ID ${id}`);
    } catch (error) {
        console.error('get all offer error:', error);
        throw error;
    }
};
