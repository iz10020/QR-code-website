<template>
    <div class="register-container">
      <h2>Registreer</h2>
      <form @submit.prevent="handleSignup">
        <input v-model="signupEmail" type="email" placeholder="E-mailadres" required />
        <input v-model="signupPassword" type="password" placeholder="Wachtwoord" required />
        <button type="submit">Registreren</button>
      </form>
      <p v-if="signupError" class="error">{{ signupError }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
  import { useRouter } from 'vue-router'
  
  const signupEmail = ref('')
  const signupPassword = ref('')
  const signupError = ref('')
  const router = useRouter()
  
  // Signup functie
  const handleSignup = async () => {
    signupError.value = ''
    try {
      const auth = getAuth()
      await createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
      router.push('/') // Redirect naar home na succesvolle registratie
    } catch (err) {
      signupError.value = 'Registratie mislukt: ' + err.message
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    max-width: 400px;
    margin: 100px auto;
    padding: 20px;
    margin-top:120px;
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
  