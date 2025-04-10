import { ComponentProps } from 'react'

import P from '@components/ui/P'

import EFontSizeEnum from '@ct/EFontSizeEnum'

type InputLabelProps = {
  children: React.ReactNode
} & ComponentProps<typeof P>

export const InputError = ({ children, ...rest }: InputLabelProps) => {
  return (
    <P
      color={'red'}
      fontSize={rest.fontSize || EFontSizeEnum.pequena}
      {...rest}
    >
      {children}
    </P>
  )
}
