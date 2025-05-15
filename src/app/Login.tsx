import Center from '@components/ui/Center'
import { Image } from 'expo-image'
import { Platform } from 'react-native'
import LoginDomPage from '@components/DOM/LOGIN/LOGINPAGE.dom'
import LoginESenhaForm from '@components/PAGES/LOGIN/LoginESenhaForm'

export default function LoginPage() {

  if (Platform.OS === 'web') {
    return (
      <LoginDomPage />
    )
  }

  return (
    <Center>
      <Image source={require('@assets/Logo_Dark.png')} style={{ width: '100%', height: 70, marginBottom: 30 }}
             contentFit={'contain'} contentPosition={'center'} />
      <LoginESenhaForm />
    </Center>
  )
}