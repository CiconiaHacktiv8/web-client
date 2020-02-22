<template>
  <div class="section d-flex flex-column">
    <h2>Offered</h2>
    <div class="offered-list">
      <offered-item />
      <offered-item />
      <offered-item />
    </div>
  </div>
</template>

<script>
import OfferedItem from '../../components/carts/OfferedItem'
export default {
  name: 'CartOffered',
  components: {
    OfferedItem
  }
}
</script>

<style>
</style>
