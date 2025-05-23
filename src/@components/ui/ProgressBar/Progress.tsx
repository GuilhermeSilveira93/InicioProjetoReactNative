import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

const ViewStyled = styled.View`
  height: 6px;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.background};
`
export const ProgressBarRoot = ({ children, ...rest }: ViewProps) => {
  return <ViewStyled {...rest}>{children}</ViewStyled>
}
