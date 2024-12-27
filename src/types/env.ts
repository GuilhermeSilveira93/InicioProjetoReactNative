import * as zod from 'zod'
const envSchema = zod.object({
  EXPO_PUBLIC_TESTE: zod.string({
    invalid_type_error: 'TESTE TYPE ERROR',
  }),
})
export const env = envSchema.parse({
  EXPO_PUBLIC_TESTE: process.env.EXPO_PUBLIC_IDENVIO,
})
