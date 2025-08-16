import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from '@/components/SessionProvider'
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import ToastProvider from '@/components/ToastProvider'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import { auth } from '@/auth'
config.autoAddCss = false

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Rofin - Seu robô assistente financeiro',
  description: 'Seu robô assistente financeiro',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  const layoutAuthenticated = (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Header session={session} />
        {children}
      </div>
    </div>
  )
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} antialiased bg-gray-100`}>
        <ToastProvider>
          <SessionProvider>
            {session ? layoutAuthenticated : children}
          </SessionProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
