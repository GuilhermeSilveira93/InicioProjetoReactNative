import { ComponentProps } from 'react'
import styled from 'styled-components/native'

import colors from '@/@constants/colors'
import fontSizeEnum from '@/@constants/FontSizeEnum'
import { ButtonText as ButtonTextGlue } from '@gluestack-ui/themed'

type ButtonTextProps = {
  children: string
  $bold?: boolean
} & ComponentProps<typeof ButtonTextGlue>

const ButtonTextStyled = styled(ButtonTextGlue).attrs((props) => ({
  fontSize: props.fontSize ?? fontSizeEnum.pequena,
  textAlign: props.textAlign ?? 'left',
  color: props.color ?? props.theme.colors.text2,
}))<{
  $bold?: boolean
}>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
`
const ButtonText = ({ children, $bold = false, ...rest }: ButtonTextProps) => {

  return (
    <ButtonTextStyled $bold={$bold} {...rest}>
      {children}
    </ButtonTextStyled>
  )
}
export default ButtonText
