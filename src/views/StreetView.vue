<template>
    <div>
      <h2>{{ plaatsnaam }} - {{ straatnaam }}</h2>
      <!-- Hier de data tonen -->
      
    </div>
  </template>
  
  <script setup>
  // import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  // import { getFirestore, doc, getDoc } from 'firebase/firestore'
  
  const route = useRoute()
  const plaatsnaam = route.params.plaatsnaam
  const straatnaam = route.params.straatnaam
  // const data = ref(null)
  
  // const db = getFirestore()
  
  // onMounted(async () => {
  //   // Stel: je hebt een document in Firestore op path `locaties/{plaatsnaam}/{straatnaam}`
  //   const docRef = doc(db, 'locaties', plaatsnaam, straatnaam)
  //   const docSnap = await getDoc(docRef)
  
  //   if (docSnap.exists()) {
  //     data.value = docSnap.data()
  //   } else {
  //     data.value = { error: 'Geen data gevonden.' }
  //   }
  // })
  </script>
  