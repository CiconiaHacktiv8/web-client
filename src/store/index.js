import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    isLoading: false,
    itemList: [],
    travelList: [],
    itemDetail: {}
  },
  mutations: {
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
    }
  },
  modules: {
  }
})
