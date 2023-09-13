import "./style.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue'
import router from './router'

library.add(faBars, faTimes);
const app = createApp(App)

AOS.init({
    duration: 1200,
});

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router)
app.mount('#app')
