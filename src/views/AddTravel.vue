<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="text-center">
        <h2>Post Your Travel Detail</h2>
      </div>
      <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
        {{error}}
      </div>
      <div class="form-group">
        <label for="inputDeparture">Depart from</label>
        <input
          type="text"
          class="form-control"
          id="inputDeparture"
          aria-describedby="emailHelp"
          placeholder="Austin, TX"
          required
          v-model="locationFrom"
        />
      </div>
      <div class="form-group">
        <label for="inputArrival">Location</label>
        <input
          type="text"
          class="form-control"
          id="inputArrival"
          placeholder="Singapore, SG"
          required
          v-model="locationTo"
        />
      </div>
      <div class="form-group">
        <label for="departure">Departure date</label>
        <b-form-datepicker id="departure" :state="Boolean(date)" :min="min" v-model="date" class="mb-2"></b-form-datepicker>
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
  name: 'AddTravel',
  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    return {
      date: '',
      min: minDate,
      errors: [],
      locationFrom: '',
      locationTo: ''
    }
  },
  methods: {
    handleSubmit () {
      this.errors = []
      axios({
        method: 'POST',
        url: '/travels',
        data: {
          locationFrom: this.locationFrom,
          locationTo: this.locationTo,
          departure: this.date
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.date = ''
          this.locationFrom = ''
          this.locationTo = ''
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
