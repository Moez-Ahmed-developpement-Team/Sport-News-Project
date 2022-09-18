import { createRouter, createWebHistory } from 'vue-router'
import Viewer from '../views/Viewer.vue';
import SignIn from '../components/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Viewer
  },
  {
    path: '/log',
    name: 'S',
    component: SignIn
  },
  {
    path: '/client',
    name: 'client',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Client.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
