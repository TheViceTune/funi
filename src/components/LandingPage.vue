<template>
  <div class="landing-page">
    <main class="main-content">
      <h2>Welcome to Funi!</h2>
      <p>Your journey to learn online courses begins here.</p>
      <button @click="exploreCourses">Explore Courses</button>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    exploreCourses() {
      this.$router.push('/courses')
    }
  }
}
</script>

<style scoped>
.landing-page {
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  height: 100%; /* Full height of the parent */
  padding: 50px;
  text-align: center;
}
</style>
