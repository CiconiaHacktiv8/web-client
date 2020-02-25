<template>
  <div class="card my-1 shadow" style="width: 100%; border-bottom-left-radius: 50px; border-top-right-radius: 50px;">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="cart.itemId.image"
          class="card-img img-fluid"
          alt="picsum"
        />
      </div>
      <div class="col-md-6">
        <div class="card-body">
          <h5 class="card-title">{{cart.itemId.name}}</h5>
          <p
            class="card-text"
          >Item Origin: {{cart.travelId.locationFrom}}</p>
          <p
            class="card-text"
          >Destination: {{cart.travelId.locationTo}}</p>
          <p
            v-if="cart.status !== 'offered'"
            class="card-text"
          >Price per item: {{cart.itemId.price}}</p>
          <p
            class="card-text"
          >Quantity: {{cart.quantity}}</p>
          <p class="card-text">
            <small class="text-muted">waiting for traveler to accept your request</small>
          </p>
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
