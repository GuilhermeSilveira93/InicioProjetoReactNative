import { ButtonProps } from '@react-types/button'

type IconProps = {
  icon: React.ElementType
  size?: number
  color?: string
} & ButtonProps

const Icon = ({ icon: Icon, color, size = 24, ...rest }: IconProps) => {
  return <Icon width={size} height={size} color={color} {...rest} />
}
export default Icon
