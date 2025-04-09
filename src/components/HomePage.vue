<template>
  <div class="container">
    <header>
      <img src="@/assets/logo.png" alt="Logo" class="logo" @click="goToHome" />
    </header>

    <nav>
      <router-link to="/" class="nav-button">Home</router-link>
      <router-link to="/qr-generator" class="nav-button">QR-Generator</router-link>
      <router-link to="/info" class="nav-button">Info</router-link>
    </nav>

    <h1>Welkom bij de QR Code Generator</h1>

    <div class="input-wrapper">
      <input v-model="plaatsnaam" placeholder="Plaatsnaam" />
      <input v-model="straatnaam" placeholder="Straatnaam" />
      <button @click="gaNaarStraat">Zoek</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const plaatsnaam = ref('')
const straatnaam = ref('')
const router = useRouter()

const gaNaarStraat = () => {
  if (plaatsnaam.value && straatnaam.value) {
    const p = plaatsnaam.value.trim().toLowerCase().replaceAll(' ', '-')
    const s = straatnaam.value.trim().toLowerCase().replaceAll(' ', '-')
    router.push(`/${p}/${s}`)
  }
}
</script>

<script>
export default {
  name: "QRCodeGenerator",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
body {
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
}

header {
  position: absolute;
  top: 20px;
  left: 20px;
}

.logo {
  height: 50px;
  cursor: pointer;
}

nav {
  position: absolute;
  top: 20px;
  right: 20px;
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

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.input-wrapper {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
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
</style>
