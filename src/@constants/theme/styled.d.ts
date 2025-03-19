import 'styled-components/native'
import { ThemeType } from './darkTheme'

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
