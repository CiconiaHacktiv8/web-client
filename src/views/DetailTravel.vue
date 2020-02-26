<template>
  <div class="container">
    <div class="card mt-5 shadow" style="width: 100%; border-bottom-left-radius: 50px; border-top-right-radius: 50px">
      <div class="row no-gutters">
        <div class="col-md-3 d-flex align-items-center justify-content-center">
          <div class="d-flex">
            <router-link :to="`/users/${$store.state.travelDetail._id}`">
              <div class="d-flex justify-content-center text-center">
                <div style="display: flex; background-color: brown; align-items: center; justify-content: center; width: 75px; height: 75px; border-radius: 50px; font-size: 2rem; font-weight: bold">
                  {{inital.toUpperCase()}}
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-body text-center">
            <h5 class="card-title">Traveller name: {{$store.state.travelDetail.userId.name}}</h5>
            <div class="d-flex justify-content-center">
            <h5 class="card-title">Travel Detail :</h5>
            <span class="d-flex card-text m-4">From: {{$store.state.travelDetail.locationFrom}}</span> <span class="d-flex card-text m-4">To: {{$store.state.travelDetail.locationTo}}</span>
            </div>
            <p class="card-text"><small class="text-muted">Departure: {{localeTime}}</small></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5">
      <h1 class="h3">Reccomended items you can request:</h1>
      <travel-item-list />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TravelItemList from '../components/TravelItemList'
export default {
  name: 'DetailTravel',
  components: {
    TravelItemList
  },
  created () {
    this.$store.dispatch('fetchTravelDetail', this.$route.params.id)
  },
  computed: {
    localeTime () {
      return this.$store.state.travelDetail.departure
        ? moment(this.$store.state.travelDetail.departure).format('D MMM YYYY')
        : new Date().toLocaleString()
    },
    inital () {
      const splitName = this.store.state.travelDetail.userId.name.split(' ')
      return splitName.length && splitName.length > 1
        ? `${splitName[0][0]}${splitName[1][0]}`
        : `${splitName[0][0]}`
    }
  }
}
</script>

<style>
</style>
