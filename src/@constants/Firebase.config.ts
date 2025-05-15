import { env } from '@ts/env'

export const PocConfig = {
  android: {
    apiKey: env.EXPO_PUBLIC_APIKEY_POC,
    appId: env.EXPO_PUBLIC_APPID_POC,
    databaseURL: env.EXPO_PUBLIC_DEFAULTDATABASE_POC,
    storageBucket: env.EXPO_PUBLIC_STORAGEBUCKET_POC,
    projectId: env.EXPO_PUBLIC_PROJECTID_POC,
  },
  web: {
    apiKey: env.EXPO_PUBLIC_APIKEY_POC_WEB,
    appId: env.EXPO_PUBLIC_APPID_POC_WEB,
    databaseURL: env.EXPO_PUBLIC_DEFAULTDATABASE_POC,
    storageBucket: env.EXPO_PUBLIC_STORAGEBUCKET_POC,
    projectId: env.EXPO_PUBLIC_PROJECTID_POC,
    authDomain: env.EXPO_PUBLIC_AUTHDOMAIN_POC_WEB,
    measurementId: env.EXPO_PUBLIC_MEASUREMENTID,
    messagingSenderId: env.EXPO_PUBLIC_MESSAGINGSENDERID
  }
}