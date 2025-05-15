import { Platform } from 'react-native'
import { DarkTheme, DefaultTheme, ThemeProvider as NavigationThemeProvider } from '@react-navigation/native'
import NavigationThemeProviderDom from '@providers/NatigationThemeProvider.dom'

export default function ThemeProvider({ children, isDark }: { children: React.ReactNode, isDark: boolean }) {
  const isWeb = Platform.OS === 'web'
  if (isWeb){
    return(
      <NavigationThemeProviderDom isDark={isDark}>{children}</NavigationThemeProviderDom>
    )
  }
  return (
    <NavigationThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationThemeProvider>
  )
}