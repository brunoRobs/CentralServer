<template>
    <div class="login">
        <p class="name">central server</p>
        <input type="text" class="input" placeholder="username" autocomplete="off" v-model="credentials.username">
        <input type="password" class="input" placeholder="password" autocomplete="off" v-model="credentials.password">
        <div class="commands">
            <i title="Sign up" class="icon bi-plus-square" @click="showModal = true" />
            <i title="Sign in" class="icon bi-arrow-right-square" @click="login()" />
        </div>
        <Modal :show-modal="showModal" :component="register" @close="showModal = false" />
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
                register: Register
            }
        },
        methods: {
            async login() {
                try {
                    await authManager.login(this.credentials).then(response => {
                        if (response) {
                            this.$router.push(page('home'))
                        };
                    });
                } catch (err) {
                    this.$toast.error(err.response.data, this.$toast.settings);
                }
            }
        }
    }
</script>

<style scoped>
    .login {
        background: linear-gradient(120deg, rgb(255, 255, 255), rgb(15, 64, 96));
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px;
        border: none;
        border-radius: 8px;
    }

    .name {
        margin: 0;
        color: rgb(255, 255, 255);
        font-size: 32px;
        text-transform: capitalize;
    }

    .commands {
        display: flex;
        flex-direction: row;
    }

    .icon {
        color: rgb(255, 255, 255);
        margin: 0 10px;
    }

    .icon:hover {
        color: rgb(85, 169, 56);
    }
</style>