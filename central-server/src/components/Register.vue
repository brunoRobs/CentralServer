<template>
    <div class="register">
        <div class="register">
            <input type="text" class="input" placeholder="username" autocomplete="off" v-model="credentials.username">
            <input type="text" class="input" placeholder="e-mail" autocomplete="off" v-model="credentials.email">
            <select class="input select">
                <option :value="credentials.role[0] = 'user'" selected>USER</option>
                <option :value="credentials.role[0] = 'superuser'">SUPERUSER</option>
                <option :value="credentials.role[0] = 'admin'">ADMIN</option>
            </select>
            <input type="password" class="input" placeholder="password" autocomplete="off" minlength="6" maxlength="40"
                v-model="credentials.password">
            <input type="password" class="input" placeholder="confirm password" autocomplete="off" minlength="6"
                maxlength="40" v-model="confirmPassword">
            <i class="icon bi-pencil-square" :class="isReady ? 'enabled' : 'disabled'" @click="register()" />
        </div>
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
                    role: []
                },
                confirmPassword: ''
            }
        },
        computed: {
            isReady() {
                return (this.credentials.username !== ''
                    && this.credentials.email !== ''
                    && this.credentials.password !== ''
                    && this.confirmPassword !== ''
                    && this.credentials.role[0] !== '')
                    && this.credentials.password === this.confirmPassword;
            }
        },
        methods: {
            async register() {
                try {
                    await authManager.register(this.credentials).then(response => {
                        if (response) {
                            this.$toast.success('User created successfully', this.$toast.settings);
                        }
                    });
                } catch (err) {
                    this.$toast.error('User creation failed', this.$toast.settings);
                }
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

    .select {
        width: 188px;
    }

    .icon.enabled {
        color: rgb(115, 220, 80)
    }

    .icon.disabled {
        color: rgb(220, 80, 80);
        cursor: default;
        pointer-events: none;
    }
</style>