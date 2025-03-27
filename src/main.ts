import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')
