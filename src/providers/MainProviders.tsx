import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider'
type MainProvidersProps = {
  children: React.ReactNode
}
const MainProviders = ({ children }: MainProvidersProps) => {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <GluestackUIProvider>{children}</GluestackUIProvider>
    </SafeAreaProvider>
  )
}
export default MainProviders
