import axiosInstance from '../utils/axiosUtils';

export const getReviews = async () => {
    try {
        const response = await axiosInstance.get('/reviews');
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to fetch reviews');
    } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
    }
};
export const getReviewById = async (id) => {
    try {
        const response = await axiosInstance.get(`/review/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch review with ID ${id}`);
    } catch (error) {
        console.error(`Error fetching review with ID ${id}:`, error);
        throw error;
    }
};
export const createReview = async (productId, reviewData) => {
  try {
    const response = await axiosInstance.post(
      `/review/${productId}`,
      reviewData
    );
    if (response.status === 201) {
      return response.data;
    }
    throw new Error("Failed to create review");
  } catch (error) {
    console.error("Error creating review:", error);
    throw error;
  }
};
export const updateReview = async (id, reviewData) => {
    try {
        const response = await axiosInstance.patch(`/review/${id}`, reviewData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update review with ID ${id}`);
    } catch (error) {
        console.error(`Error updating review with ID ${id}:`, error);
        throw error;
    }
};
export const deleteReview = async (id) => {
    try {
        const response = await axiosInstance.delete(`/review/${id}`);
        if (response.status === 204) {
            return response.data;
        }
        throw new Error(`Failed to delete review with ID ${id}`);
    } catch (error) {
        console.error(`Error deleting review with ID ${id}:`, error);
        throw error;
    }
};
