<template>
  <!-- Router View for different pages -->
  <router-view></router-view>
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
