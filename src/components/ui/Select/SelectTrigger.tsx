import { ComponentProps } from 'react'
import Icon from '@components/ui/Icon'
import styled from 'styled-components/native'

import colors from '@constants/colors'
import AntDesign from '@expo/vector-icons/AntDesign'
import { SelectTrigger, SelectInput, SelectIcon } from '@gluestack-ui/themed'

const SelectInputStyled = styled(SelectInput).attrs((props) => ({
  color: props.color ?? '#fff',
}))``
const SelectTriggerStyled = styled(SelectTrigger).attrs<{
  $theme: 'dark' | 'light'
}>((props) => ({
  rounded: props.rounded ?? 8,
  borderColor: props.borderColor ?? props.theme.colors.primaria,
  size: props.size ?? 'xl',
  h: 53,
}))``
type SelectTriggerCustomProps = {
  placeholder: string
} & ComponentProps<typeof SelectTrigger>
export const SelectTriggerCustom = ({
  placeholder,
  ...rest
}: SelectTriggerCustomProps) => {
  return (
    <SelectTriggerStyled {...rest}>
      <SelectInputStyled placeholder={placeholder} />
      <SelectIcon mr={'$3'}>
        <Icon<keyof typeof AntDesign.glyphMap>
          icon={AntDesign}
          color="#ccc"
          name={'down'}
        />
      </SelectIcon>
    </SelectTriggerStyled>
  )
}
