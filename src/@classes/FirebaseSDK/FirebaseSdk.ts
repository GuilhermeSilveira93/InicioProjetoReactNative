import { LocalStorage } from '@classes/LocalStorage'
import { FirebaseOptions } from '@firebase/app-types'
import { env } from '@ts/env'
import { FirebaseApp, initializeApp } from 'firebase/app'
import {
  child,
  Database,
  DatabaseReference,
  DataSnapshot,
  get,
  getDatabase,
  ref,
  remove,
  set,
} from 'firebase/database'

type GetType<T> = Promise<{ success: boolean; message: string; data: T }>

export const EDatabases = {
  DEFAULT: env.EXPO_PUBLIC_DEFAULTDATABASE,
  SOFTRACK: env.EXPO_PUBLIC_SOFTRACKDATABASE,
} as const
export type EDatabasesType = (typeof EDatabases)[keyof typeof EDatabases]

abstract class FirebaseConfig {
  protected abstract app: FirebaseApp
  protected abstract db: Database
  protected abstract dbRef: DatabaseReference
  protected abstract apiKey: string
  protected abstract projectId: string
  protected abstract storageBucket: string
  protected abstract appId: string
}

export class FirebaseService extends FirebaseConfig {
  protected app: FirebaseApp
  protected db: Database
  protected dbRef: DatabaseReference
  protected apiKey: string = env.EXPO_PUBLIC_APIKEY
  protected projectId: string = env.EXPO_PUBLIC_PROJECTID
  protected appId: string = env.EXPO_PUBLIC_APPID
  protected storageBucket: string = env.EXPO_PUBLIC_STORAGEBUCKET

  constructor(databaseURL: EDatabasesType, InstanceName: string) {
    super()
    const firebaseConfig: FirebaseOptions = {
      apiKey: this.apiKey,
      appId: this.appId,
      projectId: this.projectId,
      storageBucket: this.storageBucket,
      databaseURL,
    }
    const app = initializeApp(firebaseConfig, InstanceName)
    this.app = app
    this.db = getDatabase(app)
    this.dbRef = ref(getDatabase(app))
  }
  async getContent<T>(path: string): GetType<T> {
    return this.fetchWithCache<T>(path, (dataVal) => dataVal as T)
  }

  async setContent<T>(path: string, data: T): Promise<void> {
    await set(child(this.dbRef, path), data)
  }

  async deleteContent<T>(path: string): Promise<void> {
    console.log('deletando...: ', path)
    await remove(child(this.dbRef, path))
  }

  private fetchWithCache<T>(
    path: string,
    parseFn: (dataVal: any) => T
  ): GetType<T> {
    const key = `${this.app.name}:firebase-cache:${path}`
    return new Promise(async (resolve) => {
      try {
        const timeoutPromise = new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error('Request timeout')), 15000)
        )
        const dataPromise = get(child(this.dbRef, path))
        const data: DataSnapshot = await Promise.race([
          dataPromise,
          timeoutPromise,
        ])

        if (data.exists()) {
          const dataVal = data.val()
          const parsedData = parseFn(dataVal)

          const result = {
            success: true,
            message: `${path} found`,
            data: parsedData,
          }

          LocalStorage.setItem(key, JSON.stringify(parsedData))
          return resolve(result)
        }

        throw new Error(`${path} not found`)
      } catch (e: any) {
        const isOfflineError =
          e?.message?.includes('timeout') ||
          e?.message?.includes('offline') ||
          e?.code === 'NETWORK_ERROR'

        const cached = LocalStorage.getItem<{
          data: T
        }>(key)

        if (cached) {
          return resolve({
            ...cached,
            success: false,
            message: isOfflineError ? 'Não foi possível consultar' : e.message,
          })
        }
        return resolve({
          success: false,
          message: isOfflineError
            ? 'Offline - no cached data available'
            : e.message,
          data: [] as T,
        })
      }
    })
  }
}
