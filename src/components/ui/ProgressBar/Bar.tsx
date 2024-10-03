import { ViewProps, useColorScheme } from 'react-native'
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import styled from 'styled-components/native'

import { colors } from '@constants/index'

const ViewStyled = styled.View<{ $theme: 'dark' | 'light' }>`
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => colors[props.$theme].primaria};
`
const ViewAnimated = Animated.createAnimatedComponent(ViewStyled)

type BarProps = {
  value: number
} & ViewProps
export const Bar = ({ value, style, ...rest }: BarProps) => {
  const colorScheme = useColorScheme() ?? 'dark'
  const barWidth = useSharedValue(0)
  barWidth.value = withSpring(value, { mass: 0.4 })
  const animatedStyle = useAnimatedStyle(() => ({
    width: `${barWidth.value}%`,
  }))
  return (
    <ViewAnimated
      entering={FadeInUp}
      $theme={colorScheme}
      style={[style, animatedStyle]}
      {...rest}
    />
  )
}
