<template>
  <b-navbar variant="primary" type="dark" fixed="top" id="custom-nav">
    <b-navbar-brand to="/">
      <img src="https://i.postimg.cc/hGVCbznv/white-Asset-2.png" width="30" class="d-inline-block align-top" alt="Kitten">
      Ciconia
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
      <b-navbar-nav>
        <div class="d-flex justify-content-center align-items-center mx-2">
          <span class="d-flex" v-if="$store.state.user.name" style="">Welcome, {{$store.state.user.name}}</span>
        </div>
        <b-nav-item to="/cart">Cart</b-nav-item>
        <b-nav-item v-if="$store.state.isLogin" @click="handleLogout">Logout</b-nav-item>
        <b-nav-item v-if="!$store.state.isLogin" to="/login">Login</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-if="$store.state.isLogin">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Add</b-button>
          </template>
          <b-dropdown-item to="/addtravel">Travel</b-dropdown-item>
          <b-dropdown-item to="/additem">Request</b-dropdown-item>
          <b-dropdown-item to="/addtravelitem">Pre Order</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    handleLogout () {
      localStorage.clear()
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
#custom-nav {
  border-bottom-left-radius: 40px;
  height: 75px;
  padding-left: 40px
}
</style>
