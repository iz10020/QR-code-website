<template>
  <div class="container">
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

    <div class="info-section">
      <h2 class="info-title">Waarom onze website?</h2>
      <div class="info-content">
        <p class="info-text">
          Onze website is gemaakt voor Nederlandse steden en wijken. Met onze tool maak je makkelijk QR-codes die linken naar informatie over steden en buurten. Handig voor toeristen, nieuwkomers en bewoners die hun omgeving beter willen leren kennen.
        </p>
        <img src="@/assets/qrcodehome.gif" alt="QR Code" class="qr-code" />
      </div>
    </div>

    <main>
      <h1>Welkom bij Streetwise.</h1>
      <p class="subtitle">Een eenvoudig QR-Code generator voor alle locaties van Nederland.</p>
    </main>
  </div>
</template>

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
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
  text-align: center;
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
  width: 100%;
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
}

.info-section {
  position: absolute;
  right: 30px;
  top: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.info-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.qr-code {
  width: 180px;
  height: 180px;
}

.info-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
}

.info-text {
  max-width: 300px;
  font-size: 14px;
  color: #333;
}

main {
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #666;
}
</style>
