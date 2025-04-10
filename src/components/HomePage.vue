<template>
  <div>
    <!-- Logo en navigatiebalk -->
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

    <main>
      <!-- 👋 Welkomsttekst -->
      <h1>Welkom bij Streetwise.</h1>
      <p class="subtitle">Een eenvoudig QR-Code generator voor alle locaties van Nederland.</p>

      <!-- 🔍 Zoekgedeelte -->
      <h2 class="zoek-title">Zoek plaats op</h2>
      <div class="input-wrapper">
        <input v-model="plaatsnaam" placeholder="Plaatsnaam" />
        <input v-model="straatnaam" placeholder="Straatnaam" />
        <button @click="gaNaarStraat">Zoek</button>
      </div>

      <!-- ℹ️ Info Sectie -->
      <div class="info-section">
        <h2 class="info-title">Waarom onze website?</h2>
        <div class="info-content">
          <p class="info-text">
            Onze website is gemaakt voor Nederlandse steden en wijken. Met onze tool maak je makkelijk QR-codes die linken naar informatie over steden en buurten. Handig voor toeristen, nieuwkomers en bewoners die hun omgeving beter willen leren kennen.
          </p>
          <img src="@/assets/qrcodehome.gif" alt="QR Code" class="qr-code" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import OpenMap from '@/components/Openmap.vue'; // Importeer de kaartcomponent

export default {
  name: 'HomePage',
  components: {
    OpenMap, // Voeg OpenMap toe als een component
  },
  setup() {
    const plaatsnaam = ref('');
    const straatnaam = ref('');
    const router = useRouter();

    const gaNaarStraat = () => {
      if (plaatsnaam.value && straatnaam.value) {
        const p = plaatsnaam.value.trim().toLowerCase().replaceAll(' ', '-');
        const s = straatnaam.value.trim().toLowerCase().replaceAll(' ', '-');
        router.push(`/${p}/${s}`);
      }
    };

    const goToHome = () => {
      router.push('/');
    };

    return { plaatsnaam, straatnaam, gaNaarStraat, goToHome };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #f4f4f4;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
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

main {
  text-align: center;
  max-width: 800px;
  margin-top: 20px;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #666;
}

.zoek-title {
  font-size: 24px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: #333;
}

.input-wrapper {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 40px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #555;
}

.info-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.info-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-content {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
}

.info-text {
  max-width: 300px;
  font-size: 14px;
  color: #333;
  text-align: left;
}

.qr-code {
  width: 180px;
  height: 180px;
}
</style>
