<template>
    <div class="register">
        <input type="text" class="input" placeholder="username" v-model="credentials.username">
        <input type="text" class="input" placeholder="e-mail" v-model="credentials.email">
        <input type="password" class="input" placeholder="password" v-model="credentials.password">
        <input type="password" class="input" placeholder="confirm password" v-model="credentials.confirmPassword">
        <i class="icon bi-pencil-square" :class="credentials.password === credentials.confirmPassword ? 'enabled' : 'disabled'"
            @click="register()" />
    </div>
</template>

<script>
    import { authManager } from '@/managers/auth_manager';

    export default {
        data() {
            return {
                credentials: {
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            }
        },
        methods: {
            async register() {
                await authManager.register(this.credentials).then(response => {
                    if (response) this.$router.push(page('home'));
                });
            }
        }
    }
</script>

<style scoped>
    .register {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .input {
        border: 2px solid black
    }

    .icon {
        color: black;
    }

    .icon.enabled:hover {
        color: rgb(115, 220, 80);
    }

    .icon.disabled {
        color: rgb(220, 80, 80);
        cursor: default;
        pointer-events: none;
    }
</style>