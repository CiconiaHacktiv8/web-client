<template>
  <div class="section d-flex flex-column pt-2">
    <h3 class="h3">Items you've requested:</h3>
    <div class="offered-list">
      <item-ordered v-for="cart in $store.state.itemOrdered" :key="cart._id" :cart="cart" />
    </div>
    <div v-if="$store.state.itemOrdered.length === 0" class="text-center image-container">
      <img src="https://i.postimg.cc/hPBrd69n/noitemtoshow-Asset-2.png" alt="not found" class="img-fluid">
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

<style scoped>
.image-container {
  padding-top: 10%
}
</style>
