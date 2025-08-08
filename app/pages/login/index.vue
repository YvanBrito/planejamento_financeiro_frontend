<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">Usuário</label>
      <InputText
        id="username"
        v-model="username"
        type="text"
        autocomplete="username"
      />
    </div>
    <div>
      <label for="password">Senha</label>
      <Password
        id="password"
        v-model="password"
        :feedback="false"
        toggleMask
        autocomplete="current-password"
      />
    </div>
    <Button label="Entrar" type="submit" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleSubmit = () => {
  console.log('Login attempt with:', username.value, password.value)
  router.push('/dashboard')
  console.log('router.push foi chamado!')
}
</script>
