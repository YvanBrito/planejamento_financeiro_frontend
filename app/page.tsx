import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <h1>Você não está logado.</h1>
      <p>
        <Link href="/login">Ir para a página de login</Link>
      </p>
    </div>
  )
}
