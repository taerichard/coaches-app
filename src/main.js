import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';

App.use(router);

createApp(App).mount('#app');
