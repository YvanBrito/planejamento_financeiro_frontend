// schemas/loginSchema.ts
import { z } from 'zod'

export const loginSchema = z.object({
  username: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
})

export type Login = z.infer<typeof loginSchema>
