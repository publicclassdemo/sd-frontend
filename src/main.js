import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import i18n from './static/i18n'
import 'element-plus/dist/index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

axios.defaults.baseURL = 'http://localhost:5137/api/';

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')

