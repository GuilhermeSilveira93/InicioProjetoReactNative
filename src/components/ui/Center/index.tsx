import type { ComponentProps } from 'react'

import { styled } from 'styled-components/native'

import colors from '@constants/colors'
import { Center as CenterGlue } from '@gluestack-ui/themed'
type CenterProps = {
  children: React.ReactNode
  bg?: string
} & ComponentProps<typeof CenterGlue>

const CenterStyled = styled(CenterGlue).attrs(
  (props) => ({
    p: props.p ?? '$3',
    flex: props.flex ?? 1,
    bg: (props.bg || props.backgroundColor) ?? props.theme.colors.background,
  }),
)<CenterProps>``
const Center = ({ children, ...rest }: CenterProps) => {
  return (
    <CenterStyled  {...rest}>
      {children}
    </CenterStyled>
  )
}
export default Center
