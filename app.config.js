const clientName = process.env.EXPO_PUBLIC_CLIENT || 'operadoresmeli'
const title = process.env.EXPO_PUBLIC_TITLE || 'Operadores Meli'
const packagename = process.env.EXPO_PUBLIC_PACKAGE || 'Operadores-Meli'
export default {
  expo: {
    name: title,
    slug: clientName,
    scheme: clientName,
    version: '1.0.0',
    orientation: 'default',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#0d0d0d',
      },
      edgeToEdgeEnabled: true,
      package: packagename
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      "expo-localization",
      ["@react-native-google-signin/google-signin"],
      [
        'expo-splash-screen',
        {
          image: './assets/splash.png',
          imageWidth: 500,
          resizeMode: 'contain',
          backgroundColor: '#000000',
          dark: {
            image: './assets/splash.png',
            backgroundColor: '#000000',
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true
    }
  }
}
