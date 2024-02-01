import './assets/main.css'
import axios from 'axios'
import 'material-icons/iconfont/material-icons.css'
import ToastPlugin from 'vue-toast-notification';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

axios.defaults.baseURL = 'http://localhost:8000'

app.use(createPinia())
app.use(router, axios)

app.use(ToastPlugin,{
    position: 'bottom-right',
    timeout: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: 'button',
    iconEnabled: false,
    rtl: false,
})

app.mount('#app')
