import { ComponentProps } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import styled from 'styled-components/native'

import { Select } from '@gluestack-ui/themed'

type SelectROOTProps<T extends FieldValues> = {
  children: React.ReactNode
  control: Control<T>
  nameInput: Path<T>
} & ComponentProps<typeof Select>
const SelectStyled = styled(Select).attrs((props) => ({
  w: props.w ?? '$full',
}))``

export const SelectROOT = <T extends FieldValues>({
  children,
  control,
  nameInput,
  ...rest
}: SelectROOTProps<T>) => {
  return (
    <Controller
      control={control}
      name={nameInput}
      render={({ field: { onChange, value } }) => {
        return (
          <SelectStyled onValueChange={onChange} defaultValue={value} {...rest}>
            {children}
          </SelectStyled>
        )
      }}
    />
  )
}
