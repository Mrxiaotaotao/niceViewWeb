// 分类导入 router@4
import { createRouter, createWebHistory } from 'vue-router'
// 创建模式
const routerHistory = createWebHistory()

const routes = [

    // 首页
    {
        path: '/',
        component: () => import('@/layout/reception/home/index.vue'),
        name: "LayoutHome",
        meta: { toolbar: true },
    },
    // 前台登录
    {
        path: '/login',
        component: () => import('@/login/index.vue'),
        meta: { redirect: '' },
        name: "Login",
    },
    // 前台注册
    {
        path: '/register',
        component: () => import('@/login/registerLogin.vue'),
        name: "registerLogin",
    },
    // 404
    {
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
        name: "error404"
    },
]
const router = createRouter({
    history: routerHistory,
    routes
})

export default router