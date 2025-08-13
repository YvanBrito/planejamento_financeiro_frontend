import { auth } from '@/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect('/login')
  }

  return (
    <div>
      <h1>Página do Dashboard</h1>
      <p>Conteúdo exclusivo para usuários logados.</p>
      <p>Bem-vindo, {session.user.name}!</p>
    </div>
  )
}
