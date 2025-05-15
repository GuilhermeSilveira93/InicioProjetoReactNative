import { memo, useEffect } from 'react'
import { ViewProps } from 'react-native'
import Animated, {
  FadeInUp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'

import styled from 'styled-components/native'

const ViewStyled = styled.View`
  height: 100%;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaria};
`
const ViewAnimated = Animated.createAnimatedComponent(ViewStyled)

type BarProps = {
  value: number
} & ViewProps
export const Bar = memo(({ value, style, ...rest }: BarProps) => {
  const barWidth = useSharedValue(0)
  useEffect(() => {
    barWidth.value = withSpring(value, { mass: 0.4 })
  }, [value, barWidth.value])
  const animatedStyle = useAnimatedStyle(() => ({
    width: `${barWidth.value}%`,
  }))
  return (
    <ViewAnimated
      entering={FadeInUp}
      style={[style, animatedStyle]}
      {...rest}
    />
  )
})
Bar.displayName = 'Bar'
