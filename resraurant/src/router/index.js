import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from "../pages/HomePage/HomeView.vue";
import AboutPage from "../pages/AboutPage/AboutPage.vue"
import ContactPage from "../pages/ContactPage/ContactPage.vue";
import Signin from "../components/auths/Signin.vue";
import Signup from "../components/auths/Signup.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      children: [
        {
          path: "",
          name: "home",
          component: HomeVue
        },
        {
          path: 'about',
          name: 'about',
          component: AboutPage
        },
        {
          path: "contacts",
          name: "contacts",
          component: ContactPage
        },
        {
          path: "login",
          name: "login",
          component: Signin
        },
        {
          path: "signup",
          name: "signup",
          component: Signup
        },
      ]
    }

  ]
  ,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
})

export default router
