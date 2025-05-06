import * as zod from 'zod'

const envSchema = zod.object({
  EXPO_PUBLIC_APIKEY: zod.string({
    invalid_type_error: 'Api Key Invalid',
  }),
  EXPO_PUBLIC_PROJECTID: zod.string({
    invalid_type_error: 'Project Id Invalid',
  }),
  EXPO_PUBLIC_STORAGEBUCKET: zod.string({
    invalid_type_error: 'Storage Bucket Invalid',
  }),
  EXPO_PUBLIC_APPID: zod.string({
    invalid_type_error: 'APPID Invalid',
  }),
  EXPO_PUBLIC_DEFAULTDATABASE: zod.string({
    invalid_type_error: 'Default Database Invalid',
  }),
  EXPO_PUBLIC_EMAIL: zod.string({
    invalid_type_error: 'Email Invalid',
  }),
  EXPO_PUBLIC_PASSWORD: zod.string({
    invalid_type_error: 'Password Invalid',
  }),
})
export const env = envSchema.parse({
  EXPO_PUBLIC_APIKEY: process.env.EXPO_PUBLIC_APIKEY,
  EXPO_PUBLIC_PROJECTID: process.env.EXPO_PUBLIC_PROJECTID,
  EXPO_PUBLIC_STORAGEBUCKET: process.env.EXPO_PUBLIC_STORAGEBUCKET,
  EXPO_PUBLIC_APPID: process.env.EXPO_PUBLIC_APPID,
  EXPO_PUBLIC_DEFAULTDATABASE: process.env.EXPO_PUBLIC_DEFAULTDATABASE,
  EXPO_PUBLIC_EMAIL: process.env.EXPO_PUBLIC_EMAIL,
  EXPO_PUBLIC_PASSWORD: process.env.EXPO_PUBLIC_PASSWORD,
})
