import { ComponentProps } from 'react'
import styled from 'styled-components/native'

import fontSizeEnum from '@constants/FontSizeEnum'
import { Text } from '@gluestack-ui/themed'

export const StyledP = styled(Text).attrs(
  (props) => ({
    fontSize: props.fontSize ?? fontSizeEnum.pequena,
    textAlign: props.textAlign ?? 'left',
    color: props.color ?? props.theme.colors.text,
  }),
)<{
  $bold?: boolean
}>`
  font-family: ${(props) => (props.$bold ? 'Univia-BOLD' : 'Univia-PRO')};
`
type PProps = {
  children: React.ReactNode
  $bold?: boolean
  fontSize?: fontSizeEnum
} & ComponentProps<typeof Text>
const P = ({ children, $bold, fontSize, ...rest }: PProps) => {
  return (
    <StyledP $bold={$bold} fontSize={fontSize} {...rest}>
      {children}
    </StyledP>
  )
}
export default P
