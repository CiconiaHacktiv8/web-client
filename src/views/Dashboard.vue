<template>
  <div>
  <h1>TRAVEL LIST</h1>
  <travel-list />
  <h1>ITEM LIST</h1>
  <item-list />
  </div>
</template>

<script>
import TravelList from '../components/TravelList'
import ItemList from '../components/ItemList'
export default {
  name: 'Dashboard',
  components: {
    ItemList,
    TravelList
  }
}
</script>

<style>

</style>
