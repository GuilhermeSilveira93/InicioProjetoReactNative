import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import { ActivityIndicator, useColorScheme } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { ThemeProvider as StyledProvider } from 'styled-components/native'
import { LightTheme } from '@ct/theme/lightTheme'
import { DarkTheme as StyledDarkTheme } from '@ct/theme/darkTheme'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import '../global.css'

export default function RootLayout() {

  const colorScheme = useColorScheme() ?? 'dark'
  const isDark = colorScheme === 'dark'
  const [loaded] = useFonts({
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Univia-PRO': require('./../../assets/fonts/UniviaPro-Regular.ttf'),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    'Univia-BOLD': require('./../../assets/fonts/UniviaPro-Bold.ttf'),
  })

  if (!loaded) {
    return <ActivityIndicator />
  }

  return (

    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
        <StyledProvider theme={isDark ? StyledDarkTheme : LightTheme}>
          <RootStack />
        </StyledProvider>
      </ThemeProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>

  )
}

function RootStack() {
  return (
    <Stack>
      <Stack.Screen name="(private)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}