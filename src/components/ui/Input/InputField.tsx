import { ComponentProps } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import styled from 'styled-components/native'

import  colors  from '@constants/colors'
import { InputField as InputFieldGlue } from '@gluestack-ui/themed'

type InputFieldProps<T extends FieldValues> = ComponentProps<
  typeof InputFieldGlue
> & {
  control: Control<T>
  nameInput: Path<T>
}
const InputFieldGlueStyled = styled(InputFieldGlue).attrs((props) => ({
  color: props.color ?? props.theme.colors.text,
}))``
export const InputField = <T extends FieldValues>({
  control,
  nameInput,
  ...rest
}: InputFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={nameInput}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            <InputFieldGlueStyled
              onChangeText={onChange}
              value={value}
              onBlur={onBlur}
              {...rest}
            />
          </>
        )
      }}
    />
  )
}
