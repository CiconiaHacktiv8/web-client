<template>
  <div class="container" style="margin-top: -75px;">
    <div class="d-flex justify-content-center align-items-center vh-100">
      <form @submit.prevent="handleSubmit" class="shadow-lg" style="border-radius: 20px; width: 50rem;background: rgb(40,170,225); background: linear-gradient(180deg, rgba(40,170,225,1) 0%, rgba(206,235,248,1) 0%, rgba(222,241,250,1) 40%, rgba(255,255,255,1) 100%);">
        <div class="text-center bg-primary py-3 mb-3" style="border-radius: 20px 20px 0 0">
          <h2 class="text-light">Post Your Travel Detail</h2>
        </div>
        <!-- <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div> -->
        <div class="mx-5">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label for="inputDeparture" class="font-weight-bold" style="font-size: 1.50rem;">Depart</label>
                <div class="d-block">
                  <label for="inputLocation" style="font-size: 1.rem;">Name</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Thailand"
                    v-model="countryName"
                  />
                </div>
                <div class="d-block mt-2">
                  <label for="inputLocation" style="font-size: 1.rem;">City Name</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Phuket"
                    v-model="cityName"
                  />
                </div>
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label for="inputDeparture" class="font-weight-bold" style="font-size: 1.50rem;">Arrive</label>
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
            </div>
          </div>
          <div class="form-group">
            <label for="departure" style="font-size: 1.50rem;" class="font-weight-bold">Departure date</label>
            <b-form-datepicker id="departure" :state="Boolean(date)" :min="min" v-model="date" class="mb-2"></b-form-datepicker>
          </div>
        </div>
        <div class="text-center form-group">
          <button type="submit" class="btn btn-primary rounded-pill px-3" style="font-size: 1.25rem">Post Travel</button>
        </div>
      </form>
    </div>
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
