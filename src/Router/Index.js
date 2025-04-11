import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/HomePage.vue'
import Info from '../components/InfoPagina.vue'
import FirebaseData from '@/components/FirebaseData.vue'
import StreetView from '../views/StreetView.vue'
import OpenMap from '@/components/Openmap.vue'
import LoginPage from '@/components/LoginPage.vue'
import RegisterPage from '@/components/RegisterPage.vue'

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
  },
  {
    path: '/open-map',
    name: 'OpenMap',
    component: OpenMap
  },
  {
    path: '/login', // Login route
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register', // Register route
    name: 'RegisterPage',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
