import { TextProps } from 'react-native'

import styled from 'styled-components/native'

import fontSizeEnum from '@ct/EFontSizeEnum'
import EFontSizeEnum from '@ct/EFontSizeEnum'
import UiTextProps from '@ts/ui/UiTextProps.type'

export const StyledP = styled.Text.attrs((props) => ({}))<UiTextProps>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
  color: ${(props) => props.color || props.theme.colors.text};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize + 'px' : EFontSizeEnum.base + 'px'};
  flex: ${(props) => props.flex || 'none'};
  text-align: ${(props) => props.textAlign};
`
type PProps = {
  children: React.ReactNode
  $bold?: boolean
  fontSize?: fontSizeEnum
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
