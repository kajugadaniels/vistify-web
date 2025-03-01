import axios from 'axios';

const baseURL =
    import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_API_BASE_URL_PROD
        : import.meta.env.VITE_API_BASE_URL;

const webApiClient = axios.create({
    baseURL,
});

// Set up request interceptor for including JWT Bearer token
webApiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling 401 errors
webApiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized access. Please log in again.');
            localStorage.removeItem('token');
            window.location.href = '/';
        }
        return Promise.reject(error);
    }
);

// -------------- Tags API --------------

// Fetch all tags with associated places
export const getTags = async () => {
    try {
        const response = await webApiClient.get('/web/tags/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// -------------- Places API --------------

// Fetch all places with detailed information (category, tags, images, social media)
export const getPlaces = async () => {
    try {
        const response = await webApiClient.get('/web/places/');
        return response.data;
    } catch (error) {
        throw error;
    }
};