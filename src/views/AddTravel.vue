<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="text-center">
        <h2>Post Your Travel Detail</h2>
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
export default {
  name: 'AddTravel',
  data () {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const minDate = new Date(today)
    return {
      date: '',
      min: minDate
    }
  },
  methods: {
    handleSubmit () {
      console.log('POST TRAVEL')
    }
  }
}
</script>

<style>
</style>
