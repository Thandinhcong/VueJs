import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from "../pages/HomePage/HomeView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/about',
      name: 'about',
    }
  ]
})

export default router
