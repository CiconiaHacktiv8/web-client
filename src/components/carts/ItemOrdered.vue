<template>
  <div class="card my-1" style="width: 100%">
    <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
      {{error}}
    </div>
    <div class="row no-gutters">
      <div class="col-md-2 d-flex align-items-center">
        <img
          src="https://picsum.photos/600/300/?image=525"
          class="card-img img-fluid d-flex"
          alt="picsum"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <!-- <h5 class="card-title">{{cart.itemId.name}}</h5> -->
          <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemToBuy',
  data () {
    return {
      errors: []
    }
  },
  props: {
    cart: Object
  }
}
</script>

<style>
</style>
