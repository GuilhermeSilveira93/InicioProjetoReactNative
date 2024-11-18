import { ComponentProps } from 'react'

import P from '@components/ui/P'

export const InputLabel = ({
  children,
  color = '#ccc',
  ...rest
}: ComponentProps<typeof P>) => {
  return (
    <P color={color} {...rest}>
      {children}
    </P>
  )
}
