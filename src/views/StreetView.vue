<template>
  <div class="container">
    <h2>{{ plaatsnaam }} - {{ straatnaam }}</h2>

    <div v-if="data">
      <p>
        🧭 Oorsprong: {{ data.oorsprong }}
      </p>
      <div class="map-container">
        <div id="map"></div>
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

// Normaliseer strings (hoofdletter + clean)
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

onMounted(async () => {
  const locatiesRef = collection(db, 'straten')
  const q = query(locatiesRef,
    where('plaatsnaam', '==', route.params.plaatsnaam),
    where('straatnaam', '==', route.params.straatnaam)
  )

  const querySnapshot = await getDocs(q)

  if (!querySnapshot.empty) {
    const docData = querySnapshot.docs[0].data()
    data.value = docData
    data.value = {
      ...docData,
      oorsprong: docData.oorsprong.replace(/\\n+/g, ' ')
    }
    // data.value.oorsprong.replace(/\\n+/g, ' ')
    console.log(data.value.oorsprong)
    const coords = [docData.coordinaten.longitude, docData.coordinaten.latitude]
    // console.log(coords);
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

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: black 10px;
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
