import { useColorScheme } from 'react-native'

import  colors  from '@constants/colors'
import { ButtonIcon as ButtonIconGlue } from '@gluestack-ui/themed'

type ButtonIconProps<T = never> = {
  icon: React.ElementType
  name: T
  size?: number
  color?: string
}
// eslint-disable-next-line prettier/prettier
export const ButtonIcon = <T = never>({
  icon: Icon,
  name,
  color,
  size = 24,
  ...rest
}: ButtonIconProps<T>) => {
  const colorScheme = useColorScheme() ?? 'dark'
  const iconColor = color ?? colors[colorScheme].icons
  return (
    <ButtonIconGlue
      as={() => <Icon name={name} size={size} color={iconColor} />}
      {...rest}
    />
  )
}
