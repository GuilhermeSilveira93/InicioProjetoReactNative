import { ComponentProps } from 'react'
import { useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import { fontSizeEnum, colors } from '@constants/index'
import { Text } from '@gluestack-ui/themed'

export const StyledP = styled(Text).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    fontSize: props.fontSize ?? fontSizeEnum.pequena,
    textAlign: props.textAlign ?? 'left',
    color: props.color ?? colors[props.$theme]?.text,
  }),
)<{
  $bold?: boolean
}>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
`
type PProps = {
  children: React.ReactNode
  $bold?: boolean
  fontSize?: fontSizeEnum
} & ComponentProps<typeof Text>
export const P = ({ children, $bold, fontSize, ...rest }: PProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <StyledP $bold={$bold} $theme={colorScheme} fontSize={fontSize} {...rest}>
      {children}
    </StyledP>
  )
}
