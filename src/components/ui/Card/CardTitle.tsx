import { ViewProps } from 'react-native'

import medidasComPorcentagem from '@components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import styled from 'styled-components/native'

import uiviewpropsType from '@ts/ui/uiviewprops.type'

const StyledCardTitle = styled.View.attrs((props) => ({}))<
  uiviewpropsType & { horizontal?: boolean }
>`
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  flex-direction: ${(props) => props.flexDirection ?? 'row'};
  flex: ${(props) => props.flex ?? 'none'};
  padding: ${(props) => (props.p ? paddingProcessFunction(props.p) : 0)}px;
  width: ${(props) => medidasComPorcentagem(props.w)};
  min-width: ${(props) => medidasComPorcentagem(props.minWidth)};
  max-width: ${(props) => medidasComPorcentagem(props.maxWidth)};
  min-height: ${(props) => medidasComPorcentagem(props.minHeight)};
  max-height: ${(props) => medidasComPorcentagem(props.maxHeight)};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
`

const CardTitle = ({
  children,
  ...props
}: ViewProps & uiviewpropsType & { horizontal?: boolean }) => {
  return <StyledCardTitle {...props}>{children}</StyledCardTitle>
}

export default CardTitle
