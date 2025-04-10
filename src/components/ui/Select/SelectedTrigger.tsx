import React, { forwardRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import styled, { useTheme } from 'styled-components/native'

import { Picker, PickerProps } from '@react-native-picker/picker'

type PickerFieldProps<T extends FieldValues> = {
  control: Control<T>
  nameInput: Path<T>
  children: React.ReactNode
  invalid?: boolean
} & Omit<PickerProps, 'onValueChange' | 'selectedValue'>

const PickerTrigger = styled(Picker).attrs((props) => ({}))``

const SelectedTrigger = <T extends FieldValues>({
  control,
  nameInput,
  children,
  ...rest
}: PickerFieldProps<T>) => {
  const { colors } = useTheme()
  return (
    <Controller
      control={control}
      name={nameInput}
      render={({ field: { onChange, onBlur, value } }) => (
        <PickerTrigger
          selectedValue={value}
          onValueChange={onChange}
          onBlur={onBlur}
          style={{
            width: '100%',
            color: colors.text,
          }}
          dropdownIconColor={colors.primary}
          dropdownIconRippleColor={colors.primary}
          {...rest}
        >
          {children}
        </PickerTrigger>
      )}
    />
  )
}
export default SelectedTrigger
