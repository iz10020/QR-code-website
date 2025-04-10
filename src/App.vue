<template>
  <div id="app">
    <header>
      <div class="header-content">
        <img src="@/assets/logo.png" alt="Logo" class="logo" @click="goToHome" />
        <nav class="nav-bar">
          <router-link to="/" class="nav-button">Home</router-link>
          <router-link to="/qr-generator" class="nav-button">QR-Generator</router-link>
          <router-link to="/info" class="nav-button">Info</router-link>
        </nav>
      </div>
      <hr class="separator" />
    </header>
    <!-- Router View for different pages -->
    <router-view></router-view>
  </div>
</template>

<script>
//  Hier importeer je de Leaflet CSS
import 'leaflet/dist/leaflet.css';

export default {
  name: 'App',
  components: {
    // Voeg hier componenten toe als je ze gebruikt
  },
};

</script>

<style scoped>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;

  /* Achtergrondafbeelding */
  background-image: url(~@/assets/background.jpg); /* Zorg dat dit pad klopt */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  min-height: 100vh;
}

header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.separator {
  width: 100%;
  height: 2px;
  background-color: #ccc;
  margin-top: 10px;
  border: none;
}

.logo {
  height: 80px;
  cursor: pointer;
}

.nav-bar {
  display: flex;
  gap: 20px;
}

.nav-button {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #333;
  color: #fff;
}

/* Navigation styling */
nav {
  margin: 20px 0;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>

<!-- Deze style is niet scoped en reset globale marges van html en body -->
<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>
