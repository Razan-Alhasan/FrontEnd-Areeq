import axiosInstance from '../utils/axiosUtils';

export const getAllOffers = async () => {
    try {
        const response = await axiosInstance.get('/offers');
        return response.data;
    } catch (err) {
        console.log("get offers err :", err);
    }
};
export const getOfferById = async (id) => {
    try {
        const response = await axiosInstance.get(`/offer/${id}`);
        return response.data;
    } catch (err) {
        console.log("get offer by id err :", err);
    }
};
export const createOffer = async (offerData) => {
    try {
        const response = await axiosInstance.post('/offer', offerData);
        return response.data;
    } catch (err) {
        console.log("create offer err :", err);
    }
};
export const updateOffer = async (id, offerData) => {
    try {
        const response = await axiosInstance.patch(`/offer/${id}`, offerData);
        return response.data;
    } catch (err) {
        console.log("update offer err :", err);
    }
};
export const deleteOffer = async (id) => {
    try {
        const response = await axiosInstance.delete(`/offer/${id}`);
        return response.data;
    } catch (err) {
        console.log("delete offer  err :", err);
    }
};
