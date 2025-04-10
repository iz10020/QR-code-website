import { createRouter, createWebHistory } from 'vue-router'

// Importeren van de componenten
import Home from '../components/HomePage.vue'
import Info from '../components/InfoPagina.vue'
import FirebaseData from '@/components/FirebaseData.vue'
import StreetView from '../views/StreetView.vue'  // Voeg dit toe voor dynamische views
import QRCodeGenerator from '@/components/QRCodeGenerator.vue' // Importeren van de QR Code Generator
import OpenMap from '@/components/Openmap.vue' // Importeer de OpenMap component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/test',
    name: 'Test',
    component: FirebaseData
  },
  {
    path: '/qr-generator',
    name: 'QRCodeGenerator',
    component: QRCodeGenerator
  },
  {
    path: '/:plaatsnaam/:straatnaam',
    name: 'StreetView',
    component: StreetView,
    props: true
  },
  {
    path: '/open-map',
    name: 'OpenMap',
    component: OpenMap // Toevoegen van OpenMap route
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
