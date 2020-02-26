<template>
  <div class="vld-parent custom-body" style="margin-top: -75px;">
    <loading :active.sync="$store.state.isLoading"
        :can-cancel="false"
        :is-full-page="true"
        :color="'#f77d25'"
        :background-color="'#28aae1'"
        :opacity="0.3"
    ></loading>
    <div class="d-flex justify-content-center ml-5 align-items-center vh-100">
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
                  <label for="inputLocation" style="font-size: 1.rem;">Country</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Thailand"
                    v-model="countryNameFrom"
                  />
                </div>
                <div class="d-block mt-2">
                  <label for="inputLocation" style="font-size: 1.rem;">City</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Phuket"
                    v-model="cityNameFrom"
                  />
                </div>
              </div>
            </div>

            <div class="col">
              <div class="form-group">
                <label for="inputDeparture" class="font-weight-bold" style="font-size: 1.50rem;">Arrive</label>
                <div class="d-block">
                  <label for="inputLocation" style="font-size: 1.rem;">Country</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Indonesia"
                    v-model="countryNameTo"
                  />
                </div>
                <div class="d-block mt-2">
                  <label for="inputLocation" style="font-size: 1.rem;">City</label>
                  <input
                    type="text"
                    class="form-control custom-input"
                    id="inputLocation"
                    placeholder="Jakarta"
                    v-model="cityNameTo"
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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

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
      locationTo: '',
      countryNameFrom: '',
      cityNameFrom: '',
      countryNameTo: '',
      cityNameTo: ''
    }
  },
  components: {
    Loading
  },
  methods: {
    handleSubmit () {
      this.$store.commit('LOADING_START')
      this.errors = []
      axios({
        method: 'POST',
        url: '/travels',
        data: {
          locationFrom: `${this.cityNameFrom}, ${this.countryNameFrom}`,
          locationTo: `${this.cityNameTo}, ${this.countryNameTo}`,
          departure: this.date
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          this.date = ''
          this.cityNameFrom = ''
          this.cityNameTo = ''
          this.countryNameFrom = ''
          this.countryNameTo = ''
          this.$store.dispatch('fetchItemList')
          this.$store.dispatch('fetchTravelList')
          this.$router.push('/')
        })
        .catch(err => {
          // this.errors = err.response.data.errors
          err.response.data.errors.forEach(error => {
            this.$toast.open({
              type: 'warning',
              message: error
            })
          })
        })
        .finally(() => this.$store.commit('LOADING_FINISH'))
    }
  }
}
</script>

<style scoped>
.custom-body {
  background-image: url(../assets/add-item-travel.svg);
  background-repeat: no-repeat;
  background-position: bottom right;
}
</style>
