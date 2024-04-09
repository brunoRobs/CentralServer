import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import pinia from './stores/store';

const app = createApp(App);

app.use(router);

app.use(pinia);

app.mount('#app');
