<template>
  <div class="container">
    <!-- Logo en navigatiebalk -->
    

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
// import OpenMap from '@/components/Openmap.vue'; // Importeer de kaartcomponent

export default {
  name: 'HomePage',
  components: {
    // OpenMap, // Voeg OpenMap toe als een component
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
