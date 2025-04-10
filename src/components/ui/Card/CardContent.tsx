import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

import UiViewPropsType from '@ts/ui/UiViewProps.type'

const StyledCardDescription = styled.View.attrs((props) => ({}))<
  UiViewPropsType & { horizontal?: boolean }
>`
  flex: ${(props) => props.flex ?? 1};
  gap: 10px;
  justify-content: ${(props) => props.justifyContent ?? 'center'};
  align-items: ${(props) => props.alignItems ?? 'center'};
`

const CardContent = ({
  children,
  ...props
}: ViewProps & UiViewPropsType & { horizontal?: boolean }) => {
  return <StyledCardDescription {...props}>{children}</StyledCardDescription>
}

export default CardContent
