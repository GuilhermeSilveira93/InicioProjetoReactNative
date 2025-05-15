import { Dimensions, ViewProps } from 'react-native'

import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import styled from 'styled-components/native'

import UiViewPropsType from '@ts/ui/UiViewProps.type'

const { height } = Dimensions.get('screen')
type InputGroupProps = {
  children: React.ReactNode
  invalid?: boolean
} & ViewProps &
  UiViewPropsType

const InputGroupStyled = styled.View.attrs((props) => ({}))<
  UiViewPropsType & { invalid?: boolean }
>`
  background-color: ${(props) => props.bg || props.theme.colors.background};
  border: 1px solid
    ${(props) =>
      props.invalid ? props.theme.colors.error : props.theme.colors.border};
  border-radius: ${(props) => props.rounded || 14}px;
  min-width: ${(props) =>
    props.w ? medidasComPorcentagemFunction(props.minWidth) : '100%'};
  width: ${(props) =>
    props.w ? medidasComPorcentagemFunction(props.w) : '100%'};
  height: ${(props) => medidasComPorcentagemFunction(props.h)};
  gap: ${(props) => props.gap || 3}px;
  padding: ${(props) => paddingProcessFunction(props.p)};
  margin-bottom: ${(props) => props.mb || 4}px;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'space-between'};
`
export const InputGroup = ({ children, ...rest }: InputGroupProps) => {
  return <InputGroupStyled {...rest}>{children}</InputGroupStyled>
}
