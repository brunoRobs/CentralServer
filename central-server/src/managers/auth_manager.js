import { authAPI } from "@/api/auth_api.js";
import { useAuthStore } from "@/stores/auth_store";

class AuthManager {
    async register(object) {
        const response = await authAPI.register(object).then(response => {
            return response.status === 200;
        });
        return response;
    }

    async login(object) {
        const response = await authAPI.login(object).then(response => {
            if (response.status === 200) {
                useAuthStore().setToken(response.data.token.split(';')[0]);
                useAuthStore().setRole(response.data.roles[0]);
                authAPI.setToken(useAuthStore().getToken());
                return true;
            }
            return false;
        });
        return response;
    }

    async logout() {
        const response = await authAPI.logout().then(response => {
            if (response.status === 200) {
                useAuthStore().reset();
                return true;
            }
            return false;
        });
        return response;
    }

    load(token, role) {
        useAuthStore().setToken(token);
        useAuthStore().setRole(role);
        authAPI.setToken(token);
    }
}

export const authManager = new AuthManager();