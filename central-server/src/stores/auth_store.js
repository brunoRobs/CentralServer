import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        token: '',
        role: ''
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        setRole(role) {
            this.role = role;
            localStorage.setItem('role', role);
        },
        getToken() {
            return this.token;
        },
        getRole() {
            return this.role;
        },
        reset() {
            this.$reset();
            localStorage.removeItem('token');
            localStorage.removeItem('role');
        }
    }
});