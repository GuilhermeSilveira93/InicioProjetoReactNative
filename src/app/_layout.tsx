import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import "./global.css"

import MainProviders from '@/providers/MainProviders'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
  const [loaded, error] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Univia-PRO': require('./../../assets/fonts/UniviaPro-Regular.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Univia-BOLD': require('./../../assets/fonts/UniviaPro-Bold.ttf'),
  })
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }
  return <RootLayoutNav />
}
function RootLayoutNav() {
  return (
    <MainProviders>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar translucent />
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </GestureHandlerRootView>
    </MainProviders>
  )
}
