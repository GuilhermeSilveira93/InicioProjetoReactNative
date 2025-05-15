import { ComponentProps } from 'react'

import Content from '../Content'

const ModalContent = ({
  children,
  ...rest
}: ComponentProps<typeof Content>) => {
  return (
    <Content flex={1} w={'full'} {...rest}>
      {children}
    </Content>
  )
}
export default ModalContent
