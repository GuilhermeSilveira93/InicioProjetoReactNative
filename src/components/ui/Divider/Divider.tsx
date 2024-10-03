import { ComponentProps } from 'react'
import { useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import { colors } from '@constants/index'
import { Divider as DividerGlue } from '@gluestack-ui/themed'

const DividerStyled = styled(DividerGlue).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    my: props.my ?? '$1.5',
    rounded: props.rounded ?? '$full',
    h: props.h ?? '$1.5',
    bg: props.bg ?? colors[props.$theme].primaria,
  }),
)``

export const Divider = ({ ...rest }: ComponentProps<typeof DividerGlue>) => {
  const colorSchema = useColorScheme() ?? 'dark'
  return <DividerStyled $theme={colorSchema} {...rest} />
}
