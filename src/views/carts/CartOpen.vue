<template>
  <div class="section d-flex flex-column">
    <h2>Open</h2>
    <div class="offered-list">
      <!-- <open-item v-for="cart in $store.state.openCart" :key="cart._id" :cart="cart"/> -->
      <cart-item v-for="cart in $store.state.openCart" :key="cart._id" :cart="cart"/>
    </div>
  </div>
</template>

<script>
// import OpenItem from '../../components/carts/OpenItem'
import CartItem from '../../components/carts/CartItem'
export default {
  name: 'CartOpen',
  components: {
    // OpenItem,
    CartItem
  }
}
</script>

<style>
</style>
