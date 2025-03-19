import React from 'react'
import { ViewProps, View } from 'react-native'

import medidasComPorcentagem from '@components/ui/medidasComPorcentagem.function'
import paddingProcess from '@components/ui/PaddingProcess.function'
import { styled } from 'styled-components/native'

import UiProps from '@ts/ui/uiviewprops.type'
type CenterProps = UiProps & ViewProps

const StyledView = styled.View.attrs((props) => ({}))<CenterProps>`
  padding: ${(props) => paddingProcess(props.p)};
  width: ${(props) => medidasComPorcentagem(props.w)};
  min-width: ${(props) => medidasComPorcentagem(props.minWidth)};
  max-width: ${(props) => medidasComPorcentagem(props.maxWidth)};
  min-height: ${(props) => medidasComPorcentagem(props.minHeight)};
  max-height: ${(props) => medidasComPorcentagem(props.maxHeight)};
  background-color: ${(props) => props.bg || props.theme.colors.background};
  position: ${(props) => props.position || 'unset'};
  flex: ${(props) => props.flex ?? 1};
  flex-wrap: ${(props) => props.flexWrap ?? 'nowrap'};
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
  z-index: ${(props) => props.zIndex ?? '-1'};
  align-items: ${(props) => props.alignItems ?? 'center'};
`
const Center = React.forwardRef<View, CenterProps>((props, ref) => {
  return (
    <StyledView {...props} ref={ref}>
      {props.children}
    </StyledView>
  )
})
Center.displayName = 'Center'
export default Center
