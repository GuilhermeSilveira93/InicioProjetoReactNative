import { ComponentProps } from 'react'

import medidasComPorcentagem from '@components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import styled from 'styled-components/native'

import uiviewpropsType from '@ts/ui/uiviewprops.type'

const StyledCardRoot = styled.View.attrs((props) => ({}))<
  uiviewpropsType & { horizontal?: boolean }
>`
  background-color: ${(props) => props.bg ?? props.theme.colors.card};
  border-radius: ${(props) => props.rounded ?? 12}px;
  flex-wrap: ${(props) => props.flexWrap ?? 'nowrap'};
  justify-content: ${(props) => props.justifyContent ?? 'flex-start'};
  flex-direction: ${(props) => (props.horizontal ? 'row' : 'column')};
  padding: ${(props) => paddingProcessFunction(props.p)};
  width: ${(props) => medidasComPorcentagem(props.w)};
  min-width: ${(props) => medidasComPorcentagem(props.minWidth)};
  max-width: ${(props) => medidasComPorcentagem(props.maxWidth)};
  min-height: ${(props) => medidasComPorcentagem(props.minHeight)};
  max-height: ${(props) => medidasComPorcentagem(props.maxHeight)};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  overflow: ${(props) => props.overflow ?? undefined};
  gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
`

export default StyledCardRoot
