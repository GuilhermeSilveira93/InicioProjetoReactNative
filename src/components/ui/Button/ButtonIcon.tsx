import { useTheme } from 'styled-components/native'
type ButtonIconProps<T = never> = {
  icon: React.ElementType
  name: T
  size?: number
  color?: string
}
export const ButtonIcon = <T = never,>({
  icon: Icon,
  name,
  color,
  size = 24,
  ...rest
}: ButtonIconProps<T>) => {
  const { colors } = useTheme()
  const iconColor = color ?? colors.primary
  return (
    <Icon
      as={() => <Icon name={name} size={size} color={iconColor} />}
      {...rest}
    />
  )
}
