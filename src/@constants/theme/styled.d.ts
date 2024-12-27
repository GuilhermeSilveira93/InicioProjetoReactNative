import 'styled-components/native'
import { ThemeType, DarkTheme } from './darkTheme'

declare module 'styled-components/native' {
  type Theme = typeof DarkTheme
  export interface DefaultTheme extends Theme {}
}
