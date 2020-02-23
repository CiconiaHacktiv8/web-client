<template>
  <div class="section d-flex flex-column">
    <h2>Offered</h2>
    <div class="offered-list">
      <offered-item v-for="cart in $store.state.offeredCart" :key="cart._id" :cart="cart" />
    </div>
  </div>
</template>

<script>
import OfferedItem from '../../components/carts/OfferedItem'
export default {
  name: 'CartOffered',
  components: {
    OfferedItem
  }
}
</script>

<style>
</style>
