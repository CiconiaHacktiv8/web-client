<template>
  <div class="home">
    <navigation />
    <router-view />
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
</style>
