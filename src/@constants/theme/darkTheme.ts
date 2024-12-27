export const DarkTheme = {
  colors: {
    primaria: 'rgb(0, 255, 159)',
    secundaria: '#465DFF',
    card: '#293541',
    branco: '#fff',
    text: '#fff',
    text2: '#000',
    navigationHeader: '#293541',
    navigationBottom: '#293541',
    icons: '#000',
    icons2: '#fff',
    background: '#030712',
    placeholder: '#e2e2e2',
  },
} as const
export type ThemeType = typeof DarkTheme
