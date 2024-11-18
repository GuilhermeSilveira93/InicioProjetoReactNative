import { SafeAreaProvider } from 'react-native-safe-area-context'

import { config } from '@gluestack-ui/config'
import { GluestackUIProvider } from '@gluestack-ui/themed'
type MainProvidersProps = {
  children: React.ReactNode
}
const MainProviders = ({ children }: MainProvidersProps) => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
    </SafeAreaProvider>
  )
}
export default MainProviders
