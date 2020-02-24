import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/landing',
    name: 'Landing',
    component: () => import(/* webpackChunkName: "landing" */ '../views/Home.vue')
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
        // name: 'Cart',
        component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue'),
        children: [
          {
            path: '',
            name: 'Open',
            component: () => import(/* webpackChunkName: "open" */ '../views/carts/CartOpen.vue')
          },
          {
            path: 'offered',
            name: 'Offered',
            component: () => import(/* webpackChunkName: "offered" */ '../views/carts/CartOffered.vue')
          },
          {
            path: 'pendingpurchase',
            name: 'Purchase',
            component: () => import(/* webpackChunkName: "purchase" */ '../views/carts/CartPurchase.vue')
          },
          {
            path: 'confrimdelivery',
            name: 'Delivery',
            component: () => import(/* webpackChunkName: "delivery" */ '../views/carts/CartDelivery.vue')
          }
        ]
      },
      {
        path: 'additem',
        name: 'AddItem',
        component: () => import(/* webpackChunkName: "additem" */ '../views/AddItem.vue')
      },
      {
        path: 'addtravelitem',
        name: 'AddTravelItem',
        component: () => import(/* webpackChunkName: "addtravelitem" */ '../views/AddTravelItem.vue')
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
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
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

router.beforeEach((to, from, next) => {
  // console.log(store.state)
  // if (!store.state.isLogin) {
  // if (to.matched.some(route => route.path === '')) {
  //   console.log('STORE', store)
  //   next('/login')
  // } else {
  //   next()
  // }
  // } else {
  next()
  // }
})

export default router
