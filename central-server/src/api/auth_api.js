import api from './api';
import settings from '../settings.json';

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
            api.defaults.headers.Authorization = '';
            return response;
        });
        return response;
    }

    setToken(token) {
        api.defaults.headers.Authorization = token;
    }
}

export const authAPI = new AuthAPI();