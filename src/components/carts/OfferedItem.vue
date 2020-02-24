<template>
  <div class="card my-1" style="width: 100%">
    <div class="row no-gutters">
      <div class="col-md-2 d-flex align-items-center">
        <img
          :src="cart.itemId.image"
          class="card-img img-fluid d-flex"
          alt="picsum"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{cart.itemId.name}}</h5>
          <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleAccept" class="btn btn-primary my-1">Accept Offer</a>
        <a href="#" class="btn btn-primary my-1">Reject</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfferedItem',
  data () {
    return {
      errors: []
    }
  },
  props: {
    cart: Object
  },
  methods: {
    handleAccept () {
      console.log(this.cart)
    }
  }
}
</script>

<style>
</style>
