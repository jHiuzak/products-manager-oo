import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import {
    PageHeader
} from './components';

const app = createApp(App)

app.use(router);
app.component('page-header', PageHeader);

app.mount('#app')
