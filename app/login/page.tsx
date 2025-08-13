// app/login/page.tsx
'use client'

import { useFormStatus } from 'react-dom'
import { authenticate } from '@/app/actions'
import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [errorMessage, dispatch] = useActionState(authenticate, undefined)

  const { pending } = useFormStatus()

  // Redireciona o usuário se o login for bem-sucedido
  useEffect(() => {
    if (!errorMessage && !pending) {
      // Checa se o login foi bem-sucedido e não está pendente
      // Você pode precisar de uma verificação mais robusta,
      // como o status de uma sessão, dependendo da sua lógica.
      // Por exemplo: if (status === 'authenticated')
    }
  }, [errorMessage, pending, router])

  return (
    <form action={dispatch}>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit" aria-disabled={pending}>
        Entrar
      </button>
    </form>
  )
}
