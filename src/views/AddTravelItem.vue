<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="text-center">
        <h2>Post Your Item Pre-Order</h2>
      </div>
      <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
        {{error}}
      </div>
      <div class="form-group">
        <label for="inputTitle">Name of the item</label>
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          required
          v-model="name"
        />
      </div>
      <div class="form-group">
        <label for="inputPrice">Offered Price</label>
        <input
          type="number"
          class="form-control"
          id="inputPrice"
          placeholder="1000"
          required
          v-model="price"
        />
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input
          type="number"
          class="form-control"
          id="quantity"
          placeholder="1000"
          required
          v-model="quantity"
        />
      </div>
      <!-- <div class="form-group">
        <label for="inputLocation">Location</label>
        <input
          type="text"
          class="form-control"
          id="inputLocation"
          placeholder="Singapore, SG"
          required
          v-model="location"
        />
      </div> -->
      <div class="form-group">
        <label for="itemImage">Item image</label>
        <b-form-file
        id="itemImage"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
        <!-- <input
            type="text"
            class="form-control"
            id="itemImage"
            placeholder="Url Image"
            v-model="image"
          /> -->
      </div>
      <div class="text-center form-group">
        <button type="submit" class="btn btn-primary">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'AddTravelItem',
  data () {
    return {
      errors: [],
      file: null,
      name: '',
      price: 0,
      quantity: 1,
      location: '',
      image: ''
    }
  },
  methods: {
    handleSubmit () {
      this.errors = []
      const formData = new FormData()
      formData.set('name', this.name)
      formData.set('price', this.price)
      formData.set('quantity', this.quantity)
      formData.set('status', 'travel')
      formData.set('image', this.file)
      axios({
        method: 'POST',
        url: '/items/web',
        // data: {
        //   name: this.name,
        //   price: this.price,
        //   quantity: this.quantity,
        //   location: this.location,
        //   status: 'travel',
        //   image: this.image
        // },
        data: formData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.name = ''
          this.price = 0
          this.quantity = 1
          this.location = ''
          this.image = ''
          this.$store.dispatch('fetchItemList')
          this.$store.dispatch('fetchTravelList')
          this.$router.push('/')
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
