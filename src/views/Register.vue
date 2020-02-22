<template>
  <div class="fill">
    <div class="login-div">
      <form @submit.prevent="handleSubmit">
        <div class="text-center">
          <h2>Please Register</h2>
        </div>
        <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div>
        <div class="form-group">
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
        </div>
        <div class="form-group">
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
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <div class="text-center form-group">
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
        <div class="text-center">
          <span>already have an account? </span>
          <router-link to="/login">login</router-link>
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
}
</style>
