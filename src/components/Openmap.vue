<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix voor ontbrekende marker icons
import markerIcon2x from '@/assets/leaflet/marker-icon-2x.png';
import markerIcon from '@/assets/leaflet/marker-icon.png';
import markerShadow from '@/assets/leaflet/marker-shadow.png';

// Overschrijft standaard icon URL's
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default {
  name: 'OpenMap',
  mounted() {
    const map = L.map('map', {
      center: [52.3676, 4.9041],
      zoom: 13,
      // zoomControl: true,
      // dragging: false,
      // scrollWheelZoom: true,
      // tap: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap-bijdragers',
      maxZoom: 19,
    }).addTo(map);

    L.marker([52.3676, 4.9041]).addTo(map)
      .bindPopup('📍 Amsterdam - Welkom bij StreetWise!')
      .openPopup();
  },
};
</script>

<style>
html, body, #app, .map-container, #map {
  height: 100%;
  margin: 0;
  padding: 0;
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
