import { ViewProps, useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import  colors  from '@constants/colors'

const ViewStyled = styled.View<{ $theme: 'dark' | 'light' }>`
  height: 12px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => colors[props.$theme].card};
`
export const ProgressBarRoot = ({ children, ...rest }: ViewProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <ViewStyled $theme={colorScheme} {...rest}>
      {children}
    </ViewStyled>
  )
}
