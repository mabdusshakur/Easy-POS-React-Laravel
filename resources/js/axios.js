import axios from 'axios';
import { Inertia } from '@inertiajs/inertia';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.status === 401) {
            Inertia.visit('/');
        }
        return new Promise(() => { });
    }
);

export default axiosInstance;