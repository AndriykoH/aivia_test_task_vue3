import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('@/views/Game.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
