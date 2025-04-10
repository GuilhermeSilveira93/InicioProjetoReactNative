import { ViewProps } from 'react-native'

import styled from 'styled-components/native'

import UiViewPropsType from '@ts/ui/UiViewProps.type'

type InputRootProps = ViewProps & UiViewPropsType

const ViewStyled = styled.View.attrs((props) => ({}))<UiViewPropsType>``

export const InputRoot = ({ children, ...rest }: InputRootProps) => {
  return <ViewStyled {...rest}>{children}</ViewStyled>
}
