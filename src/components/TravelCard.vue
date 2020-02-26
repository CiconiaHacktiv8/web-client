<template>
  <div
    class="card border-primary"
    style="width: 18rem; display: inline-block; float: none; white-space: normal; margin: 5px"
  >
    <div class="d-flex justify-content-center pt-2 bg-primary text-center">
      <div style="display: flex; background-color: #f77d25; align-items: center; justify-content: center; width: 75px; height: 75px; border-radius: 50px; font-size: 2rem; font-weight: bold" class="text-light">
        {{inital.toUpperCase()}}
      </div>
      <!-- <span style="width: 75px; height: 75px; background-color: brown; font-size: 3rem; border-radius: 75px; color: white; margin: auto">{{inital.toUpperCase()}}</span> -->
    </div>
    <div class="d-flex justify-content-center bg-primary">
      <h5 class="card-title pt-2 text-white">{{ travel.userId.name }}</h5>
    </div>
    <div class="card-body pt-3">
      <p class="card-text">
        <small class="fas fa-globe-asia text-primary"></small> <small class="" style="color: gray">From: {{ travel.locationFrom }}</small> <br />
        <small class="fas fa-clock text-primary"></small> <small class="" style="color: gray">Depart: {{ localeTime }}</small>
      </p>
      <div class="text-center">
        <router-link :to="`/travels/${travel._id}`" class="btn btn-primary"
          >View Detail</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TravelCard',
  props: {
    travel: Object
  },
  computed: {
    localeTime () {
      return this.travel.departure
        ? moment(this.travel.departure).format('D MMM YYYY')
        : new Date().toLocaleString()
    },
    inital () {
      const splitName = this.travel.userId.name.split(' ')
      return splitName.length && splitName.length > 1
        ? `${splitName[0][0]}${splitName[1][0]}`
        : `${splitName[0][0]}`
    }
  }
}
</script>

<style scoped>
.inital {
  width: 75;
  height: 75;
  background-color: brown;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 50px;
  font-weight: bold
}
</style>
