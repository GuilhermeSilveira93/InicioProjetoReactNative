import { AuthenticationToken, Company, SessionType, Unit, User } from '@ts/user.type'

export enum SessionActionEnum {
  SET_COMPANY = 'SET_COMPANY',
  SET_USER = 'SET_USER',
  DELETE_USER = 'DELETE_USER',
  SET_UNIT = 'SET_UNIT',
  SET_SESSION = 'SET_SESSION',
  SET_TOKENS = 'SET_TOKENS',
  SAVED_SESSION = 'SAVED_SESSION',
  DELETE_SESSION = 'DELETE_SESSION',
}

type SetCompanyAction = {
  type: SessionActionEnum.SET_COMPANY
  payload: Company
}

type SetUserAction = {
  type: SessionActionEnum.SET_USER
  payload: {
    User: User
    RememberSession: boolean
    SignInGoogle: boolean
  }
}

type DeleteUserAction = {
  type: SessionActionEnum.DELETE_USER
  payload: undefined
}

type SetUnitAction = {
  type: SessionActionEnum.SET_UNIT
  payload: Unit
}

type SetSessionAction = {
  type: SessionActionEnum.SET_SESSION
  payload: Unit
}

type SetTokensAction = {
  type: SessionActionEnum.SET_TOKENS
  payload: AuthenticationToken
}

type SavedSessionAction = {
  type: SessionActionEnum.SAVED_SESSION
  payload: SessionType
}

type DeleteSessionAction = {
  type: SessionActionEnum.DELETE_SESSION
  payload: undefined
}

export type  SetSessionInterface = DeleteSessionAction
  | SetSessionAction
  | SetCompanyAction
  | SetUnitAction
  | SetTokensAction
  | SavedSessionAction
  | SetUserAction
  | DeleteUserAction