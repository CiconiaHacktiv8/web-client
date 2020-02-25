<template>
  <div class="container" style="margin-top: -75px;">
    <div class="d-flex justify-content-center align-items-center vh-100" style="margin-top: -75px;">
      <!-- <form @submit.prevent="handleSubmit" class="mt-2 bg-light shadow-lg" style="padding: 0 50px; border-radius: 20px; width: 50rem;"> -->
    <form class="mt-2 bg-light shadow-lg" style="border-radius: 20px; width: 50rem;background: rgb(40,170,225); background: linear-gradient(180deg, rgba(40,170,225,1) 0%, rgba(206,235,248,1) 0%, rgba(222,241,250,1) 40%, rgba(255,255,255,1) 100%);">
      <div class="text-center bg-primary mb-3 py-3" style="border-radius: 20px 20px 0 0;">
        <h2 class="text-light m-0 p-0">Request Item</h2>
      </div>
      <!-- <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
        {{error}}
      </div> -->

      <div class="row" style="padding: 0 50px;">
        <div class="left-side col-6">
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
          <div class="form-group">
            <label for="inputLocation" class="mb-0 font-weight-bold" style="font-size: 1.50rem;">Country</label>
            <div class="d-block">
              <label for="inputLocation" style="font-size: 1.rem;">Name</label>
              <input
                type="text"
                class="form-control custom-input"
                id="inputLocation"
                placeholder="Indonesia"
                v-model="countryName"
              />
            </div>
            <div class="d-block mt-2">
              <label for="inputLocation" style="font-size: 1.rem;">City Name</label>
              <input
                type="text"
                class="form-control custom-input"
                id="inputLocation"
                placeholder="Jakarta"
                v-model="cityName"
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputPrice" style="font-size: 1.50rem;" class="font-weight-bold">Price Per Piece</label>
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

        <div class="right-side col-6">
          <div class="d-flex align-items-center h-100">
            <div style="width: 100%; margin: 0 auto;">
              <vue-image-chooser name="image-chooser" @change="uploadFile" :progress="imageProgress" :error="error" />
            </div>
          </div>
        </div>
      </div>

      <div class="text-center form-group my-3">
        <button type="submit" class="btn btn-primary rounded-pill px-5" @click.prevent="handleSubmit" style="font-size: 1.25rem;">Post Item</button>
      </div>
    </form>
    </div>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'AddItem',
  data () {
    return {
      cityName: '',
      countryName: '',
      errors: [],
      file: null,
      name: '',
      price: null,
      quantity: 1,
      image: '',
      imageProgress: null,
      error: null
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
      console.log(file.file)
      this.file = file.file
    },
    handleSubmit () {
      this.errors = []
      const formData = new FormData()
      formData.set('name', this.name)
      formData.set('price', this.price)
      formData.set('quantity', this.quantity)
      formData.set('location', `${this.cityName}, ${this.countryName}`)
      formData.set('status', 'watch')
      formData.set('image', this.file)
      axios({
        method: 'POST',
        url: '/items/web',
        // data: {
        //   name: this.name,
        //   price: this.price,
        //   quantity: this.quantity,
        //   location: this.location,
        //   status: 'watch',
        //   image: this.image
        // },
        data: formData,
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.name = ''
          this.price = 10000
          this.quantity = 1
          this.location = ''
          this.image = ''
          this.$store.dispatch('fetchItemList')
          this.$store.dispatch('fetchTravelList')
          this.$router.push('/')
        })
        .catch(err => {
          // this.errors = err.response.data.errors
          err.response.data.errors.forEach(error => {
            this.$toast.open({
              type: 'warning',
              message: error,
            })
          })
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
