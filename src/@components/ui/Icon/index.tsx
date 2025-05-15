import React from 'react'

import { useTheme } from 'styled-components/native'

import { ButtonProps } from '@react-types/button'

type IconProps = {
  icon: React.ElementType
  size?: number
  name?: string
  color?: string
} & ButtonProps

const Icon = React.forwardRef(
  ({ icon: Icon, color, size = 24, ...rest }: IconProps, ref) => {
    const { colors } = useTheme()
    const iconColor = color ?? colors.primariaforeground
    return (
      <Icon
        width={size}
        size={size}
        height={size}
        color={iconColor}
        {...rest}
        ref={ref}
      />
    )
  }
)
Icon.displayName = 'Icon'
export default Icon
