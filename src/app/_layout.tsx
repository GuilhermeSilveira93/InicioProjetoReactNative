import React, { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import './global.css';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Univia-PRO': require('./../../assets/fonts/UniviaPro-Regular.ttf'),
    'Univia-BOLD': require('./../../assets/fonts/UniviaPro-Bold.ttf'),
  });
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return <RootLayoutNav />;
}
function RootLayoutNav() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar translucent />
            <Stack screenOptions={{ headerShown: false }}></Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
