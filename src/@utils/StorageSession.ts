import { SessionType } from '@ts/user.type'
import { LocalStorage } from '@classes/LocalStorage'

export const getSession = () => {
  return LocalStorage.getItem<SessionType>('Session') || undefined
}

export const setSession = (value: SessionType | undefined) => {
  if (value) {
    LocalStorage.setItem('Session', JSON.stringify(value))
  } else {
    LocalStorage.removeItem('Session')
  }
}
