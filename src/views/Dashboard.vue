<template>
  <div id="dashboard-custom">
    <div class="container-fluid">
      <h1 class="h3 m-2 pl-5">Travelers around the world:</h1>
      <travel-list />
    </div>
    <div class="container mt-5">
      <h1 class="h3">Explore items and requests:</h1>
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
      if (!localStorage.getItem('token')) {
        this.$router.push('/login')
      }
    }
  },
  created () {
    // this.checkLogin()
  }
}
</script>

<style lang="scss" scoped>
</style>
