import axios from 'axios';
import settings from '../settings.json';

const api = axios.create({
    baseURL: settings.api.baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default api;