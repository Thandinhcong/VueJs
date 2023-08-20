import { createRouter, createWebHashHistory } from "vue-router";

import JobView from "../components/JobSearch/JobView.vue"
import HomeView from "../views/HomeView.vue";
import JobResultsView from '../views/JobResultsView.vue';


const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/jobs/results",
        name: "JobResults",
        component: JobResultsView,
    },
    {
        path: "/jobs/results/:id",
        name: "JobListing",
        component: JobView,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;