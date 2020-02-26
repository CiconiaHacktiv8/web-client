<template>
  <div class="container">
    <div class="card mt-5 shadow" style="width: 100%; border-bottom-left-radius: 50px; border-top-right-radius: 50px">
      <div class="row no-gutters">
        <div class="col-md-3 d-flex align-items-center justify-content-center">
          <div class="d-flex">
            <img src="https://avatars.dicebear.com/v2/male/nama%20traveler.svg" width="125" height="125" class="rounded-circle p-1 border bg-light img-fluid">
          </div>
        </div>
        <div class="col-md-9">
          <div class="card-body">
            <h5 class="card-title">Traveller name: Nama Traveler</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Traveller email: eamil@travel.com</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Point: 15</h5>
          </div>
          <div class="card-body text-center">
            <button @click="handleLogout" class="btn btn-danger"> Logout </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailUser',
  created () {
    // MASIH ERROR BELUM ADA ROUTE NYA
    // this.$store.dispatch('fetchUserDetail', this.$route.params.id)
  },
  methods: {
    handleLogout () {
      console.log('LOGOUT< DIKASIH IF')
    }
  }
}
</script>

<style>

</style>
