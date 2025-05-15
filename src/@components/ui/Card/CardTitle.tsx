import { ViewProps } from 'react-native'

import medidasComPorcentagem from '@components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import UiViewPropsType from '@components/ui/uiviewprops.type'
import styled from 'styled-components/native'

const StyledCardTitle = styled.View.attrs((props) => ({}))<
  UiViewPropsType & { horizontal?: boolean }
>`
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  flex: ${(props) => props.flex ?? 'none'};
  ${(props) => props.p && `padding: ${paddingProcessFunction(props.p)}`};
  ${(props) => props.w && `width: ${medidasComPorcentagem(props.w)}`};
  ${(props) =>
    props.minWidth && `min-width: ${medidasComPorcentagem(props.minWidth)}`};
  ${(props) =>
    props.maxWidth && `max-width: ${medidasComPorcentagem(props.maxWidth)}`};
  ${(props) => props.h && `height: ${medidasComPorcentagem(props.h)}`};
  ${(props) =>
    props.minHeight && `min-height: ${medidasComPorcentagem(props.minHeight)}`};
  ${(props) =>
    props.maxHeight && `max-height: ${medidasComPorcentagem(props.maxHeight)}`};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
`

const CardTitle = ({
  children,
  ...props
}: ViewProps & UiViewPropsType & { horizontal?: boolean }) => {
  return <StyledCardTitle {...props}>{children}</StyledCardTitle>
}

export default CardTitle
