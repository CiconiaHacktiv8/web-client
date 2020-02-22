<template>
  <div class="section d-flex flex-column">
    <h2>Open</h2>
    <div class="offered-list">
      <open-item />
      <open-item />
      <open-item />
    </div>
  </div>
</template>

<script>
import OpenItem from '../../components/carts/OpenItem'
export default {
  name: 'CartOpen',
  components: {
    OpenItem
  }
}
</script>

<style>
</style>
