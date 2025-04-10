import { Modal, ModalProps, TouchableOpacity, View } from 'react-native'

import Card from '@components/ui/Card'
import { useTheme } from 'styled-components'

import Center from '../Center'

type ModalRootProps = {
  toggleModal: () => void
} & ModalProps
export const ModalRoot = ({
  children,
  toggleModal,
  ...props
}: ModalRootProps) => {
  const { colors } = useTheme()
  return (
    <Modal
      transparent
      animationType="fade"
      onRequestClose={toggleModal}
      {...props}
    >
      <Center bg="transparent" p={0} flex={1} minWidth={'full'}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleModal}
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(16, 12, 12, 0.64)',
            height: '100%',
            width: '100%',
          }}
        />
        <Card.ROOT
          flex={1}
          w={'full'}
          maxHeight={140}
          maxWidth={100}
          borderWidth={1}
          borderColor={colors.primary}
        >
          {children}
        </Card.ROOT>
      </Center>
    </Modal>
  )
}
