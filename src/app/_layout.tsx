import React, { useEffect } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import './global.css'

import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'

SplashScreen.preventAutoHideAsync()
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Univia-PRO': require('./../../assets/fonts/UniviaPro-Regular.ttf'),
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
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar hidden />
          <NativeBaseProvider>
            <Stack
              initialRouteName="index"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="index" />
              <Stack.Screen name="Checklist" />
              <Stack.Screen name="(drawerOperador)" />
            </Stack>
          </NativeBaseProvider>
      </GestureHandlerRootView>
    </>
  )
}
