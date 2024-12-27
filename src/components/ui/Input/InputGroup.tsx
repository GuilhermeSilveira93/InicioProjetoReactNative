import { ComponentProps } from 'react'
import { Dimensions } from 'react-native'

import styled, { useTheme } from 'styled-components/native'

import { Input as InputGlue } from '@gluestack-ui/themed'
const { height } = Dimensions.get('screen')
type InputGroupProps = {
  children: React.ReactNode
} & ComponentProps<typeof InputGlue>
const InputGlueStyled = styled(InputGlue).attrs(
  (props) => ({
    borderColor: props.isInvalid ? 'red' : props.theme.colors.primaria,
    w: props.w ?? '$full',
    h: 'auto',
    rounded: props.rounded ?? 8,
    bg: props.bg ?? props.theme.colors.background,
    mb: props.mb ?? '$1',
    p: (props.p ?? height <= 384) ? '$2' : '$3',
  }),
)``
export const InputGroup = ({ children, ...rest }: InputGroupProps) => {
  const { colors } = useTheme()
  return (
    <InputGlueStyled
      $focus={{
        bg: colors.primaria,
      }}
      {...rest}
    >
      {children}
    </InputGlueStyled>
  )
}
