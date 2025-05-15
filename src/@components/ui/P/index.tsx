import { TextProps } from 'react-native'

import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function'
import styled from 'styled-components/native'

import EFontSizeEnum from '@ct/FontSizeEnum'
import UiTextProps from '@ts/ui/UiTextProps.type'

export const StyledP = styled.Text.attrs((props) => ({}))<UiTextProps>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
  ${(props) => props.w && `width: ${medidasComPorcentagemFunction(props.w)}`};
  color: ${(props) => props.color || props.theme.colors.text};
  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
  flex: ${(props) => props.flex || 'none'};
  text-align: ${(props) => props.textAlign};
`
type PProps = {
  children: React.ReactNode
  $bold?: boolean
  fontSize?: EFontSizeEnum
} & UiTextProps &
  TextProps
const P = ({ children, $bold, fontSize, ...rest }: PProps) => {
  return (
    <StyledP $bold={$bold} fontSize={fontSize} {...rest}>
      {children}
    </StyledP>
  )
}
export default P
