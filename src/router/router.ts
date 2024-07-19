import Home from '../pages/Home.vue'
import About from "../pages/About.vue";
import All from "../pages/All.vue";

const routes = [
    {path: "/", component: Home, meta: {breadcrumb: 'home'}},
    {
        path: "/all",
        component: All,
        meta: {breadcrumb: 'all'},
    },
    {path: "/about", component: About, meta: {breadcrumb: 'about'}},
]

export default routes
