import axios from 'axios';

// Set API Base URL
const baseURL =
    import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_API_BASE_URL_PROD
        : import.meta.env.VITE_API_BASE_URL;

// Set Media Base URL
export const MEDIA_BASE_URL =
    import.meta.env.MODE === 'production'
        ? import.meta.env.VITE_MEDIA_BASE_URL_PROD
        : import.meta.env.VITE_MEDIA_BASE_URL;

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

// -------------- Categories API --------------

//  Fetch all categories with associated places
export const getCategories = async () => {
    try {
        const response = await webApiClient.get('/categories/'); // Make sure this endpoint exists in Django
        return response.data;
    } catch (error) {
        throw error;
    }
};


// -------------- Tags API --------------

// Fetch all tags with associated places
export const getTags = async () => {
    try {
        const response = await webApiClient.get('/tags/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// -------------- Places API --------------

// Fetch all places with detailed information (category, tags, images, social media)
export const getPlaces = async () => {
    try {
        const response = await webApiClient.get('/places/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch details for a specific place
export const placeDetails = async (placeId) => {
    try {
        const response = await webApiClient.get(`/place/${placeId}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};