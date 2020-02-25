import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      email: '',
      point: 0,
      name: ''
    },
    showNotif: true,
    isLogin: false,
    isLoading: false,
    itemList: [],
    travelList: [],
    itemDetail: {
      name: '',
      price: 0,
      quantity: 1,
      image: '',
      ownerId: {
        email: '',
        point: '',
        name: ''
      },
      status: '',
      location: ''
    },
    travelDetail: { userId: { name: '' } },
    userCart: {},
    openCart: [],
    offeredCart: [],
    purchaseCart: [],
    deliveryCart: [],
    itemToBuy: [],
    itemOrdered: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SHOW_NOTIF (state) {
      state.showNotif = true
    },
    HIDE_NOTIF (state) {
      state.showNotif = false
    },
    LOGIN (state) {
      state.isLogin = true
    },
    LOGOUT (state) {
      state.isLogin = false
    },
    LOADING_START (state) {
      state.isLoading = true
    },
    LOADING_FINISH (state) {
      state.isLoading = false
    },
    FETCH_ITEM_LIST (state, payload) {
      state.itemList = payload.reverse()
    },
    FETCH_TRAVEL_LIST (state, payload) {
      state.travelList = payload.reverse()
    },
    FETCH_ITEM_DETAIL (state, payload) {
      state.itemDetail = payload
    },
    FETCH_TRAVEL_DETAIL (state, payload) {
      state.travelDetail = payload
    },
    FETCH_USER_CART (state, payload) {
      state.userCart = payload
    },
    SET_OPEN_CART (state, payload) {
      state.openCart = payload
    },
    SET_OFFERED_CART (state, payload) {
      state.offeredCart = payload
    },
    SET_PURCHASE_CART (state, payload) {
      state.purchaseCart = payload
    },
    SET_DELIVERY_CART (state, payload) {
      state.deliveryCart = payload
    },
    SET_ITEM_TO_BUY (state, payload) {
      state.itemToBuy = payload
    },
    SET_ITEM_ORDERED (state, payload) {
      state.itemOrdered = payload
    }
  },
  actions: {
    fetchItemList (context) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/items'
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_ITEM_LIST', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchTravelList (context) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/travels'
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_TRAVEL_LIST', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchItemDetail (context, payload) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: `/items/${payload}`
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_ITEM_DETAIL', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchTravelDetail (context, payload) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: `/travels/${payload}`
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_TRAVEL_DETAIL', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchUserCart (context, payload) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/carts/user',
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_USER_CART', data)
            console.log('FETCH cart success', data)
            context.commit('SET_OPEN_CART', data.open)
            context.commit('SET_OFFERED_CART', data.offered)
            context.commit('SET_PURCHASE_CART', data.pendingPurchase)
            context.commit('SET_DELIVERY_CART', data.pendingDelivery)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    refetchUserCart (context, payload) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/carts/user',
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('FETCH_USER_CART', data)
            console.log('REFETCH cart success', data)
            context.commit('SET_OPEN_CART', data.open)
            context.commit('SET_OFFERED_CART', data.offered)
            context.commit('SET_PURCHASE_CART', data.pendingPurchase)
            context.commit('SET_DELIVERY_CART', data.pendingDelivery)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchItemToBuy (context) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/carts/travel',
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            console.log('FETCH ITEM TO BUY INVOKED', data)
            context.commit('SET_ITEM_TO_BUY', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    },
    fetchItemOrdered (context) {
      context.commit('LOADING_START')
      return new Promise(function (resolve, reject) {
        axios({
          method: 'GET',
          url: '/carts/open',
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(({ data }) => {
            context.commit('LOADING_FINISH')
            context.commit('SET_ITEM_ORDERED', data)
            resolve()
          })
          .catch(err => {
            context.commit('LOADING_FINISH')
            reject(err)
          })
      })
    }
  },
  modules: {
  }
})
