import 'styled-components/native'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    mode: 'dark' | 'light',
    colors: {
      primaria: string
      primariaforeground: string
      secundaria: string
      card: string
      cardForeground: string
      branco: string
      text: string
      text2: string
      navigationHeader: string
      navigationBottom: string
      icons: string
      icons2: string
      border: string
      error: string
      background: string
      backgroundSmooth: string
      placeholder: string
    },
  }
}
