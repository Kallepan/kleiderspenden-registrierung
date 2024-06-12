import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import App from './App.vue';
import router from './router';

//in main.js
import 'primevue/resources/themes/mdc-dark-indigo/theme.css';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);
app.use(ToastService);

app.use(router);

app.mount('body');
