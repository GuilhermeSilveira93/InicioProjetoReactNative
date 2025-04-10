import { TouchableOpacityProps } from 'react-native'

import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function'
import PaddingProcessFunction from '@components/ui/PaddingProcess.function'
import styled from 'styled-components/native'

import UiTouchableOpacityProps from '@ts/ui/UiTouchableOpacityProps.type'

type CustomButtonProps = {
  children: React.ReactNode
  type?: 'error' | 'success' | 'info' | 'warning' | 'attention'
} & TouchableOpacityProps &
  UiTouchableOpacityProps
const ButtonStyled = styled.TouchableOpacity.attrs(
  (props) => ({})
)<UiTouchableOpacityProps>`
  background-color: ${(props) => props.bg || (props.theme.mode === 'dark' ? props.theme.colors.primary : props.theme.colors.secondary)};
  justify-content: ${(props) => props.justifyContent || 'center'};
  width: ${(props) => medidasComPorcentagemFunction(props.w)};
  height: ${(props) => medidasComPorcentagemFunction(props.h)};
  position: ${(props) => props.position || 'static'};
  border-radius: ${(props) =>
    props.rounded ? medidasComPorcentagemFunction(props.rounded) : '12px'};
  padding: ${(props) => PaddingProcessFunction(props.p)};
  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
  right: ${(props) => props.right + 'px'};
  bottom: ${(props) => props.bottom + 'px'};
`
const Button = ({ children, type, ...rest }: CustomButtonProps) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>
}
export default Button
