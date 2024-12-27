import { ComponentProps } from 'react'

import styled from 'styled-components/native'

import { VStack, HStack } from '@gluestack-ui/themed'

type ContainerProps = {
  horizontal?: boolean
  children: React.ReactNode
} & ComponentProps<typeof VStack>
const StyledHStack = styled(HStack).attrs(
  (props) => ({
    bg: props.bg ?? props.theme.colors.card,
    flexWrap: 'wrap',
    p: props.p ?? '$4',
    w: props.w ?? '$full',
    rounded: props.rounded ?? 10,
  }),
)``
const StyledVStack = styled(VStack).attrs(
  (props) => ({
    bg: props.bg ?? props.theme.colors.card,
    p: props.p ?? '$4',
    w: props.w ?? '$full',
    rounded: props.rounded ?? 10,
  }),
)``

const Content = ({ children, horizontal, ...rest }: ContainerProps) => {
  if (horizontal) {
    return (
      <StyledHStack {...rest}>
        {children}
      </StyledHStack>
    )
  }
  return (
    <StyledVStack {...rest}>
      {children}
    </StyledVStack>
  )
}
export default Content
