import axios from "axios";
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
    },
});
export default axiosInstance;
