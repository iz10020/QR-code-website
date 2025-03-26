import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/HomePagina.vue';
import Info from '../components/InfoPagina.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

