<template>
    <div class="home">
        <p class="name">central server</p>
        <div class="panels">
            <ul class="navigation">
                <li class="item" @click="goTo('agents')"><i class="icon bi-person-badge-fill" /> agents</li>
                <li class="item" @click="goTo('configs')"><i class="icon bi-gear-fill" /> configs</li>
                <li class="item" @click="goTo('extensions')"><i class="icon bi-tools" /> extensions</li>
                <li class="item" @click="goTo('logs')"><i class="icon bi-file-earmark-text-fill" /> logs</li>
                <li class="item" @click="goTo('profiles')"><i class="icon bi-person-vcard-fill" /> profiles</li>
                <li class="item" @click="goTo('superusers')"><i class="icon bi-person-plus-fill" /> superusers</li>
                <li class="item" @click="goTo('tenants')"><i class="icon bi-houses-fill" /> tenants</li>
                <li class="item" @click="goTo('users')"><i class="icon bi-person-fill" /> users</li>
                <i class="item icon bi-arrow-left" @click="logout()" />
            </ul>
            <RouterView @error="errorHandler" />
        </div>
    </div>

</template>

<script>
    import { authManager } from '@/managers/auth_manager.js';

    const page = (name) => {
        return { name: name }
    }

    export default {
        beforeRouteEnter(to, from, next) {
            if (localStorage.getItem('token') && localStorage.getItem('role')) {
                authManager.load(localStorage.getItem('token'), localStorage.getItem('role'));
                next();
            } else next(page('login'));
        },
        beforeMount() {
            this.goTo('configs');
        },
        methods: {
            goTo(pageName) {
                this.$router.push(page(pageName));
            },
            async logout() {
                await authManager.logout().then(response => {
                    if (response) this.goTo('login');
                });
            },
            errorHandler(err) {
                this.$toast.error(err.response.data, this.$toast.settings);
            },
        },
        emits: ['error']
    }
</script>

<style scoped>
    .home {
        background-color: rgb(68, 94, 145, 0.5);
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

    .panels {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .navigation {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
        margin: 0 24px 0 0;
        list-style-type: none;
    }

    .item {
        margin: 12px 32px 12px 0;
        padding: 2px 8px;
        color: rgb(255, 255, 255);
        background: linear-gradient(120deg, rgb(98, 84, 244), rgb(22, 21, 64));
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        text-transform: capitalize;
    }

    .item.icon {
        background: linear-gradient(120deg, rgb(244, 84, 84), rgb(64, 21, 21));
        font-size: 24px;
    }

    .item:hover {
        filter: brightness(75%);
    }
</style>