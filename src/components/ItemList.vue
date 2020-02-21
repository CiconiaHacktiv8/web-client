<template>
  <div>
    <h1>ITEM LIST</h1>
    <item-card />
    <item-card />
    <item-card />
    <item-card />
    <item-card />
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
