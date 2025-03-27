<template>
    <div class="qrcode-container">
      <h1>QR Code Generator</h1>
      <button class="generate-btn" @click="generateQRCode">Genereer QR Code</button>
      <div v-if="qrCodeDataUrl" class="qr-code">
        <img :src="qrCodeDataUrl" alt="QR Code" />
      </div>
    </div>
  </template>
  
  <script>
  import QRCode from "qrcode";
  
  export default {
    data() {
      return {
        qrCodeDataUrl: null,
      };
    },
    methods: {
      async generateQRCode() {
        try {
          const url = window.location.href; // Pak de huidige URL van de pagina
          const qrCodeDataUrl = await QRCode.toDataURL(url); // Genereer de QR-code
          this.qrCodeDataUrl = qrCodeDataUrl; // Zet de gegenereerde URL voor de afbeelding
        } catch (error) {
          console.error("Fout bij het genereren van de QR code:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .qrcode-container {
    text-align: center;
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #2e8b57;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .generate-btn {
    padding: 10px 20px;
    background-color: #ff6347;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s ease;
  }
  
  .generate-btn:hover {
    background-color: #ff4500;
  }
  
  .qr-code {
    margin-top: 20px;
  }
  
  .qr-code img {
    width: 200px;
    height: 200px;
  }
  </style>
  