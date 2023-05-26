import axios from "axios";
const token = localStorage.getItem('token');
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
<<<<<<< HEAD
         'Authorization': token ? `Bearer ${token}` : undefined,
=======
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
>>>>>>> 08aaf2fe3e1a1d0d164f7c78f253b3da39baf3ad
    },
});

export default axiosInstance;
