import type { ComponentProps } from 'react'
import { useColorScheme } from 'react-native'

import { styled } from 'styled-components/native'

import colors from '@constants/colors'
import { Center as CenterGlue } from '@gluestack-ui/themed'
type CenterProps = {
  children: React.ReactNode
  bg?: string
} & ComponentProps<typeof CenterGlue>

const CenterStyled = styled(CenterGlue).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    p: props.p ?? '$3',
    flex: props.flex ?? 1,
    bg: (props.bg || props.backgroundColor) ?? colors[props.$theme].background,
  }),
)<CenterProps>``
const Center = ({ children, ...rest }: CenterProps) => {
  const theme = useColorScheme() ?? 'dark'
  return (
    <CenterStyled $theme={theme} {...rest}>
      {children}
    </CenterStyled>
  )
}
export default Center
