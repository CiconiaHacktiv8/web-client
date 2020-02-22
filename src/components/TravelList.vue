<template>
    <div class="horizontal-scrollable">
      <travel-card v-for="travel in $store.state.travelList" :key="travel._id" :travel="travel"/>
    </div>
</template>

<script>
import TravelCard from './TravelCard'
export default {
  name: 'TravelItem',
  components: {
    TravelCard
  }
}
</script>

<style scoped>
.horizontal-scrollable {
  overflow: auto;
  white-space: nowrap;
}
</style>
