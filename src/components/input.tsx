import { Controller, FieldErrors, FieldValues, Control } from 'react-hook-form';
import { useColorScheme } from 'react-native';
import { Input, Icon } from 'native-base'
import { colors } from '@/ui/colors';
type CustomInputProps<T = never, R = never> = {
  control: Control<T extends FieldValues ? FieldValues : FieldErrors>
  nameInput: keyof R
  errors: FieldErrors<R extends FieldValues ? FieldValues : FieldErrors>
  placeholderInput?: string
  IconLeft?: React.ReactElement
  IconRight?: React.ReactElement
}
export const CustomInput = <T, R>({
  control,
  nameInput,
  errors,
  placeholderInput,
  IconLeft,
  IconRight,
}: CustomInputProps<T, R>) => {
  const colorScheme = useColorScheme() ?? 'dark';
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            InputLeftElement={IconLeft && (
              <Icon
                as={IconLeft}
                size={5}
                ml="2"
                color={colors[colorScheme].icons2}
              />
            )}
            InputRightElement={IconRight && (
              <Icon
                as={IconRight}
                size={5}
                mr="2"
                color={colors[colorScheme].icons2}
              />
            )}
            placeholder={placeholderInput}
          />
        )}
        name={nameInput}
      />
    </>
  );
};
