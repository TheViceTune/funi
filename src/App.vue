<template>
  <div id="app">
    <header class="header">
      <h1>Funi</h1>
      <nav>
        <ul>
          <li>
            <router-link to="/" active-class="active">Trang chủ</router-link>
          </li>
          <li>
            <router-link to="/courses" active-class="active">Khóa học</router-link>
          </li>
          <li>
            <router-link to="/about" active-class="active">Thông tin</router-link>
          </li>
          <li>
            <router-link to="/contact" active-class="active">Liên lạc</router-link>
          </li>
          <li>
            <router-link to="/login" active-class="active">Đăng nhập/Đăng ký</router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <router-view></router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Funi. All Rights Reserved.</p>
        <div class="newsletter">
          <h3>Điền mail để biết những thông tin mới nhất!</h3>
          <input type="email" placeholder="Enter your email" />
          <button class="subscribe-button">Subscribe</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CoursesView from './views/CoursesView.vue'
export default {
  name: 'App',
  components: CoursesView
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  margin: 0;
  max-width: 100%;
  height: 100%;
  width: 100%;
  padding: 0rem;
}

.header {
  background-color: orange;
  color: white;
  padding: 1rem;
}

.header h1 {
  margin-bottom: 0.5rem;
}

.header nav ul {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.header nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  overflow-y: auto;
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

.footer {
  background-color: orange;
  color: white;
  padding: 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.newsletter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.newsletter input {
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
}

.subscribe-button {
  padding: 0.5rem 1rem;
  background-color: white;
  color: orange;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.subscribe-button:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .header nav ul {
    flex-direction: column;
    align-items: center;
  }

  .main-content {
    padding: 0;
  }

  .footer-content {
    text-align: center;
  }
}
</style>
