import axios from 'axios';
import settings from '../settings.json';

const api = axios.create({
    baseURL: settings.api.auth.baseURL
});

class AuthAPI {
    async register(object) {
        const response = api.post(settings.api.auth.register, object).then(response => {
            return response;
        });
        return response;
    }

    async login(object) {
        const response = api.post(settings.api.auth.login, object).then(response => {
            return response;
        });
        return response;
    }

    async logout() {
        const response = api.post(settings.api.auth.logout).then(response => {
            return response;
        });
        return response;
    }
}

export const authAPI = new AuthAPI();