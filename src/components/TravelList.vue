<template>
  <div>
    <h1>TRAVEL LIST</h1>
    <travel-card />
    <travel-card />
    <travel-card />
    <travel-card />
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

<style>

</style>
