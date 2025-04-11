<template>
  <div id="app">
    <header>
      <div class="header-content">
        <img src="@/assets/logo.png" alt="Logo" class="logo" @click="goToHome" />
        <nav class="nav-bar">
          <!-- Als gebruiker is ingelogd, toon de email naast de knoppen -->
          <div v-if="user" class="user-info">
            <span class="user-email">{{ user.email }}</span>
          </div>
          
          <!-- Navigatieknoppen -->
          <router-link to="/" class="nav-button">Home</router-link>
          <router-link to="/info" class="nav-button">Info</router-link>

          <!-- Als gebruiker is ingelogd, toon de "Log uit" knop met dezelfde stijl als de "Log in" knop -->
          <router-link v-if="user" to="#" @click.prevent="handleLogout" class="nav-button">Log uit</router-link>

          <!-- Als gebruiker niet ingelogd is, toon de "Log in" knop -->
          <router-link v-else to="/login" class="nav-button">Log in</router-link>
        </nav>
      </div>
      <hr class="separator" />
    </header>

    <!-- Router View for different pages -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

export default {
  name: 'App',
  data() {
    return {
      user: null,  // Hier slaan we de ingelogde gebruiker op
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
    handleLogout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          this.user = null;  // Reset de gebruikersinformatie na uitloggen
          this.$router.push('/login');  // Redirect naar de loginpagina
        })
        .catch((error) => {
          console.error("Error logging out: ", error);
        });
    },
  },
  created() {
    const auth = getAuth();
    // Luister naar veranderingen in de gebruikersstatus
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Als er een ingelogde gebruiker is, sla die op in de data
        this.user = user;
      } else {
        // Als de gebruiker uitgelogd is, stel de gebruiker in op null
        this.user = null;
      }
    });
  },
};
</script>

<style scoped>
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
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
  align-items: center; /* Zorg ervoor dat de items goed uitgelijnd zijn */
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

.user-info {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.user-email {
  font-size: 16px;
  color: #333;
  margin-right: 20px;
}
</style>
