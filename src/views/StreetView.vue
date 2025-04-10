<template>
  <div class="container">
    <h2>{{ plaatsnaam }} - {{ straatnaam }}</h2>

    <div v-if="data">
      <p>🧭 Oorsprong: {{ data.oorsprong }}</p>

      <div class="map-wrapper">
        <!-- QR Code Generator -->
        <div class="qr-code-generator">

          <button class="qr-button" @click="generateQRCode">📱 Genereer QR-code</button>
          <div v-if="qrCodeUrl" class="qr-code">
            <img :src="qrCodeUrl" alt="QR Code" />
            <p>Scan deze code om deze pagina te openen</p>
          </div>
        </div>

        <!-- Map -->
        <div class="map-container">
          <div id="map"></div>
        </div>
      </div>
    </div>

    <p v-else>
      ⚠️ Geen gegevens gevonden voor deze straat en plaatsnaam.
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import QRCode from 'qrcode'

import markerIcon2x from '@/assets/leaflet/marker-icon-2x.png'
import markerIcon from '@/assets/leaflet/marker-icon.png'
import markerShadow from '@/assets/leaflet/marker-shadow.png'

// Fix voor icons
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

const normalize = (str) =>
  str
    .toLowerCase()
    .replace(/["']/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^\w/, c => c.toUpperCase())

const route = useRoute()
const plaatsnaam = normalize(route.params.plaatsnaam)
const straatnaam = normalize(route.params.straatnaam)

const data = ref(null)
const db = getFirestore()

const qrCodeUrl = ref('')
const generateQRCode = async () => {
  const url = window.location.origin + route.fullPath
  try {
    qrCodeUrl.value = await QRCode.toDataURL(url)
  } catch (err) {
    console.error('QR Code genereren mislukt:', err)
  }
}

onMounted(async () => {
  const locatiesRef = collection(db, 'straten')
  const q = query(locatiesRef,
    where('plaatsnaam', '==', route.params.plaatsnaam),
    where('straatnaam', '==', route.params.straatnaam)
  )

  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const docData = querySnapshot.docs[0].data()
    data.value = {
      ...docData,
      oorsprong: docData.oorsprong.replace(/\\n+/g, ' ')
    }
    const coords = [docData.coordinaten.longitude, docData.coordinaten.latitude]
    await nextTick()
    initMap(coords)
  } else {
    console.warn('⚠️ Geen document gevonden met deze plaats en straatnaam.')
  }
})

function initMap(coords) {
  const map = L.map('map', {
    center: coords,
    zoom: 15,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap-bijdragers',
    maxZoom: 19,
  }).addTo(map)

  L.marker(coords).addTo(map)
    .bindPopup(`${plaatsnaam} - ${straatnaam}`)
    .openPopup()
}
</script>

<style scoped>
.container {
  padding-top: 120px;
  text-align: center;
}

.map-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}

.qr-code-generator {
  max-width: 250px;
  padding: 10px;
  text-align: center;
  background-color: #f6f6f6;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.qr-button {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  padding: 10px 20px;
  border: 2px solid #333;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.qr-button:hover {
  background-color: #333;
  color: #fff;
}

.qr-code img {
  margin-top: 10px;
  width: 200px;
  height: 200px;
  border-radius: 8px;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

#map {
  height: 500px;
  width: 800px;
  border-radius: 12px;
  cursor: grab;
  z-index: 1;
  position: relative;
}

#map:active {
  cursor: grabbing;
}
</style>
