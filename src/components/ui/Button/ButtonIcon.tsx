import { ButtonIcon as ButtonIconGlue } from '@gluestack-ui/themed'
import { useTheme } from 'styled-components/native'

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
  const { colors } = useTheme()
  const iconColor = color ?? colors.icons
  return (
    <ButtonIconGlue
      as={() => <Icon name={name} size={size} color={iconColor} />}
      {...rest}
    />
  )
}
