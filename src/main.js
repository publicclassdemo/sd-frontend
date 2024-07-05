import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
axios.defaults.baseURL = 'http://localhost:5137/api/';

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.use(ElementPlus)
app.mount('#app')

