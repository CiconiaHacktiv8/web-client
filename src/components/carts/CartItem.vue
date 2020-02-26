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
          >Offered Price: </p>
          <p
            v-if="cart.status !== 'offered'"
            class="card-text"
          >Price per item: Rp. {{localPrice}},-</p>
          <p
            class="card-text"
          >Quantity: {{cart.quantity}}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 1 mins ago</small>
          </p>
        </div>
      </div>
      <div v-if="cart.status === 'pending verification'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a class="btn disabled btn-primary btn-ciconia my-1">Verification...</a>
      </div>
      <div v-if="cart.status === 'pending delivery'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleDelivered" class="btn btn-primary btn-ciconia my-1">Confirm</a>
      </div>
      <div v-if="cart.status === 'pending purchase'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a v-if="!cart.invoiceId" @click="handleXendit" class="btn btn-primary btn-ciconia my-1">Purchase</a>
        <span v-if="cart.invoiceId">waiting payment..</span><a v-if="cart.invoiceId" @click="handleRecheck" class="btn btn-primary btn-ciconia my-1 mx-2">Recheck?</a>
      </div>
      <div v-if="cart.status === 'offered'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleOffer" class="btn btn-primary btn-ciconia my-1">Accept Offer</a>
        <a @click="handleReject" class="btn btn-primary btn-ciconia my-1">Reject</a>
      </div>
      <div v-if="cart.status === 'open'" class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a @click="handleAccept" class="btn btn-primary btn-ciconia my-1">Accept</a>
      </div>
    </div>
    <b-modal :id="cart._id" title="Confirm Delivery" hide-footer>
      <form @submit.prevent="handleConfirm">
        <div class="form-group">
          <p>Are You Sure? </p>
          <p>make sure the item is correct and in a good shape</p>
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary btn-ciconia">Confirm</b-button>
        </div>
      </form>
    </b-modal>
    <b-modal id="purchase" title="Purchase Item" hide-footer>
      <form @submit.prevent="handlePurchase">
        <div class="form-group">
          <label for="purchase">Total Purchase: {{cart.quantity * cart.itemId.price}}</label>
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary btn-ciconia">Purchase</b-button>
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
  computed: {
    localPrice () {
      return this.cart.itemId.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  },
  props: {
    cart: Object
  },
  methods: {
    handleDelivered () {
      this.$bvModal.show(this.cart._id)
    },
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
    handleReject () {
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
    async handleXendit () {
      try {
        const invoice = await axios({
          method: 'POST',
          url: '/payment',
          data: {
            description: this.cart.itemId.name,
            amount: this.cart.itemId.price * this.cart.quantity
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        await axios({
          method: 'PATCH',
          url: `/carts/${this.cart._id}`,
          data: {
            invoiceId: invoice.data.id
          },
          headers: {
            token: localStorage.getItem('token')
          }
        })
        window.open(invoice.data.invoice_url, '_blank')
        this.$store.dispatch('refetchUserCart')
      } catch (error) {
      }
    },
    handlePurchase () {
      this.errors = []
      axios({
        method: 'PATCH',
        url: `/carts/${this.cart._id}`,
        data: {
          status: 'pending verification'
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
    },
    handleRecheck () {
      this.errors = []
      axios({
        method: 'GET',
        url: `/payment/${this.cart.invoiceId}`,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          if (data.status === 'SETTLED' && this.cart.status === 'pending purchase') {
            this.handlePurchase()
          }
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  },
  created () {
    if (this.cart.invoiceId) {
      this.handleRecheck()
    }
  }
}
</script>

<style>
.test {
  border-bottom-left-radius: 25px
}
</style>
