<template>
  <div class="fill">
    <div class="login-div shadow-lg">
      <form @submit.prevent="handleSubmit">
        <div class="text-center d-flex flex-column align-items-center mb-4">
          <div class="w-25 d-flex">
            <img src="https://i.postimg.cc/0jgvRYLv/blue-Asset-2.png" alt="ciconia" class="img-fluid">
          </div>
          <h2 style="color: #28AAE1">Please Register</h2>
        </div>
        <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div>
        <!-- <div class="form-group">
          <label for="inputEmail">Your Email</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            v-model="email"
          />
        </div> -->
        <!-- <div class="form-group">
          <label for="inputName">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            required
            v-model="name"
          />
        </div> -->
        <div class="form-group shadow">
          <div class="input-group mb-3">
            <div class="input-group-prepend" style="background-color: #fff">
              <span class="input-group-text" id="icon-name"><i class="material-icons">person</i></span>
            </div>
            <input
              type="text"
              class="form-control"
              id="input-name"
              aria-describedby="icon-name"
              placeholder="Enter your name"
              required
              v-model="name"
            />
          </div>
        </div>
        <div class="form-group shadow">
          <!-- <label for="exampleInputEmail1">Your Email</label> -->
          <div class="input-group mb-3">
            <div class="input-group-prepend" style="background-color: #fff">
              <span class="input-group-text" id="basic-addon1"><i class="material-icons">email</i></span>
            </div>
            <!-- <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"> -->
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="basic-addon1"
              placeholder="Enter email"
              required
              v-model="email"
            />
          </div>
          <!-- <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            v-model="email"
          /> -->
        </div>
        <div class="form-group shadow mb-4">
          <!-- <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            required
            v-model="password"
          /> -->
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2"><i class="material-icons">lock</i></span>
            </div>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              aria-describedby="basic-addon2"
              placeholder="Password"
              required
              v-model="password"
            />
          </div>
        </div>
        <div class="text-center form-group">
          <button type="submit" class="btn btn-primary" style="border-radius: 50px; width: 70%;">Sign Up</button>
        </div>
        <div class="text-center">
          <span>already have an account? </span>
          <router-link to="/login">Sign In</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'Register',
  data () {
    return {
      errors: [],
      email: '',
      name: '',
      password: ''
    }
  },
  methods: {
    handleSubmit () {
      // handle register
      this.errors = []
      axios({
        method: 'POST',
        url: '/register',
        data: {
          name: this.name,
          password: this.password,
          email: this.email
        }
      })
        .then(({ data }) => {
          this.$store.commit('SET_USER', {
            name: data.name,
            email: data.email,
            point: data.point
          })
          this.$store.commit('LOGIN')
          localStorage.setItem('token', data.token)
          localStorage.setItem('name', data.name)
          localStorage.setItem('email', data.email)
          localStorage.setItem('point', data.point)
          this.email = ''
          this.name = ''
          this.password = ''
          this.$router.push('/')
        })
        .catch(err => {
          this.errors = err.response.data.errors
        })
    }
  },
  created () {
    if (localStorage.getItem('token')) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.fill {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-div {
  min-width: 400px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white
}
</style>
