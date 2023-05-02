import axiosInstance from '../utils/axiosUtils';

export const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/products');
        if (response.status === 200) {
            return response.data;
        }
        throw new Error('Failed to fetch products');
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
export const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/product/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch product with ID ${id}`);
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        throw error;
    }
};
export const createProduct = async (productData) => {
    try {
        const response = await axiosInstance.post('/product', productData);
        if (response.status === 201) {
            return response.data;
        }
        throw new Error('Failed to create product');
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};
export const updateProduct = async (id, productData) => {
    try {
        const response = await axiosInstance.patch(`/product/${id}`, productData);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to update product with ID ${id}`);
    } catch (error) {
        console.error(`Error updating product with ID ${id}:`, error);
        throw error;
    }
};
export const changeArchiveStatus = async (id) => {
    try {
        const response = await axiosInstance.patch(`/product/archive/${id}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to toggle archive status of product with ID ${id}`);
    } catch (error) {
        console.error(`Error toggling archive status of product with ID ${id}:`, error);
        throw error;
    }
};
