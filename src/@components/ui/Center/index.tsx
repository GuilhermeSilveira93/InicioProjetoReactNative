import React from 'react'
import { View, ViewProps } from 'react-native'

import medidasComPorcentagem from '@components/ui/medidasComPorcentagem.function'
import paddingProcess from '@components/ui/PaddingProcess.function'
import UiProps from '@components/ui/uiviewprops.type'
import { styled, useTheme } from 'styled-components/native'

import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

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
    ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`};
    justify-content: ${(props) => props.justifyContent ?? 'center'};
    align-items: ${(props) => props.alignItems ?? 'center'};
    gap: ${(props) =>
            props.gap !== null && props.gap !== undefined
                    ? props.gap * 4 + 'px'
                    : '8px'};
`
const Center = React.forwardRef<View, CenterProps>((props, ref) => {
  const insets = useSafeAreaInsets()
  const { colors } = useTheme()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StyledView {...props} ref={ref}>
        {!props.bg && (
          <LinearGradient
            colors={[colors.background, colors.backgroundSmooth]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              minHeight: '100%',
            }}
          />
        )}
        {props.children}
      </StyledView>
    </SafeAreaView>
  )
})
Center.displayName = 'Center'
export default Center
