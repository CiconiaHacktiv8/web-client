<template>
  <div class="container">
    <div
      style="position: relative; margin-top: 50px; display: flex; justify-content: space-between"
    >
      <span
        style="background-color: #f77d25; position: absolute; top: 45%; bottom: 45%; left: 2em; right: 2em; z-index: 1"
      ></span>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart" active>
        <button class="btn-flow mr-auto">Open</button>
        <b-badge
          v-if="$store.state.openCart.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 70%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.openCart.length}}</b-badge>
      </router-link>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart/itemordered">
        <button class="btn-flow">Ordered</button>
        <b-badge
          v-if="$store.state.itemOrdered.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 80%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.itemOrdered.length}}</b-badge>
      </router-link>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart/offered">
        <button class="btn-flow">Offered</button>
        <b-badge
          v-if="$store.state.offeredCart.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 80%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.offeredCart.length}}</b-badge>
      </router-link>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart/itemtobuy">
        <button class="btn-flow">Item To Buy</button>
        <b-badge
          v-if="$store.state.itemToBuy.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 85%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.itemToBuy.length}}</b-badge>
      </router-link>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart/pendingpurchase">
        <button class="btn-flow">Pending Purchase</button>
        <b-badge
          v-if="$store.state.purchaseCart.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 90%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.purchaseCart.length}}</b-badge>
      </router-link>
      <router-link style="z-index: 99; position: relative; display: flex" to="/cart/confrimdelivery">
        <button class="btn-flow">Confirm Delivery</button>
        <b-badge
          v-if="$store.state.deliveryCart.length !== 0"
          variant="danger"
          style="position: absolute; z-index: 9999; left: 90%; top: 15px; border-radius: 10px; font-size: 1em"
        >{{$store.state.deliveryCart.length}}</b-badge>
      </router-link>
    </div>
    <!-- <div class="row">
      <div class="col-lg-3 text-center" style="position: realative">
        <b-nav vertical>
          <div style="background-color: #f77d25; position: absolute; top: 5em; bottom: 5em; left: 48%; right: 48%; z-index: 1"></div>
          <b-nav-item style="z-index: 99; position: relative" to="/cart" active><button class="btn-flow">Open</button><b-badge v-if="$store.state.openCart.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 55%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.openCart.length}}</b-badge></b-nav-item>
          <b-nav-item style="z-index: 99; position: relative" to="/cart/itemordered"><button class="btn-flow">Ordered</button><b-badge v-if="$store.state.itemOrdered.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 60%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.itemOrdered.length}}</b-badge></b-nav-item>
          <b-nav-item style="z-index: 99; position: relative" to="/cart/offered"><button class="btn-flow">Offered</button><b-badge v-if="$store.state.offeredCart.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 55%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.offeredCart.length}}</b-badge></b-nav-item>
          <b-nav-item style="z-index: 99; position: relative" to="/cart/itemtobuy"><button class="btn-flow">Item To Buy</button><b-badge v-if="$store.state.itemToBuy.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 65%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.itemToBuy.length}}</b-badge></b-nav-item>
          <b-nav-item style="z-index: 99; position: relative" to="/cart/pendingpurchase"><button class="btn-flow">Pending Purchase</button><b-badge v-if="$store.state.purchaseCart.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 70%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.purchaseCart.length}}</b-badge></b-nav-item>
          <b-nav-item style="z-index: 99; position: relative" to="/cart/confrimdelivery"><button class="btn-flow">Confirm Delivery</button><b-badge v-if="$store.state.deliveryCart.length !== 0" variant="danger" style="position: absolute; z-index: 9999; left: 70%; top: 15px; border-radius: 10px; font-size: 1em">{{$store.state.deliveryCart.length}}</b-badge></b-nav-item>
        </b-nav>
      </div>
    <div class="col-lg-9 d-flex flex-column">-->
    <router-view />
    <!-- </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'Cart',
  created () {
    // this.$store.dispatch('fetchUserCart')
  }
}
</script>

<style scoped>
.btn-flow {
  color: white !important;
}
</style>
