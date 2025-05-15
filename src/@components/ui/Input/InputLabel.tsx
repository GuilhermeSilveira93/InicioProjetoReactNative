import { ComponentProps } from 'react'

import P from '@components/ui/P'

import EFontSizeEnum from '@ct/FontSizeEnum'

type InputLabelProps = {
  children: React.ReactNode
} & ComponentProps<typeof P>

export const InputLabel = ({ children, ...rest }: InputLabelProps) => {
  return (
    <P fontSize={rest.fontSize || EFontSizeEnum.pequena} {...rest}>
      {children}
    </P>
  )
}
