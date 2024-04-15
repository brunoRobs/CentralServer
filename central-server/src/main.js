import './assets/main.css';
import '../node_modules/vue3-toastify/dist/index.css';

import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router/router.js';
import pinia from '@/stores/store.js';
import { toast, settings } from '@/plugins/toast.js';

const app = createApp(App);

app.use(router);

app.use(pinia);

app.config.globalProperties.$toast = toast;

app.config.globalProperties.$toast.settings = settings;

app.mount('#app');
