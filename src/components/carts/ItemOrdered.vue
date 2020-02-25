<template>
  <div class="card my-1" style="width: 100%">
    <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
      {{error}}
    </div>
    <div class="row no-gutters">
      <div class="col-md-2 d-flex align-items-center">
        <img
          :src="cart.itemId.image"
          class="card-img d-flex"
          width="100px"
          height="100px"
          alt="picsum"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <!-- <h5 class="card-title">{{cart.itemId.name}}</h5> -->
          <p
            class="card-text"
          >Location From: {{cart.travelId.locationFrom}} </p>
          <p
            class="card-text"
          >Quantity: {{cart.quantity}} </p>
          <p
            class="card-text"
          >Departure: {{localeTime}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'ItemToBuy',
  data () {
    return {
      errors: []
    }
  },
  props: {
    cart: Object
  },
  computed: {
    localeTime () {
      return this.cart.travelId.departure
        ? moment(this.cart.travelId.departure).format('D MMM YYYY')
        : new Date().toLocaleString()
    }
  }
}
</script>

<style>
</style>
