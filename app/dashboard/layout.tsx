'use client'

import { signOut } from 'next-auth/react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex">
      <div>Sidebar</div>
      <div>
        <div>
          Header
          <button onClick={() => signOut()}>Sair</button>
        </div>
        {children}
      </div>
    </div>
  )
}
