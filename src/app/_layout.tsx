import React, { useEffect } from 'react'

import MainProviders from '@/providers/MainProviders'
import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { ActivityIndicator } from 'react-native'
import useDataBase from '@/hooks/useDataBase'

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
  useDataBase()
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
      <Stack screenOptions={{ headerShown: false }}></Stack>
    </MainProviders>
  )
}
