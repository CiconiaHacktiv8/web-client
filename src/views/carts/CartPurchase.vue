<template>
  <div class="section d-flex flex-column pt-2">
    <!-- <div class="section d-flex flex-column"> -->
      <h3>Pending Purchase</h3>
      <p v-if="$store.state.purchaseCart.length !== 0">Items you need to purchase</p>
      <div>
        <cart-item v-for="cart in $store.state.purchaseCart" :key="cart._id" :cart="cart" />
      <!-- </div> -->
    </div>
    <div v-if="$store.state.purchaseCart.length === 0" class="text-center image-container">
      <img src="https://i.postimg.cc/hPBrd69n/noitemtoshow-Asset-2.png" alt="not found" class="img-fluid">
    </div>
  </div>
</template>

<script>
import CartItem from '../../components/carts/CartItem'
export default {
  name: 'CartOffered',
  components: {
    CartItem
  }
}
</script>

<style scoped>
.image-container {
  padding-top: 10%
}
</style>
