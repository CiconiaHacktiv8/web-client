<template>
  <div class="section d-flex flex-column pt-2">
    <h3>Confirm Delivery</h3>
    <p v-if="$store.state.deliveryCart.length !== 0">Items you need to confirm as delivered</p>
    <div>
      <cart-item v-for="cart in $store.state.deliveryCart" :key="cart._id" :cart="cart" />
    </div>
    <div v-if="$store.state.deliveryCart.length === 0" class="text-center image-container">
      <img src="https://i.postimg.cc/hPBrd69n/noitemtoshow-Asset-2.png" alt="not found" class="img-fluid">
    </div>
  </div>
</template>

<script>
import CartItem from '../../components/carts/CartItem'
export default {
  name: 'CartConfirm',
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
