<template>
  <div class="card d-flex m-3" style="width: 18rem;">
    <div :style="`height: 18rem; background-image: url('${item.image}'); background-repeat: no-repeat; background-size: cover`" class="image-container"></div>
    <!-- <img :src="item.image" class="card-img-top img-fluid" alt="picsum" /> -->
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Location: {{item.location}}</li>
        <li class="list-group-item">Price: {{item.price}}</li>
        <li class="list-group-item">Status: {{item.status}}</li>
      </ul>
      <div class="m-2 p-2 text-center">
        <router-link :to="`/items/${item._id}`" class="btn btn-primary">View Detail</router-link>
      </div>
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
.image-container {
  background-image: url('https://images-na.ssl-images-amazon.com/images/I/71Rol37dmOL._AC_SY606_.jpg');
  background-repeat: no-repeat;
  background-size: contain
}
</style>
