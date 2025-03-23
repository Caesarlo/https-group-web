import { createRouter, createWebHistory } from 'vue-router'

import MainVue from '@/view/main.vue'

const routes = [
    { path: '/main', component: MainVue },
    {
        path: '/', component: MainVue, redirect: '/main', children: [

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router