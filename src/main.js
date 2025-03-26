import { createApp } from 'vue';
import App from './App.vue';
import router from './Router/Index.js'; // Importeer de router

createApp(App)
  .use(router)  // Gebruik de router in de applicatie
  .mount('#app');
