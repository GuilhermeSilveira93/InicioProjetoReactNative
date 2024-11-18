import { ComponentProps } from 'react'
import { useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import colors from '@/@constants/colors'
import fontSizeEnum from '@/@constants/FontSizeEnum'
import { ButtonText as ButtonTextGlue } from '@gluestack-ui/themed'

type ButtonTextProps = {
  children: string
  $bold?: boolean
} & ComponentProps<typeof ButtonTextGlue>

const ButtonTextStyled = styled(ButtonTextGlue).attrs<{
  $theme: 'dark' | 'light'
}>((props) => ({
  fontSize: props.fontSize ?? fontSizeEnum.pequena,
  textAlign: props.textAlign ?? 'left',
  color: props.color ?? colors[props.$theme].text2,
}))<{
  $bold?: boolean
}>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
`
const ButtonText = ({ children, $bold = false, ...rest }: ButtonTextProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <ButtonTextStyled $bold={$bold} $theme={colorScheme} {...rest}>
      {children}
    </ButtonTextStyled>
  )
}
export default ButtonText
