import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import UiViewPropsType from '@components/ui/uiviewprops.type'
import styled from 'styled-components/native'

const StyledCardRoot = styled.View.attrs((props) => ({}))<
  UiViewPropsType & { horizontal?: boolean }
>`
  background-color: ${(props) => props.bg ?? props.theme.colors.card};
  border-radius: ${(props) => props.rounded ?? 12}px;
  flex-wrap: ${(props) => props.flexWrap ?? 'nowrap'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  padding: ${(props) => paddingProcessFunction(props.p)};
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
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-content: ${(props) => props.alignContent ?? 'start'};
  overflow: ${(props) => props.overflow ?? undefined};
  gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
`

export default StyledCardRoot
