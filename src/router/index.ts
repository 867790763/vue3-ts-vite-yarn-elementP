import { createRouter, createWebHistory } from 'vue-router'
import demoRoutes from './demo'

export const routes = [
    {
        path: '/login',
        component: () => import("@/views/login.vue"),
        hidden: true
    },
    {
        path: '/index',
        component: () => import("@/views/index.vue"),
        hidden: true
    },
    {
        path: '/404',
        component: () => import("@/views/404.vue"),
        hidden: true
    },
    ...demoRoutes
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;