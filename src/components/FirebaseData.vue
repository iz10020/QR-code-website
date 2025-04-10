<template>
    <div>
      <h1>Firebase Data</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.Name }} - {{ item.Value }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { getDocs, collection } from "firebase/firestore";
  import { db } from "../Firebase/firebase.js";
  
  export default {
    setup() {
      const items = ref([]);
  
      onMounted(async () => {
        const querySnapshot = await getDocs(collection(db, "items"));
        items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
  
      return { items };
    },
  };
  </script>
  