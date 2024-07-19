import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import {createRouter, createWebHashHistory, RouterOptions} from 'vue-router'
import 'element-plus/dist/index.css';
import routes from "./router/router.ts";

const routerOptions: RouterOptions = {
    history: createWebHashHistory(),
    routes
}
const router = createRouter(routerOptions)
const state = createPinia()

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}


app.use(state)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
