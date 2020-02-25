<template>
  <div class="section d-flex flex-column pt-2">
    <h3>Items you need to purchase</h3>
    <div class="offered-list">
      <item-to-buy v-for="cart in $store.state.itemToBuy" :key="cart._id" :cart="cart" />
    </div>
    <div v-if="$store.state.itemToBuy.length === 0" class="text-center image-container">
      <img src="https://i.postimg.cc/hPBrd69n/noitemtoshow-Asset-2.png" alt="not found" class="img-fluid">
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

<style scoped>
.image-container {
  padding-top: 10%
}
</style>
