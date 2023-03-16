import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/upbar',
    name: 'UpBar',
    component: () => import('../views/UpBar')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Manage')
  },
  {
    path: '/psw',
    name: 'Psw',
    component: () => import('../views/Psw')
  }
]

const router = new VueRouter({
  routes
})

export default router
