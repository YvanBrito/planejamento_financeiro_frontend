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
      <small v-if="errors.username" class="p-error">{{
        errors.username
      }}</small>
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
      <small v-if="errors.password" class="p-error">{{
        errors.password
      }}</small>
    </div>
    <Button label="Entrar" type="submit" />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginSchema } from '../../schemas/loginSchema'

const username = ref('')
const password = ref('')
const router = useRouter()
const errors = ref({} as Record<string, string>)

const handleSubmit = () => {
  errors.value = {}

  const result = loginSchema.safeParse({
    username: username.value,
    password: password.value,
  })

  if (result.success) {
    console.log('Dados válidos:', result.data)
    router.push('/dashboard')
  } else {
    result.error.issues.forEach((issue) => {
      if (issue.path.length > 0) {
        const path = issue.path[0] as keyof typeof errors.value
        errors.value[path] = issue.message
      }
    })
  }
}
</script>

<style scoped>
.p-error {
  color: var(--p-red-500);
}
</style>
