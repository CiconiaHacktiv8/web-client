<template>
  <!-- <div class="card d-flex m-3" style="width: 18rem;"> -->
  <div class="card shadow" style="width: 20rem; position: relative; overflow: hidden; border-bottom-left-radius: 50px">
    <div v-if="item.status === 'travel'" class="corner-ribbon top-left sticky red shadow">Pre-Order</div>
    <div v-if="item.status !== 'travel'" class="corner-ribbon top-left sticky green shadow">Requested</div>
    <div :style="`height: 18rem; background-image: url('${item.image}'); background-repeat: no-repeat; background-size: cover`" class="image-container"></div>
    <!-- <img :src="item.image" class="card-img-top img-fluid" alt="picsum" /> -->
    <div class="card-body">
      <h5 class="card-title">{{item.name}}</h5>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Location: {{item.location}}</li>
        <!-- <li class="list-group-item">Price: {{item.price}}</li> -->
        <li v-if="item.price" class="list-group-item">Rp. {{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }},-</li>
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
  },
  computed: {
    localPrice () {
      return this.item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  },
}
</script>

<style scoped>
.image-container {
  background-image: url('https://images-na.ssl-images-amazon.com/images/I/71Rol37dmOL._AC_SY606_.jpg');
  background-repeat: no-repeat;
  background-size: contain
}
/* The ribbons */

.corner-ribbon{
  width: 200px;
  background: #e43;
  position: absolute;
  top: 25px;
  left: -50px;
  text-align: center;
  line-height: 50px;
  letter-spacing: 1px;
  color: #f0f0f0;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Custom styles */

.corner-ribbon.sticky{
  position: absolute;
}

.corner-ribbon.shadow{
  box-shadow: 0 0 3px rgba(0,0,0,.3);
}

/* Different positions */

.corner-ribbon.top-left{
  top: 25px;
  left: -50px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.corner-ribbon.top-right{
  top: 25px;
  right: -50px;
  left: auto;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.corner-ribbon.bottom-left{
  top: auto;
  bottom: 25px;
  left: -50px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.corner-ribbon.bottom-right{
  top: auto;
  right: -50px;
  bottom: 25px;
  left: auto;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

/* Colors */

.corner-ribbon.white{background: #f0f0f0; color: #555;}
.corner-ribbon.black{background: #333;}
.corner-ribbon.grey{background: #999;}
.corner-ribbon.blue{background: #39d;}
.corner-ribbon.green{background: #2c7;}
.corner-ribbon.turquoise{background: #1b9;}
.corner-ribbon.purple{background: #95b;}
.corner-ribbon.red{background: #e43;}
.corner-ribbon.orange{background: #e82;}
.corner-ribbon.yellow{background: #ec0;}
</style>
