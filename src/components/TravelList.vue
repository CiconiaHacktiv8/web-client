<template>
    <div class="horizontal-scrollable">
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
      <travel-card />
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

<style scoped>
.horizontal-scrollable {
  overflow: auto;
  white-space: nowrap;
}

.horizontal-scrollable > .col-md-4 {
  display: inline-block;
  float: none;
}
/* Decorations */

.col-md-4 {
  color: white;
  font-size: 24px;
  padding-bottom: 20px;
  padding-top: 18px;
}

.col-md-4:nth-child(2n + 1) {
  background: green;
}

.col-md-4:nth-child(2n + 2) {
  background: black;
}
</style>
