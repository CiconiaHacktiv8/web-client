<template>
  <!-- <div class="d-flex flex-wrap justify-content-center"> -->
  <div class="card-columns">
    <item-card v-for="item in $store.state.travelDetail.itemList" :key="item._id" :item="item" />
  </div>
</template>

<script>
import ItemCard from './ItemCard'
export default {
  name: 'TravelItemList',
  components: {
    ItemCard
  }
}
</script>

<style>
</style>
