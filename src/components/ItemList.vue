<template>
  <div class="d-flex flex-wrap justify-content-center">
    <item-card v-for="item in $store.state.itemList" :key="item._id" :item="item" />
  </div>
</template>

<script>
import ItemCard from './ItemCard'
export default {
  name: 'ItemList',
  components: {
    ItemCard
  }
}
</script>

<style>
</style>
