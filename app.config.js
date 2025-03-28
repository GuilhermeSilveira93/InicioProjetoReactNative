export default {
  expo: {
    name: 'Generico-Expo',
    slug: 'Generico-Expo',
    scheme: 'genericoexpo',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'br.com.inicio.projeto',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#0d0d0d',
      },
      package: 'br.com.inicio.projeto',
    },
    assetBundlePatterns: ['**/*'],
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
t
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  },
}
