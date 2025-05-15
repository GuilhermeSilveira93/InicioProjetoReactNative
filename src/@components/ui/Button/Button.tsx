import { forwardRef } from 'react'
import { TouchableOpacityProps, View } from 'react-native'

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
  background-color: ${(props) => props.bg || props.theme.colors.primaria};
  justify-content: ${(props) => props.justifyContent || 'center'};
  flex-direction: ${(props) => props.flexDirection || 'row'};
  ${(props) => props.w && `width: ${medidasComPorcentagemFunction(props.w)}`};
  ${(props) =>
    props.minWidth &&
    `min-width: ${medidasComPorcentagemFunction(props.minWidth)}`};
  ${(props) =>
    props.maxWidth &&
    `max-width: ${medidasComPorcentagemFunction(props.maxWidth)}`};
  ${(props) => props.h && `height: ${medidasComPorcentagemFunction(props.h)}`};
  ${(props) =>
    props.minHeight &&
    `min-height: ${medidasComPorcentagemFunction(props.minHeight)}`};
  ${(props) =>
    props.maxHeight &&
    `max-height: ${medidasComPorcentagemFunction(props.maxHeight)}`};
  position: ${(props) => props.position};
  border-radius: ${(props) =>
    props.rounded ? medidasComPorcentagemFunction(props.rounded) : '12px'};
  padding: ${(props) => PaddingProcessFunction(props.p)};
  top: ${(props) => props.top + 'px'};
  left: ${(props) => props.left + 'px'};
  right: ${(props) => props.right + 'px'};
  bottom: ${(props) => props.bottom + 'px'};
  ${(props) => props.gap && `gap: ${props.gap}px;`}
`

const Button = forwardRef<View, CustomButtonProps>(
  ({ children, type, ...rest }, ref) => {
    return (
      <ButtonStyled ref={ref} {...rest}>
        {children}
      </ButtonStyled>
    )
  }
)
Button.displayName = 'Button'
export default Button
