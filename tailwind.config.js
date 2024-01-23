module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          primaria: 'rgb(0, 255, 159)',
          secundaria: '#465DFF',
          fundo: '#293541',
          branco: '#fff',
          text: '#fff',
        },
        light: {
          primaria: '#465DFF',
          secundaria: 'rgb(0, 255, 159)',
          fundo: '#fff',
          branco: '#fff',
          text: '#000',
        },
      },
    },
  },
  plugins: [],
}
