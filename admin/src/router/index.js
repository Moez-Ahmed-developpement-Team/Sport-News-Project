import { createRouter, createWebHistory } from 'vue-router'

import SignIn from '../SignIn.vue'
import Allposts from '@/components/All-posts.vue';
import AddPost from '@/components/AddPost.vue' ;
import AddAdmin from '@/components/AddAdmin.vue'
import AllAdmins from'@/components/AllAdmins.vue'
import BasketPosts from '@/components/BasketPosts.vue'
import footballtPosts from '@/components/footballPosts.vue'
import tennisPosts from '@/components/tennisPosts.vue'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: SignIn
  },
  {

    path: '/allPosts',
    name: 'allPosts',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Allposts
  },
  {
    path: '/AddPost',
    name: 'AddPost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddPost
  },
  {
    path: '/AddAdmin',
    name: 'AddAdmin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddAdmin
  },
  {
    path: '/AllAdmins',
    name: 'AllAdmins',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AllAdmins
  },
  {
    path: '/footballNews',
    name: 'footballNews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: footballtPosts
  },
  {
    path: '/basketballNews',
    name: 'basketballNews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: BasketPosts
  },
  {
    path: '/tennisNews',
    name: 'tennisNews',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: tennisPosts
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
