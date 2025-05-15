import styled from 'styled-components/native'

import UiViewProps from '@ts/ui/UiViewProps.type'

const DividerStyled = styled.View.attrs((props) => ({}))<UiViewProps>`
  width: ${(props) => props.w || '100%'};
  height: ${(props) => props.h || '4'}px;
`
export default DividerStyled
