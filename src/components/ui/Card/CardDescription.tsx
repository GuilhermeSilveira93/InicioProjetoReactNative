import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

import uiviewpropsType from '@ts/ui/uiviewprops.type'

const StyledCardDescription = styled.View.attrs((props) => ({}))<
  uiviewpropsType & { horizontal?: boolean }
>`
  flex: ${(props) => props.flex ?? 1};
  gap: 10px;
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-items: ${(props) => props.alignItems ?? 'flex-start'};
`

const CardDescription = ({
  children,
  ...props
}: ViewProps & uiviewpropsType & { horizontal?: boolean }) => {
  return <StyledCardDescription {...props}>{children}</StyledCardDescription>
}

export default CardDescription
