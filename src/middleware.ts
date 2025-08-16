import { auth } from './auth'
import { NextResponse } from 'next/server'

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAuthenticated = !!req.auth
  const publicRoutes = ['/', '/login', '/register', '/esqueci-a-senha']

  if (isAuthenticated && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  if (!isAuthenticated && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/', '/dashboard/:path*', '/login', '/register'],
}
