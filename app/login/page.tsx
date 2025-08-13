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

  useEffect(() => {
    if (!errorMessage && !pending) {
      router.push('/dashboard')
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
