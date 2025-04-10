import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
} from 'react-hook-form'
import { TextInputProps } from 'react-native'

import { InputError } from '@components/ui/Input/InputError'
import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function'
import styled from 'styled-components/native'

import { UiInputProps } from '@ts/ui/UiInputProps.type'

type InputFieldProps<T extends FieldValues> = {
  control?: Control<T>
  nameInput?: Path<T>
  errors?: FieldErrors<T>
  type?: 'text' | 'password' | 'number'
  onChangeText?: (text: string) => string | number
} & Omit<TextInputProps, 'type'> &
  UiInputProps

type UiInputPropsWithType = Omit<TextInputProps, 'type'> & {
  type?: 'text' | 'password' | 'number'
}

const InputFieldStyled = styled.TextInput.attrs(
  (props: UiInputPropsWithType) => ({
    secureTextEntry: props.type === 'password',
    autoComplete: 'off',
  })
)<UiInputProps>`
  color: ${(props) => props.theme.colors.text};
  width: ${(props) => medidasComPorcentagemFunction(props.w)};
  flex: ${(props) => props.flex || 1};
  min-width: ${(props) => medidasComPorcentagemFunction(props.minWidth)};
  max-width: ${(props) => medidasComPorcentagemFunction(props.maxWidth)};
  min-height: ${(props) => medidasComPorcentagemFunction(props.minHeight)};
`

export const InputField = <T extends FieldValues>({
  control,
  nameInput,
  errors,
  type = 'text',
  onChangeText,
  ...rest
}: InputFieldProps<T>) => {
  const renderInput = (
    value?: any,
    onChange?: (val: any) => void,
    onBlur?: () => void
  ) => (
    <InputFieldStyled
      type={type}
      keyboardType={type === 'number' ? 'number-pad' : 'default'}
      onChangeText={(e) => {
        const transformed = onChangeText ? onChangeText(e) : e
        onChange?.(type === 'number' ? Number(transformed) : transformed)
      }}
      value={value}
      onBlur={onBlur}
      {...rest}
    />
  )

  if (control && nameInput) {
    return (
      <>
        <Controller
          control={control}
          name={nameInput}
          render={({ field: { onChange, onBlur, value } }) =>
            renderInput(value, onChange, onBlur)
          }
        />
        {errors?.[nameInput] && (
          <InputError>{errors[nameInput]?.message}</InputError>
        )}
      </>
    )
  }

  return renderInput(rest.value as any, rest.onChangeText, rest.onBlur)
}
