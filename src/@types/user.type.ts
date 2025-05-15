export type Unit = {
  Id: number
  Name: string
}

export type Company = {
  Name: string
  Token: string
}

export type User = {
  token: string
  name: string
  idioma: string,
}

export type AuthenticationType = 'full' | 'semi' | 'no'

export type SessionType = {
  Company?: Company
  User?: User
  Unit?: Unit
  RememberSession: boolean
  Authentication: AuthenticationType
  SignInGoogle: boolean
}

export type AuthenticationToken = {
  Company?: Company
  User?: User
  RememberSession: boolean
  Authentication: AuthenticationType
  SignInGoogle: boolean
}

export type SavedUserType = {
  Login: string
  Password: string
}
