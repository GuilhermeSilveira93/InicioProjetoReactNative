import { Modal, ModalProps, TouchableOpacity, View } from 'react-native'

import { useTheme } from 'styled-components'

import Center from '../Center'
import Content from '../Content'

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
    <View style={{ flex: 1 }}>
      <Modal
        transparent
        animationType="fade"
        onRequestClose={toggleModal}
        {...props}
      >
        <Center bg="transparent" p={0}>
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
          <Content
            flex={1}
            p={0}
            maxHeight={500}
            borderWidth={1}
            borderColor={colors.primaria}
          >
            {children}
          </Content>
        </Center>
      </Modal>
    </View>
  )
}
