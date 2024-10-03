import { ComponentProps } from 'react'

import styled from 'styled-components/native'

import { VStack } from '@gluestack-ui/themed'

type InputRootProps = { children: React.ReactNode } & ComponentProps<
  typeof VStack
>

const VStackStyled = styled(VStack).attrs((props) => ({
  w: props.w ?? '$full',
  h: props.h ?? 'auto',
}))``

export const InputRoot = ({ children, ...rest }: InputRootProps) => {
  return <VStackStyled {...rest}>{children}</VStackStyled>
}
