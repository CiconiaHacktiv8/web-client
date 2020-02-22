<template>
  <div class="section d-flex flex-column">
    <h2>Confirm Delivery</h2>
    <div>
      <delivery-item />
      <delivery-item />
      <delivery-item />
    </div>
  </div>
</template>

<script>
import DeliveryItem from '../../components/carts/DeliveryItem'
export default {
  name: 'CartConfirm',
  components: {
    DeliveryItem
  }
}
</script>

<style>
</style>
