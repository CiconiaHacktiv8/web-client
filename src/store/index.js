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
    travelDetail: {},
    userCart: {}
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
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
      state.itemList = payload
    },
    FETCH_TRAVEL_LIST (state, payload) {
      state.travelList = payload
    },
    FETCH_ITEM_DETAIL (state, payload) {
      state.itemDetail = payload
    },
    FETCH_TRAVEL_DETAIL (state, payload) {
      state.travelDetail = payload
    },
    FETCH_USER_CART (state, payload) {
      state.userCart = payload
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
