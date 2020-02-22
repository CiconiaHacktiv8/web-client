<template>
  <div class="container">
    <div class="card" style="width: 100%">
      <div class="row no-gutters">
        <div class="col-md-6 d-flex align-items-center">
          <img src="https://picsum.photos/600/300/?image=525" class="card-img img-fluid d-flex" alt="picsum">
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{$store.state.itemDetail.name}}</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <a v-if="showOffer" class="btn btn-primary mx-3">Offer Help</a>
            <a v-if="showRequest" @click="handleRequest" class="btn btn-primary mx-3">Request</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from '../config/api'
export default {
  name: 'DetailItem',
  data () {
    return {
      errors: []
    }
  },
  computed: {
    item () {
      return this.$store.state.itemDetail
    },
    showOffer () {
      // if(this.$store.state.itemDetail.travelId){
      if (this.$store.state.itemDetail.ownerId.email === this.$store.state.user.email) {
        return false
      } else if (this.$store.state.itemDetail.status === 'travel') {
        return false
      } else {
        return true
      }
      // } else {
      //   if(this.$store.state.itemDetail.ownerId.email === this.$store.state.user.email) {
      //     return false
      //   } else {
      //     return true
      //   }
      // }
    },
    showRequest () {
      if (this.$store.state.itemDetail.ownerId.email === this.$store.state.user.email) {
        return false
      } else if (this.$store.state.itemDetail.status === 'watch') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    handleRequest () {
      console.log('request')
      // this.errors = []
      // axios({
      //   method: 'POST',
      //   url: '/carts',
      //   data: {
      //   },
      //   headers: {
      //     token: localStorage.getItem('token')
      //   }
      // })
      //   .then(({ data }) => {
      //     this.$router.push('/')
      //   })
      //   .catch(err => {
      //     this.errors = err.response.data.errors
      //   })
    }
  },
  created () {
    this.$store.dispatch('fetchItemDetail', this.$route.params.id)
  }
}
</script>

<style>

</style>
