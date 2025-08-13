import { auth } from '@/auth'

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div>
      <h1>Página do Dashboard</h1>
      <p>Conteúdo exclusivo para usuários logados.</p>
      <p>Bem-vindo, {session?.user.name}!</p>
    </div>
  )
}
