import { ComponentProps } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { useColorScheme } from 'react-native'

import styled from 'styled-components/native'

import { colors } from '@constants/index'
import { InputField as InputFieldGlue } from '@gluestack-ui/themed'

type InputFieldProps<T extends FieldValues> = ComponentProps<
  typeof InputFieldGlue
> & {
  control: Control<T>
  nameInput: Path<T>
}
const InputFieldGlueStyled = styled(InputFieldGlue).attrs<{
  $theme: 'dark' | 'light'
}>((props) => ({
  color: props.color ?? colors[props.$theme].text,
}))``
export const InputField = <T extends FieldValues>({
  control,
  nameInput,
  ...rest
}: InputFieldProps<T>) => {
  const colorScheme = useColorScheme() ?? 'dark'
  return (
    <Controller
      control={control}
      name={nameInput}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <>
            <InputFieldGlueStyled
              onChangeText={onChange}
              $theme={colorScheme}
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
