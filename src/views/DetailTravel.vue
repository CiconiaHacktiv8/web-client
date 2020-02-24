<template>
  <div class="container">
    <div class="card" style="width: 100%">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex align-items-center">
          <img src="https://picsum.photos/600/300/?image=525" class="card-img img-fluid d-flex" alt="picsum">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{$store.state.travelDetail.userId.name}}</h5>
            <p class="card-text">From: {{$store.state.travelDetail.locationFrom}}</p>
            <p class="card-text">To: {{$store.state.travelDetail.locationTo}}</p>
            <p class="card-text"><small class="text-muted">Departure: {{localeTime}}</small></p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h1>ITEM LIST</h1>
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
    }
  }
}
</script>

<style>

</style>
