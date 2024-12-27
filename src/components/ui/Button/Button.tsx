import { ComponentProps } from 'react'
import { Dimensions } from 'react-native'

import styled from 'styled-components/native'
import variant from '@constants/Variants'
import { Button as ButtonGlue } from '@gluestack-ui/themed'
const { height } = Dimensions.get('screen')

type ButtonProps = {
  children: React.ReactNode
  type?: 'error' | 'success' | 'info' | 'warning' | 'attention'
} & ComponentProps<typeof ButtonGlue>
const ButtonStyled = styled(ButtonGlue).attrs(
  (props) => ({
    gap: props.gap ?? '$3',
    p: (props.p ?? height <= 384) ? '$2' : '$3',
    px: props.px ?? '$3',
    height: 'auto',
    bg: props.bg ?? props.theme.colors.primaria,
    rounded: props.rounded ?? 8,
  }),
)``
const Button = ({ children, type, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...variant[type!]} {...rest}>
      {children}
    </ButtonStyled>
  )
}
export default Button
