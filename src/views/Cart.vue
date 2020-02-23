<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-2">
        <span>Navigasi cart</span>
        <b-nav vertical class="w-25">
          <b-nav-item to="/cart" active>Open</b-nav-item>
          <b-nav-item to="/cart/offered">Offered</b-nav-item>
          <b-nav-item to="/cart/pendingpurchase">Pending Purchase</b-nav-item>
          <b-nav-item to="/cart/confrimdelivery">Confirm Delivery</b-nav-item>
        </b-nav>
      </div>
      <div class="col-lg-10 d-flex flex-column">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  created () {
    // this.$store.dispatch('fetchUserCart')
  }
}
</script>

<style>
</style>
