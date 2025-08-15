import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    username: string
    email: string
    accessToken: string
  }

  interface Session {
    user: {
      username: string
      email: string
      accessToken: string
    } & DefaultSession['user']
    accessToken?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username: string
    email: string
    accessToken?: string
  }
}
