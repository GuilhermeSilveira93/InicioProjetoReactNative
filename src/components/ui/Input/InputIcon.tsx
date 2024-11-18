import { ComponentProps } from 'react'

import { InputSlot, InputIcon as InputIconGlue } from '@gluestack-ui/themed'
type InputIconProps<T = never> = {
  icon: React.ElementType
  name: T
  size?: number
  color: string
} & ComponentProps<typeof InputSlot>
// eslint-disable-next-line prettier/prettier
export const InputIcon = <T = never>({
  icon: Icon,
  name,
  color,
  size = 24,
  ...rest
}: InputIconProps<T>) => {
  return (
    <InputSlot {...rest}>
      <InputIconGlue
        as={() => <Icon name={name} size={size} color={color} />}
      />
    </InputSlot>
  )
}
