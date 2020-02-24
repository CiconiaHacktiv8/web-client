<template>
  <div class="section d-flex flex-column">
    <div class="section d-flex flex-column">
      <h2>Pending Purchase</h2>
      <div>
        <cart-item v-for="cart in $store.state.purchaseCart" :key="cart._id" :cart="cart" />
      </div>
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

<style>
</style>
