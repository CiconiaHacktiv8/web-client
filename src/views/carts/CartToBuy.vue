<template>
  <div class="section d-flex flex-column pt-5">
    <h2 class="h3">Item(s) you need to purchase</h2>
    <div class="offered-list">
      <item-to-buy v-for="cart in $store.state.itemToBuy" :key="cart._id" :cart="cart" />
    </div>
  </div>
</template>

<script>
import ItemToBuy from '../../components/carts/ItemToBuy'
export default {
  name: 'CartOpen',
  components: {
    ItemToBuy
  }
}
</script>

<style>
</style>
