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
      console.log('check login triggered')
      if (localStorage.getItem('token')) {
        this.$store.commit('LOGIN')
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
  padding-top: 64px;
}
</style>
