import { ActivityIndicator } from 'react-native'

import Center from '@components/ui/Center'
import { useTheme } from 'styled-components'

const FallBackIndicator = () => {
  const { colors } = useTheme()
  return (
    <Center>
      <ActivityIndicator color={colors.primaria} />
    </Center>
  )
}
export default FallBackIndicator
