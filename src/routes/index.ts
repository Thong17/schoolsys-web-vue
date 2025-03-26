import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const LoginPage = defineAsyncComponent(() => import('@/views/LoginPage.vue'))
const TodoPage = defineAsyncComponent(() => import('@/views/TodoPage.vue'))

const routes: RouteRecordRaw[] = [
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/todo', name: 'Todo', component: TodoPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
