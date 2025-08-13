'use client'

import { useSession, signOut } from 'next-auth/react'

export default function HomePage() {
  const { data: session } = useSession()

  if (session) {
    return (
      <div>
        <h1>Bem-vindo, {session.user?.name}!</h1>
        <p>Você está logado.</p>
        <button onClick={() => signOut()}>Sair</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Você não está logado.</h1>
      <p>
        <a href="/login">Ir para a página de login</a>
      </p>
    </div>
  )
}
