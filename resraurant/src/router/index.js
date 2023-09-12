import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from "../pages/HomePage/HomeView.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue"
import ContactPage from "../pages/ContactPage/ContactPage.vue"
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
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactPage
    }
  ]
  ,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
})

export default router
