import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import Info from '../components/InfoPagina.vue'
import FirebaseData from '@/components/FirebaseData.vue'
import StreetView from '../views/StreetView.vue' // voeg dit toe als je dynamische view in /views staat

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
    path: '/:plaatsnaam/:straatnaam',
    name: 'StreetView',
    component: StreetView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
