<template>
  <div class="section d-flex flex-column">
    <h2>Confirm Delivery</h2>
    <div>
      <!-- <delivery-item v-for="cart in $store.state.deliveryCart" :key="cart._id" :cart="cart" /> -->
      <cart-item v-for="cart in $store.state.deliveryCart" :key="cart._id" :cart="cart" />
    </div>
  </div>
</template>

<script>
// import DeliveryItem from '../../components/carts/DeliveryItem'
import CartItem from '../../components/carts/CartItem'
export default {
  name: 'CartConfirm',
  components: {
    // DeliveryItem,
    CartItem
  }
}
</script>

<style>
</style>
