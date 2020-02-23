<template>
  <div class="card my-1" style="width: 100%">
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
          <h5 class="card-title">Card title</h5>
          <p
            class="card-text"
          >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="col-md-2 d-flex flex-column justify-content-center align-items-center">
        <a v-b-modal.purchase class="btn btn-primary my-1">Purchase</a>
        <!-- <a href="#" class="btn btn-primary my-1">Reject</a> -->
      </div>
    </div>
    <b-modal id="purchase" title="Purchase Item" hide-footer>
      <form @submit.prevent="handlePurchase">
        <div class="form-group">
          <label for="purchase">Total Purchase: sekian sekian</label>
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
  name: 'PurchaseItem',
  data () {
    return {
      errors: []
    }
  },
  props: {
    cart: Object
  },
  methods: {
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
