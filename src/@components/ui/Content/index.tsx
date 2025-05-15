import React, { forwardRef } from 'react'
import { View, ViewProps } from 'react-native'

import medidasComPorcentagem from '@/components/ui/medidasComPorcentagem.function'
import paddingProcessFunction from '@components/ui/PaddingProcess.function'
import UiProps from '@components/ui/uiviewprops.type'
import styled from 'styled-components/native'

type ContentProps = {
  horizontal?: boolean
} & UiProps &
  ViewProps

const StyledView = styled.View.attrs((props) => ({}))<ContentProps>`
  padding: ${(props) => paddingProcessFunction(props.p)};
  width: ${(props) => medidasComPorcentagem(props.w)};
  background-color: ${(props) => props.bg || props.theme.colors.card};
  position: ${(props) => (props.position ? props.position : 'unset')};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : 'column'};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'nowrap')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  border-radius: ${(props) =>
    props.rounded ? props.rounded * 4 + 'px' : '8px'};
  ${(props) =>
    props.borderWidth ? `border-width: ${props.borderWidth}px;` : ''}
  ${(props) => (props.borderColor ? `border-color: ${props.borderColor};` : '')}
    gap: ${(props) =>
    props.gap !== null && props.gap !== undefined
      ? props.gap * 4 + 'px'
      : '8px'};
  ${(props) =>
    props.borderBottomWidth
      ? `border-bottom-width: ${props.borderBottomWidth}px;`
      : ''}
  ${(props) => (props.m ? `margin: ${props.m * 4}px;` : '')}
    ${(props) => (props.mb ? `margin-bottom: ${props.mb * 4}px;` : '')}
`
const Content = forwardRef<View, ContentProps>((props, ref) => {
  return (
    <StyledView
      {...props}
      ref={ref}
      flexDirection={`${props.horizontal ? 'row' : 'column'}`}
    >
      {props.children}
    </StyledView>
  )
})
Content.displayName = 'Content'
export default Content
