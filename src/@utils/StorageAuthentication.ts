import { AuthenticationToken } from '@ts/user.type'
import { LocalStorage } from '@classes/LocalStorage'

export const getAuthentication = (): AuthenticationToken | undefined => {
  return LocalStorage.getItem<AuthenticationToken>('AuthenticationToken') || undefined
}

export const setAuthentication = (value: AuthenticationToken | undefined) => {
  if (value) {
    LocalStorage.setItem('AuthenticationToken', JSON.stringify(value))
  } else {
    LocalStorage.removeItem('AuthenticationToken')
  }
}
