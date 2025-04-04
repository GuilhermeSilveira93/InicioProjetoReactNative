const clientName = process.env.EXPO_PUBLIC_CLIENT?.toLowerCase() || 'Generico-Expo'
export default {
  expo: {
    name: clientName,
    slug: clientName,
    scheme: 'genericoexpo',
    version: '1.0.0',
    orientation: 'default',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: `br.com.${clientName}`,
    },
    android: {
      gradleVersion: '8.13',
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#0d0d0d',
      },
      package: `br.com.${clientName}`,
      googleServicesFile: `./google-services-${clientName}.json`,
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
        'expo-build-properties',
        {
          android: {
            compileSdkVersion: 35,
            targetSdkVersion: 35,
            buildToolsVersion: '35.0.0',
            version: clientName === 'softrack' ? 12 : 1,
          },
        },
      ],
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
      'expo-asset',
    ],
    experiments: {
      typedRoutes: true,
    },
  },
}
