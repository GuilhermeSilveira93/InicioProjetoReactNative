import { Pressable, Icon, CloseIcon } from '@gluestack-ui/themed'
import { InterfaceToastProps } from '@gluestack-ui/toast/lib/typescript/types'
type ToastCloseProps = {
  id: string
  toast: {
    show: (props: InterfaceToastProps) => string
    close: (id: string) => void
    closeAll: () => void
    isActive: (id: string) => boolean
  }
}
export const ToastClose = ({ id, toast }: ToastCloseProps) => {
  return (
    <Pressable
      position="absolute"
      zIndex={9999}
      right={0}
      top={0}
      onPress={() => {
        toast.close(id)
      }}
    >
      <Icon as={CloseIcon} />
    </Pressable>
  )
}
