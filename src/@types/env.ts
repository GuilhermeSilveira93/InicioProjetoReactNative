import * as zod from 'zod'
const envSchema = zod.object({
  EXPO_PUBLIC_MINHACHAVE: zod.string({
    invalid_type_error: 'MINHACHAVE TYPE ERROR',
  }),
})
export const env = envSchema.parse({
  EXPO_PUBLIC_MINHACHAVE: process.env.EXPO_PUBLIC_IDENVIO,
})
