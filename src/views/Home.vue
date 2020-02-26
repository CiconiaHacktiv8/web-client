<template>
  <div class="home">
    <navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
  name: 'Home',
  components: {
    Navigation
  },
  methods: {
    checkLogin () {
      if (localStorage.getItem('token')) {
        this.$store.commit('LOGIN')
        this.$store.commit('SET_USER', {
          name: localStorage.getItem('name'),
          email: localStorage.getItem('email'),
          point: localStorage.getItem('point')
        })
        this.$store.dispatch('fetchItemList')
        this.$store.dispatch('fetchTravelList')
        this.$store.dispatch('fetchUserCart')
        this.$store.dispatch('fetchItemToBuy')
        this.$store.dispatch('fetchItemOrdered')
      } else {
        this.$router.push('/login')
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 75px;
  min-height: 100vh
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0.3;
}
</style>
