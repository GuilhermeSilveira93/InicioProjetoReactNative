import { Pressable, PressableProps } from 'react-native'
import Animated, { BounceIn, BounceOut } from 'react-native-reanimated'

import { useTheme } from 'styled-components'

const CheckBox = ({ value, ...rest }: { value: boolean } & PressableProps) => {
  const { colors } = useTheme()
  const size = 25
  return (
    <Pressable
      {...rest}
      style={{
        width: size,
        height: size,
        borderWidth: 1,
        borderColor: colors.icons2,
        borderRadius: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {value && (
        <Animated.View
          entering={BounceIn}
          exiting={BounceOut}
          style={[
            {
              width: size * 0.65,
              height: size * 0.65,
              borderRadius: size * 0.65,
              backgroundColor: colors.icons2,
            },
          ]}
        />
      )}
    </Pressable>
  )
}
export default CheckBox
