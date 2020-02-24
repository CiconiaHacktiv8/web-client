<template>
  <div class="container">
    <div class="card" style="width: 100%">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex align-items-center">
          <img :src="item.image" class="card-img img-fluid d-flex" alt="picsum">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
              {{error}}
            </div>
            <h5 class="card-title">{{$store.state.itemDetail.name}}</h5>
            <br>
            <div class="ml-5">
              <p class="card-text">Price: {{$store.state.itemDetail.price}}</p>
              <p class="card-text">Quantity: {{$store.state.itemDetail.quantity}}</p>
              <p class="card-text">Status: {{$store.state.itemDetail.status}}</p>
              <p class="card-text"><small class="text-muted">Location: {{$store.state.itemDetail.location}}</small></p>
              <p class="card-text"><small class="text-muted">Traveler Departure: if status travel</small></p>
            </div>
            <br>
            <a v-if="showOffer" v-b-modal.offer class="btn btn-primary mx-3">Offer Help</a>
            <a v-if="showRequest" v-b-modal.quantity class="btn btn-primary mx-3">Request</a>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="quantity" title="Add Quantity" hide-footer>
      <form @submit.prevent="handleRequest">
        <div class="form-group">
          <label for="quantity">how many do yo want?</label>
          <input
            type="number"
            class="form-control"
            id="quantity"
            placeholder="1"
            required
            v-model="quantity"
          />
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary">Post Request</b-button>
        </div>
      </form>
    </b-modal>
    <b-modal id="offer" title="Offer a help" hide-footer>
      <form @submit.prevent="handleOffer">
        <div class="form-group">
          <label for="quantity">for how much?</label>
          <input
            type="number"
            class="form-control"
            id="quantity"
            placeholder="1"
            required
            v-model="offer"
          />
        </div>
        <div class="text-center form-group">
          <b-button type="submit" class="btn btn-primary">Post Offer</b-button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'DetailItem',
  data () {
    return {
      errors: [],
      quantity: 1,
      offer: 1000
    }
  },
  computed: {
    item () {
      return this.$store.state.itemDetail
    },
    showOffer () {
      if (this.$store.state.itemDetail.ownerId.email === this.$store.state.user.email) {
        return false
      } else if (this.$store.state.itemDetail.status === 'travel') {
        return false
      } else {
        return true
      }
    },
    showRequest () {
      if (this.$store.state.itemDetail.ownerId.email === this.$store.state.user.email) {
        return false
      } else if (this.$store.state.itemDetail.status === 'watch') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    handleRequest () {
      this.errors = []
      axios({
        method: 'POST',
        url: '/carts',
        data: {
          travelId: this.item.travelId,
          itemId: this.item._id,
          quantity: this.quantity,
          status: 'open',
          fixPrice: this.item.price
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('quantity')
          this.$store.dispatch('fetchItemOrdered')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    },
    handleOffer () {
      this.errors = []
      axios({
        method: 'POST',
        url: '/carts',
        data: {
          // buyer id dati item owner id
          // travelId: this.item.travelId,
          itemId: this.item._id,
          // quantity: this.item.quantity,
          status: 'offered',
          fixPrice: this.offer
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.$bvModal.hide('offer')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
      this.$bvModal.hide('offer')
    }
  },
  created () {
    this.$store.dispatch('fetchItemDetail', this.$route.params.id)
  }
}
</script>

<style>

</style>
