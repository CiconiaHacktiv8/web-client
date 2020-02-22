<template>
  <div class="fill">
    <div class="login-div">
      <form @submit.prevent="handleSubmit">
        <div class="text-center">
          <h2>Please Register</h2>
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
export default {
  name: 'Register',
  methods: {
    handleSubmit () {
      // handle register
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
