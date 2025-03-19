import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

import uiviewpropsType from '@ts/ui/uiviewprops.type'

const StyledCardDescription = styled.View.attrs((props) => ({}))<
  uiviewpropsType & { horizontal?: boolean }
>`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4;
`

const CardDescriptionTopic = ({
  children,
  ...props
}: ViewProps & uiviewpropsType & { horizontal?: boolean }) => {
  return <StyledCardDescription {...props}>{children}</StyledCardDescription>
}

export default CardDescriptionTopic
