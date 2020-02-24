<template>
  <div class="section d-flex flex-column pt-5">
    <h2 class="h3">Item(s) you've requested:</h2>
    <div class="offered-list">
      <item-ordered v-for="cart in $store.state.itemOrdered" :key="cart._id" :cart="cart" />
    </div>
  </div>
</template>

<script>
import ItemOrdered from '../../components/carts/ItemOrdered'
export default {
  name: 'CartOrdered',
  components: {
    ItemOrdered
  }
}
</script>

<style>
</style>
