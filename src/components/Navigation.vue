<template>
  <b-navbar variant="primary" type="dark" fixed="top" id="custom-nav">
    <b-navbar-brand to="/">
      <img src="https://i.postimg.cc/hGVCbznv/white-Asset-2.png" width="30" class="d-inline-block align-top" alt="Kitten">
      Ciconia
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="mr-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
      </b-navbar-nav>
      <b-navbar-nav>
        <div class="d-flex justify-content-center align-items-center mx-2">
          <span style="font-size: 1.2rem" class="d-flex" v-if="$store.state.user.name" >Welcome, {{$store.state.user.name}}</span>
        </div>
        <!-- <b-nav-item to="/cart">Cart</b-nav-item> -->
        <!-- <b-nav-item v-if="$store.state.isLogin" @click="handleLogout">Logout</b-nav-item>
        <b-nav-item v-if="!$store.state.isLogin" to="/login">Login</b-nav-item> -->
      </b-navbar-nav>
      <b-navbar-nav v-if="$store.state.isLogin" style="position: relative">
        <span @click="toCart" style="position: absolute; z-index: 9999; bottom: -60px; right: 350px; color: white; background-color: #f77d25; font-size: 2em; padding: 0 15px; border-radius: 100px" class="shadow"><i class="fa fa-shopping-cart"></i></span>
        <span @click="showModal" style="position: absolute; z-index: 9999; bottom: -60px; right: 250px; color: white; background-color: #f77d25; font-size: 2em; padding: 0 15px; border-radius: 100px" class="shadow"><i class="fa fa-plus"></i></span>
        <span @click="showUser" style="position: absolute; z-index: 9999; bottom: -60px; right: 150px; color: white; background-color: #f77d25; font-size: 2em; padding: 0 15px; border-radius: 100px" class="shadow"><i class="fa fa-user"></i></span>
        <b-badge v-if="showNotif" variant="danger" style="position: absolute; z-index: 9999; bottom: -20px; right: 345px; border-radius: 10px; font-size: 1em">{{notification}}</b-badge>
        <!-- <b-nav-item-dropdown right> -->
          <!-- <template v-slot:button-content>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Add</b-button>
          </template>
          <b-dropdown-item to="/addtravel">Travel</b-dropdown-item>
          <b-dropdown-item to="/additem">Request</b-dropdown-item>
          <b-dropdown-item to="/addtravelitem">Pre Order</b-dropdown-item> -->
        <!-- </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
    <b-modal id="add" title="Add Request or Travel" hide-footer>
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">Add Travel</h5>
          <p class="card-text">Penjelasan tentang add travel</p>
          <div class="text-center">
            <button @click="handleLink('AddTravel')" class="btn btn-primary"> Add Travel </button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">Add Request</h5>
          <p class="card-text">Penjelasan tentang add request</p>
          <div class="text-center">
            <button @click="handleLink('AddItem')" class="btn btn-primary"> Add Request </button>
          </div>
        </div>
      </div>
      <div class="card" style="width: 100%;">
        <div class="card-body">
          <h5 class="card-title">Add Pre-Order</h5>
          <p class="card-text">Penjelasan tentang pre order</p>
          <div class="text-center">
            <button @click="handleLink('AddTravelItem')" class="btn btn-primary"> Add Pre-Order </button>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal id="user" title="Add Request or Travel" hide-footer hide-header>
      <div class="card" style="width: 100%;">
        <div class="card-body text-center">
          <h5 class="card-title">{{$store.state.user.name}}</h5>
          <p class="card-text">email: {{$store.state.user.email}}</p>
          <p class="card-text">points: {{$store.state.user.point}}</p>
          <button @click="handleLogout" class="btn btn-danger"> Logout </button>
        </div>
      </div>
    </b-modal>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      showNotif: true
    }
  },
  methods: {
    showUser () {
      this.$bvModal.show('user')
    },
    toCart () {
      this.showNotif = false
      this.$router.push('/cart')
    },
    showModal () {
      this.$bvModal.show('add')
    },
    handleLink (payload) {
      this.$router.currentRoute.name !== payload && this.$router.replace({ name: payload })
      this.$bvModal.hide('add')
    },
    handleLogout () {
      localStorage.clear()
      this.$store.commit('LOGOUT')
      this.$router.push('/login')
    }
  },
  computed: {
    notification () {
      return this.$store.state.openCart.length + this.$store.state.offeredCart.length + this.$store.state.purchaseCart.length + this.$store.state.deliveryCart.length + this.$store.state.itemToBuy.length + this.$store.state.itemOrdered.length
    }
  }
}
</script>

<style lang="scss" scoped>
#custom-nav {
  border-bottom-left-radius: 40px;
  height: 75px;
  padding-left: 40px
}
</style>
