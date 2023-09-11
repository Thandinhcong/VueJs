import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from "../pages/HomePage/HomeView.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
  ,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
})

export default router
