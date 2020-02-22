import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: true,
    isLoading: false
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
    }
  },
  actions: {
  },
  modules: {
  }
})
