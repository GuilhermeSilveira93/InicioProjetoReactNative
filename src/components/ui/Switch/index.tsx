import React, { memo } from 'react'
import { Pressable } from 'react-native'
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

import { useTheme } from 'styled-components'

const Switch = memo(
  ({ value, onChange }: { value: boolean; onChange?: () => void }) => {
    const moveX = value ? 1 : 0
    const { colors } = useTheme()
    const switchwidth = 40
    const switchheight = 13
    const switchlimit = switchwidth * 0.5
    const styleSwith = useAnimatedStyle(() => {
      const colorSwith = interpolateColor(
        moveX,
        [0, 1],
        [colors.icon2, colors.primary]
      )
      const moveValue = interpolate(moveX, [0, 1], [0, switchwidth - 20])

      const colorEffect = withTiming(colorSwith, { duration: 250 })
      const movingEffect = withTiming(moveValue, { duration: 250 })

      return {
        transform: [{ translateX: movingEffect }],
        backgroundColor: colorEffect,
      }
    })

    return (
      <Pressable
        onPress={onChange}
        style={{
          justifyContent: 'center',
          width: switchwidth,
          height: switchheight,
          borderRadius: switchwidth,
          backgroundColor: colors.icon,
          borderColor: colors.icon2,
          borderWidth: 1,
        }}
      >
        <Animated.View
          style={[
            styleSwith,
            {
              position: 'absolute',
              width: switchlimit,
              height: switchlimit,
              aspectRatio: 1,
              backgroundColor: colors.icon,
              borderColor: colors.icon2,
              borderWidth: 1,
              borderRadius: switchlimit,
            },
          ]}
        />
      </Pressable>
    )
  }
)
Switch.displayName = 'Switch'
export default Switch
