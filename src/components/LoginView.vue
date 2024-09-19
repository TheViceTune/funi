<template>
  <div class="login-view">
    <h2>Log In / Sign Up</h2>
    <form @submit.prevent="handleSubmit">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Log In</button>
    </form>
    <p>Don't have an account? <a href="#">Sign Up</a></p>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      // Handle login logic here
      alert(`Logging in with: ${this.email}`)
    }
  }
}
</script>

<style scoped>
.login-view {
  padding: 20px;
}
.login-view form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
}
.login-view input {
  margin: 10px 0;
  padding: 10px;
}
</style>
