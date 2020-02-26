<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  sockets: {
    'refetch-data': function () {
      this.$store.dispatch('fetchItemList')
      this.$store.commit('SHOW_NOTIF')
      this.$store.dispatch('fetchTravelList')
      this.$store.dispatch('fetchUserCart')
      this.$store.dispatch('fetchItemToBuy')
      this.$store.dispatch('fetchItemOrdered')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(bottom,#ade7ff,#ffffff)
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
