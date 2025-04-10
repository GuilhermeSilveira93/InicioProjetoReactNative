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
  background-color: ${(props) => props.theme.colors.primary};
`
const ViewAnimated = Animated.createAnimatedComponent(ViewStyled)

type BarProps = {
  value: number
} & ViewProps
export const Bar = ({ value, style, ...rest }: BarProps) => {
  const barWidth = useSharedValue(0)
  barWidth.value = withSpring(value, { mass: 0.4 })
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
}
