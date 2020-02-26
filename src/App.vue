<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  sockets: {
    fetchData: function () {
      console.log('SOCKET INVOKED')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(bottom,#ade7ff,#ffffff)
}
</style>
