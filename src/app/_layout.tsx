import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import 'react-native-reanimated'
import { ActivityIndicator, useColorScheme } from 'react-native'
import FirebaseInstanceProvider from '@providers/FirebaseInstanceProvider'
import { ThemeProvider as StyledProvider } from 'styled-components/native'
import { LightTheme } from '@ct/theme/lightTheme'
import { DarkTheme as StyledDarkTheme } from '@ct/theme/darkTheme'
import SessionProvider, { useSession } from '@providers/SessionProvider'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'
import '../global.css'
import ThemeProvider from '@providers/ThemeProvider'

export default function RootLayout() {

  const colorScheme = useColorScheme()
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
      <FirebaseInstanceProvider>
        <SessionProvider>
          <ThemeProvider isDark={colorScheme === 'dark'}>
            <StyledProvider theme={colorScheme === 'dark' ? StyledDarkTheme : LightTheme}>
              <RootStack />
            </StyledProvider>
          </ThemeProvider>
        </SessionProvider>
        <StatusBar style="auto" />
      </FirebaseInstanceProvider>
    </SafeAreaProvider>

  )
}

function RootStack() {
  const { user } = useSession()
  return (
    <Stack>
      <Stack.Protected guard={user}>
        <Stack.Screen name="(private)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!user}>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="+not-found" />
    </Stack>
  )
}