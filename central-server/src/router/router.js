import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import Home from "@/components/Home.vue";
import Agents from "@/components/panels/Agents.vue";
import Configs from "@/components/panels/configs/Configs.vue";
import Extensions from "@/components/panels/Extensions.vue";
import Logs from "@/components/panels/Logs.vue";
import Profiles from "@/components/panels/Profiles.vue";
import Superusers from "@/components/panels/Superusers.vue";
import Tenants from "@/components/panels/Tenants.vue";
import Users from "@/components/panels/Users.vue";
import settings from '../settings.json';

const routes = [
    {
        name: settings.router.login.name,
        path: settings.router.login.path,
        component: Login
    },
    {
        name: settings.router.home.name,
        path: settings.router.home.path,
        component: Home,
        children: [
            {
                name: settings.router.home.agents.name,
                path: settings.router.home.agents.path,
                component: Agents
            },
            {
                name: settings.router.home.configs.name,
                path: settings.router.home.configs.path,
                component: Configs
            },
            {
                name: settings.router.home.extensions.name,
                path: settings.router.home.extensions.path,
                component: Extensions
            },
            {
                name: settings.router.home.logs.name,
                path: settings.router.home.logs.path,
                component: Logs
            },
            {
                name: settings.router.home.profiles.name,
                path: settings.router.home.profiles.path,
                component: Profiles
            },
            {
                name: settings.router.home.superusers.name,
                path: settings.router.home.superusers.path,
                component: Superusers
            },
            {
                name: settings.router.home.tenants.name,
                path: settings.router.home.tenants.path,
                component: Tenants
            },
            {
                name: settings.router.home.users.name,
                path: settings.router.home.users.path,
                component: Users
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;