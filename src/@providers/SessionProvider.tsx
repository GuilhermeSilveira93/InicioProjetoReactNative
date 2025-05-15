import { createContext, useContextSelector } from 'use-context-selector'
import { useFirebaseInstance } from '@providers/FirebaseInstanceProvider'
import { useEffect, useState } from 'react'
import { Image } from 'expo-image'
// @ts-ignore
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { FireBaseAuthentication } from 'sftk_firebase/native'
import { Platform, ToastAndroid } from 'react-native'
import { env } from '@ts/env'

interface ISessionContext {
  user: any
  loading: boolean
  signInWithGoogle: () => Promise<void>
  FirebaseAuthInstance: FireBaseAuthentication
}

const SessionContext = createContext<ISessionContext | null>(null)

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const { FirebaseInstance } = useFirebaseInstance()
  const [FirebaseAuthInstance, setFirebaseAuthInstance] = useState<FireBaseAuthentication>(new FireBaseAuthentication(FirebaseInstance))

  useEffect(() => {
    (async () => {
      GoogleSignin.configure({
        webClientId: env.EXPO_PUBLIC_WEBCLIENTID,
        scopes: [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ],
        offlineAccess: true
      })
      if (Platform.OS === 'web') {
        const instance = await FireBaseAuthentication.create(FirebaseInstance)
        setFirebaseAuthInstance(instance)
      }
    })()
  }, [])

  const [user, setUser] = useState(FirebaseAuthInstance?.auth.currentUser)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = FirebaseAuthInstance.onAuthStateChanged((authUser) => {
      setUser(authUser)
      setLoading(false)
    })
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [FirebaseAuthInstance])

  if (loading) {
    return <Image source={require('@assets/splash.png')} style={{ flex: 1 }} contentFit="contain" />
  }

  const signInWithGoogle = async () => {
    if (Platform.OS === 'web') {
      try {
        const teste = await FirebaseAuthInstance.signInWithPopup()
        console.log(teste)
      } catch (error) {
        console.log('error', error)
      }
      return
    }

    // MANTÉM LÓGICA ANDROID
    try {
      const hasPlayServices = await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true })
      if (hasPlayServices) {
        const userInfo = await GoogleSignin.signIn()
        const email = userInfo.data?.user.email

        if (email && !email.endsWith('@softrack.com.br')) {
          ToastAndroid.show('Necessário fazer login com usuário e senha!', ToastAndroid.SHORT)
          return
        }

        const idToken = userInfo.data?.idToken
        if (!idToken) {
          throw new Error('ID Token não encontrado.')
        }

        await FirebaseAuthInstance?.signInWithGoogleToken(idToken)
      }
    } catch (error: any) {
      console.error('Erro ao fazer login com Google + Firebase:', error)
      ToastAndroid.show('Erro ao tentar logar. Verifique sua conta.', ToastAndroid.LONG)
    }
  }

  return (
    <SessionContext.Provider
      value={{
        user,
        loading,
        signInWithGoogle,
        FirebaseAuthInstance
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const user = useContextSelector(SessionContext, (contexto) => contexto?.user)
  const loading = useContextSelector(SessionContext, (contexto) => contexto?.loading)
  const signInWithGoogle = useContextSelector(SessionContext, (contexto) => contexto?.signInWithGoogle)
  const FirebaseAuthInstance = useContextSelector(SessionContext, (contexto) => contexto?.FirebaseAuthInstance)

  return { user, loading, signInWithGoogle, FirebaseAuthInstance }
}
