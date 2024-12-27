import { ComponentProps } from 'react'

import styled from 'styled-components/native'

import { Divider as DividerGlue } from '@gluestack-ui/themed'

const DividerStyled = styled(DividerGlue).attrs(
  (props) => ({
    my: props.my ?? '$1.5',
    rounded: props.rounded ?? '$full',
    h: props.h ?? '$1.5',
    bg: props.bg ?? props.theme.colors.primaria,
  }),
)``

const Divider = ({ ...rest }: ComponentProps<typeof DividerGlue>) => {
  return <DividerStyled {...rest} />
}
export default Divider
