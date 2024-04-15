<template>
    <div class="home">
        <div class="panels">
            <ul class="navigation">
                <li class="item" @click="goTo('agents')">agents</li>
                <li class="item" @click="goTo('configs')">configs</li>
                <li class="item" @click="goTo('extensions')">extensions</li>
                <li class="item" @click="goTo('logs')">logs</li>
                <li class="item" @click="goTo('profiles')">profiles</li>
                <li class="item" @click="goTo('superusers')">superusers</li>
                <li class="item" @click="goTo('tenants')">tenants</li>
                <li class="item" @click="goTo('users')">users</li>
                <li class="item" @click="logout()"><i class="icon bi-box-arrow-in-left" /></li>
            </ul>
        </div>
        <RouterView @error="errorHandler" />
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
        background-color: rgb(60, 60, 60);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 18px;
        border: none;
        border-radius: 8px;
    }

    .navigation {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        list-style-type: none;
    }

    .item {
        color: white;
        cursor: pointer;
        text-transform: capitalize;
        font-size: 16px;
        margin: 0 10px;
    }

    .item:hover {
        color: rgb(115, 220, 80);
    }

    .item .icon:hover {
        color: rgb(220, 80, 80);
    }
</style>