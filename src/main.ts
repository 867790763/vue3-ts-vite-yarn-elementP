import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import { createPinia } from 'pinia'
import animated from 'animate.css';//方案一
// import 'animate.css/animate.min.css' //方案二

const pinia = createPinia()

createApp(App).use(ElementPlus, {
    //locale: locale,
    // 支持 large、default、small
    // size: Cookies.get('size') || 'default'
  }).use(router).use(pinia).use(animated).mount('#app')
