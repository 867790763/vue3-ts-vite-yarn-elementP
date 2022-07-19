import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
// 只能加载非变量的样式
import './styles/index.scss'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
