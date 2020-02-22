<template>
  <div class="fill">
    <div class="login-div">
      <form @submit.prevent="handleSubmit">
        <div class="text-center">
          <h2>Please Login</h2>
        </div>
        <div v-for="(error, i) in errors" :key="i" class="alert alert-danger text-center" role="alert">
          {{error}}
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Your Email</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            v-model="password"
          />
        </div>
        <div class="form-check text-center form-group">
          <input type="checkbox" class="form-check-input" id="remember" />
          <label class="form-check-label" for="remember">remember me</label>
        </div>
        <div class="text-center form-group">
          <div class="text-center form-group">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="text-center">
            <span>don't have an account? </span>
            <router-link to="/register">register</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from '../config/api'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      errors: []
    }
  },
  methods: {
    handleSubmit () {
      // handle login
      this.errors = []
      axios({
        method: 'POST',
        url: '/login',
        data: {
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
.test {
  background-color: blueviolet;
}
.test2 {
  background-color: aqua;
}
</style>
