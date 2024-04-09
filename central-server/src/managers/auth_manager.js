import { authAPI } from "@/api/auth_api.js";

class AuthManager {
    async register(object) {
        const response = await authAPI.register(object).then(response => {
            return response.status === 200;
        });
        return response;
    }

    async login(object) {
        const response = await authAPI.login(object).then(response => {
            return response.status === 200;
        });
        return response;
    }

    async logout() {
        const response = await authAPI.logout().then(response => {
            return response.status === 200;;
        });
        return response;
    }
}

export const authManager = new AuthManager();