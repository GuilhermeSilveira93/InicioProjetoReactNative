import { ComponentProps } from 'react'

import P from '@components/ui/P'
import { useTheme } from 'styled-components/native'

const ButtonText = ({ children, ...rest }: ComponentProps<typeof P>) => {
  const { colors } = useTheme()
  const cor = rest.color ?? colors.primariaforeground
  return (
    <P color={cor} textAlign={'center'} {...rest}>
      {children}
    </P>
  )
}
export default ButtonText
