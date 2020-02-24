<template>
  <div class="card d-flex m-3" style="width: 18rem;">
    <img :src="item.image" class="card-img-top" alt="picsum" />
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Location: {{item.location}}</li>
        <li class="list-group-item">Price: {{item.price}}</li>
        <li class="list-group-item">Status: {{item.status}}</li>
      </ul>
      <router-link :to="`/items/${item._id}`" class="btn btn-primary">View Detail</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: Object
  }
}
</script>

<style>

</style>
