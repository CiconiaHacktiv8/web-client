<template>
  <div class="section d-flex flex-column">
    <div class="section d-flex flex-column">
      <h2>Pending Purchase</h2>
      <div>
        <purchase-item />
        <purchase-item />
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseItem from '../../components/carts/PurchaseItem'
export default {
  name: 'CartOffered',
  components: {
    PurchaseItem
  }
}
</script>

<style>
</style>
