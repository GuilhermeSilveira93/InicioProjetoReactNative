import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { config } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
type MainProvidersProps = {
  children: React.ReactNode
}
export const MainProviders = ({ children }: MainProvidersProps) => {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
    </SafeAreaProvider>
  )
}
