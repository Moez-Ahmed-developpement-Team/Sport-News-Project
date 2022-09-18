import { createRouter, createWebHistory } from 'vue-router'

import Viewer from '../views/Viewer.vue';
import SignIn from '../components/SignIn.vue'

=======
import Viewer from '../views/Viewer.vue'
import Allposts from '@/components/All-posts.vue';
import AddPost from '@/components/AddPost.vue'  
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
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
