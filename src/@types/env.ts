import * as zod from 'zod'

const envSchema = zod.object({
  //----------------------------------------------------------------------------
  EXPO_PUBLIC_APIKEY_MELI: zod.string({
    invalid_type_error: 'Api Key Invalid',
  }),
  EXPO_PUBLIC_PROJECTID_MELI: zod.string({
    invalid_type_error: 'Project Id Invalid',
  }),
  EXPO_PUBLIC_STORAGEBUCKET_MELI: zod.string({
    invalid_type_error: 'Storage Bucket Invalid',
  }),
  EXPO_PUBLIC_APPID_MELI: zod.string({
    invalid_type_error: 'APPID Invalid',
  }),
  EXPO_PUBLIC_DEFAULTDATABASE_MELI: zod.string({
    invalid_type_error: 'Default Database Invalid',
  }),
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
  EXPO_PUBLIC_APIKEY_POC: zod.string({
    invalid_type_error: 'Api Key Invalid',
  }),
  EXPO_PUBLIC_PROJECTID_POC: zod.string({
    invalid_type_error: 'Project Id Invalid',
  }),
  EXPO_PUBLIC_STORAGEBUCKET_POC: zod.string({
    invalid_type_error: 'Storage Bucket Invalid',
  }),
  EXPO_PUBLIC_APPID_POC: zod.string({
    invalid_type_error: 'APPID Invalid',
  }),
  EXPO_PUBLIC_DEFAULTDATABASE_POC: zod.string({
    invalid_type_error: 'Default Database Invalid',
  }),
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------
  EXPO_PUBLIC_APIKEY_POC_WEB: zod.string({
    invalid_type_error: 'APIKEY_WEB Invalid',
  }),
  EXPO_PUBLIC_APPID_POC_WEB: zod.string({
    invalid_type_error: 'APPID_POC_WEB Invalid',
  }),
  EXPO_PUBLIC_AUTHDOMAIN_POC_WEB: zod.string({
    invalid_type_error: 'AUTHDOMAIN_POC_WEB Invalid',
  }),
  EXPO_PUBLIC_MESSAGINGSENDERID: zod.string({
    invalid_type_error: 'MESSAGINGSENDERID Invalid',
  }),
  EXPO_PUBLIC_MEASUREMENTID: zod.string({
    invalid_type_error: 'MEASUREMENTID Invalid',
  }),
  //----------------------------------------------------------------------------
  EXPO_PUBLIC_WEBCLIENTID: zod.string({
    invalid_type_error: 'WebCliendId Invalid',
  }),
})
export const env = envSchema.parse({
  EXPO_PUBLIC_APIKEY_MELI: process.env.EXPO_PUBLIC_APIKEY_MELI,
  EXPO_PUBLIC_PROJECTID_MELI: process.env.EXPO_PUBLIC_PROJECTID_MELI,
  EXPO_PUBLIC_STORAGEBUCKET_MELI: process.env.EXPO_PUBLIC_STORAGEBUCKET_MELI,
  EXPO_PUBLIC_APPID_MELI: process.env.EXPO_PUBLIC_APPID_MELI,
  EXPO_PUBLIC_DEFAULTDATABASE_MELI: process.env.EXPO_PUBLIC_DEFAULTDATABASE_MELI,

  EXPO_PUBLIC_APIKEY_POC: process.env.EXPO_PUBLIC_APIKEY_POC,
  EXPO_PUBLIC_PROJECTID_POC: process.env.EXPO_PUBLIC_PROJECTID_POC,
  EXPO_PUBLIC_STORAGEBUCKET_POC: process.env.EXPO_PUBLIC_STORAGEBUCKET_POC,
  EXPO_PUBLIC_APPID_POC: process.env.EXPO_PUBLIC_APPID_POC,
  EXPO_PUBLIC_DEFAULTDATABASE_POC: process.env.EXPO_PUBLIC_DEFAULTDATABASE_POC,

  EXPO_PUBLIC_APIKEY_POC_WEB: process.env.EXPO_PUBLIC_APIKEY_POC_WEB,
  EXPO_PUBLIC_APPID_POC_WEB: process.env.EXPO_PUBLIC_APPID_POC_WEB,
  EXPO_PUBLIC_AUTHDOMAIN_POC_WEB: process.env.EXPO_PUBLIC_AUTHDOMAIN_POC_WEB,
  EXPO_PUBLIC_MESSAGINGSENDERID: process.env.EXPO_PUBLIC_MESSAGINGSENDERID,
  EXPO_PUBLIC_MEASUREMENTID: process.env.EXPO_PUBLIC_MEASUREMENTID,

  EXPO_PUBLIC_WEBCLIENTID: process.env.EXPO_PUBLIC_WEBCLIENTID,
})
