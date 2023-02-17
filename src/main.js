import { createApp } from 'vue';
import routes from './router.js';
import App from './App.vue';
import store from './store/index.js';

const app = createApp(App);

app.use(routes);
app.use(store);

app.mount('#app');
