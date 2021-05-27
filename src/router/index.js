import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import( '../views/Article.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import( '../views/Link.vue')
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import( '../views/Message.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
