import { TextProps } from 'react-native'

import styled from 'styled-components/native'

const ErrorStyled = styled.Text`
  color: #ff0000;
  font-family: 'Univia-BOLD';
  font-size: 18px;
`

export const InputError = ({ children, ...rest }: TextProps) => {
  if (!children) return null
  return <ErrorStyled {...rest}>{children}</ErrorStyled>
}
