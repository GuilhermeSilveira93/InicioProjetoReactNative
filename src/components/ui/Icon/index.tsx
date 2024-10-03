import { Pressable, PressableProps } from 'react-native'

type IconProps<T = never> = {
  icon: React.ElementType
  name: T
  size?: number
  color: string
} & PressableProps
// eslint-disable-next-line prettier/prettier
export const Icon = <T = never>({
  icon: Icon,
  name,
  color,
  size = 24,
  ...rest
}: IconProps<T>) => {
  return (
    <Pressable {...rest}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  )
}
