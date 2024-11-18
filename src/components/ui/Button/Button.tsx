import { ComponentProps } from 'react'
import { useColorScheme, Dimensions } from 'react-native'

import styled from 'styled-components/native'
import  colors  from '@constants/colors'
import { variant } from '@/@constants'
import { Button as ButtonGlue } from '@gluestack-ui/themed'
const { height } = Dimensions.get('screen')

type ButtonProps = {
  children: React.ReactNode
  type?: 'error' | 'success' | 'info' | 'warning' | 'attention'
} & ComponentProps<typeof ButtonGlue>
const ButtonStyled = styled(ButtonGlue).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    gap: props.gap ?? '$3',
    p: (props.p ?? height <= 384) ? '$2' : '$3',
    px: props.px ?? '$3',
    height: 'auto',
    bg: props.bg ?? colors[props.$theme].primaria,
    rounded: props.rounded ?? 8,
  }),
)``
const Button = ({ children, type, ...rest }: ButtonProps) => {
  const theme = useColorScheme() ?? 'dark'
  return (
    <ButtonStyled $theme={theme} {...variant[type!]} {...rest}>
      {children}
    </ButtonStyled>
  )
}
export default Button
