import { createContext, useContextSelector } from 'use-context-selector'
import { useRef } from 'react'
import { PocConfig } from '@ct/Firebase.config'
import { FirebaseAppInstance } from 'sftk_firebase/native'
import { Platform } from 'react-native'

interface IFirebaseInstanceContext {
  FirebaseInstance: any
}
const FirebaseInstanceContext = createContext<IFirebaseInstanceContext | null>(null)

export default function FirebaseInstanceProvider({children}: {children: React.ReactNode}) {
  const platform = Platform.OS as 'web' | 'android'
  const Firebase = useRef(new FirebaseAppInstance(PocConfig[platform])).current
  const FirebaseInstance = Firebase.getInstance(PocConfig[platform].databaseURL)
  return (
    <FirebaseInstanceContext.Provider value={{FirebaseInstance}}>
      {children}
    </FirebaseInstanceContext.Provider>
  )
}

export function useFirebaseInstance() {
  const FirebaseInstance = useContextSelector(FirebaseInstanceContext, (context) => context?.FirebaseInstance)
  return { FirebaseInstance }
}