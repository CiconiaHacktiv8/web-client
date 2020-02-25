<template>
  <div class="section d-flex flex-column cart-view pt-2">
    <div>
      <h3>User requested item</h3>
      <p v-if="$store.state.openCart.length !== 0">requested by users, do you want to accept request?</p>
      <div class="offered-list">
        <cart-item v-for="cart in $store.state.openCart" :key="cart._id" :cart="cart"/>
      </div>
    </div>
    <div v-if="$store.state.openCart.length === 0" class="text-center image-container">
      <img src="https://i.postimg.cc/hPBrd69n/noitemtoshow-Asset-2.png" alt="not found" class="img-fluid">
    </div>
  </div>
</template>

<script>
import CartItem from '../../components/carts/CartItem'
export default {
  name: 'CartOpen',
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
