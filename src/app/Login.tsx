import Center from '@components/ui/Center'
import { useSession } from '@providers/SessionProvider'
import { useFormLogin } from '@components/PAGES/LOGIN/useFormLogin'
import Input from '@components/ui/Input'
import { LoginSchemaType } from '../@schemas/Login.schema'
import { Image } from 'expo-image'
import { Platform } from 'react-native'
import LoginDomPage from '@components/DOM/LOGIN/LOGINPAGE.dom'
import Button from '../@components/ui/Button'

export default function LoginPage() {
  const { signInWithGoogle } = useSession()
  const { control, isSubmitting, submit } = useFormLogin()

  if (Platform.OS === 'web') {
    return (
      <LoginDomPage />
    )
  }

  return (
    <Center>
      <Image source={require('@assets/Logo_Dark.png')} style={{ width: '100%', height: 70, marginBottom: 30 }}
             contentFit={'contain'} contentPosition={'center'} />
      <Input.ROOT>
        <Input.GROUP>
          <Input.FIELD<LoginSchemaType> placeholder={'Insira seu login'} control={control} nameInput={'S_LOGIN'} />
        </Input.GROUP>
      </Input.ROOT>
      <Input.ROOT>
        <Input.GROUP>
          <Input.FIELD<LoginSchemaType> placeholder={'Insira sua senha'} control={control} nameInput={'S_SENHA'}
                                        type={'password'} />
        </Input.GROUP>
      </Input.ROOT>
      <Button.ROOT onPress={signInWithGoogle} disabled={isSubmitting} p={3}>
        <Button.TEXT>Login</Button.TEXT>
      </Button.ROOT>
    </Center>
  )
}