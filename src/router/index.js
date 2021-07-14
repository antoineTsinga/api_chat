import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import  Profil from '../views/Profil.vue'
import Chanel from '../views/Chanel.vue'
import Message from '../components/Message.vue'

const routes = [
  {
    path: '/api',
    name: 'Home',
    component: Home
  },
  {
    path: '/api/chanel',
    name: 'Chanel',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Chanel
  },
  {
    path: '/api/chanel/:_id',
    component: Chanel,
    children:[{
      path: '',
      component: Message
    }]
  },

  {
    path: '/api/profil',
    name: 'Profil',
    component: Profil
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
