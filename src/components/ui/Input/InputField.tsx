import { Control, Controller, FieldValues, Path } from 'react-hook-form'
import { TextInputProps } from 'react-native'

import styled from 'styled-components/native'
import { Attrs, FastOmit } from 'styled-components/native/dist/types'

import { UiInputProps } from '@ts/ui/UiInputProps.type'
import medidasComPorcentagemFunction from '@components/ui/medidasComPorcentagem.function';

type InputFieldProps<T extends FieldValues> = {
  control: Control<T>
  nameInput: Path<T>
} & TextInputProps &
  UiInputProps
type UiInputPropsWithType = Attrs<FastOmit<TextInputProps, never>> & {
  type?: 'text' | 'password'
}
const InputFieldStyled = styled.TextInput.attrs(
  (props: UiInputPropsWithType) => ({
    secureTextEntry: props.type === 'password',
    autoComplete: 'off',
  }),
)<UiInputProps>`
  color: ${(props) => props.theme.colors.text};
  width: ${(props) => medidasComPorcentagemFunction(props.w)};
  flex: 1;
  min-width: ${(props) => medidasComPorcentagemFunction(props.minWidth)};
  max-width: ${(props) => medidasComPorcentagemFunction(props.maxWidth)};
  min-height: ${(props) => medidasComPorcentagemFunction(props.minHeight)};
`

export const InputField = <T extends FieldValues>({
                                                    control,
                                                    nameInput,
                                                    onChangeText,
                                                    ...rest
                                                  }: InputFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={nameInput}
      render={({ field: { onChange, onBlur, value } }) => {
        return (
          <InputFieldStyled
            onChangeText={(e) => {
              const newValue = onChangeText ? onChangeText(e) : e
              onChange(newValue)
            }}
            value={value}
            onBlur={onBlur}
            {...rest}
          />
        )
      }}
    />
  )
}
