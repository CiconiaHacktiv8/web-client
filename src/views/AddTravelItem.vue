<template>
  <div class="container" style="margin-top: -75px;">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <form @submit.prevent="handleSubmit" class="bg-light shadow-lg" style="border-radius: 20px; width: 50rem; background: rgb(0,212,255);background: linear-gradient(18deg, rgba(0,212,255,1) 0%, rgba(255,255,255,1) 53%);">
        <div class="text-center bg-primary py-3 text-light mb-3" style="border-radius: 20px 20px 0 0;">
          <h2>Post Your Pre-Order Item </h2>
        </div>
        <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div>
        <div class="row px-5">
          <div class="col d-flex align-items-center">
            <div class="w-100">
              <div class="form-group">
                <label for="inputTitle" style="font-size: 1.50rem;" class="font-weight-bold">Name</label>
                <input
                  type="text"
                  class="form-control custom-input"
                  id="inputTitle"
                  aria-describedby="emailHelp"
                  placeholder="What is your item name"
                  v-model="name"
                />
              </div>
              <label for="quantity" style="font-size: 1rem;">Quantity</label>
              <div class="d-block">
              <button class="border border-danger bg-light rounded-circle" @click="decreaseNumber" type="button" style="color: red; width: 25px; height: 25px;">-</button>
              <input type="number" class="custom-input text-center mx-2" style="width: 5rem;" v-model="quantity" />
              <button type="button" class="border border-success bg-light rounded-circle mb-4" @click="increaseNumber" style="color: green; width: 25px; height: 25px;">+</button>
              </div>
              <div>
              </div>
              <div class="form-group">
                <label for="inputPrice" style="font-size: 1.50rem;" class="font-weight-bold">Offered Price</label>
                <input
                  type="number"
                  class="form-control custom-input"
                  id="inputPrice"
                  placeholder="1000"
                  v-model="price"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="form-group">
              <vue-image-chooser name="image-chooser" @change="uploadFile" :progress="imageProgress" :error="error" />
            </div>
          </div>
        </div>
        <div class="text-center form-group">
          <button type="submit" class="btn btn-primary my-3 rounded-pill px-3" style="font-size: 1.25rem;">Post Pre-Order Item</button>
        </div>
      </form>
    </div>
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
      price: null,
      quantity: 1,
      location: '',
      image: '',
      imageProgress: null,
      error: ''
    }
  },
  methods: {
    decreaseNumber() {
      if (this.quantity <= 1 || !this.quantity) this.quantity = 1
      else this.quantity--
    },
    increaseNumber() {
      this.quantity++
    },
    uploadFile(file) {
      this.file = file.file
    },
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
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance:textfield;
}

.custom-input {
  border-bottom: 1px solid gray;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  background: none;
}

input:focus {
  outline: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  background: none !important;
}
</style>
