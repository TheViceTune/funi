<template>
  <div class="landing-page">
    <main class="main-content">
      <h2>Chào bạn đến với Funi!</h2>
      <p>Hành trình chinh phục học vấn của bạn bắt đầu từ đây.</p>
      <button class="cta-button" @click="exploreCourses">Khám phá</button>
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
.cta-button {
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: darkorange;
}
</style>
