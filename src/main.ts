import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(ElementPlus, {
    locale: locale,
    // 支持 large、default、small
    size: Cookies.get('size') || 'default'
  }).use(router).use(pinia).mount('#app')


  