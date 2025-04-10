import { ComponentProps } from 'react'

import P from '@components/ui/P'
import { useTheme } from 'styled-components/native'

const ButtonText = ({ children, ...rest }: ComponentProps<typeof P>) => {
  const { colors } = useTheme()
  return (
    <P color={colors.primaryforeground} flex={1} textAlign={'center'} {...rest}>
      {children}
    </P>
  )
}
export default ButtonText
