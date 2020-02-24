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
        <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div>
        <div class="card-body">
          <h5 class="card-title">{{cart.itemId.name}}</h5>
          <p
            class="card-text"
          >Item Origin: {{cart.travelId.locationFrom}}</p>
          <p
            class="card-text"
          >Destination: {{cart.travelId.locationTo}}</p>
          <p
            v-if="cart.status === 'offered'"
            class="card-text"
          >Your Assigned Price: </p>
          <p
            v-if="cart.status === 'offered'"
            class="card-text"
          >Offered Price: </p>
          <p
            v-if="cart.status !== 'offered'"
            class="card-text"
          >Fixed Price: {{cart.itemId.price}}</p>
          <p
            class="card-text"
          >Quantity: {{cart.quantity}}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div v-if="cart.status === 'pending delivery'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a v-b-modal.confirm class="btn btn-primary my-1">Confirm</a>
      </div>
      <div v-if="cart.status === 'pending purchase'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a v-b-modal.purchase class="btn btn-primary my-1">Purchase</a>
      </div>
      <div v-if="cart.status === 'offered'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleOffer" class="btn btn-primary my-1">Accept Offer</a>
        <a @click="handleReject" class="btn btn-primary my-1">Reject</a>
      </div>
      <div v-if="cart.status === 'open'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleAccept" class="btn btn-primary my-1">Accept</a>
      </div>
    </div>
    <b-modal id="confirm" title="Confirm Delivery" hide-footer>
      <form @submit.prevent="handleConfirm">
        <div class="form-group">
          <p>Are You Sure? </p>
          <p>make sure the item is correct and in a good shape</p>
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary">Confirm</b-button>
        </div>
      </form>
    </b-modal>
    <b-modal id="purchase" title="Purchase Item" hide-footer>
      <form @submit.prevent="handlePurchase">
        <div class="form-group">
          <label for="purchase">Total Purchase: {{cart.quantity * cart.itemId.price}}</label>
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary">Purchase</b-button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from '../../config/api'
export default {
  name: 'CartItem',
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
      this.errors = []
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'pending purchase'
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.$store.dispatch('fetchUserCart')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    handleOffer () {
      console.log('handle accept')
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'pending purchase'
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log('ofer accepted')
          this.$store.dispatch('fetchUserCart')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    handleReject () {
      console.log('handle reject')
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'reject'
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log('ofer rejected')
          this.$store.dispatch('fetchUserCart')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    handleConfirm () {
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'completed'
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('confirm')
          this.$store.dispatch('fetchUserCart')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    handlePurchase () {
      this.errors = []
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'pending delivery'
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('purchase')
          this.$store.dispatch('refetchUserCart')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  }
}
</script>

<style>
</style>
