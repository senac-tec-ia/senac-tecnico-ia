import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import HomeView from './views/HomeView.vue'
import AulaView from './views/AulaView.vue'
import AdminView from './views/AdminView.vue'
import './style.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/aula/:slug', component: AulaView },
    { path: '/admin', component: AdminView },
  ],
})

createApp(App).use(router).mount('#app')
