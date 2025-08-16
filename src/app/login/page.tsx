'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/design_system/button'
import Input from '@/components/design_system/input'
import PasswordInput from '@/components/design_system/password'
import { showToast } from '@/helpers/toast'
import Link from 'next/link'
import Image from 'next/image'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setLoading(true)
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })

    if (result?.error) {
      setLoading(false)
      showToast('error', <p>Credenciais inválidas. Tente novamente.</p>)
    } else {
      router.push('/dashboard')
      router.refresh()
    }
  }

  return (
    <div className="h-dvh flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-10 justify-center items-center"
      >
        <Image src="/rofin.png" alt="rofin" width={300} height={300} />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          name="email"
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          name="password"
        />
        <Button type="submit" loading={loading}>
          Entrar
        </Button>
        <Link href="/recuperar-senha">Esqueceu a senha?</Link>
      </form>
    </div>
  )
}
