<template>
  <div id="dashboard-custom">
    <h1>TRAVEL LIST</h1>
    <travel-list />
    <div class="container">
      <h1>ITEM LIST</h1>
      <item-list />
    </div>
  </div>
</template>

<script>
import TravelList from '../components/TravelList'
import ItemList from '../components/ItemList'
export default {
  name: 'Dashboard',
  components: {
    ItemList,
    TravelList
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
</style>
