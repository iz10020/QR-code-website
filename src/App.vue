<template>
  <div id="app">
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
