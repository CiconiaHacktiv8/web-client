<template>
  <div class="container">
    <div class="card" style="width: 100%">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex align-items-center">
          <img src="https://picsum.photos/600/300/?image=525" class="card-img img-fluid d-flex" alt="picsum">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>ITEM LIST</h1>
      <item-list />
    </div>
  </div>
</template>

<script>
import ItemList from '../components/ItemList'
export default {
  name: 'DetailTravel',
  components: {
    ItemList
  }
}
</script>

<style>

</style>
