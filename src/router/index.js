import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue')
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Dashboard.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
      },
      {
        path: 'additem',
        name: 'AddItem',
        component: () => import(/* webpackChunkName: "additem" */ '../views/AddItem.vue')
      },
      {
        path: 'addtravel',
        name: 'AddTravel',
        component: () => import(/* webpackChunkName: "addtravel" */ '../views/AddTravel.vue')
      },
      {
        path: 'items/:id',
        name: 'DetailItem',
        component: () => import(/* webpackChunkName: "detailitem" */ '../views/DetailItem.vue')
      },
      {
        path: 'travels/:id',
        name: 'DetailTravel',
        component: () => import(/* webpackChunkName: "detailtravel" */ '../views/DetailTravel.vue')
      }]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
