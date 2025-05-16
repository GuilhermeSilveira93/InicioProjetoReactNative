import { useFormLoginSenha } from '@hooks/useFormLoginSenha'
import Input from '@components/ui/Input'
import { LoginSenhaSchemaType } from '@schemas/LoginSenha.schema'
import Button from '@components/ui/Button'
import { useSession } from '@providers/SessionProvider'
import useToggle from '@hooks/useToggle'
import Entypo from '@expo/vector-icons/Entypo'
import { useTheme } from 'styled-components/native'

export default function LoginESenhaForm() {
  const { colors } = useTheme()
  const { signInWithGoogle } = useSession()
  const { control, isSubmitting, submit } = useFormLoginSenha()
  const [showPassword, toggleShowPassword] = useToggle()

  return (
    <>
      <Input.ROOT>
        <Input.GROUP>
          <Input.FIELD<LoginSenhaSchemaType> placeholder={'Insira seu login'} control={control} nameInput={'S_LOGIN'} />
        </Input.GROUP>
      </Input.ROOT>
      <Input.ROOT>
        <Input.GROUP>
          <Input.FIELD<LoginSenhaSchemaType>
            placeholder={'Insira sua senha'}
            control={control}
            nameInput={'S_SENHA'}
            type={'password'} />
          <Input.ICON icon={Entypo} name={'eye'} color={colors.icons2} title={'Entypo'}/>
        </Input.GROUP>
      </Input.ROOT>
      <Button.ROOT w={'full'} onPress={signInWithGoogle} disabled={isSubmitting} p={3}>
        <Button.TEXT>Login</Button.TEXT>
      </Button.ROOT>
    </>
  )
}