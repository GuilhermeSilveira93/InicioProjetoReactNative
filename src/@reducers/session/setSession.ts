import { SessionActionEnum, SetSessionInterface } from '@ts/reducers'
import { SessionType } from '@ts/user.type'
import { setAuthentication, setSession } from '@utils/index'
import { Platform } from 'react-native'

const isWeb = Platform.OS === 'web'
export function SetSession(
  state: SessionType,
  action: SetSessionInterface,
): SessionType {
  const { type, payload } = action
  switch (type) {
    case SessionActionEnum.SET_COMPANY: {
      return {
        ...state,
        Company: payload,
      }
    }
    case SessionActionEnum.SET_USER: {
      if (payload.RememberSession) {
        setAuthentication({
          Company: state.Company,
          User: payload.User,
          RememberSession: payload.RememberSession,
          Authentication: 'semi',
          SignInGoogle: payload.SignInGoogle,
        })
      }
      return {
        ...state,
        User: payload.User,
        RememberSession: payload.RememberSession,
        Authentication: 'semi',
        SignInGoogle: payload.SignInGoogle,
      }
    }
    case SessionActionEnum.DELETE_USER: {
      if (state.RememberSession) {
        setAuthentication(undefined)
      }
      return {
        ...state,
      }
    }
    case SessionActionEnum.SET_UNIT: {
      if (state.RememberSession) {
        const user: SessionType = {
          Company: state.Company,
          User: state.User,
          Unit: payload,
          RememberSession: true,
          Authentication: 'full',
          SignInGoogle: state.SignInGoogle,
        }
        setSession(user)
      }
      return {
        ...state,
        Unit: payload,
        Authentication: 'full',
        SignInGoogle: state.SignInGoogle,
      }
    }
    case SessionActionEnum.SET_SESSION: {
      if (state.RememberSession) {
        const user: SessionType = {
          Company: state.Company,
          User: state.User,
          Unit: payload,
          RememberSession: true,
          Authentication: 'full',
          SignInGoogle: state.SignInGoogle,
        }
        setSession(user)
      }
      return {
        ...state,
        Unit: payload,
        Authentication: 'full',
      }
    }
    case SessionActionEnum.SET_TOKENS: {
      return {
        ...state,
        Company: payload.Company,
        User: payload.User,
        RememberSession: payload.RememberSession,
        Authentication: 'semi',
      }
    }
    case SessionActionEnum.SAVED_SESSION: {
      return payload
    }
    case SessionActionEnum.DELETE_SESSION: {
      setSession(undefined)
      setAuthentication(undefined)
      return {
        User: undefined,
        Company: {
          Name: '',
          Token: '',
        },
        Unit: {
          Id: 0,
          Name: '',
        },
        RememberSession: false,
        Authentication: 'no',
        SignInGoogle: false,
      }
    }
    default:
      return state
  }
}
