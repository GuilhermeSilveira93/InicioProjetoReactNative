import { createContext, useContextSelector } from 'use-context-selector'
import { useFirebaseInstance } from '@providers/FirebaseInstanceProvider'
import { useCallback, useEffect, useReducer, useState } from 'react'
// @ts-ignore
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { FireBaseAuthentication } from 'sftk_firebase/native'
import { Platform, ToastAndroid } from 'react-native'
import { env } from '@ts/env'
import { Company, SessionType, Unit, User } from '@ts/user.type'
import { SetSession } from '@reducers/session'
import { LocalStorage } from '@classes/LocalStorage'

interface ISessionContext {
  user: any
  signInWithGoogle: () => Promise<void>
  FirebaseAuthInstance: FireBaseAuthentication
}

const SessionContext = createContext<ISessionContext | null>(null)

export default function SessionProvider({ children }: { children: React.ReactNode }) {
  const [Session, setSession] = useReducer(SetSession, {
    Authentication: 'no',
    RememberSession: false,
    SignInGoogle: false,
    Company: LocalStorage.getItem<Company>('Company'),
    Unit: LocalStorage.getItem<Unit>('Unit'),
    User: LocalStorage.getItem<User>('User'),
  } as SessionType)
  const { FirebaseInstance } = useFirebaseInstance()
  const [FirebaseAuthInstance, setFirebaseAuthInstance] = useState<FireBaseAuthentication>(new FireBaseAuthentication(FirebaseInstance))
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(FirebaseAuthInstance?.auth.currentUser)

  useEffect(() => {
    (async () => {
      GoogleSignin.configure({
        webClientId: env.EXPO_PUBLIC_WEBCLIENTID,
        scopes: [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ],
        offlineAccess: true,
      })
      if (Platform.OS === 'web') {
        const instance = await FireBaseAuthentication.create(FirebaseInstance)
        setFirebaseAuthInstance(instance)
      }
    })()
  }, [])


  useEffect(() => {
    const unsubscribe = FirebaseAuthInstance.onAuthStateChanged((authUser) => {
      setUser(authUser)
    })
    setLoading(false)
    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [FirebaseAuthInstance])


  /*if (loading) {
    return <Image source={require('@assets/splash.png')} style={{ flex: 1 }} contentFit="contain" />
  }*/


  const signInWithGoogle = useCallback(async () => {
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
  }, [])

  return (
    <SessionContext.Provider
      value={{
        user,
        signInWithGoogle,
        FirebaseAuthInstance,
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

export function useSession() {
  const user = useContextSelector(SessionContext, (contexto) => contexto?.user)
  const signInWithGoogle = useContextSelector(SessionContext, (contexto) => contexto?.signInWithGoogle)
  const FirebaseAuthInstance = useContextSelector(SessionContext, (contexto) => contexto?.FirebaseAuthInstance)

  return { user, signInWithGoogle, FirebaseAuthInstance }
}
