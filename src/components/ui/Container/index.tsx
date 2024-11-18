import { ComponentProps } from 'react'
import { useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import colors from '@constants/colors'
import { VStack, HStack } from '@gluestack-ui/themed'

type ContainerProps = {
  horizontal?: boolean
  children: React.ReactNode
} & ComponentProps<typeof VStack>
const StyledHStack = styled(HStack).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    bg: props.bg ?? colors[props.$theme].card,
    flexWrap: 'wrap',
    p: props.p ?? '$4',
    w: props.w ?? '$full',
    rounded: props.rounded ?? 10,
  }),
)``
const StyledVStack = styled(VStack).attrs<{ $theme: 'dark' | 'light' }>(
  (props) => ({
    bg: props.bg ?? colors[props.$theme].card,
    p: props.p ?? '$4',
    w: props.w ?? '$full',
    rounded: props.rounded ?? 10,
  }),
)``

const Content = ({ children, horizontal, ...rest }: ContainerProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  if (horizontal) {
    return (
      <StyledHStack $theme={colorScheme} {...rest}>
        {children}
      </StyledHStack>
    )
  }
  return (
    <StyledVStack $theme={colorScheme} {...rest}>
      {children}
    </StyledVStack>
  )
}
export default Content
