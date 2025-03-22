import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const LoginPage = defineAsyncComponent(() => import('@/views/LoginPage.vue'))

const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'Login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
