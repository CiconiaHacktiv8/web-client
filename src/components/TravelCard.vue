<template>
  <div
    class="card border-primary"
    style="width: 18rem; display: inline-block; float: none; white-space: normal; margin: 5px"
  >
    <div class="d-flex justify-content-center pt-2 bg-primary">
      <img src="https://storage.cloud.google.com/images-bucket-arief/placeholder-user1.png" width="75" height="75" class="rounded-circle p-1 border bg-light">
    </div>
    <div class="d-flex justify-content-center bg-primary">
      <h5 class="card-title pt-2 text-white">{{ travel.userId.name }}</h5>
    </div>
    <div class="card-body pt-3">
      <p class="card-text">
        <small class="fas fa-globe-asia text-primary"></small> <small class="" style="color: gray">Dari: {{ travel.locationFrom }}</small> <br />
        <small class="fas fa-clock text-primary"></small> <small class="" style="color: gray">Pulang: {{ localeTime }}</small>
      </p>
      <router-link :to="`/travels/${travel._id}`" class="btn btn-primary"
        >View Detail</router-link
      >
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
    }
  }
}
</script>

<style></style>
