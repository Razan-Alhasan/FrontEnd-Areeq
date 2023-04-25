import axiosInstance from '../utils/axiosUtils';

export const getAllOffers = async () => {
    const response = await axiosInstance.get('/offers');
    return await response.json();
}
export const getOfferById = async (id) => {
    const response = await axiosInstance.get(`/offer/${id}`);
    return await response.json();
}
export const createOffer = async () => {
    const response = await axiosInstance.post('/offer');
    return await response.json();
}
export const updateOffer = async (id) => {
    const response = await axiosInstance.patch(`/offer/${id}`);
    return await response.json();
}
export const deleteOffer = async (id) => {
    const response = await axiosInstance.delete(`/offer/${id}`);
    return await response.json();
}
