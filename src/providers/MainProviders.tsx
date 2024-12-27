import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { ThemeProvider as StyleProvider } from 'styled-components/native'

import { DarkTheme as DarkStyledTheme } from '@/@constants/theme/darkTheme'
import { LightTheme } from '@/@constants/theme/lightTheme'
import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { config } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'

const queryClient = new QueryClient({})
type MainProvidersProps = {
  children: React.ReactNode
}
const MainProviders = ({ children }: MainProvidersProps) => {
  useReactQueryDevTools(queryClient)
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StyleProvider
        theme={colorScheme === 'dark' ? DarkStyledTheme : LightTheme}
      >
        <SafeAreaProvider>
          <StatusBar translucent />
          <QueryClientProvider client={queryClient}>
            <GluestackUIProvider config={config}>
              <GestureHandlerRootView>{children}</GestureHandlerRootView>
            </GluestackUIProvider>
          </QueryClientProvider>
        </SafeAreaProvider>
      </StyleProvider>
    </ThemeProvider>
  )
}
export default MainProviders
