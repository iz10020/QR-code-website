<template>
  <div class="login-container">
    <h2>Inloggen</h2>
    <form @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="E-mailadres" required />
      <input v-model="password" type="password" placeholder="Wachtwoord" required />
      <button type="submit">Inloggen</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>

    <!-- Link naar de registratiepagina -->
    <p>Heb je nog geen account? <router-link to="/register">Maak een account aan</router-link></p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  try {
    const auth = getAuth()
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/') // Redirect naar home na inloggen
  } catch (err) {
    error.value = 'Inloggen mislukt: ' + err.message
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  margin-top: 120px;
  border: 2px solid #000;
  border-radius: 10px;
  text-align: center;
  background-color: #f9f9f9;
}
input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 90%;
}
button {
  padding: 10px 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 4px;
}
button:hover {
  background-color: #000000;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
