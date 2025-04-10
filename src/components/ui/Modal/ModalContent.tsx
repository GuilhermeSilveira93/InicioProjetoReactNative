import { ComponentProps } from 'react'

import CardContent from '@components/ui/Card/CardContent'

import Card from '../Card'

const ModalContent = ({
  children,
  ...rest
}: { children: React.ReactNode } & ComponentProps<typeof CardContent>) => {
  return (
    <Card.CONTENT flex={1} justifyContent={'flex-start'} {...rest}>
      {children}
    </Card.CONTENT>
  )
}
export default ModalContent
