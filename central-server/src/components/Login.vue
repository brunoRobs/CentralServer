<template>
    <div class="login">
        <p class="name">central server</p>
        <input type="text" class="input" placeholder="username" v-model="credentials.username">
        <input type="password" class="input" placeholder="password" v-model="credentials.password">
        <div class="commands">
            <i title="Sign up" class="icon bi-plus-lg" @click="showModal = true" />
            <i title="Sign in" class="icon bi-box-arrow-in-right" @click="login()" />
        </div>
        <Modal :show-modal="showModal" @close="showModal = false" :component="component" />
    </div>
</template>

<script>
    import { authManager } from '@/managers/auth_manager.js';
    import Register from './Register.vue';
    import Modal from './Modal.vue';

    const page = (name) => {
        return { name: name }
    }

    export default {
        components: { Modal },
        data() {
            return {
                credentials: {
                    username: '',
                    password: ''
                },
                showModal: false,
                component: Register
            }
        },
        methods: {
            async login() {
                await authManager.login(this.credentials).then(response => {
                    if (response) this.$router.push(page('home'));
                });
            }
        }
    }
</script>

<style scoped>
    .login {
        background-color: rgb(60, 60, 60);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px;
        border: none;
        border-radius: 8px;
    }

    .name {
        margin: 0;
        color: white;
        font-size: 24px;
        text-transform: capitalize;
    }

    .commands {
        display: flex;
        flex-direction: row;
    }

    .icon {
        margin: 0 10px;
    }

    .icon:hover {
        color: rgb(115, 220, 80);
    }
</style>