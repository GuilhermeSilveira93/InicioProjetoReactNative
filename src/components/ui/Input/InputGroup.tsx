import { ComponentProps } from 'react'
import { useColorScheme, Dimensions } from 'react-native'

import styled from 'styled-components/native'

import { colors } from '@constants/index'
import { Input as InputGlue } from '@gluestack-ui/themed'
const { height } = Dimensions.get('screen')
type InputGroupProps = {
  children: React.ReactNode
} & ComponentProps<typeof InputGlue>
const InputGlueStyled = styled(InputGlue).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    borderColor: props.isInvalid ? 'red' : colors[props.$theme].primaria,
    w: props.w ?? '$full',
    h: 'auto',
    rounded: props.rounded ?? 8,
    bg: props.bg ?? colors[props.$theme].fundo,
    mb: props.mb ?? '$1',
    p: (props.p ?? height <= 384) ? '$2' : '$3',
  }),
)``
export const InputGroup = ({ children, ...rest }: InputGroupProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <InputGlueStyled
      $focus={{
        bg: colors[colorScheme].primaria,
      }}
      $theme={colorScheme}
      {...rest}
    >
      {children}
    </InputGlueStyled>
  )
}
