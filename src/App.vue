<template>
  <div id="app">
    <header class="header">
      <h1>Funi</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/courses">Courses</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/login">Log In / Sign Up</router-link></li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <h2>Welcome to Funi!</h2>
      <p>Your journey to learn online courses begins here.</p>
      <button class="cta-button">Explore Courses</button>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 Funi. All Rights Reserved.</p>
        <p>Placeholder for additional info.</p>
        <div class="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <input type="email" placeholder="Enter your email" />
          <button class="subscribe-button">Subscribe</button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
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
  width: 200px;
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
</style>
