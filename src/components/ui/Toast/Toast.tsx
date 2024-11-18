import { ComponentProps } from 'react'
import { Dimensions } from 'react-native'

import { variant } from '@/@constants'
import { Toast as ToastGlue, VStack } from '@gluestack-ui/themed'

const { height } = Dimensions.get('screen')

type ToastProps = {
  children: React.ReactNode
  toastId: string
  type?: 'error' | 'success' | 'info' | 'warning' | 'attention'
} & ComponentProps<typeof ToastGlue>

const Toast = ({ type, toastId, children, ...rest }: ToastProps) => {
  return (
    <ToastGlue
      {...variant[type!]}
      nativeID={toastId}
      marginRight={'$3'}
      p={height <= 384 ? 2 : 3}
      action={type}
      {...rest}
    >
      <VStack>{children}</VStack>
    </ToastGlue>
  )
}

export default Toast
